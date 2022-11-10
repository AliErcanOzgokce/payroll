import { ethers } from "ethers";
import React, { useState } from "react";
import { payrollContract } from "../assets/PayrollContract";
import { payrollAddress } from "../assets/PayrollAddress";

function RemoveEmployee({ accounts, setAccounts }: { accounts: any; setAccounts: any }) {
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const handleEmployeeAddress = (event: { target: { value: any } }) => {
    setEmployeeAddress(event.target.value);
  };

  async function removeEmployeeAsync() {
    if (accounts[0] !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", signer.getAddress());

      const payroll = new ethers.Contract(payrollAddress, payrollContract.abi, signer);

      const removeEmployee = await payroll.removeEmployee(employeeAddress);
      const receipt = await removeEmployee.wait();
      console.log(`receipt.transactionHash ${receipt.transactionHash}`);

      setEmployeeAddress("");

      if (receipt.transactionHash !== "undefined") {
        setTransactionHash(receipt.transactionHash);
      } else {
        setTransactionHash("Transaction failed");
      }
    }
  }
  return (
    <div>
      <div>
        <p>Employee Address to remove</p>
        <input type="text" id="employeeAddress" name="employeeAddress" onChange={handleEmployeeAddress} value={employeeAddress} placeholder="Type employee address" />
      </div>
      <button className="button" onClick={removeEmployeeAsync}>
        Remove Employee
      </button>
      <div>
        <b>Transaction Hash:</b> <p>{transactionHash}</p>
      </div>
    </div>
  );
}

export default RemoveEmployee;
