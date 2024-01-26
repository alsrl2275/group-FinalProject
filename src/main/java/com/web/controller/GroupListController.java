package com.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.GroupListDTO;
import com.web.dto.GroupListDTO2;
import com.web.persistence.GroupListRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GroupListController {
	
	@Autowired
	public GroupListRepository Grepo;
	
	@PostMapping("/api/test")
	public List<GroupListDTO> test2(@RequestBody GroupListDTO2 dto) {
		List<GroupListDTO> list = Grepo.findAllByCategory(dto.getCategoryValue());
	

	    return list;
	}
}
