package com.web.persistence;

import java.util.List;
import java.util.Map;

import org.springframework.data.repository.CrudRepository;

import com.web.dto.GroupInfo;

public interface GroupListRepository extends CrudRepository<GroupInfo, Long> {

	List<GroupInfo> findAllByCategory(String string);

	List<GroupInfo> findAllByCategoryContainingAndMeetingTitleContaining(String selectedValue, String searchValue);

	List<GroupInfo> findAllByMeetingTitleContaining(String searchValue);

}
