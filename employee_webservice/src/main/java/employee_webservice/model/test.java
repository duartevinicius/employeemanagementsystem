package employee_webservice.model;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class test {

	public static void main(String[] args) throws JsonParseException, JsonMappingException, IOException {
		// TODO Auto-generated method stub
		//ObjectMapper obj = new ObjectMapper();
		//File f = new File("..\\resources\\data\\employees.json");
		
		
		//ArrayList<Employee> emp = obj.readValue(f, new TypeReference<List<Employee>>(){});
		//System.out.println(emp.size());
		new test().test();
	}
public void test() throws JsonParseException, JsonMappingException, IOException {
	ObjectMapper obj = new ObjectMapper();
	//File f = new File("..\\resources\\data\\employees.json");
	
	
	
	ClassLoader classLoader = getClass().getClassLoader();
	File file = new File(classLoader.getResource("data/employees.json").getFile());
	ArrayList<Employee> emp = obj.readValue(file, new TypeReference<List<Employee>>(){});
	System.out.println(emp.size());
}
	
}
