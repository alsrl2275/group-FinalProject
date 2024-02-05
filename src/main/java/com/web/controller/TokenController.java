package com.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.web.entity.UserEntity;
import com.web.jwt.JWTUtil;
import com.web.service.JoinService;
@RestController
public class TokenController {
	
	@Autowired
	public JWTUtil jwtUtil;
	
	@Autowired
	public JoinService Jservice;
	
	@PostMapping("/getIdRole")
    public String getCurrentMember(@RequestHeader(name = HttpHeaders.AUTHORIZATION, required = false) String token) {
		System.out.println("왜 안들어와?");
      
        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            
                        
            // 아이디로 멤버 정보 전체 반환
            String username = jwtUtil.getUsername(jwtToken);
            UserEntity member = Jservice.search(username);
            if(member != null) {
            	return member.getUsername();
            } 
        }
		return "없는 아이디";
        
    }
}
