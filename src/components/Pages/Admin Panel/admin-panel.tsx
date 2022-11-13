import { ethers } from "ethers";
import React, { useState } from "react";
import { payrollContract } from "../../../assets/PayrollContract";
import { payrollAddress } from "../../../assets/PayrollAddress";
import { Button, Icon, Input, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmployeeTable from "./employee-table";
import { formatEther } from "ethers/lib/utils";

function AdminPanel() {
  const [companyAcc, setCompanyAcc] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [totalSalaries, setTotalSalaries] = useState("");
  const [employees, setEmployees] = useState([]);
  const [tokenBalance, setTokenBalance] = useState("");
  const [totalStakes, setTotalStakes] = useState("");
  const [compEtherBalance, setCompEtherBalance] = useState("");

  async function readTheContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", signer.getAddress());

    const payroll = new ethers.Contract(
      payrollAddress,
      payrollContract.abi,
      signer
    );

    const companyAcc = await payroll.companyAcc();
    setCompanyAcc(companyAcc);

    const totalEmployees = await payroll.totalEmployees();
    setTotalEmployees(totalEmployees.toString());

    const totalSalaries = await payroll.totalSalaries();
    setTotalSalaries(totalSalaries.toString() + " NES");

    const totalStakes = await payroll.totalStakes();
    setTotalStakes(totalStakes.toString());

    const getEmployees = await payroll.getEmployees();
    setEmployees(
      getEmployees.map((key: string, index: string) => index + ")" + key + " ")
    );

    const tokenBalance = await payroll.tokenBalance();
    setTokenBalance(tokenBalance.toString() + " NES");

    const etherBalance = await payroll.getCompanyEtherBalance();
    setCompEtherBalance(formatEther(etherBalance.toString()) + " ETH");
  }

  const [amount, setAmount] = React.useState("");

  const handleFundAmount = (event: { target: { value: any } }) => {
    setAmount(event.target.value);
  };

  async function fund() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", signer.getAddress());

    const payroll = new ethers.Contract(
      payrollAddress,
      payrollContract.abi,
      signer
    );

    const fund = await payroll.fundCompanyWithEther({
      value: ethers.utils.parseEther(amount),
    });
    const receipt = await fund.wait();
    console.log(`fund.transactionHash ${receipt.transactionHash}`);
  }

  async function closeCompany() {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("Account:", signer.getAddress());

    const payroll = new ethers.Contract(
      payrollAddress,
      payrollContract.abi,
      signer
    );

    const close = await payroll.closeCompany();
    const receipt = await close.wait();
    console.log(`close.transactionHash ${receipt.transactionHash}`);
  }

  return (
    <>
      <div className="admin-panel ">
        <div className="section">
          <div className="container-default bg-blue-600/20 rounded-3xl">
            <div className="header-container bg-green-600 rounded-t-3xl ">
              <h1 className=" text-white pl-5">Admin Panel</h1>
              <div className="buttons-container pr-5">
                <Button size="medium" onClick={readTheContract}>
                  Read The Contract
                </Button>
                <Button
                  icon
                  labelPosition="left"
                  size="medium"
                  color="red"
                  onClick={closeCompany}
                >
                  <Icon name="close" />
                  Close Company
                </Button>
              </div>
            </div>
            <div className="inner-container p-5">
              <div className="inner-container-left ">
                <div className="inner-container-left-header">
                  <h3>Company Account Address</h3>
                  <p>{companyAcc}</p>
                  <h3>Token Balance</h3>
                  <p>{tokenBalance}</p>
                  <h3>Total Employee Amount</h3>
                  <p>{totalEmployees}</p>
                  <h3>Company Ether Balance</h3>
                  <p>{compEtherBalance}</p>
                </div>
              </div>
              <div className="inner-container-right">
                <div className="inner-container-right-header">
                  <h3>Payroll Contract Address</h3>
                  <p>{payrollAddress}</p>
                  <h3>Total Salaries</h3>
                  <p>{totalSalaries}</p>
                  <h3>Total Stakes</h3>
                  <p>{totalStakes}</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="employees-list mt-10 text-">
                <h2 className="text-green-600 pl-5">Employees List</h2>
                <div className="text-base p-5 ">
                  <EmployeeTable />
                </div>
              </div>
            </div>
            <div className="" style={{ marginTop: "20px" }}>
              <div className="flex-auto text-center">
                <h2>Fund The Company Account With Ether</h2>
              </div>
              <div className="input-container" style={{ marginTop: "0" }}>
                <Input
                  type="number"
                  placeholder="Amount"
                  fluid
                  action
                  className="p-10"
                >
                  <input
                    type="number"
                    onChange={handleFundAmount}
                    value={amount}
                  />
                  <Button onClick={fund} secondary type="submit">
                    Fund
                  </Button>
                </Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
