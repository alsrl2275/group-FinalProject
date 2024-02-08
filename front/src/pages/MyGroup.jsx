import React from 'react';
import Modal from 'react-modal';

const MyGroup = ({ onClose, eventData }) => {
  return (
    <Modal
      isOpen={true} // Ensure the modal is open
      onRequestClose={onClose}
      contentLabel="Group Event Modal"
    >
      <div>
        <h2>{eventData.meetingTitle}</h2>
        <table>
          <tbody>
            <tr>
              <td>Seq</td>
              <td>{eventData.seq}</td>
            </tr>
            <tr>
              <td>User ID</td>
              <td>{eventData.userId}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>{eventData.category}</td>
            </tr>
            <tr>
              <td>Face To Face</td>
              <td>{eventData.faceToFace}</td>
            </tr>
            <tr>
              <td>Program</td>
              <td>{eventData.program}</td>
            </tr>
            <tr>
              <td>Meeting Type</td>
              <td>{eventData.meetingType}</td>
            </tr>
            <tr>
              <td>People Num</td>
              <td>{eventData.peopleNum}</td>
            </tr>
            <tr>
              <td>Join People</td>
              <td>{eventData.joinPeople}</td>
            </tr>
            <tr>
              <td>Meeting Cost</td>
              <td>{eventData.meetingCost}</td>
            </tr>
            <tr>
              <td>Recruitments</td>
              <td>{eventData.recruitments}</td>
            </tr>
            <tr>
              <td>Recruitmentd</td>
              <td>{eventData.recruitmentd}</td>
            </tr>
            <tr>
              <td>Meeting Date Start</td>
              <td>{eventData.meetingDateStart}</td>
            </tr>
            <tr>
              <td>Meeting Date End</td>
              <td>{eventData.meetingDateEnd}</td>
            </tr>
            <tr>
              <td>Meeting Location</td>
              <td>{eventData.meetingLocation}</td>
            </tr>
            <tr>
              <td>Members ID</td>
              <td>{eventData.membersId}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default MyGroup;