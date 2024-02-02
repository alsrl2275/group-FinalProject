package com.web.persistence;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.dto.MemberDTO;
@Repository
public interface MemberRepository extends CrudRepository<MemberDTO, String> {



}
