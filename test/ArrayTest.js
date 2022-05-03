const TestArray = artifacts.require("TestArray");

contract("TestArray", ()=> {
    //Mocha hooks 
    // 1.Before 2.After 3.AfterEach 4.BeforeEach

    let TestArrays = null;
    before(async ()=> {
        TestArrays = await TestArray.deployed();
    });

    it("it should add elemnt into array", async ()=> {
        await TestArrays.punElement(10);
        let firstEle = await TestArrays.numArray(0);
        //console.log(firstEle);
        assert(firstEle.toNumber() == 10);
    });

    it("it should add another elemnt to array", async ()=> {
        await TestArrays.punElement(20);
        let firstEle = await TestArrays.numArray(1);
        //console.log(firstEle);
        assert(firstEle.toNumber() == 20);
    });

    it("it should return the length of array", async ()=> {
        const arrLength = await TestArrays.arrayLen();
        assert(arrLength.toNumber() == 2);
    });

    it("it should return whole array at once", async ()=> {
        const whArray = await TestArrays.getAll();
        const bigNoToUint = whArray.map((elements) => elements.toNumber());
        assert.deepEqual(bigNoToUint, [10,20]);
    })
})