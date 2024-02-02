package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.dto.MemberDTO;
import com.web.service.MemberService;

@RestController
public class MemberController {

    @GetMapping("/GroupJoin")
    public String joinGroup(String category) {
		System.out.println("확인용~~~~~~~~~");
		System.out.println(category);
		return "운동 ";
	}
    
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody MemberDTO memberDTO){
    	System.out.println("젭알");
    	System.out.println(memberDTO);
    	return ResponseEntity.ok("가입 완료");
    }
    
//    @Autowired
//    private MemberService msv;
//    
//    @PostMapping("/checkId")
//    public String checkId(@RequestBody MemberDTO memberDTO) {
//    	String res = msv.checkId(memberDTO.getId());
//    	return res;
//    }
//    
//    @PostMapping("SignUp")
//    public String SignUp(@RequestBody MemberDTO memberDTO) {
//    	String res = msv.signUp(memberDTO);
//		return res;
//    }
		
}
