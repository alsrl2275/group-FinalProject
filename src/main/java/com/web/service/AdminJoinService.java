package com.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.web.dto.JoinDTO;
import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

@Service
public class AdminJoinService {
    private final MemberRepository mRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public AdminJoinService(MemberRepository mRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.mRepository = mRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void joinProcess(JoinDTO joinDTO) {

        String username = joinDTO.getUsername();
        String password = joinDTO.getPassword();

        MemberDTO data = new MemberDTO();

        data.setId(username);
        data.setPwd(bCryptPasswordEncoder.encode(password));
        data.setRole("ROLE_ADMIN");

        mRepository.save(data);
    }
    

}

