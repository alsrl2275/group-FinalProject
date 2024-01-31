package com.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;
import com.web.persistence.GroupInfoRepository;

@Service
public class GroupInfoService {
	
	@Autowired
	GroupInfoRepository groupRepo;
	
	public void insertGroup(GroupInfo groupInfo) {
		groupRepo.save(groupInfo);
	}
			
	
	public void updateGroup(GroupInfo dao) {
		dao = groupRepo.findBySeq(dao.getSeq());
		dao.setJoinPeople(dao.getJoinPeople()+1);
		groupRepo.save(dao);
	}



}
