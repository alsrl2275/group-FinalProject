package com.web.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "chat")
public class ChatMessage {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long seq;
	@Column(name = "id")
	private String id;
	@Column(name = "name")
	private String name;
	@Column(name = "message")
	private String message;
	@Column(name = "chatdate")
	private String chatdate;
	@Column(name = "groupnum")
	private int groupnum;
	@Column(name = "title")
	private String title;
	
}
