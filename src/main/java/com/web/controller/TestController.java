package com.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.TestDTO;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TestController {
	
	
	
	@PostMapping("/test")
	public String test(@RequestBody TestDTO dto) {
	    
		System.out.println(dto.getCategory());
		
		return dto.getCategory();
	}
}
