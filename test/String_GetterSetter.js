const StrGetterSetter = artifacts.require("StrGetterSetter");

contract("StrGetterSetter", ()=> {
    it("It should set the value of string", async ()=> {
        const StrGetterSetters = await StrGetterSetter.deployed();
        await StrGetterSetters.set("Web");
        const setStr = await StrGetterSetters.get();
        assert(setStr === "Web");
    });
});