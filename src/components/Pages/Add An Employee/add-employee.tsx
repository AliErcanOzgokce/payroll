import React, { useState } from "react";
import { ethers } from "ethers";
import { payrollContract } from "../../../assets/PayrollContract";
import { payrollAddress } from "../../../assets/PayrollAddress";
import { Button, Input } from "semantic-ui-react";

function AddEmployee() {
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeSalary, setemployeeSalary] = useState(0);
  const [transactionHash, setTransactionHash] = useState("");

  const handleEmployeeAddress = (event: { target: { value: any } }) => {
    setEmployeeAddress(event.target.value);
  };

  const handleEmployeeSalary = (event: { target: { value: any } }) => {
    setemployeeSalary(event.target.value);
  };

  async function addEmployeeAsync() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", signer.getAddress());

    const payroll = new ethers.Contract(
      payrollAddress,
      payrollContract.abi,
      signer
    );

    const addEmployee = await payroll.addEmployee(
      employeeAddress,
      employeeSalary
    );
    const receipt = await addEmployee.wait();
    console.log(`receipt.transactionHash ${receipt.transactionHash}`);

    setEmployeeAddress("");
    setemployeeSalary(0);

    if (receipt.transactionHash !== "undefined") {
      setTransactionHash(receipt.transactionHash);
    } else {
      setTransactionHash("Transaction failed");
    }
  }
  return (
    <>
      <div className="section">
        <div className="bg-gray-900 rounded-2xl p-10">
          <div>
            <h1 className="text-white text-5xl">Add Employee</h1>

            <div className="text-left">
              <h2 className="text-white">Employee Address</h2>
              <Input type="text" placeholder="Employee Address" fluid>
                <input
                  type="text"
                  onChange={handleEmployeeAddress}
                  value={employeeAddress}
                />
              </Input>
              <h2 className="text-white">Employee Salary</h2>
              <Input type="number" placeholder="Employee Salary" fluid>
                <input
                  type="number"
                  onChange={handleEmployeeSalary}
                  value={employeeSalary}
                />
              </Input>
              <div className="p-5 text-center">
                <Button size="big" type="submit" onClick={addEmployeeAsync}>
                  Add Employee
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
