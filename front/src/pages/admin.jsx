import React, { useEffect, useState } from "react";
import Header from "../components/Header/header";
import Footer from "../components/Home/Footer";
import "../css/Admin.css"; // CSS 파일 불러오기
import axios from "axios";
const AdminPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [members, setMembers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [editedMember, setEditedMember] = useState(null);
  const handleButtonClick = (button) => {
    setSelectedButton(button);
    if (button === '회원') {
      fetchMembers(); // 수정: 함수명을 대문자로 변경
    } else if (button === '그룹') {
      fetchGroup();
    }
  };

  const handleDelete = async (seq) => {
    try {

      const response = await axios.post("/admin/delete", seq);
      alert("삭제완료");
      fetchMembers(); // 수정: 함수명을 대문자로 변경
    } catch (error) {
      console.log("error" + error);
    }
  };
  const handleGroupDelete = async (seq) => {
    try {

      const response = await axios.post("/admin/groupdelete", seq);
      alert("삭제완료");
      fetchGroup(); // 수정: 함수명을 대문자로 변경
    } catch (error) {
      console.log("error" + error);
    }
  };

  const fetchGroup = async () => {
    try {
      const response = await axios.post("/admin/groupSearch");
      if (response.data && Array.isArray(response.data)) {
        setGroups(response.data);
      }
    } catch (error) {
      console.error("Error fetching Group:", error);
    }
  }
  const fetchMembers = async () => {
    try {
      const response = await axios.post("/admin/memberSearch");
      if (response.data && Array.isArray(response.data)) {
        setMembers(response.data);
      }
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const handleRoleChange = (seq, event) => {
    const newRole = event.target.value;
    setEditedMember({ seq, role: newRole, point: editedMember?.point || "" });
  };

  const handlePointChange = (seq, event) => {
    const newPoint = event.target.value;
    setEditedMember({ seq, role: editedMember?.role || "", point: newPoint });
  };

  const handleEdit = (member) => {
    setEditedMember(member);
  };

  const handleSaveEdit = async () => {
    if (!editedMember) return;

    try {
      const { seq, role, point } = editedMember;
      await axios.post("/admin/updateRole", { seq, role });
      await axios.post("/admin/updatePoint", { seq, point });
      alert("수정 완료");
      fetchMembers();
      setEditedMember(null);
    } catch (error) {
      console.log("Error saving edit:", error);
    }
  };
  useEffect(() => {
    // 초기 렌더링 시 회원 목록을 가져와서 설정
    fetchMembers(); // 수정: 함수명을 대문자로 변경
    fetchGroup();
  }, []); 

  return (
    <>
      {/* header */}
      <Header />
      {/* End header */}
      {/* Main */}
      <div className="adminBody">
        <div className="left">
          <button
            className={`left-button ${selectedButton === "회원" ? "active" : ""}`}
            onClick={() => handleButtonClick("회원")}
          >
            회원
          </button>
          <button
            className={`left-button ${selectedButton === "그룹" ? "active" : ""}`}
            onClick={() => handleButtonClick("그룹")}
          >
            그룹
          </button>
        </div>
        <div className={`right ${selectedButton ? "right-active" : ""}`}>
          {/* right의 내용은 selectedButton에 따라 동적으로 변경 */}
          {selectedButton === "회원" && (
            <table className="right-table">
              <tr className="right-table-tr">
                <td>아이디</td>
                <td>이름</td>
                <td>은행</td>
                <td>계좌번호</td>
                <td>점수</td>
                <td>권한</td>
                <td>삭제</td>
              </tr>
              {members.map((member) => (
                <tr key={member.seq}>
                  <td>{member.id}</td>
                  <td>{member.name}</td>
                  <td>{member.bank}</td>
                  <td>{member.banknum}</td>
                  <td>
                    {editedMember?.seq === member.seq ? (
                      <input
                        type="text"
                        value={editedMember.point}
                        onChange={(e) => handlePointChange(member.seq, e)}
                      />
                    ) : (
                      member.point
                    )}
                  </td>
                  <td>
                    {editedMember?.seq === member.seq ? (
                      <select
                        value={editedMember.role}
                        onChange={(e) => handleRoleChange(member.seq, e)}
                      >
                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                        <option value="ROLE_USER">ROLE_USER</option>
                        <option value="ROLE_MUSER">ROLE_MUSER</option>
                      </select>
                    ) : (
                      member.role
                    )}
                  </td>
                  <td>
                    {editedMember?.seq === member.seq ? (
                      <button onClick={() => handleSaveEdit()}>저장</button>
                    ) : (
                      <button onClick={() => handleEdit(member)}>수정</button>
                    )}
                  </td>
                  <td><button onClick={() => handleDelete(member.seq)}>삭제</button></td>
                </tr>
              ))}
            </table>
          )}
          {selectedButton === '그룹' && (
            <table>
              <tr>
                <td>개설 아이디</td>
                <td>그룹주제</td>
                <td>카테고리</td>
                <td>모임시작</td>
                <td>모임끝</td>
                <td>모임종류</td>
                <td>현재인원</td>
                <td>모임인원</td>
                <td>모이기시작날짜</td>
                <td>모이기마지막말짜</td>
                <td>삭제</td>
              </tr>
              {groups.map((groups) => (
                <tr key={groups.seq}>
                  <td>{groups.userId}</td>
                  <td>{groups.meetingTitle}</td>
                  <td>{groups.category}</td>
                  <td>{groups.meetingDateStart}</td>
                  <td>{groups.meetingDateEnd}</td>
                  <td>{groups.meetingType}</td>
                  <td>{groups.joinPeople}</td>
                  <td>{groups.peopleNum}</td>
                  <td>{groups.recruitments}</td>
                  <td>{groups.recruitmentd}</td>
                  <td><button onClick={() => handleGroupDelete(groups.seq)}>삭제</button></td>
                </tr>
              ))}
            </table>
          )}
        
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>

  );
};

export default AdminPage;
