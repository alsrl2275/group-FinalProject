package com.web.persistence;

import java.util.List;
import java.util.Map;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.dto.GroupInfo;
@Repository
public interface GroupListRepository extends CrudRepository<GroupInfo, Long> {

	List<GroupInfo> findAllByCategory(String string);

	List<GroupInfo> findAllByCategoryContainingAndMeetingTitleContaining(String selectedValue, String searchValue);

	List<GroupInfo> findAllByMeetingTitleContaining(String searchValue);

	List<GroupInfo> findAllByMeetingTypeAndCategory(String string, String string2);

	List<GroupInfo> findAllByMeetingTypeAndCategoryContainingAndMeetingTitleContaining(String string,
			String selectedValue, String searchValue);
	List<GroupInfo> findAllByMeetingTypeAndMeetingTitleContaining(String string, String searchValue);

}
