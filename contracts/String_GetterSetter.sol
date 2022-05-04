// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract StrGetterSetter {
    string public str;

    function set(string memory _str) public {
        str = _str;
    }

    function get() public view returns(string memory){
        return str;
    }
}