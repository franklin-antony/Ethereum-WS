pragma solidity ^0.4.18;

contract ApprovalContract
{
	address public sender;
	address public receiver;
	address public constant approver=0x70d9342C4CCdF1a7089597D4C0D3B1dc2cEC63a1;
	
	
	function deposit(address _receiver) external payable
	{
		require(msg.value>0);
		sender = msg.sender;
		receiver = _receiver;
	}

	
	function viewApprover() external pure returns(address)
	{
		return(approver);
	}
	
	
	function approve() external
	{
		require(msg.sender == approver);
		receiver.transfer( address(this).balance );
	}
		
	
}