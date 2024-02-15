package com.web.service;

import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.mail.internet.MimeMessage;
import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Service;

import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
public class MemberService {

	@Autowired
	private final MemberRepository rep;
	
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
    public MemberService(MemberRepository rep,BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.rep = rep;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
  
    }

    public MemberDTO saveMember(MemberDTO member) {
    	String password = member.getPwd();
    	member.setPwd(bCryptPasswordEncoder.encode(password));
        member.setRole("ROLE_USER");
        return rep.save(member);
    }
    public void roleMemberSave(MemberDTO dto) {
    	dto.setRole("ROLE_MUSER");
    	
    	rep.save(dto);
    }
    
    public boolean checkId(String id) { return rep.existsById(id); }

    public MemberDTO search(String id) {
    	MemberDTO member = rep.findById(id);
    	return member;
    }
    
    public List<MemberDTO> allmember(){
    	List<MemberDTO> members = new ArrayList<>();
    	members = rep.findAll();
    	return members;
    }
    
    public void delete(String seq) {
		seq = seq.replace("=", "");
    	Long seq2 = Long.parseLong(seq);
    	rep.deleteById(seq2);
    }
    public void pointSeq(MemberDTO dto) {
    	MemberDTO dtos = rep.findById(dto.getSeq()).get();
    	dtos.setEvp(dto.getEvp());
    	dtos.setCount(1);
    	dtos.setPoint(dto.getEvp());
    	System.out.println(dtos);
    	rep.save(dtos);

    }
    public void roleSeq(MemberDTO dto) {
    	MemberDTO dtos = rep.findById(dto.getSeq()).get();
    	dtos.setRole(dto.getRole());
    	System.out.println(dtos);
    	rep.save(dtos);

    }
	public MemberDTO getUserDataById(Long seq) {

		MemberDTO member = rep.findById(seq).get();

        return member;
    }

//	public MemberDTO getUserDataById(String id) {
//		Member member = rep.findById(id)
//				.orElseThrow(() -> new EntityNotFoundException("can not found id " +id));
//		return mapToDto(member);
//	}
//	
//	private MemberDTO mapToDto(Member member) {
//		
//	}
    
	public String findId(String name, String email) {
		System.out.println(name);
		System.out.println(email);
		List<MemberDTO> member = rep.findByName(name);
		for (MemberDTO dto : member) {
			if(dto != null) {
				String userEmail = dto.getEmail()+"@"+dto.getDomain();
				if(userEmail.equals(email)) {
	                String id = dto.getId();
	                StringBuilder maskedId = new StringBuilder();
	                maskedId.append(id.substring(0, Math.min(4, id.length()))); // 처음 4글자 유지
	                maskedId.append("*".repeat(Math.max(0, id.length() - 4))); // 나머지는 '*'로 대체
	                return maskedId.toString();
							
				}
			}
		}
		
		
		return "없음";
	}

	public boolean checkPassword(String id, String password) {
		System.out.println(password);
		MemberDTO member = rep.findById(id);
		System.out.println(member.getPwd());
		
		if(bCryptPasswordEncoder.matches(password,member.getPwd())) {
			System.out.println("여기냐?");
			return true;
		}
		System.out.println("여기지?");
		return false;
	}

	public MemberDTO updateUser(MemberDTO memberDTO) {
		String pwd = memberDTO.getPwd();
		memberDTO.setPwd(bCryptPasswordEncoder.encode(pwd));
		
        MemberDTO updatedMember = rep.save(memberDTO);
        return updatedMember;
    }
	
	public MemberDTO findPwd(MemberDTO dto) {
		System.out.println("여기는 들어왔찌?");
		MemberDTO user = rep.findById(dto.getId());
		System.out.println("여기는 들어왔찌?2");
		System.out.println("확인하자");
		System.out.println(user);
		if(user != null) {
			String Email = user.getEmail() + "@" + user.getDomain();
			if(user.getName().equals(dto.getName())&&Email.equals(dto.getEmail())) {
				return user;
				
			}
		}
		
		return null;
	}
	

	
	
}

























