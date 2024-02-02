package com.web;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import com.web.dto.GroupInfo;
import com.web.dto.MemberDTO;
import com.web.persistence.GroupListRepository;
import com.web.persistence.MemberRepository;
import com.web.service.GroupInfoService;

@SpringBootTest
@Commit
public class GroupTest {
	
	@Autowired
	private GroupListRepository Grepo;
	@Autowired
	private GroupInfoService Inforepo;
	@Autowired
	private MemberRepository Memrepo;
//	@Test
//	public void add() {
//		try {
//			GroupInfo groupinfo = new GroupInfo();
//			groupinfo.setCategory("sport");
//			groupinfo.setFaceToFace("대면");
//			groupinfo.setMeetingTitle("운동합시다");
//			groupinfo.setJoinPeople(3);
//			groupinfo.setMeetingCost(0);
//			groupinfo.setMeetingDateStart("2024-03-03");
//			groupinfo.setMeetingDateEnd("2024-03-04");
//			groupinfo.setRecruitments("2024-02-29");
//			groupinfo.setRecruitmentd("2024-02-30");
//			groupinfo.setMeetingLocation("관악구우리집");
//			groupinfo.setMeetingType("무료");
//			groupinfo.setPeopleNum(3);
//			groupinfo.setProgram("x");
//			groupinfo.setUserId("강남아파트");
//			Inforepo.insertGroup(groupinfo);
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
//	
//	@Test
//	public void memberadd() {
//		try {
//			MemberDTO dto = new MemberDTO();
//			dto.setId("jkuilo123");
//			dto.setPwd("lan21243**");
//			dto.setAge(19);
//			dto.setBitrh(13);
//			dto.setCount(3);
//			dto.setPhone("12354");
//			dto.setPoint(22);
//			Memrepo.save(dto);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}
}
