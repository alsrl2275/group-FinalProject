package com.web.controller;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;
import com.web.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService msv;
	
	@Autowired
	MemberRepository rep;

	
    @GetMapping("/GroupJoin")
    public String joinGroup(String category) {
		System.out.println("확인용~~~~~~~~~");
		System.out.println(category);
		return "운동 ";
	}

    // 회원가입
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody MemberDTO memberDTO) {
    	System.out.println(memberDTO);
        try {
//        	LocalDate birth = LocalDate.parse(Integer.toString(memberDTO.getBirth()), DateTimeFormatter.BASIC_ISO_DATE);
//        	int age = CountAge(birth);
//        	memberDTO.setAge(age);
        	String email = memberDTO.getEmail();
        	String domain = memberDTO.getDomain();
        	String semail = email + "@" + domain;
        	memberDTO.setEmail(semail);
            MemberDTO savedMember = msv.saveMember(memberDTO);
            return ResponseEntity.ok("Member registered successfully. Member ID: " + savedMember.getId());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to register member. Error: " + e.getMessage());
        }
    }

    // 아이디 중복검사
    @PostMapping("/checkId")
    public ResponseEntity<Map<String, Boolean>> checkId(@RequestBody Map<String, String> requestBody) {
        String checkedId = requestBody.get("id");

        // 중복 여부 확인
        boolean isDuplicate = msv.checkId(checkedId);

        Map<String, Boolean> response = new HashMap<>();
        response.put("iddu", isDuplicate);

        return ResponseEntity.ok(response);
    }
    
//    // 회원정보
//    @GetMapping("/userdata")
//    public ResponseEntity<MemberDTO> getUserData(){
//    	
//    	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//    	String username = auth.getName();
//    	
//    	Entity entity = rep.findById(username).orElse(null);
//    	
//    	if(entity != null) {
//    		MemberDTO memberDTO = new MemberDTO();
//    		memberDTO.setId(((MemberDTO) entity).getId());
//    	}
//    	
//    }
    	
    
//    // 나이 구하기
//    private int CountAge(LocalDate birthdate) {
//    	LocalDate today = LocalDate.now();
//    	return (int) ChronoUnit.YEARS.between(birthdate, today);
//    }

		
}
