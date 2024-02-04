package com.web.service;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;

import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

import lombok.extern.slf4j.Slf4j;

@Service
public class MemberService {

	@Autowired
	private final MemberRepository rep;

    public MemberService(MemberRepository rep) {
        this.rep = rep;
    }

    public MemberDTO saveMember(MemberDTO member) {
        return rep.save(member);
    }

}

























