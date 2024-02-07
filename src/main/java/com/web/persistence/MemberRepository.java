package com.web.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.dto.MemberDTO;
@Repository
public interface MemberRepository extends JpaRepository<MemberDTO, Long> {

	public MemberDTO save(MemberDTO memberDTO);

	public MemberDTO findById(String username);

	boolean existsById(String id);
	

}
