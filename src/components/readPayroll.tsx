import { ethers } from "ethers";
import React, { useState } from "react";
import { payrollContract } from "../assets/PayrollContract";
import { payrollAddress } from "../assets/PayrollAddress";

function ReadPayroll({ accounts, setAccounts }: { accounts: any; setAccounts: any }) {
  const [paymentToken, setPaymentToken] = useState("");
  const [companyAcc, setCompanyAcc] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [totalSalaries, setTotalSalaries] = useState("");
  const [employees, setEmployees] = useState([]);
  const [tokenBalance, setTokenBalance] = useState("");
  const [totalPayments, setTotalPayments] = useState("");

  let allEmployees = [];

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  async function queryPayroll() {
    if (accounts[0] !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", signer.getAddress());

      const payroll = new ethers.Contract(payrollAddress, payrollContract.abi, signer);

      const paymentToken = await payroll.paymentToken();
      setPaymentToken(paymentToken);

      const companyAcc = await payroll.companyAcc();
      setCompanyAcc(companyAcc);

      const totalEmployees = await payroll.totalEmployees();
      setTotalEmployees(totalEmployees.toString());

      const totalSalaries = await payroll.totalSalaries();
      setTotalSalaries(totalSalaries.toString());

      const totalPayments = await payroll.totalPayments();
      setTotalPayments(totalPayments.toString());

      const getEmployees = await payroll.getEmployees();
      allEmployees = getEmployees;
      console.log(allEmployees);
      setEmployees(getEmployees.map((key: string, index: string) => index + ")" + key + " "));

      const tokenBalance = await payroll.tokenBalance();
      setTokenBalance(tokenBalance.toString() + " wei");
    }
  }

  return (
    <div>
      <div>
        <p>
          <b>Wallet Address:</b>{" "}
        </p>
        <p>{accounts[0]}</p>
      </div>
      <button className="button" onClick={connectAccount}>
        Connect
      </button>
      <h2>Query Payroll</h2>
      <div>
        <b>Payroll Token</b>
        <p>{paymentToken}</p>
      </div>
      <div>
        <b>Company Account</b>
        <p>{companyAcc}</p>
      </div>
      <div>
        <b>Total Employees</b>
        <p>{totalEmployees}</p>
      </div>
      <div>
        <b>Total Salary</b>
        <p>{totalSalaries}</p>
      </div>
      <div>
        <b>Total Payments</b>
        <p>{totalPayments}</p>
      </div>
      <div>
        <b>Employees</b>
        <p>{employees}</p>
      </div>
      <div>
        <b>Token Balance</b>
        <p>{tokenBalance}</p>
      </div>
      <button className="button" onClick={queryPayroll}>
        Read Payroll
      </button>
    </div>
  );
}

export default ReadPayroll;
