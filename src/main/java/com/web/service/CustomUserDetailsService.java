package com.web.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.web.dto.CustomUserDetails;
import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository MbRepo;

    public CustomUserDetailsService(MemberRepository MbRepo) {

        this.MbRepo = MbRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        MemberDTO member = MbRepo.findById(username);
        System.out.println(member.getId());
        if (member != null) {

            return new CustomUserDetails(member);
        }

        return null;
    }
}
