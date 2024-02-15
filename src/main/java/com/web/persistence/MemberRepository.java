package com.web.persistence;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.dto.MemberDTO;
@Repository
public interface MemberRepository extends JpaRepository<MemberDTO, Long> {

	public MemberDTO save(MemberDTO memberDTO);

	public MemberDTO findById(String id);


	
	boolean existsById(String id);

	public MemberDTO findByNameAndEmail(String name, String email);

	public List<MemberDTO> findByName(String name);

	
	public Optional<MemberDTO> findByEmail(String email);



}
