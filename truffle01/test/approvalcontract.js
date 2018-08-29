const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol')

contract('ApprovalContract',function(accounts){

    it('initiates contract',async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver,0x70d9342C4CCdF1a7089597D4C0D3B1dc2cEC63a1,"approver dont match");
    })

    it('check approver',async function() {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.viewApprover();
        assert.equal(approver,0x70d9342C4CCdF1a7089597D4C0D3B1dc2cEC63a1,"approver dont match");
    })    

    it('tkes a deposit',async function(){
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0],{value:1e+18,from:accounts[1]});
        assert.equal(web3.eth.getBalance(contract.address),1e+18,"aamount not matching!!");
    })
})