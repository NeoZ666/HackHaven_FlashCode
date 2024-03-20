// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ComplaintsContract {
    enum Status { Open, Pending, Closed, Reopen }
    enum Handler { Desk0, Desk1, Desk2, Desk3, Desk4 }

    struct Complaint {
        string title;
        string description;
        Status status;
        Handler handler;
    }

    mapping(uint256 => Complaint) public complaints;
    uint256 public complaintsCount;

    event NewComplaint(uint256 indexed id, string title, string description, Status status, Handler handler);
    event ComplaintStatusUpdated(uint256 indexed id, Status status);

    function createComplaint(string memory _title, string memory _description, Handler _handler) external {
        complaints[complaintsCount] = Complaint(_title, _description, Status.Open, _handler);
        emit NewComplaint(complaintsCount, _title, _description, Status.Open, _handler);
        complaintsCount++;
    }

    function updateComplaintStatus(uint256 _id, Status _status) external {
        require(_id < complaintsCount, "Complaint does not exist");
        complaints[_id].status = _status;
        emit ComplaintStatusUpdated(_id, _status);
    }

    function getAllComplaints() external view returns (Complaint[] memory) {
        Complaint[] memory allComplaints = new Complaint[](complaintsCount);
        for (uint256 i = 0; i < complaintsCount; i++) {
            allComplaints[i] = complaints[i];
        }
        return allComplaints;
    }

    function getComplaintsByStatus(Status _status) external view returns (Complaint[] memory) {
        uint256 count;
        for (uint256 i = 0; i < complaintsCount; i++) {
            if (complaints[i].status == _status) {
                count++;
            }
        }
        Complaint[] memory result = new Complaint[](count);
        uint256 index;
        for (uint256 i = 0; i < complaintsCount; i++) {
            if (complaints[i].status == _status) {
                result[index++] = complaints[i];
            }
        }
        return result;
    }

    function getComplaintsByHandler(Handler _handler) external view returns (Complaint[] memory) {
        uint256 count;
        for (uint256 i = 0; i < complaintsCount; i++) {
            if (complaints[i].handler == _handler) {
                count++;
            }
        }
        Complaint[] memory result = new Complaint[](count);
        uint256 index;
        for (uint256 i = 0; i < complaintsCount; i++) {
            if (complaints[i].handler == _handler) {
                result[index++] = complaints[i];
            }
        }
        return result;
    }
}

0x569c1F82A4A2716452c93cA9c5a448e58caee816
