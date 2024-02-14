package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.MemberDTO;
import com.web.service.MemberService;

@RestController
public class FindUserController {

	@Autowired
	public MemberService ms;
	
	@PostMapping("/api/findId")
	public String findId(@RequestBody MemberDTO dto) {
		String id = ms.findId(dto.getName(), dto.getEmail());
		return id;
		
	}
	
}
