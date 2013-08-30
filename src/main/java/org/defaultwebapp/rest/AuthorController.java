package org.defaultwebapp.rest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.defaultwebapp.bean.Author;

@Path("/author")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthorController {
	static List<Author> dummyList = new ArrayList<>();

	@GET
	public List<Author> retrieve () {		
		return dummyList;
	}
	
	@POST
	public void save (Author author) {
		dummyList.add(author);
	}
	
	@PUT 
	public void update (Author author) {
		for (Author aTemp : dummyList) 
			if (aTemp.getId().equals(author.getId())){
				aTemp.setBirthDay(author.getBirthDay());
				aTemp.setHigh(author.getHigh());
				aTemp.setName(author.getName());
			}
	}
	
	@DELETE
	public void remove (Author author) {
		dummyList.remove(author);
	}
	
	static {
		for (int i = 0; i <= 20; i++) 
			dummyList.add(createAuthorDefault(i));	
	}
	
	public static Author createAuthorDefault (Integer age) {
		Author a = new Author();
		a.setBirthDay(new Date());
		a.setHigh(age);
		a.setName("Joao "+ age);
		return a;
	}
}
