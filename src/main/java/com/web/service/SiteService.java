package com.web.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.dto.SiteDTO;
import com.web.persistence.SiteRepository;

@Service
public class SiteService {

	
	@Autowired
	public SiteRepository sr;
	
	public List<SiteDTO> siteCSearch(String category){
		List<SiteDTO> list = new ArrayList<>();
		list = sr.findByCategory(category);
		return list;
	}
}
