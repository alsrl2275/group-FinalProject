package com.web.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
	
	public void insertGroup(GroupInfo groupInfo, String searchLocation) {
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
		group.setSearchLocation(searchLocation);
		
		
		groupViewRepo.save(group);
		groupRepo.save(groupInfo);
	}
	
    public List<GroupInfoView> getGroupEventsById(String id) {
    	 // 현재 날짜 구하기
        LocalDate currentDate = LocalDate.now();

        String currentDateStr = currentDate.format(DateTimeFormatter.ISO_DATE); // LocalDate를 String으로 변환
        // 종료날짜가 현재 날짜와 같거나 높은 데이터만 조회 (신청현황)
        return groupViewRepo.findByMembersIdAndRecruitmentdGreaterThanEqual(id, currentDateStr);
    }
    
    public List<GroupInfoView> getGroupJoinById(String id) {
   	 // 현재 날짜 구하기
       LocalDate currentDate = LocalDate.now();

       String currentDateStr = currentDate.format(DateTimeFormatter.ISO_DATE); // LocalDate를 String으로 변환
       // 종료날짜가 현재 날짜와 같거나 높은 데이터만 조회 (신청현황)
       return groupViewRepo.findByMembersIdAndRecruitmentdLessThan(id, currentDateStr);
   }
    
	public void outGroup(Long seq, String meetingTitle) {
		GroupInfo dao = groupRepo.findAllByMeetingTitle(meetingTitle);
		dao.setJoinPeople(dao.getJoinPeople()-1);
		groupRepo.save(dao);
		
		List<GroupInfoView> list = new ArrayList<>();
		list = groupViewRepo.findAllByMeetingTitle(dao.getMeetingTitle());
		for (int i = 0; i < list.size(); i++) {
			list.get(i).setJoinPeople(dao.getJoinPeople());
			groupViewRepo.save(list.get(i));
		}
		
        GroupInfoView groupView = groupViewRepo.findById(seq) 
                .orElseThrow(() -> new IllegalArgumentException("해당 일정이 존재하지 않습니다.")); // 조회된 일정이 없을경우 예외 발생
        
        groupViewRepo.delete(groupView);
	}
			
	
	public void updateGroup(GroupInfo dao, String id) {
		dao = groupRepo.findBySeq(dao.getSeq());
		dao.setJoinPeople(dao.getJoinPeople()+1);
		if(dao.getMeetingType().equals("유료")) {
			dao.setMeetingCost(dao.getMeetingCost()+5000);
		}
		String[] addr = dao.getMeetingLocation().split("/");
		System.out.println(addr[0]);
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
		group.setSearchLocation(addr[0]);
		
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
	
	public List<GroupInfoView> checkJoin(String title){
		List<GroupInfoView> list = new ArrayList<>();
		list = groupViewRepo.findAllByMeetingTitle(title);
		return list;
	}
	

}
