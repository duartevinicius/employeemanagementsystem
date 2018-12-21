package com.employee.model;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class GetEmployeeInfoFromJSON {

public ArrayList<Employee> employeesInfo() throws JsonParseException, JsonMappingException, IOException {
	ObjectMapper obj = new ObjectMapper();
	//File f = new File("..\\resources\\data\\employees.json");
	ArrayList<Employee> employeeList = new ArrayList<Employee>();
	ClassLoader classLoader = getClass().getClassLoader();
	File file = new File(classLoader.getResource("data/employees.json").getFile());
	employeeList= obj.readValue(file, new TypeReference<List<Employee>>(){});
	return employeeList;
}
	
}


