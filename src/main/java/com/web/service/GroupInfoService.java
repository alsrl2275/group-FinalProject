package com.web.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;
import com.web.dto.GroupInfoView;
import com.web.dto.MemberDTO;
import com.web.persistence.GroupInfoRepository;
import com.web.persistence.GroupInfoViewRepository;
import com.web.persistence.MemberRepository;

@Service
public class GroupInfoService {
	
	@Autowired
	GroupInfoRepository groupRepo;
	
	@Autowired
	GroupInfoViewRepository groupViewRepo;
	
	@Autowired
	MemberRepository memberRepo;
	
	public void insertGroup(GroupInfo groupInfo) {
		GroupInfoView group = new GroupInfoView();
		group.setUserId(groupInfo.getUserId());
		group.setMeetingTitle(groupInfo.getMeetingTitle());
		group.setCategory(groupInfo.getCategory());
		group.setFaceToFace(groupInfo.getFaceToFace());
		group.setProgram(groupInfo.getProgram());
		group.setMeetingType(groupInfo.getMeetingType());
		group.setPeopleNum(groupInfo.getPeopleNum());
		group.setJoinPeople(groupInfo.getJoinPeople());
		group.setMeetingCost(groupInfo.getMeetingCost());
		group.setRecruitments(groupInfo.getRecruitments());
		group.setRecruitmentd(groupInfo.getRecruitmentd());
		group.setMeetingDateStart(groupInfo.getMeetingDateStart());
		group.setMeetingDateEnd(groupInfo.getMeetingDateEnd());
		group.setMeetingLocation(groupInfo.getMeetingLocation());
		group.setMembersId(groupInfo.getUserId());
		
		
		groupViewRepo.save(group);
		groupRepo.save(groupInfo);
	}
	
    public List<GroupInfoView> getGroupEventsById(String id) {
        return groupViewRepo.findByMembersId(id);
    }
			
	
	public void updateGroup(GroupInfo dao, String id) {
		dao = groupRepo.findBySeq(dao.getSeq());
		dao.setJoinPeople(dao.getJoinPeople()+1);
		GroupInfoView group = new GroupInfoView();
		group.setUserId(dao.getUserId());
		group.setMeetingTitle(dao.getMeetingTitle());
		group.setCategory(dao.getCategory());
		group.setFaceToFace(dao.getFaceToFace());
		group.setProgram(dao.getProgram());
		group.setMeetingType(dao.getMeetingType());
		group.setPeopleNum(dao.getPeopleNum());
		group.setJoinPeople(dao.getJoinPeople());
		group.setMeetingCost(dao.getMeetingCost());
		group.setRecruitments(dao.getRecruitments());
		group.setRecruitmentd(dao.getRecruitmentd());
		group.setMeetingDateStart(dao.getMeetingDateStart());
		group.setMeetingDateEnd(dao.getMeetingDateEnd());
		group.setMeetingLocation(dao.getMeetingLocation());
		group.setMembersId(id);
		groupViewRepo.save(group);
		List<GroupInfoView> list = new ArrayList<>();
		list = groupViewRepo.findAllByMeetingTitle(dao.getMeetingTitle());
		for (int i = 0; i < list.size(); i++) {
			list.get(i).setJoinPeople(dao.getJoinPeople());
			groupViewRepo.save(list.get(i));
		}
		
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
