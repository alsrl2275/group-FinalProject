package com.web.service;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.web.dto.MemberDTO;
import com.web.persistence.MemberRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SenMailService {

	private final JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String from;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private MemberRepository ms;
	
	public void sendMail(MemberDTO dto) {
		String str = getTempPassword();
		String str2 = bCryptPasswordEncoder.encode(str);
		dto.setPwd(str2);
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		try {
			MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
			mimeMessageHelper.setFrom(from);
			mimeMessageHelper.setTo(dto.getEmail()+"@"+dto.getDomain());
			mimeMessageHelper.setSubject("[3L] 임시 비밀번호 안내");

			StringBuilder body = new StringBuilder();
			body.append("안녕하세요. 임시비밀번호 안내 관련 메일 입니다." + "[" + dto.getName() + "]" + "님의 임시 비밀번호는 " + str + " 입니다.");
			mimeMessageHelper.setText(body.toString(), true);
			javaMailSender.send(mimeMessage);
			ms.save(dto);

		} catch (Exception e) {
			e.printStackTrace();

		}
		
	}

	public String getTempPassword() {
		char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
				'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
		String str = "";

		int idx = 0;
		for (int i = 0; i < 10; i++) {
			idx = (int) (charSet.length * Math.random());
			str += charSet[idx];
		}
		return str;
	}

}
