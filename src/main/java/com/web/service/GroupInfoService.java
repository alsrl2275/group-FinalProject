package com.web.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;
import com.web.dto.MemberDTO;
import com.web.persistence.GroupInfoRepository;
import com.web.persistence.MemberRepository;

@Service
public class GroupInfoService {
	
	@Autowired
	GroupInfoRepository groupRepo;
	
	@Autowired
	MemberRepository memberRepo;
	
	public void insertGroup(GroupInfo groupInfo) {
		groupRepo.save(groupInfo);
	}
			
	
	public void updateGroup(GroupInfo dao) {
		dao = groupRepo.findBySeq(dao.getSeq());
		dao.setJoinPeople(dao.getJoinPeople()+1);
		groupRepo.save(dao);
	}
	
	public String findUserById(Long seq) {
	    Optional<MemberDTO> optionalMember = memberRepo.findById(seq);

	    if (optionalMember.isPresent()) {
	        MemberDTO member = optionalMember.get();
	        return member.getId();
	    } else {
	    	
	        return "못찾았다";
	    }
	}
	

}
