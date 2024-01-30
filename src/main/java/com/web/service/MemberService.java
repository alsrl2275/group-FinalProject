package com.web.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

public class MemberService {
	
	@Autowired
	private MemberRepository memberRps;

	public String checkId(String id) {
		
		return null;
	}

	public String signUp(MemberDTO memberDTO) {
		return null;
	}

}
