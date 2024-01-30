package com.web.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.GroupListDTO;
import com.web.dto.GroupListDTO2;
import com.web.persistence.GroupListRepository;

@Service
public class GroupListService {

	@Autowired
	public GroupListRepository Grepo;
	
	public List<GroupListDTO> ShowGroupList(GroupListDTO2 dto){
		
		List<GroupListDTO> list = new ArrayList<>();
		
		if(dto.getCategoryValue() == null && dto.getSearchValue() == null && dto.getSelectedValue() == null) {
			list = Grepo.findAllByCategory("sport");
		}
		if(dto.getSelectedValue() != null) {
			if(dto.getSearchValue() == null) {
				list = Grepo.findAllByCategory(dto.getSelectedValue());	
			}else {
				list = Grepo.findAllByCategoryContainingAndTitleContaining(dto.getSelectedValue(), dto.getSearchValue());
			}
			
		}else if(dto.getSelectedValue() == null && dto.getSearchValue() != null) {
			list = Grepo.findAllByTitleContaining(dto.getSearchValue());
		}
		if(dto.getCategoryValue() != null) {
			list = Grepo.findAllByCategory(dto.getCategoryValue());
		}
		return list;
				
	}
}
