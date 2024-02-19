package com.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.web.dto.ChatMessage;
import com.web.persistence.ChatMessageRepository;

@Service
public class ChatMessageService {

	@Autowired
	private ChatMessageRepository cmp;
	
	@PostMapping("sendChatMessage")
	public void saveChatMessage(@RequestBody ChatMessage cmessage) {
		ChatMessage cme = new ChatMessage();
		cme.setMessage(cmessage.getMessage());
		cme.setChatdate(cmessage.getChatdate());
		cme.setGroupnum(cmessage.getGroupnum());
		cmp.save(cmessage);
	}
	
	public List<ChatMessage> getAllChatMessages(String title){
		List<ChatMessage> list = cmp.findByTitleOrderBySeq(title);
		return list;
	}
	
}
