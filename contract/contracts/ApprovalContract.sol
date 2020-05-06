pragma solidity ^0.4.18;

contract ApprovalContract {

  address public sender;
  address public receiver;
  address constant public approver = 0x2E2594E9C00E99fC264aD7045fC1BEB50B58b437;

  function constructor() public {
    // tbd
  }

  function deposit(address _receiver) external payable {
    require(msg.value > 0);
    sender = msg.sender;
    receiver = _receiver;
  }

  function viewApprover() external pure returns(address) {
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(this.balance);
  }

}
