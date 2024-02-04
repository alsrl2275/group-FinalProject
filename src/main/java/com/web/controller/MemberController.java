package com.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

	private final MemberService msv;
	
	@Autowired
	public MemberController(MemberService msv) {
		this.msv = msv;
	}
	
    @GetMapping("/GroupJoin")
    public String joinGroup(String category) {
		System.out.println("확인용~~~~~~~~~");
		System.out.println(category);
		return "운동 ";
	}
    
    //회원가입
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody MemberDTO memberDTO){
//    	System.out.println(memberDTO);
//    	return ResponseEntity.ok("가입 완료");
//    }
    
//    @PostMapping("/register")
//    public ResponseEntity<String> register(@RequestBody MemberDTO memberDTO) {
//        try {
//            MemberDTO savedMember = msv.saveMember(memberDTO);
//            return new ResponseEntity<>("Member registered successfully.", HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>("Failed to register member.", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

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
