pragma solidity ^0.4.18;

contract ApprovalContract {

  address public sender;
  address public receiver;
  address constant public approver = ;

  function ApprovalContract() public {
    // tbd
  }

  function deposit(address _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver);
  }

  funtion viewApprover() external pure returns(address) {
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(this.balance);
  }

}
