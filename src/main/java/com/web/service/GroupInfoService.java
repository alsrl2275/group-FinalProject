package com.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.GroupInfo;
import com.web.persistence.GroupInfoRepository;

@Service
public class GroupInfoService {
	
	@Autowired
	GroupInfoRepository groupRepo;
	
	public void insertGroup(GroupInfo groupInfo) {
		groupRepo.save(groupInfo);
	}
			
}
