import React from "react";
import { ethers } from "ethers";
// import "./homepage.css";
import { Button, Icon, Input, Label } from "semantic-ui-react";
import { payrollAddress } from "../../../assets/PayrollAddress";
import { payrollContract } from "../../../assets/PayrollContract";
import { payrollTokenContract } from "../../../assets/PayrollTokenContract";

// images for team
import ShaluImg from "../../../assets/shaluImg.jpg";
import Nikos from "../../../assets/nikos.jpg";
import Ercan from "../../../assets/ercan.jpg";

function Homepage() {
  const [amount, setAmount] = React.useState("");

  const handleExchangeAmount = (event: { target: { value: any } }) => {
    setAmount(event.target.value);
  };

  async function exchange() {
    try {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("Account:", signer.getAddress());

      const payroll = new ethers.Contract(
        payrollAddress,
        payrollContract.abi,
        signer
      );

      const amount_inEther = ethers.utils.parseUnits(amount, "ether");

      const exchangeProcess = await payroll.clientGetEthPayTokens(
        amount_inEther
      );
      const receipt = await exchangeProcess.wait();

      const payrollTokenAddress = await payroll.paymentToken();

      const payrollToken = new ethers.Contract(
        payrollTokenAddress,
        payrollTokenContract.abi,
        signer
      );
      const payrollTokenSymbol = await payrollToken.symbol();

      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: payrollTokenAddress, // The address that the token is at.
            symbol: payrollTokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            image:
              "https://images.squarespace-cdn.com/content/v1/5f9bcc27c14fc6134658484b/25f2e17b-618e-43c1-8321-f8bd69001713/encode_club_white_01.png?format=1500w", // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Token aded");
      } else {
        console.log("No token added");
      }

      console.log(`fund.transactionHash ${receipt.transactionHash}`);
    } catch (error) {}
  }

  return (
    <>
      <div className="section bg-gradient-to-t from-slate-300 to-white bg-fixed flex flex-col gap-56 m-0 p-0">
        <div className="homepage h-[75vh] flex items-center justify-center">
          <div className="homepage-container">
            <h1 className="text-[7rem]">
              Manage Your Company With Our{" "}
              <span className="text-green-600">Payroll</span> dApp
            </h1>
            <div className="buttons-container">
              <Button secondary size="huge">
                Get Started
              </Button>
            </div>
          </div>
        </div>

        <div className="what-section">
          <h1 className="text-6xl pb-5"> What is N&E</h1>
          <p className="w-2/3 mx-auto">
            A crypto payment Tooling for DAOs/Orgs to stream salaries in ERC20
            tokens. Now companies can directly use our Dapp, fund their company
            accounts and distribute salaries to their employees
          </p>
        </div>

        <div
          className="container-default rounded-xl drop-shadow-md text-white text-lg flex items-center justify-around
                bg-gradient-to-t from-black to-gray-700 h-56 w-full"
        >
          <div className="my-0 py-5">
            <Input type="number" placeholder="Amount Of ETH" action>
              <input
                type="number"
                onChange={handleExchangeAmount}
                value={amount}
              />
              {/* <Button onClick={fund} secondary type='submit'>Fund</Button> */}
              <button
                onClick={exchange}
                type="submit"
                className="bg-green-600 px-10 text-white font-semibold rounded-r-md"
              >
                Exchange
              </button>
            </Input>
          </div>
          <h1 className=" text-lg my-0 py-5">
            Exchange Your Money To Company Tokens
          </h1>
        </div>

        <div className="features-section grid grid-cols-3 gap-10">
          <div className="bg-slate-200 px-10 py-16 rounded-xl drop-shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h1> Features </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
              dussentially unchanged.
            </p>
          </div>
          <div className="bg-slate-200 px-10 py-16 rounded-xl drop-shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h1> Features </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              teally unchanged.
            </p>
          </div>
          <div className="bg-slate-200 px-10 py-16 rounded-xl drop-shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <h1> Features </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              et has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h1 className="text-6xl pb-5"> Team </h1>
          <p className="w-2/3 mx-auto">A team of passionate web3 believers!</p>

          <div className="team-columns flex flex-row justify-center items-center mb-20">
            <div className="m-10">
              <img
                src={Nikos}
                alt="Nikos Sal"
                className="h-56 rounded-full mb-5 bg-contain"
              />
              <p> Nikos </p>
            </div>
            <div className="m-10">
              <img
                src={Ercan}
                alt="Ercan Ali"
                className="h-56 rounded-full mb-5 bg-contain"
              />
              <p> Ercan </p>
            </div>
            <div className="m-10">
              <img
                src={ShaluImg}
                alt="Shalu Panwar"
                className="h-56 rounded-full mb-5 bg-contain"
              />
              <p> Shalu </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
