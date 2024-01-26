package com.web.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GroupListDTO2 {
	
	private String categoryValue;
	private String selectedValue;
	private String groupValue;
	private String searchValue;

	public void categoryValue(String categoryValue) {
		if(categoryValue == null) {
			categoryValue="";
		}
	}
	public void selectedValue(String selectedValue) {
		if(selectedValue == null) {
			selectedValue="";
		}
	}
	public void groupValue(String groupValue) {
		if(groupValue == null) {
			groupValue="";
		}
	}
	public void searchValue(String searchValue) {
		if(searchValue == null) {
			searchValue="";
		}
	}
	
	
	
	
}
