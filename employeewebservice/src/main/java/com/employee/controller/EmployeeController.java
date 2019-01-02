package com.employee.controller;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.employee.model.Employee;
import com.employee.model.GetEmployeeInfoFromJSON;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
@Controller
@RequestMapping("/employees")
public class EmployeeController {
	@Autowired
	private GetEmployeeInfoFromJSON jsonPath;
	@RequestMapping(method = RequestMethod.GET)
	   @ResponseBody
	   public ArrayList<Employee> findAll() throws JsonParseException, JsonMappingException, IOException {
	       return jsonPath.employeesInfo();
	       
	   }
	   @RequestMapping(value = "/{id}", method = RequestMethod.GET)
	   @ResponseBody
	   public Employee findOne(@PathVariable("id") int id) throws JsonParseException, JsonMappingException, IOException {
		   ArrayList<Employee> Employees = jsonPath.employeesInfo();
		   for(Employee employee : Employees) { 
			   if(employee.getId()==id) { 
				   return employee;
			       //found it!
			   }
			}
		return null;
	   }
	   /*
	 
	   @RequestMapping(method = RequestMethod.POST)
	   @ResponseStatus(HttpStatus.CREATED)
	   @ResponseBody
	   public Long create(@RequestBody Foo resource) {
	       Preconditions.checkNotNull(resource);
	       return jsonPath.create(resource);
	   }
	 
	   @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	   @ResponseStatus(HttpStatus.OK)
	   public void update(@PathVariable( "id" ) Long id, @RequestBody Foo resource) {
	       Preconditions.checkNotNull(resource);
	       RestPreconditions.checkNotNull(jsonPath.getById( resource.getId()));
	       jsonPath.update(resource);
	   }
	 
	   @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	   @ResponseStatus(HttpStatus.OK)
	   public void delete(@PathVariable("id") Long id) {
	       jsonPath.deleteById(id);
	   }
	 
	}*/
}
