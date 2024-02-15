package com.web.controller;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.web.dto.MemberDTO;
import com.web.service.MemberService;
import com.web.service.SenMailService;

import lombok.RequiredArgsConstructor;

@RestController
public class FindUserController {

	@Autowired
	public MemberService ms;
	
@Autowired
private SenMailService sms;
	

	
	@PostMapping("/api/findId")
	public String findId(@RequestBody MemberDTO dto) {
		String id = ms.findId(dto.getName(), dto.getEmail());
		return id;
		
	}
	@PostMapping("/api/findPwd")
	public String findPwd(@RequestBody MemberDTO dto) {
		MemberDTO dto2 = ms.findPwd(dto);
		if(dto2 != null) {
			sms.sendMail(dto2);
			return "있음";
		}else {
			return "없음";
		}
		
	}
	

}
