package com.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {

    @GetMapping("/GroupJoin")
    public String joinGroup(String category) {
		System.out.println("확인용~~~~~~~~~");
		System.out.println(category);
		return "운동 ";
	}
		
}
