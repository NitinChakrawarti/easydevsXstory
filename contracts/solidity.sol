// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract IPRegistry {
    enum IPRightsType { Copyright, Trademark, Patent }
    enum ContentType { Text, Image, Video }

    struct IntellectualProperty {
        string name;
        string description;
        IPRightsType rightsType;
        ContentType contentType;
        string contentHash; // Hash of content or IPFS CID
        address creator;
        uint256 timestamp;
    }

    IntellectualProperty[] public ipRecords;
    mapping(bytes32 => bool) public contentExists;

    event IPRegistered(
        uint256 indexed ipId,
        address indexed creator,
        string name,
        IPRightsType rightsType,
        ContentType contentType,
        uint256 timestamp
    );

    function registerIP(
        string memory _name,
        string memory _description,
        IPRightsType _rightsType,
        ContentType _contentType,
        string memory _contentHash
    ) external {
        require(bytes(_name).length > 0, "Name is required");
        require(bytes(_contentHash).length > 0, "Content hash is required");

        bytes32 hashKey = keccak256(abi.encodePacked(_contentHash));
        require(!contentExists[hashKey], "Content already registered");

        ipRecords.push(
            IntellectualProperty({
                name: _name,
                description: _description,
                rightsType: _rightsType,
                contentType: _contentType,
                contentHash: _contentHash,
                creator: msg.sender,
                timestamp: block.timestamp
            })
        );

        contentExists[hashKey] = true;

        emit IPRegistered(ipRecords.length - 1, msg.sender, _name, _rightsType, _contentType, block.timestamp);
    }

    function getIP(uint256 index) external view returns (IntellectualProperty memory) {
        require(index < ipRecords.length, "Invalid index");
        return ipRecords[index];
    }

    function totalIPs() external view returns (uint256) {
        return ipRecords.length;
    }
}
