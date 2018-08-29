const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

  contract('ApprovalContract', function(accounts) {

    it('initiates contract', async function() {
      const contract = await ApprovalContract.deployed();
      const approver = await contract.approver.call();

    })




  });
