package com.web.controller;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.List;
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

import com.web.dto.Calendar;
import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;
import com.web.service.GroupInfoService;
import com.web.service.MemberService;

@RestController
public class MemberController {

	@Autowired
	MemberService msv;
	
	@Autowired
	MemberRepository rep;
	
	@Autowired 
	GroupInfoService groupService;
	
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
    
    // 회원정보
    @PostMapping("/userdata")
    public MemberDTO getEvents(@RequestBody MemberDTO member) {
    	
    	

		System.out.println(member.getSeq());
		System.out.println(member.getSeq().getClass().getTypeName());
		System.out.println("안녕");
		MemberDTO member2 = msv.getUserDataById(member.getSeq());
		System.out.println(member2.getId());
//		String id = groupService.findUserById(member.getSeq());
		return member2;

		
	}
    
//    @PostMapping("/userdata")
//    public ResponseEntity<MemberDTO> getUserData(@RequestBody MemberDTO member) {
//        try {
//            Long seq = member.getSeq();
//            if (seq != null) {
//                MemberDTO member2 = msv.getUserDataById(seq);
//                System.out.println(member2.getId());
//                
//                if (member2 != null) {
//                    return ResponseEntity.ok(member2);
//                } else {
//                    // 사용자 정보가 없는 경우
//                    return ResponseEntity.notFound().build();
//                }
//            } else {
//                // seq가 null인 경우
//                return ResponseEntity.badRequest().build();
//            }
//        } catch (Exception e) {
//            // 예외 발생 시 처리
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
    	
}
