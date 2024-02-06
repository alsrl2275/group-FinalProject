package com.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.dto.GroupInfo;
import com.web.dto.GroupInfoDAO;
import com.web.dto.MemberDTO;
import com.web.service.GroupInfoService;
import com.web.service.GroupListService;
import com.web.service.MemberService;

@Controller
@ResponseBody
public class AdminController {

	@Autowired
	public MemberService ms;

	@Autowired
	public GroupListService gs;
	
	// 관리자페이지에서 회원 전체 목록 조회
	@PostMapping("/admin/memberSearch")
	public List<MemberDTO> MemberSearch() {
		List<MemberDTO> allmember = new ArrayList<>();
		allmember = ms.allmember();

		return allmember;
	}

	// 관리자페이지에서 회원 삭제
	@PostMapping("/admin/delete")
	public void deleteMember(@RequestBody String seq) {
		ms.delete(seq);

	}
	
	// 관리자페이지에서 회원 권한 수정
	@PostMapping("/admin/updateRole")
	public void updateRole(@RequestBody MemberDTO dto) {
		System.out.println(dto);
		ms.roleSeq(dto);
	}
	
	// 관리자 페이지에서 회원 포인트 수정
	@PostMapping("/admin/updatePoint")
	public void updatePoint(@RequestBody MemberDTO dto) {
		System.out.println(dto);
		ms.pointSeq(dto);

	}

	// 관리자 페이지에서 전체 그룹 조회
	@PostMapping("/admin/groupSearch")
	public List<GroupInfo> groupSearch() {
		List<GroupInfo> list = new ArrayList<>();
		list = gs.searchGroup();
		System.out.println(list);
		return list;
	}
	
	// 관리자 페이지에서 그룹 삭제
	@PostMapping("/admin/groupdelete")
	public void deleteGroup(@RequestBody String seq) {
		System.out.println(seq);
		gs.delete(seq);
	}
}

























