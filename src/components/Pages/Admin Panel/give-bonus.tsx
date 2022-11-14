import { ethers } from "ethers";
import React, { useState } from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { payrollAddress } from "../../../assets/PayrollAddress";
import { payrollContract } from "../../../assets/PayrollContract";

function GiveBonus() {
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeBonus, setEmployeeBonus] = useState(0);

  const handleEmployeeAddress = (event: { target: { value: any } }) => {
    setEmployeeAddress(event.target.value);
  };

  const handleEmployeeBonus = (event: { target: { value: any } }) => {
    setEmployeeBonus(event.target.value);
  };

  async function giveBonus() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", signer.getAddress());

    const payroll = new ethers.Contract(
      payrollAddress,
      payrollContract.abi,
      signer
    );

    await payroll.payAnEmployee(employeeAddress, employeeBonus);
  }

  return (
    <>
      <div className="section">
        <div className="bg-gray-900 rounded-2xl p-10">
          <div>
            <h1 className="text-white text-5xl">Give Bonus To Employee</h1>
            <div className="text-left">
              <h2 className="text-white">Employee Address</h2>
              <Input type="text" placeholder="Employee Address" fluid>
                <input
                  type="text"
                  onChange={handleEmployeeAddress}
                  value={employeeAddress}
                />
              </Input>
              <h2 className="text-white">Bonus Amount</h2>
              <Input type="number" placeholder="Employee Salary" fluid>
                <input
                  type="number"
                  onChange={handleEmployeeBonus}
                  value={employeeBonus}
                />
              </Input>
              <div className="p-5 text-center">
                <Button
                  icon
                  labelPosition="left"
                  color="twitter"
                  size="big"
                  onClick={giveBonus}
                >
                  <Icon name="money" />
                  Give Bonus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveBonus;
