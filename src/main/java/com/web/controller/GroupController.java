package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.GroupInfo;
import com.web.service.GroupInfoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class GroupController {
	
	@Autowired
	GroupInfoService groupService;

	@PostMapping("/groupInsert")
	public GroupInfo groupInsert(@RequestBody GroupInfo formData) {
		System.out.println(formData);
		groupService.insertGroup(formData);
		return formData;
	}
}

