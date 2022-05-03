//SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract TestArray {
    uint[] public numArray;

    function punElement(uint _num) public {
        numArray.push(_num);
    } 

    function arrayLen() public view returns(uint){
        return numArray.length;
    }  

    function getAll() public view returns(uint[] memory){
        return numArray;
    }
}