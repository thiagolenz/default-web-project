package com.quales.accountmanagement.servlet;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.util.EntityUtils;

import com.quales.common.Constants;
import com.quales.restclient.ContentReader;
import com.quales.restclient.HeaderReader;
import com.quales.restclient.RestClient;
import com.quales.restclient.RestClientException;

@WebServlet("/rest/*")
public class RequestRestServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = -3997088636186079977L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse response)
			throws ServletException, IOException {


		RestClient restClient = new RestClient();
		ContentReader contentReader = new ContentReader();
		HeaderReader headerReader = new HeaderReader();
		int httpStatus = 0;

		try {
			String urlAppMangm = getURLDecoded(req);
			Map<String, String> readHeaders = headerReader.readHeaders(req);
			addAditionalHeaders(readHeaders, req);
			CloseableHttpResponse httpResponse = restClient.doRequest(contentReader.getJSONContent(req.getReader()), 
					urlAppMangm, 
					req.getMethod(), 
					readHeaders);
			httpStatus = httpResponse.getStatusLine().getStatusCode();
			response.getWriter().write(EntityUtils.toString(httpResponse.getEntity()));
		} catch (RestClientException e) {
			httpStatus = e.getStatusCode();
			response.getWriter().write(e.getMessage());
		}		
		response.setContentType(Constants.APPLICATION_JSON);
		response.setStatus(httpStatus);
	}
	
	public void addAditionalHeaders (Map<String, String> headers, HttpServletRequest request) throws IOException {
		headers.put(Constants.APP_CLIENT_KEY, ContextPropertyReader.getValue(Constants.APP_CLIENT_KEY));
		headers.put(Constants.USER_ATTRIBUTE, (String) request.getSession().getAttribute(Constants.USER_ATTRIBUTE));
	}
	
	public String getURLDecoded (HttpServletRequest request) throws IOException {
		String baseURL = ContextPropertyReader.getValue(Constants.APP_MANAGEMENT_URL)+"/handler"; 
		String restUrl = request.getPathInfo();
		return baseURL+restUrl;
	}
}
