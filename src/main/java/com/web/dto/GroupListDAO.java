package com.web.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GroupListDAO {
	private Long seq;
	private String title;
	private String category;
	private String face;
	private String program;
	private int members;

}
