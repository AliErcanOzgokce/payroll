export const payrollTokenContract = {
    "contractName": "PayrollToken",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "previousAdminRole",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "newAdminRole",
                    "type": "bytes32"
                }
            ],
            "name": "RoleAdminChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleGranted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "RoleRevoked",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DEFAULT_ADMIN_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "MINTER_ROLE",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "burnFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                }
            ],
            "name": "getRoleAdmin",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "grantRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "hasRole",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "renounceRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "role",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "revokeRole",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.16+commit.07a7930e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Destroys `amount` tokens from the caller. See {ERC20-_burn}.\"},\"burnFrom(address,uint256)\":{\"details\":\"Destroys `amount` tokens from `account`, deducting from the caller's allowance. See {ERC20-_burn} and {ERC20-allowance}. Requirements: - the caller must have allowance for ``accounts``'s tokens of at least `amount`.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleGranted} event.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`. May emit a {RoleRevoked} event.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role. May emit a {RoleRevoked} event.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll-tests/contracts/Payroll.sol\":\"PayrollToken\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll-tests/contracts/Payroll.sol\":{\"keccak256\":\"0x3e7135bde75e605c99973fae3fa131c4263e164a4fbb41405af88c66ec0ca7c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://aa606c4e585a03d14d40902f3b52887a108803189dbb3fd0f2ceb0afb14ca68a\",\"dweb:/ipfs/QmaQnSiM3LWAmFUJM3oskHX8cWYrzEB1JaLMMenwZxjkw4\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x5b35d8e68aeaccc685239bd9dd79b9ba01a0357930f8a3307ab85511733d9724\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba8eb2d22f9321bd4660f6617c181d9611ff30a9b089408b8c6e2216d6d5cdc5\",\"dweb:/ipfs/QmTSJvhjHfnUV1j4hsqDv8PmLvGBLRs9gHLjTUXrUJ5Y9q\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/IAccessControl.sol\":{\"keccak256\":\"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a\",\"dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol\":{\"keccak256\":\"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f\",\"dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
    "bytecode": "60806040523480156200001157600080fd5b506040516200163538038062001635833981016040819052620000349162000216565b818160036200004483826200030f565b5060046200005382826200030f565b505050620000887f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200009d60201b60201c565b620000956000336200009d565b5050620003db565b620000a98282620000ad565b5050565b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16620000a95760008281526005602090815260408083206001600160a01b03851684529091529020805460ff191660011790556200010d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200017957600080fd5b81516001600160401b038082111562000196576200019662000151565b604051601f8301601f19908116603f01168101908282118183101715620001c157620001c162000151565b81604052838152602092508683858801011115620001de57600080fd5b600091505b83821015620002025785820183015181830184015290820190620001e3565b600093810190920192909252949350505050565b600080604083850312156200022a57600080fd5b82516001600160401b03808211156200024257600080fd5b620002508683870162000167565b935060208501519150808211156200026757600080fd5b50620002768582860162000167565b9150509250929050565b600181811c908216806200029557607f821691505b602082108103620002b657634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030a57600081815260208120601f850160051c81016020861015620002e55750805b601f850160051c820191505b818110156200030657828155600101620002f1565b5050505b505050565b81516001600160401b038111156200032b576200032b62000151565b62000343816200033c845462000280565b84620002bc565b602080601f8311600181146200037b5760008415620003625750858301515b600019600386901b1c1916600185901b17855562000306565b600085815260208120601f198616915b82811015620003ac578886015182559484019460019091019084016200038b565b5085821015620003cb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61124a80620003eb6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf146102a6578063a457c2d7146102ae578063a9059cbb146102c1578063d5391393146102d4578063d547741f146102fb578063dd62ed3e1461030e57600080fd5b806342966c681461023c57806370a082311461024f57806379cc67901461027857806391d148541461028b57806395d89b411461029e57600080fd5b8063248a9ca31161010a578063248a9ca3146101bc5780632f2ff15d146101df578063313ce567146101f457806336568abe14610203578063395093511461021657806340c10f191461022957600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610f3a565b610321565b60405190151581526020015b60405180910390f35b610177610358565b6040516101669190610f88565b61015a610192366004610fd7565b6103ea565b6002545b604051908152602001610166565b61015a6101b7366004611001565b610402565b61019b6101ca36600461103d565b60009081526005602052604090206001015490565b6101f26101ed366004611056565b610426565b005b60405160128152602001610166565b6101f2610211366004611056565b610450565b61015a610224366004610fd7565b6104d3565b6101f2610237366004610fd7565b6104f5565b6101f261024a36600461103d565b61056e565b61019b61025d366004611082565b6001600160a01b031660009081526020819052604090205490565b6101f2610286366004610fd7565b61057b565b61015a610299366004611056565b610590565b6101776105bb565b61019b600081565b61015a6102bc366004610fd7565b6105ca565b61015a6102cf366004610fd7565b610645565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f2610309366004611056565b610653565b61019b61031c36600461109d565b610678565b60006001600160e01b03198216637965db0b60e01b148061035257506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060038054610367906110c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610393906110c7565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b5050505050905090565b6000336103f88185856106a3565b5060019392505050565b6000336104108582856107c7565b61041b858585610841565b506001949350505050565b60008281526005602052604090206001015461044181610a0f565b61044b8383610a19565b505050565b6001600160a01b03811633146104c55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104cf8282610a9f565b5050565b6000336103f88185856104e68383610678565b6104f09190611117565b6106a3565b61051f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610590565b6105645760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba10309036b4b73a32b960511b60448201526064016104bc565b6104cf8282610b06565b6105783382610be5565b50565b6105868233836107c7565b6104cf8282610be5565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060048054610367906110c7565b600033816105d88286610678565b9050838110156106385760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104bc565b61041b82868684036106a3565b6000336103f8818585610841565b60008281526005602052604090206001015461066e81610a0f565b61044b8383610a9f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166107055760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104bc565b6001600160a01b0382166107665760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104bc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006107d38484610678565b9050600019811461083b578181101561082e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104bc565b61083b84848484036106a3565b50505050565b6001600160a01b0383166108a55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104bc565b6001600160a01b0382166109075760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104bc565b6001600160a01b0383166000908152602081905260409020548181101561097f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104bc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109b6908490611117565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a0291815260200190565b60405180910390a361083b565b6105788133610d33565b610a238282610590565b6104cf5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a5b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610aa98282610590565b156104cf5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610b5c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104bc565b8060026000828254610b6e9190611117565b90915550506001600160a01b03821660009081526020819052604081208054839290610b9b908490611117565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610c455760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104bc565b6001600160a01b03821660009081526020819052604090205481811015610cb95760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104bc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ce890849061112a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610d3d8282610590565b6104cf57610d55816001600160a01b03166014610d97565b610d60836020610d97565b604051602001610d7192919061113d565b60408051601f198184030181529082905262461bcd60e51b82526104bc91600401610f88565b60606000610da68360026111b2565b610db1906002611117565b67ffffffffffffffff811115610dc957610dc96111d1565b6040519080825280601f01601f191660200182016040528015610df3576020820181803683370190505b509050600360fc1b81600081518110610e0e57610e0e6111e7565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e3d57610e3d6111e7565b60200101906001600160f81b031916908160001a9053506000610e618460026111b2565b610e6c906001611117565b90505b6001811115610ee4576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ea057610ea06111e7565b1a60f81b828281518110610eb657610eb66111e7565b60200101906001600160f81b031916908160001a90535060049490941c93610edd816111fd565b9050610e6f565b508315610f335760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104bc565b9392505050565b600060208284031215610f4c57600080fd5b81356001600160e01b031981168114610f3357600080fd5b60005b83811015610f7f578181015183820152602001610f67565b50506000910152565b6020815260008251806020840152610fa7816040850160208701610f64565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610fd257600080fd5b919050565b60008060408385031215610fea57600080fd5b610ff383610fbb565b946020939093013593505050565b60008060006060848603121561101657600080fd5b61101f84610fbb565b925061102d60208501610fbb565b9150604084013590509250925092565b60006020828403121561104f57600080fd5b5035919050565b6000806040838503121561106957600080fd5b8235915061107960208401610fbb565b90509250929050565b60006020828403121561109457600080fd5b610f3382610fbb565b600080604083850312156110b057600080fd5b6110b983610fbb565b915061107960208401610fbb565b600181811c908216806110db57607f821691505b6020821081036110fb57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561035257610352611101565b8181038181111561035257610352611101565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611175816017850160208801610f64565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516111a6816028840160208801610f64565b01602801949350505050565b60008160001904831182151516156111cc576111cc611101565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161120c5761120c611101565b50600019019056fea2646970667358221220aeb0d2ee522f219f4cbce73566be55ff812811a650d11205aaac44e5376c13f964736f6c63430008100033",
    "deployedBytecode": "608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf146102a6578063a457c2d7146102ae578063a9059cbb146102c1578063d5391393146102d4578063d547741f146102fb578063dd62ed3e1461030e57600080fd5b806342966c681461023c57806370a082311461024f57806379cc67901461027857806391d148541461028b57806395d89b411461029e57600080fd5b8063248a9ca31161010a578063248a9ca3146101bc5780632f2ff15d146101df578063313ce567146101f457806336568abe14610203578063395093511461021657806340c10f191461022957600080fd5b806301ffc9a71461014757806306fdde031461016f578063095ea7b31461018457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015a610155366004610f3a565b610321565b60405190151581526020015b60405180910390f35b610177610358565b6040516101669190610f88565b61015a610192366004610fd7565b6103ea565b6002545b604051908152602001610166565b61015a6101b7366004611001565b610402565b61019b6101ca36600461103d565b60009081526005602052604090206001015490565b6101f26101ed366004611056565b610426565b005b60405160128152602001610166565b6101f2610211366004611056565b610450565b61015a610224366004610fd7565b6104d3565b6101f2610237366004610fd7565b6104f5565b6101f261024a36600461103d565b61056e565b61019b61025d366004611082565b6001600160a01b031660009081526020819052604090205490565b6101f2610286366004610fd7565b61057b565b61015a610299366004611056565b610590565b6101776105bb565b61019b600081565b61015a6102bc366004610fd7565b6105ca565b61015a6102cf366004610fd7565b610645565b61019b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6101f2610309366004611056565b610653565b61019b61031c36600461109d565b610678565b60006001600160e01b03198216637965db0b60e01b148061035257506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060038054610367906110c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610393906110c7565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b5050505050905090565b6000336103f88185856106a3565b5060019392505050565b6000336104108582856107c7565b61041b858585610841565b506001949350505050565b60008281526005602052604090206001015461044181610a0f565b61044b8383610a19565b505050565b6001600160a01b03811633146104c55760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6104cf8282610a9f565b5050565b6000336103f88185856104e68383610678565b6104f09190611117565b6106a3565b61051f7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610590565b6105645760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba10309036b4b73a32b960511b60448201526064016104bc565b6104cf8282610b06565b6105783382610be5565b50565b6105868233836107c7565b6104cf8282610be5565b60009182526005602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060048054610367906110c7565b600033816105d88286610678565b9050838110156106385760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104bc565b61041b82868684036106a3565b6000336103f8818585610841565b60008281526005602052604090206001015461066e81610a0f565b61044b8383610a9f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166107055760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104bc565b6001600160a01b0382166107665760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104bc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006107d38484610678565b9050600019811461083b578181101561082e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104bc565b61083b84848484036106a3565b50505050565b6001600160a01b0383166108a55760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104bc565b6001600160a01b0382166109075760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104bc565b6001600160a01b0383166000908152602081905260409020548181101561097f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104bc565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906109b6908490611117565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a0291815260200190565b60405180910390a361083b565b6105788133610d33565b610a238282610590565b6104cf5760008281526005602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610a5b3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610aa98282610590565b156104cf5760008281526005602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b038216610b5c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104bc565b8060026000828254610b6e9190611117565b90915550506001600160a01b03821660009081526020819052604081208054839290610b9b908490611117565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610c455760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104bc565b6001600160a01b03821660009081526020819052604090205481811015610cb95760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104bc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ce890849061112a565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b610d3d8282610590565b6104cf57610d55816001600160a01b03166014610d97565b610d60836020610d97565b604051602001610d7192919061113d565b60408051601f198184030181529082905262461bcd60e51b82526104bc91600401610f88565b60606000610da68360026111b2565b610db1906002611117565b67ffffffffffffffff811115610dc957610dc96111d1565b6040519080825280601f01601f191660200182016040528015610df3576020820181803683370190505b509050600360fc1b81600081518110610e0e57610e0e6111e7565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e3d57610e3d6111e7565b60200101906001600160f81b031916908160001a9053506000610e618460026111b2565b610e6c906001611117565b90505b6001811115610ee4576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610ea057610ea06111e7565b1a60f81b828281518110610eb657610eb66111e7565b60200101906001600160f81b031916908160001a90535060049490941c93610edd816111fd565b9050610e6f565b508315610f335760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104bc565b9392505050565b600060208284031215610f4c57600080fd5b81356001600160e01b031981168114610f3357600080fd5b60005b83811015610f7f578181015183820152602001610f67565b50506000910152565b6020815260008251806020840152610fa7816040850160208701610f64565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610fd257600080fd5b919050565b60008060408385031215610fea57600080fd5b610ff383610fbb565b946020939093013593505050565b60008060006060848603121561101657600080fd5b61101f84610fbb565b925061102d60208501610fbb565b9150604084013590509250925092565b60006020828403121561104f57600080fd5b5035919050565b6000806040838503121561106957600080fd5b8235915061107960208401610fbb565b90509250929050565b60006020828403121561109457600080fd5b610f3382610fbb565b600080604083850312156110b057600080fd5b6110b983610fbb565b915061107960208401610fbb565b600181811c908216806110db57607f821691505b6020821081036110fb57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561035257610352611101565b8181038181111561035257610352611101565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611175816017850160208801610f64565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516111a6816028840160208801610f64565b01602801949350505050565b60008160001904831182151516156111cc576111cc611101565b500290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60008161120c5761120c611101565b50600019019056fea2646970667358221220aeb0d2ee522f219f4cbce73566be55ff812811a650d11205aaac44e5376c13f964736f6c63430008100033",
    "sourceMap": "610:661:0:-:0;;;844:190;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;905:4;911:6;2044:5:91;:13;905:4:0;2044:5:91;:13;:::i;:::-;-1:-1:-1;2067:7:91;:17;2077:7;2067;:17;:::i;:::-;;1978:113;;938:35:0::1;773:24;962:10;938;;;:35;;:::i;:::-;984:42;2072:4:2;1015:10:0;984;:42::i;:::-;844:190:::0;;610:661;;6824:110:2;6902:25;6913:4;6919:7;6902:10;:25::i;:::-;6824:110;;:::o;7474:233::-;2981:4;3004:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3004:29:2;;;;;;;;;;;;7552:149;;7595:12;;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7595:29:2;;;;;;;;;:36;;-1:-1:-1;;7595:36:2;7627:4;7595:36;;;7677:12;719:10:132;;640:96;7677:12:2;-1:-1:-1;;;;;7650:40:2;7668:7;-1:-1:-1;;;;;7650:40:2;7662:4;7650:40;;;;;;;;;;7474:233;;:::o;14:127:171:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:840;200:5;253:3;246:4;238:6;234:17;230:27;220:55;;271:1;268;261:12;220:55;294:13;;-1:-1:-1;;;;;356:10:171;;;353:36;;;369:18;;:::i;:::-;444:2;438:9;412:2;498:13;;-1:-1:-1;;494:22:171;;;518:2;490:31;486:40;474:53;;;542:18;;;562:22;;;539:46;536:72;;;588:18;;:::i;:::-;628:10;624:2;617:22;663:2;655:6;648:18;685:4;675:14;;730:3;725:2;720;712:6;708:15;704:24;701:33;698:53;;;747:1;744;737:12;698:53;769:1;760:10;;779:133;793:2;790:1;787:9;779:133;;;881:14;;;877:23;;871:30;850:14;;;846:23;;839:63;804:10;;;;779:133;;;954:1;932:15;;;928:24;;;921:35;;;;936:6;146:840;-1:-1:-1;;;;146:840:171:o;991:562::-;1090:6;1098;1151:2;1139:9;1130:7;1126:23;1122:32;1119:52;;;1167:1;1164;1157:12;1119:52;1194:16;;-1:-1:-1;;;;;1259:14:171;;;1256:34;;;1286:1;1283;1276:12;1256:34;1309:61;1362:7;1353:6;1342:9;1338:22;1309:61;:::i;:::-;1299:71;;1416:2;1405:9;1401:18;1395:25;1379:41;;1445:2;1435:8;1432:16;1429:36;;;1461:1;1458;1451:12;1429:36;;1484:63;1539:7;1528:8;1517:9;1513:24;1484:63;:::i;:::-;1474:73;;;991:562;;;;;:::o;1558:380::-;1637:1;1633:12;;;;1680;;;1701:61;;1755:4;1747:6;1743:17;1733:27;;1701:61;1808:2;1800:6;1797:14;1777:18;1774:38;1771:161;;1854:10;1849:3;1845:20;1842:1;1835:31;1889:4;1886:1;1879:15;1917:4;1914:1;1907:15;1771:161;;1558:380;;;:::o;2069:545::-;2171:2;2166:3;2163:11;2160:448;;;2207:1;2232:5;2228:2;2221:17;2277:4;2273:2;2263:19;2347:2;2335:10;2331:19;2328:1;2324:27;2318:4;2314:38;2383:4;2371:10;2368:20;2365:47;;;-1:-1:-1;2406:4:171;2365:47;2461:2;2456:3;2452:12;2449:1;2445:20;2439:4;2435:31;2425:41;;2516:82;2534:2;2527:5;2524:13;2516:82;;;2579:17;;;2560:1;2549:13;2516:82;;;2520:3;;;2160:448;2069:545;;;:::o;2790:1352::-;2910:10;;-1:-1:-1;;;;;2932:30:171;;2929:56;;;2965:18;;:::i;:::-;2994:97;3084:6;3044:38;3076:4;3070:11;3044:38;:::i;:::-;3038:4;2994:97;:::i;:::-;3146:4;;3210:2;3199:14;;3227:1;3222:663;;;;3929:1;3946:6;3943:89;;;-1:-1:-1;3998:19:171;;;3992:26;3943:89;-1:-1:-1;;2747:1:171;2743:11;;;2739:24;2735:29;2725:40;2771:1;2767:11;;;2722:57;4045:81;;3192:944;;3222:663;2016:1;2009:14;;;2053:4;2040:18;;-1:-1:-1;;3258:20:171;;;3376:236;3390:7;3387:1;3384:14;3376:236;;;3479:19;;;3473:26;3458:42;;3571:27;;;;3539:1;3527:14;;;;3406:19;;3376:236;;;3380:3;3640:6;3631:7;3628:19;3625:201;;;3701:19;;;3695:26;-1:-1:-1;;3784:1:171;3780:14;;;3796:3;3776:24;3772:37;3768:42;3753:58;3738:74;;3625:201;-1:-1:-1;;;;;3872:1:171;3856:14;;;3852:22;3839:36;;-1:-1:-1;2790:1352:171:o;:::-;610:661:0;;;;;;",
    "deployedSourceMap": "610:661:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2606:202:2;;;;;;:::i;:::-;;:::i;:::-;;;470:14:171;;463:22;445:41;;433:2;418:18;2606:202:2;;;;;;;;2156:98:91;;;:::i;:::-;;;;;;;:::i;4433:197::-;;;;;;:::i;:::-;;:::i;3244:106::-;3331:12;;3244:106;;;1736:25:171;;;1724:2;1709:18;3244:106:91;1590:177:171;5192:286:91;;;;;;:::i;:::-;;:::i;4391:129:2:-;;;;;;:::i;:::-;4465:7;4491:12;;;:6;:12;;;;;:22;;;;4391:129;4816:145;;;;;;:::i;:::-;;:::i;:::-;;3093:91:91;;;3175:2;2873:36:171;;2861:2;2846:18;3093:91:91;2731:184:171;5925:214:2;;;;;;:::i;:::-;;:::i;5873:234:91:-;;;;;;:::i;:::-;;:::i;1042:226:0:-;;;;;;:::i;:::-;;:::i;578:89:93:-;;;;;;:::i;:::-;;:::i;3408:125:91:-;;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:91;3482:7;3508:18;;;;;;;;;;;;3408:125;973:161:93;;;;;;:::i;:::-;;:::i;2895:145:2:-;;;;;;:::i;:::-;;:::i;2367:102:91:-;;;:::i;2027:49:2:-;;2072:4;2027:49;;6594:427:91;;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;:::i;:::-;;:::i;735:62:0:-;;773:24;735:62;;5241:147:2;;;;;;:::i;:::-;;:::i;3976:149:91:-;;;;;;:::i;:::-;;:::i;2606:202:2:-;2691:4;-1:-1:-1;;;;;;2714:47:2;;-1:-1:-1;;;2714:47:2;;:87;;-1:-1:-1;;;;;;;;;;937:40:146;;;2765:36:2;2707:94;2606:202;-1:-1:-1;;2606:202:2:o;2156:98:91:-;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:132;4570:32:91;719:10:132;4586:7:91;4595:6;4570:8;:32::i;:::-;-1:-1:-1;4619:4:91;;4433:197;-1:-1:-1;;;4433:197:91:o;5192:286::-;5319:4;719:10:132;5375:38:91;5391:4;719:10:132;5406:6:91;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:91;;5192:286;-1:-1:-1;;;;5192:286:91:o;4816:145:2:-;4465:7;4491:12;;;:6;:12;;;;;:22;;;2505:16;2516:4;2505:10;:16::i;:::-;4929:25:::1;4940:4;4946:7;4929:10;:25::i;:::-;4816:145:::0;;;:::o;5925:214::-;-1:-1:-1;;;;;6020:23:2;;719:10:132;6020:23:2;6012:83;;;;-1:-1:-1;;;6012:83:2;;4148:2:171;6012:83:2;;;4130:21:171;4187:2;4167:18;;;4160:30;4226:34;4206:18;;;4199:62;-1:-1:-1;;;4277:18:171;;;4270:45;4332:19;;6012:83:2;;;;;;;;;6106:26;6118:4;6124:7;6106:11;:26::i;:::-;5925:214;;:::o;5873:234:91:-;5961:4;719:10:132;6015:64:91;719:10:132;6031:7:91;6068:10;6040:25;719:10:132;6031:7:91;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;1042:226:0:-;1173:32;773:24;1194:10;1173:7;:32::i;:::-;1165:67;;;;-1:-1:-1;;;1165:67:0;;4826:2:171;1165:67:0;;;4808:21:171;4865:2;4845:18;;;4838:30;-1:-1:-1;;;4884:18:171;;;4877:52;4946:18;;1165:67:0;4624:346:171;1165:67:0;1243:17;1249:2;1253:6;1243:5;:17::i;578:89:93:-;633:27;719:10:132;653:6:93;633:5;:27::i;:::-;578:89;:::o;973:161::-;1049:46;1065:7;719:10:132;1088:6:93;1049:15;:46::i;:::-;1105:22;1111:7;1120:6;1105:5;:22::i;2895:145:2:-;2981:4;3004:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;3004:29:2;;;;;;;;;;;;;;;2895:145::o;2367:102:91:-;2423:13;2455:7;2448:14;;;;;:::i;6594:427::-;6687:4;719:10:132;6687:4:91;6768:25;719:10:132;6785:7:91;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:91;;5177:2:171;6803:85:91;;;5159:21:171;5216:2;5196:18;;;5189:30;5255:34;5235:18;;;5228:62;-1:-1:-1;;;5306:18:171;;;5299:35;5351:19;;6803:85:91;4975:401:171;6803:85:91;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:132;3862:28:91;719:10:132;3879:2:91;3883:6;3862:9;:28::i;5241:147:2:-;4465:7;4491:12;;;:6;:12;;;;;:22;;;2505:16;2516:4;2505:10;:16::i;:::-;5355:26:::1;5367:4;5373:7;5355:11;:26::i;3976:149:91:-:0;-1:-1:-1;;;;;4091:18:91;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;10110:370::-;-1:-1:-1;;;;;10241:19:91;;10233:68;;;;-1:-1:-1;;;10233:68:91;;5583:2:171;10233:68:91;;;5565:21:171;5622:2;5602:18;;;5595:30;5661:34;5641:18;;;5634:62;-1:-1:-1;;;5712:18:171;;;5705:34;5756:19;;10233:68:91;5381:400:171;10233:68:91;-1:-1:-1;;;;;10319:21:91;;10311:68;;;;-1:-1:-1;;;10311:68:91;;5988:2:171;10311:68:91;;;5970:21:171;6027:2;6007:18;;;6000:30;6066:34;6046:18;;;6039:62;-1:-1:-1;;;6117:18:171;;;6110:32;6159:19;;10311:68:91;5786:398:171;10311:68:91;-1:-1:-1;;;;;10390:18:91;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;1736:25:171;;;10441:32:91;;1709:18:171;10441:32:91;;;;;;;10110:370;;;:::o;10761:441::-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:91;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:91;;6391:2:171;11010:68:91;;;6373:21:171;6430:2;6410:18;;;6403:30;6469:31;6449:18;;;6442:59;6518:18;;11010:68:91;6189:353:171;11010:68:91;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;:::-;10881:321;10761:441;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:91;;7593:68;;;;-1:-1:-1;;;7593:68:91;;6749:2:171;7593:68:91;;;6731:21:171;6788:2;6768:18;;;6761:30;6827:34;6807:18;;;6800:62;-1:-1:-1;;;6878:18:171;;;6871:35;6923:19;;7593:68:91;6547:401:171;7593:68:91;-1:-1:-1;;;;;7679:16:91;;7671:64;;;;-1:-1:-1;;;7671:64:91;;7155:2:171;7671:64:91;;;7137:21:171;7194:2;7174:18;;;7167:30;7233:34;7213:18;;;7206:62;-1:-1:-1;;;7284:18:171;;;7277:33;7327:19;;7671:64:91;6953:399:171;7671:64:91;-1:-1:-1;;;;;7817:15:91;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:91;;7559:2:171;7842:72:91;;;7541:21:171;7598:2;7578:18;;;7571:30;7637:34;7617:18;;;7610:62;-1:-1:-1;;;7688:18:171;;;7681:36;7734:19;;7842:72:91;7357:402:171;7842:72:91;-1:-1:-1;;;;;7948:15:91;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:91;8054:4;-1:-1:-1;;;;;8045:26:91;;8064:6;8045:26;;;;1736:25:171;;1724:2;1709:18;;1590:177;8045:26:91;;;;;;;;8082:37;4816:145:2;3334:103;3400:30;3411:4;719:10:132;3400::2;:30::i;7474:233::-;7557:22;7565:4;7571:7;7557;:22::i;:::-;7552:149;;7595:12;;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7595:29:2;;;;;;;;;:36;;-1:-1:-1;;7595:36:2;7627:4;7595:36;;;7677:12;719:10:132;;640:96;7677:12:2;-1:-1:-1;;;;;7650:40:2;7668:7;-1:-1:-1;;;;;7650:40:2;7662:4;7650:40;;;;;;;;;;7474:233;;:::o;7878:234::-;7961:22;7969:4;7975:7;7961;:22::i;:::-;7957:149;;;8031:5;7999:12;;;:6;:12;;;;;;;;-1:-1:-1;;;;;7999:29:2;;;;;;;;;;:37;;-1:-1:-1;;7999:37:2;;;8055:40;719:10:132;;7999:12:2;;8055:40;;8031:5;8055:40;7878:234;;:::o;8402:389:91:-;-1:-1:-1;;;;;8485:21:91;;8477:65;;;;-1:-1:-1;;;8477:65:91;;7966:2:171;8477:65:91;;;7948:21:171;8005:2;7985:18;;;7978:30;8044:33;8024:18;;;8017:61;8095:18;;8477:65:91;7764:355:171;8477:65:91;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:91;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:91;;1736:25:171;;;-1:-1:-1;;;;;8688:37:91;;;8705:1;;8688:37;;1724:2:171;1709:18;8688:37:91;;;;;;;5925:214:2;;:::o;9111:576:91:-;-1:-1:-1;;;;;9194:21:91;;9186:67;;;;-1:-1:-1;;;9186:67:91;;8326:2:171;9186:67:91;;;8308:21:171;8365:2;8345:18;;;8338:30;8404:34;8384:18;;;8377:62;-1:-1:-1;;;8455:18:171;;;8448:31;8496:19;;9186:67:91;8124:397:171;9186:67:91;-1:-1:-1;;;;;9349:18:91;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:91;;8728:2:171;9377:71:91;;;8710:21:171;8767:2;8747:18;;;8740:30;8806:34;8786:18;;;8779:62;-1:-1:-1;;;8857:18:171;;;8850:32;8899:19;;9377:71:91;8526:398:171;9377:71:91;-1:-1:-1;;;;;9482:18:91;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:91;;1736:25:171;;;9610:1:91;;-1:-1:-1;;;;;9584:37:91;;;;;1724:2:171;1709:18;9584:37:91;;;;;;;4816:145:2;;;:::o;3718:492::-;3806:22;3814:4;3820:7;3806;:22::i;:::-;3801:403;;3989:41;4017:7;-1:-1:-1;;;;;3989:41:2;4027:2;3989:19;:41::i;:::-;4101:38;4129:4;4136:2;4101:19;:38::i;:::-;3896:265;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;3896:265:2;;;;;;;;;;-1:-1:-1;;;3844:349:2;;;;;;;:::i;1652:441:137:-;1727:13;1752:19;1784:10;1788:6;1784:1;:10;:::i;:::-;:14;;1797:1;1784:14;:::i;:::-;1774:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1774:25:137;;1752:47;;-1:-1:-1;;;1809:6:137;1816:1;1809:9;;;;;;;;:::i;:::-;;;;:15;-1:-1:-1;;;;;1809:15:137;;;;;;;;;-1:-1:-1;;;1834:6:137;1841:1;1834:9;;;;;;;;:::i;:::-;;;;:15;-1:-1:-1;;;;;1834:15:137;;;;;;;;-1:-1:-1;1864:9:137;1876:10;1880:6;1876:1;:10;:::i;:::-;:14;;1889:1;1876:14;:::i;:::-;1864:26;;1859:132;1896:1;1892;:5;1859:132;;;-1:-1:-1;;;1943:5:137;1951:3;1943:11;1930:25;;;;;;;:::i;:::-;;;;1918:6;1925:1;1918:9;;;;;;;;:::i;:::-;;;;:37;-1:-1:-1;;;;;1918:37:137;;;;;;;;-1:-1:-1;1979:1:137;1969:11;;;;;1899:3;;;:::i;:::-;;;1859:132;;;-1:-1:-1;2008:10:137;;2000:55;;;;-1:-1:-1;;;2000:55:137;;10659:2:171;2000:55:137;;;10641:21:171;;;10678:18;;;10671:30;10737:34;10717:18;;;10710:62;10789:18;;2000:55:137;10457:356:171;2000:55:137;2079:6;1652:441;-1:-1:-1;;;1652:441:137:o;14:286:171:-;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;167:23;;-1:-1:-1;;;;;;219:32:171;;209:43;;199:71;;266:1;263;256:12;497:250;582:1;592:113;606:6;603:1;600:13;592:113;;;682:11;;;676:18;663:11;;;656:39;628:2;621:10;592:113;;;-1:-1:-1;;739:1:171;721:16;;714:27;497:250::o;752:396::-;901:2;890:9;883:21;864:4;933:6;927:13;976:6;971:2;960:9;956:18;949:34;992:79;1064:6;1059:2;1048:9;1044:18;1039:2;1031:6;1027:15;992:79;:::i;:::-;1132:2;1111:15;-1:-1:-1;;1107:29:171;1092:45;;;;1139:2;1088:54;;752:396;-1:-1:-1;;752:396:171:o;1153:173::-;1221:20;;-1:-1:-1;;;;;1270:31:171;;1260:42;;1250:70;;1316:1;1313;1306:12;1250:70;1153:173;;;:::o;1331:254::-;1399:6;1407;1460:2;1448:9;1439:7;1435:23;1431:32;1428:52;;;1476:1;1473;1466:12;1428:52;1499:29;1518:9;1499:29;:::i;:::-;1489:39;1575:2;1560:18;;;;1547:32;;-1:-1:-1;;;1331:254:171:o;1772:328::-;1849:6;1857;1865;1918:2;1906:9;1897:7;1893:23;1889:32;1886:52;;;1934:1;1931;1924:12;1886:52;1957:29;1976:9;1957:29;:::i;:::-;1947:39;;2005:38;2039:2;2028:9;2024:18;2005:38;:::i;:::-;1995:48;;2090:2;2079:9;2075:18;2062:32;2052:42;;1772:328;;;;;:::o;2105:180::-;2164:6;2217:2;2205:9;2196:7;2192:23;2188:32;2185:52;;;2233:1;2230;2223:12;2185:52;-1:-1:-1;2256:23:171;;2105:180;-1:-1:-1;2105:180:171:o;2472:254::-;2540:6;2548;2601:2;2589:9;2580:7;2576:23;2572:32;2569:52;;;2617:1;2614;2607:12;2569:52;2653:9;2640:23;2630:33;;2682:38;2716:2;2705:9;2701:18;2682:38;:::i;:::-;2672:48;;2472:254;;;;;:::o;3105:186::-;3164:6;3217:2;3205:9;3196:7;3192:23;3188:32;3185:52;;;3233:1;3230;3223:12;3185:52;3256:29;3275:9;3256:29;:::i;3296:260::-;3364:6;3372;3425:2;3413:9;3404:7;3400:23;3396:32;3393:52;;;3441:1;3438;3431:12;3393:52;3464:29;3483:9;3464:29;:::i;:::-;3454:39;;3512:38;3546:2;3535:9;3531:18;3512:38;:::i;3561:380::-;3640:1;3636:12;;;;3683;;;3704:61;;3758:4;3750:6;3746:17;3736:27;;3704:61;3811:2;3803:6;3800:14;3780:18;3777:38;3774:161;;3857:10;3852:3;3848:20;3845:1;3838:31;3892:4;3889:1;3882:15;3920:4;3917:1;3910:15;3774:161;;3561:380;;;:::o;4362:127::-;4423:10;4418:3;4414:20;4411:1;4404:31;4454:4;4451:1;4444:15;4478:4;4475:1;4468:15;4494:125;4559:9;;;4580:10;;;4577:36;;;4593:18;;:::i;8929:128::-;8996:9;;;9017:11;;;9014:37;;;9031:18;;:::i;9062:812::-;9473:25;9468:3;9461:38;9443:3;9528:6;9522:13;9544:75;9612:6;9607:2;9602:3;9598:12;9591:4;9583:6;9579:17;9544:75;:::i;:::-;-1:-1:-1;;;9678:2:171;9638:16;;;9670:11;;;9663:40;9728:13;;9750:76;9728:13;9812:2;9804:11;;9797:4;9785:17;;9750:76;:::i;:::-;9846:17;9865:2;9842:26;;9062:812;-1:-1:-1;;;;9062:812:171:o;9879:168::-;9919:7;9985:1;9981;9977:6;9973:14;9970:1;9967:21;9962:1;9955:9;9948:17;9944:45;9941:71;;;9992:18;;:::i;:::-;-1:-1:-1;10032:9:171;;9879:168::o;10052:127::-;10113:10;10108:3;10104:20;10101:1;10094:31;10144:4;10141:1;10134:15;10168:4;10165:1;10158:15;10184:127;10245:10;10240:3;10236:20;10233:1;10226:31;10276:4;10273:1;10266:15;10300:4;10297:1;10290:15;10316:136;10355:3;10383:5;10373:39;;10392:18;;:::i;:::-;-1:-1:-1;;;10428:18:171;;10316:136::o",
    "sourcePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll-tests/contracts/Payroll.sol",
    "compiler": {
        "name": "solc",
        "version": "0.8.16+commit.07a7930e"
    },
    "ast": {
        "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll-tests/contracts/Payroll.sol",
        "exportedSymbols": {
            "AccessControl": [
                1781
            ],
            "Context": [
                21044
            ],
            "ERC165": [
                23245
            ],
            "ERC20": [
                13982
            ],
            "ERC20Burnable": [
                14104
            ],
            "IAccessControl": [
                2034
            ],
            "IERC165": [
                23561
            ],
            "IERC20": [
                14060
            ],
            "IERC20Metadata": [
                16164
            ],
            "Payroll": [
                730
            ],
            "PayrollToken": [
                65
            ],
            "Strings": [
                21570
            ]
        },
        "id": 731,
        "license": "MIT",
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".7",
                    "<",
                    "0.9",
                    ".0"
                ],
                "nodeType": "PragmaDirective",
                "src": "32:31:0"
            },
            {
                "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
                "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol",
                "id": 2,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 731,
                "sourceUnit": 13983,
                "src": "67:171:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
                "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol",
                "id": 3,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 731,
                "sourceUnit": 14105,
                "src": "240:190:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
                "file": "c:/Users/Nikos/Desktop/SolidityBootcamp/Encode-Solidity-Bootcamp-Weekend-Projects/team-project/payroll/node_modules/@openzeppelin/contracts/access/AccessControl.sol",
                "id": 4,
                "nameLocation": "-1:-1:-1",
                "nodeType": "ImportDirective",
                "scope": 731,
                "sourceUnit": 1782,
                "src": "432:174:0",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 5,
                            "name": "ERC20",
                            "nameLocations": [
                                "635:5:0"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 13982,
                            "src": "635:5:0"
                        },
                        "id": 6,
                        "nodeType": "InheritanceSpecifier",
                        "src": "635:5:0"
                    },
                    {
                        "baseName": {
                            "id": 7,
                            "name": "ERC20Burnable",
                            "nameLocations": [
                                "642:13:0"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 14104,
                            "src": "642:13:0"
                        },
                        "id": 8,
                        "nodeType": "InheritanceSpecifier",
                        "src": "642:13:0"
                    },
                    {
                        "baseName": {
                            "id": 9,
                            "name": "AccessControl",
                            "nameLocations": [
                                "657:13:0"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 1781,
                            "src": "657:13:0"
                        },
                        "id": 10,
                        "nodeType": "InheritanceSpecifier",
                        "src": "657:13:0"
                    }
                ],
                "canonicalName": "PayrollToken",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 65,
                "linearizedBaseContracts": [
                    65,
                    1781,
                    23245,
                    23561,
                    2034,
                    14104,
                    13982,
                    16164,
                    14060,
                    21044
                ],
                "name": "PayrollToken",
                "nameLocation": "619:12:0",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": true,
                        "functionSelector": "d5391393",
                        "id": 15,
                        "mutability": "constant",
                        "name": "MINTER_ROLE",
                        "nameLocation": "759:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 65,
                        "src": "735:62:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 11,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "735:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "hexValue": "4d494e5445525f524f4c45",
                                    "id": 13,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "783:13:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                                        "typeString": "literal_string \"MINTER_ROLE\""
                                    },
                                    "value": "MINTER_ROLE"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                                        "typeString": "literal_string \"MINTER_ROLE\""
                                    }
                                ],
                                "id": 12,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967288,
                                "src": "773:9:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                }
                            },
                            "id": 14,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "773:24:0",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": true,
                        "id": 18,
                        "mutability": "constant",
                        "name": "_decimals",
                        "nameLocation": "821:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 65,
                        "src": "806:29:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                        },
                        "typeName": {
                            "id": 16,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "806:5:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                            }
                        },
                        "value": {
                            "hexValue": "3138",
                            "id": 17,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "833:2:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                            },
                            "value": "18"
                        },
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 41,
                            "nodeType": "Block",
                            "src": "919:115:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30,
                                                "name": "MINTER_ROLE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15,
                                                "src": "949:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 31,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "962:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 32,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "966:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "962:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 29,
                                            "name": "_setupRole",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1689,
                                            "src": "938:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address)"
                                            }
                                        },
                                        "id": 33,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "938:35:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34,
                                    "nodeType": "ExpressionStatement",
                                    "src": "938:35:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 36,
                                                "name": "DEFAULT_ADMIN_ROLE",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 1489,
                                                "src": "995:18:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 37,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "1015:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 38,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1019:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1015:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 35,
                                            "name": "_setupRole",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 1689,
                                            "src": "984:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address)"
                                            }
                                        },
                                        "id": 39,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "984:42:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 40,
                                    "nodeType": "ExpressionStatement",
                                    "src": "984:42:0"
                                }
                            ]
                        },
                        "id": 42,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "id": 25,
                                        "name": "name",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20,
                                        "src": "905:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    {
                                        "id": 26,
                                        "name": "symbol",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 22,
                                        "src": "911:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    }
                                ],
                                "id": 27,
                                "kind": "baseConstructorSpecifier",
                                "modifierName": {
                                    "id": 24,
                                    "name": "ERC20",
                                    "nameLocations": [
                                        "898:5:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 13982,
                                    "src": "898:5:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "898:20:0"
                            }
                        ],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 23,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 20,
                                    "mutability": "mutable",
                                    "name": "name",
                                    "nameLocation": "870:4:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 42,
                                    "src": "856:18:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 19,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "856:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 22,
                                    "mutability": "mutable",
                                    "name": "symbol",
                                    "nameLocation": "890:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 42,
                                    "src": "876:20:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 21,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "876:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "855:42:0"
                        },
                        "returnParameters": {
                            "id": 28,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "919:0:0"
                        },
                        "scope": 65,
                        "src": "844:190:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 63,
                            "nodeType": "Block",
                            "src": "1091:177:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 51,
                                                        "name": "MINTER_ROLE",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 15,
                                                        "src": "1181:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 52,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4294967281,
                                                            "src": "1194:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 53,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1198:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1194:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 50,
                                                    "name": "hasRole",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 1541,
                                                    "src": "1173:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 54,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1173:32:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "43616c6c6572206973206e6f742061206d696e746572",
                                                "id": 55,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1207:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_71abfcf6e817aaed3ce6663958bac2a3a82999ed0036c98a95b29f350f04cedf",
                                                    "typeString": "literal_string \"Caller is not a minter\""
                                                },
                                                "value": "Caller is not a minter"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_71abfcf6e817aaed3ce6663958bac2a3a82999ed0036c98a95b29f350f04cedf",
                                                    "typeString": "literal_string \"Caller is not a minter\""
                                                }
                                            ],
                                            "id": 49,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "1165:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 56,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1165:67:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 57,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1165:67:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 59,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 44,
                                                "src": "1249:2:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 60,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 46,
                                                "src": "1253:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 58,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13799,
                                            "src": "1243:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 61,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1243:17:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 62,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1243:17:0"
                                }
                            ]
                        },
                        "functionSelector": "40c10f19",
                        "id": 64,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "mint",
                        "nameLocation": "1051:4:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 47,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 44,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1064:2:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 64,
                                    "src": "1056:10:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 43,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1056:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 46,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1076:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 64,
                                    "src": "1068:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 45,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1068:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1055:28:0"
                        },
                        "returnParameters": {
                            "id": 48,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1091:0:0"
                        },
                        "scope": 65,
                        "src": "1042:226:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "scope": 731,
                "src": "610:661:0",
                "usedErrors": []
            },
            {
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "Payroll",
                "contractDependencies": [
                    65
                ],
                "contractKind": "contract",
                "fullyImplemented": true,
                "id": 730,
                "linearizedBaseContracts": [
                    730
                ],
                "name": "Payroll",
                "nameLocation": "1284:7:0",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "functionSelector": "3013ce29",
                        "id": 68,
                        "mutability": "mutable",
                        "name": "paymentToken",
                        "nameLocation": "1318:12:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1298:32:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PayrollToken_$65",
                            "typeString": "contract PayrollToken"
                        },
                        "typeName": {
                            "id": 67,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 66,
                                "name": "PayrollToken",
                                "nameLocations": [
                                    "1298:12:0"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 65,
                                "src": "1298:12:0"
                            },
                            "referencedDeclaration": 65,
                            "src": "1298:12:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                "typeString": "contract PayrollToken"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "d36acc39",
                        "id": 70,
                        "mutability": "mutable",
                        "name": "companyAcc",
                        "nameLocation": "1352:10:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1337:25:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 69,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1337:7:0",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "52b9b973",
                        "id": 73,
                        "mutability": "mutable",
                        "name": "totalEmployees",
                        "nameLocation": "1384:14:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1369:33:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 71,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1369:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "30",
                            "id": 72,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1401:1:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                            },
                            "value": "0"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "9cee7e8d",
                        "id": 76,
                        "mutability": "mutable",
                        "name": "totalSalaries",
                        "nameLocation": "1424:13:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1409:32:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 74,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1409:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "30",
                            "id": 75,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1440:1:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                            },
                            "value": "0"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "bf9befb1",
                        "id": 79,
                        "mutability": "mutable",
                        "name": "totalStakes",
                        "nameLocation": "1463:11:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1448:30:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 77,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1448:7:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "30",
                            "id": 78,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1477:1:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                            },
                            "value": "0"
                        },
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "eventSelector": "737c69225d647e5994eab1a6c301bf6d9232beb2759ae1e27a8966b4732bc489",
                        "id": 85,
                        "name": "Paid",
                        "nameLocation": "1493:4:0",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 84,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 81,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1516:4:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 85,
                                    "src": "1508:12:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 80,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1508:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 83,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1539:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 85,
                                    "src": "1531:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 82,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1531:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1497:58:0"
                        },
                        "src": "1487:69:0"
                    },
                    {
                        "anonymous": false,
                        "eventSelector": "d5321498ebef1d048889992d8457d0f50576d300db1fd93488480c1f57a65601",
                        "id": 93,
                        "name": "Fund",
                        "nameLocation": "1570:4:0",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 92,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 87,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1601:4:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 93,
                                    "src": "1585:20:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 86,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1585:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 89,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1624:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 93,
                                    "src": "1616:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 88,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1616:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 91,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "timestamp",
                                    "nameLocation": "1649:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 93,
                                    "src": "1641:17:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 90,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1641:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1574:91:0"
                        },
                        "src": "1564:102:0"
                    },
                    {
                        "canonicalName": "Payroll.EmployeeStruct",
                        "id": 102,
                        "members": [
                            {
                                "constant": false,
                                "id": 95,
                                "mutability": "mutable",
                                "name": "paymentAddress",
                                "nameLocation": "1715:14:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 102,
                                "src": "1707:22:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 94,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1707:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 97,
                                "mutability": "mutable",
                                "name": "salary",
                                "nameLocation": "1748:6:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 102,
                                "src": "1740:14:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 96,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1740:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 99,
                                "mutability": "mutable",
                                "name": "lastPayment",
                                "nameLocation": "1773:11:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 102,
                                "src": "1765:19:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 98,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1765:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 101,
                                "mutability": "mutable",
                                "name": "paymentCount",
                                "nameLocation": "1803:12:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 102,
                                "src": "1795:20:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 100,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1795:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "EmployeeStruct",
                        "nameLocation": "1681:14:0",
                        "nodeType": "StructDefinition",
                        "scope": 730,
                        "src": "1674:149:0",
                        "visibility": "public"
                    },
                    {
                        "canonicalName": "Payroll.StakeStruct",
                        "id": 113,
                        "members": [
                            {
                                "constant": false,
                                "id": 104,
                                "mutability": "mutable",
                                "name": "stakeId",
                                "nameLocation": "1865:7:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 113,
                                "src": "1860:12:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 103,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1860:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 106,
                                "mutability": "mutable",
                                "name": "employeeAddress",
                                "nameLocation": "1891:15:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 113,
                                "src": "1883:23:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 105,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1883:7:0",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 108,
                                "mutability": "mutable",
                                "name": "createdDate",
                                "nameLocation": "1922:11:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 113,
                                "src": "1917:16:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 107,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1917:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 110,
                                "mutability": "mutable",
                                "name": "amount",
                                "nameLocation": "1949:6:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 113,
                                "src": "1944:11:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 109,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1944:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 112,
                                "mutability": "mutable",
                                "name": "open",
                                "nameLocation": "1971:4:0",
                                "nodeType": "VariableDeclaration",
                                "scope": 113,
                                "src": "1966:9:0",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                },
                                "typeName": {
                                    "id": 111,
                                    "name": "bool",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1966:4:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "StakeStruct",
                        "nameLocation": "1838:11:0",
                        "nodeType": "StructDefinition",
                        "scope": 730,
                        "src": "1831:152:0",
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "d5a44f86",
                        "id": 118,
                        "mutability": "mutable",
                        "name": "stakes",
                        "nameLocation": "2030:6:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "1991:45:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                            "typeString": "mapping(uint256 => struct Payroll.StakeStruct)"
                        },
                        "typeName": {
                            "id": 117,
                            "keyType": {
                                "id": 114,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1999:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1991:31:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                "typeString": "mapping(uint256 => struct Payroll.StakeStruct)"
                            },
                            "valueType": {
                                "id": 116,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 115,
                                    "name": "StakeStruct",
                                    "nameLocations": [
                                        "2010:11:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 113,
                                    "src": "2010:11:0"
                                },
                                "referencedDeclaration": 113,
                                "src": "2010:11:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_StakeStruct_$113_storage_ptr",
                                    "typeString": "struct Payroll.StakeStruct"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "functionSelector": "ea66543f",
                        "id": 122,
                        "mutability": "mutable",
                        "name": "isEmployee",
                        "nameLocation": "2077:10:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "2045:42:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                        },
                        "typeName": {
                            "id": 121,
                            "keyType": {
                                "id": 119,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2053:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2045:24:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                "typeString": "mapping(address => bool)"
                            },
                            "valueType": {
                                "id": 120,
                                "name": "bool",
                                "nodeType": "ElementaryTypeName",
                                "src": "2064:4:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 126,
                        "mutability": "mutable",
                        "name": "employees",
                        "nameLocation": "2111:9:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "2094:26:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                            "typeString": "struct Payroll.EmployeeStruct[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 124,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 123,
                                    "name": "EmployeeStruct",
                                    "nameLocations": [
                                        "2094:14:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 102,
                                    "src": "2094:14:0"
                                },
                                "referencedDeclaration": 102,
                                "src": "2094:14:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage_ptr",
                                    "typeString": "struct Payroll.EmployeeStruct"
                                }
                            },
                            "id": 125,
                            "nodeType": "ArrayTypeName",
                            "src": "2094:16:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage_ptr",
                                "typeString": "struct Payroll.EmployeeStruct[]"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "functionSelector": "31577126",
                        "id": 131,
                        "mutability": "mutable",
                        "name": "employeesAddress",
                        "nameLocation": "2169:16:0",
                        "nodeType": "VariableDeclaration",
                        "scope": 730,
                        "src": "2127:58:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                            "typeString": "mapping(address => struct Payroll.EmployeeStruct)"
                        },
                        "typeName": {
                            "id": 130,
                            "keyType": {
                                "id": 127,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2135:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2127:34:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                "typeString": "mapping(address => struct Payroll.EmployeeStruct)"
                            },
                            "valueType": {
                                "id": 129,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 128,
                                    "name": "EmployeeStruct",
                                    "nameLocations": [
                                        "2146:14:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 102,
                                    "src": "2146:14:0"
                                },
                                "referencedDeclaration": 102,
                                "src": "2146:14:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage_ptr",
                                    "typeString": "struct Payroll.EmployeeStruct"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 142,
                            "nodeType": "Block",
                            "src": "2214:87:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 137,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 134,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "2233:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 135,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2237:6:0",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2233:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "id": 136,
                                                    "name": "companyAcc",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 70,
                                                    "src": "2247:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "2233:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4f776e6572207265736572766564206f6e6c79",
                                                "id": 138,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2259:21:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_b690911e837e73672a6ec728325f450ccb873f130672158242039ea4772ec22d",
                                                    "typeString": "literal_string \"Owner reserved only\""
                                                },
                                                "value": "Owner reserved only"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_b690911e837e73672a6ec728325f450ccb873f130672158242039ea4772ec22d",
                                                    "typeString": "literal_string \"Owner reserved only\""
                                                }
                                            ],
                                            "id": 133,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "2225:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 139,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2225:56:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 140,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2225:56:0"
                                },
                                {
                                    "id": 141,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2292:1:0"
                                }
                            ]
                        },
                        "id": 143,
                        "name": "ownerOnly",
                        "nameLocation": "2203:9:0",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 132,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2212:2:0"
                        },
                        "src": "2194:107:0",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 154,
                            "nodeType": "Block",
                            "src": "2334:111:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 149,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 146,
                                                        "name": "tokenBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 390,
                                                        "src": "2353:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 147,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2353:14:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "id": 148,
                                                    "name": "totalSalaries",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 76,
                                                    "src": "2371:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2353:31:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4e6f7420656e6f7567682062616c616e636520746f2070617920656d706c6f7965657321",
                                                "id": 150,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2386:38:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_30b16b7936436bb9e99982de2414da86d163f7471c9b49fba08b327ae04da97c",
                                                    "typeString": "literal_string \"Not enough balance to pay employees!\""
                                                },
                                                "value": "Not enough balance to pay employees!"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_30b16b7936436bb9e99982de2414da86d163f7471c9b49fba08b327ae04da97c",
                                                    "typeString": "literal_string \"Not enough balance to pay employees!\""
                                                }
                                            ],
                                            "id": 145,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "2345:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 151,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2345:80:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 152,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2345:80:0"
                                },
                                {
                                    "id": 153,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2436:1:0"
                                }
                            ]
                        },
                        "id": 155,
                        "name": "enoughBalance",
                        "nameLocation": "2318:13:0",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 144,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2331:2:0"
                        },
                        "src": "2309:136:0",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 169,
                            "nodeType": "Block",
                            "src": "2498:106:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 164,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "baseExpression": {
                                                        "id": 160,
                                                        "name": "isEmployee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 122,
                                                        "src": "2517:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 162,
                                                    "indexExpression": {
                                                        "id": 161,
                                                        "name": "employeeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 157,
                                                        "src": "2528:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2517:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "hexValue": "74727565",
                                                    "id": 163,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2548:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "src": "2517:35:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "54686520656d706c6f79656520636f756c646e277420666f756e64",
                                                "id": 165,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2554:29:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_8fb2c37da2decc00514503e0694bede9d5462fdae4560a3a277f1195d9cd336d",
                                                    "typeString": "literal_string \"The employee couldn't found\""
                                                },
                                                "value": "The employee couldn't found"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_8fb2c37da2decc00514503e0694bede9d5462fdae4560a3a277f1195d9cd336d",
                                                    "typeString": "literal_string \"The employee couldn't found\""
                                                }
                                            ],
                                            "id": 159,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "2509:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 166,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2509:75:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 167,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2509:75:0"
                                },
                                {
                                    "id": 168,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2595:1:0"
                                }
                            ]
                        },
                        "id": 170,
                        "name": "IsEmployee",
                        "nameLocation": "2462:10:0",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 158,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 157,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "2481:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 170,
                                    "src": "2473:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 156,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2473:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2472:25:0"
                        },
                        "src": "2453:151:0",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 203,
                            "nodeType": "Block",
                            "src": "2696:166:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 186,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 179,
                                            "name": "paymentToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 68,
                                            "src": "2707:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                "typeString": "contract PayrollToken"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 183,
                                                    "name": "tokenName",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 172,
                                                    "src": "2739:9:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 184,
                                                    "name": "tokenSymbol",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 174,
                                                    "src": "2749:11:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                ],
                                                "id": 182,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "2722:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_creation_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_contract$_PayrollToken_$65_$",
                                                    "typeString": "function (string memory,string memory) returns (contract PayrollToken)"
                                                },
                                                "typeName": {
                                                    "id": 181,
                                                    "nodeType": "UserDefinedTypeName",
                                                    "pathNode": {
                                                        "id": 180,
                                                        "name": "PayrollToken",
                                                        "nameLocations": [
                                                            "2726:12:0"
                                                        ],
                                                        "nodeType": "IdentifierPath",
                                                        "referencedDeclaration": 65,
                                                        "src": "2726:12:0"
                                                    },
                                                    "referencedDeclaration": 65,
                                                    "src": "2726:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                        "typeString": "contract PayrollToken"
                                                    }
                                                }
                                            },
                                            "id": 185,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2722:39:0",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                "typeString": "contract PayrollToken"
                                            }
                                        },
                                        "src": "2707:54:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_PayrollToken_$65",
                                            "typeString": "contract PayrollToken"
                                        }
                                    },
                                    "id": 187,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2707:54:0"
                                },
                                {
                                    "expression": {
                                        "id": 191,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 188,
                                            "name": "companyAcc",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 70,
                                            "src": "2772:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 189,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967281,
                                                "src": "2785:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 190,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2789:6:0",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "2785:10:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2772:23:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 192,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2772:23:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 198,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967268,
                                                        "src": "2832:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    ],
                                                    "id": 197,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "2824:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 196,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "2824:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 199,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2824:13:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 200,
                                                "name": "initialCapital",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 176,
                                                "src": "2839:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 193,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "2806:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 195,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2819:4:0",
                                            "memberName": "mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 64,
                                            "src": "2806:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256) external"
                                            }
                                        },
                                        "id": 201,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2806:48:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 202,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2806:48:0"
                                }
                            ]
                        },
                        "id": 204,
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 177,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 172,
                                    "mutability": "mutable",
                                    "name": "tokenName",
                                    "nameLocation": "2637:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 204,
                                    "src": "2623:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 171,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2623:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 174,
                                    "mutability": "mutable",
                                    "name": "tokenSymbol",
                                    "nameLocation": "2662:11:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 204,
                                    "src": "2648:25:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 173,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2648:6:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 176,
                                    "mutability": "mutable",
                                    "name": "initialCapital",
                                    "nameLocation": "2680:14:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 204,
                                    "src": "2675:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 175,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2675:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2622:73:0"
                        },
                        "returnParameters": {
                            "id": 178,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2696:0:0"
                        },
                        "scope": 730,
                        "src": "2611:251:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 219,
                            "nodeType": "Block",
                            "src": "2948:68:0",
                            "statements": [
                                {
                                    "expression": {
                                        "components": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 216,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 211,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967292,
                                                        "src": "2967:5:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 212,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2973:9:0",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2967:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 215,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 213,
                                                        "name": "lastPayment",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 206,
                                                        "src": "2986:11:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "hexValue": "3330",
                                                        "id": 214,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3000:7:0",
                                                        "subdenomination": "days",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_2592000_by_1",
                                                            "typeString": "int_const 2592000"
                                                        },
                                                        "value": "30"
                                                    },
                                                    "src": "2986:21:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2967:40:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "id": 217,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "2966:42:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 210,
                                    "id": 218,
                                    "nodeType": "Return",
                                    "src": "2959:49:0"
                                }
                            ]
                        },
                        "functionSelector": "4a3f8548",
                        "id": 220,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "thirtyDaysHavePassed",
                        "nameLocation": "2879:20:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 207,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 206,
                                    "mutability": "mutable",
                                    "name": "lastPayment",
                                    "nameLocation": "2908:11:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 220,
                                    "src": "2900:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 205,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2900:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2899:21:0"
                        },
                        "returnParameters": {
                            "id": 210,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 209,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 220,
                                    "src": "2942:4:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 208,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2942:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2941:6:0"
                        },
                        "scope": 730,
                        "src": "2870:146:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 279,
                            "nodeType": "Block",
                            "src": "3103:453:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 232,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 230,
                                                    "name": "salary",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 224,
                                                    "src": "3122:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 231,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3131:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3122:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "53616c6172792063616e6e6f74206265207a65726f21",
                                                "id": 233,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3134:24:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_aefbb8ff2f962dadda0fa8efe2862ad8f58552d05b84cea47d630a666d9b4771",
                                                    "typeString": "literal_string \"Salary cannot be zero!\""
                                                },
                                                "value": "Salary cannot be zero!"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_aefbb8ff2f962dadda0fa8efe2862ad8f58552d05b84cea47d630a666d9b4771",
                                                    "typeString": "literal_string \"Salary cannot be zero!\""
                                                }
                                            ],
                                            "id": 229,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "3114:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 234,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3114:45:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 235,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3114:45:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 240,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "UnaryOperation",
                                                "operator": "!",
                                                "prefix": true,
                                                "src": "3178:28:0",
                                                "subExpression": {
                                                    "baseExpression": {
                                                        "id": 237,
                                                        "name": "isEmployee",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 122,
                                                        "src": "3179:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                            "typeString": "mapping(address => bool)"
                                                        }
                                                    },
                                                    "id": 239,
                                                    "indexExpression": {
                                                        "id": 238,
                                                        "name": "employeeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 222,
                                                        "src": "3190:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3179:27:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "456d706c6f79656520616c726561647920696e20706179726f6c6c21",
                                                "id": 241,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3208:30:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9d4fc38ffeaad3fd0c99460ab2dbb3965ba7e06d5453a8429178057c5f2cb4ee",
                                                    "typeString": "literal_string \"Employee already in payroll!\""
                                                },
                                                "value": "Employee already in payroll!"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_9d4fc38ffeaad3fd0c99460ab2dbb3965ba7e06d5453a8429178057c5f2cb4ee",
                                                    "typeString": "literal_string \"Employee already in payroll!\""
                                                }
                                            ],
                                            "id": 236,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "3170:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 242,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3170:69:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 243,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3170:69:0"
                                },
                                {
                                    "expression": {
                                        "id": 245,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "3256:16:0",
                                        "subExpression": {
                                            "id": 244,
                                            "name": "totalEmployees",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 73,
                                            "src": "3256:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 246,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3256:16:0"
                                },
                                {
                                    "expression": {
                                        "id": 249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 247,
                                            "name": "totalSalaries",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 76,
                                            "src": "3283:13:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 248,
                                            "name": "salary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 224,
                                            "src": "3300:6:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3283:23:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 250,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3283:23:0"
                                },
                                {
                                    "expression": {
                                        "id": 255,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 251,
                                                "name": "isEmployee",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 122,
                                                "src": "3317:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                    "typeString": "mapping(address => bool)"
                                                }
                                            },
                                            "id": 253,
                                            "indexExpression": {
                                                "id": 252,
                                                "name": "employeeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 222,
                                                "src": "3328:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "3317:27:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 254,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3347:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "3317:34:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 256,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3317:34:0"
                                },
                                {
                                    "assignments": [
                                        259
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 259,
                                            "mutability": "mutable",
                                            "name": "employeeStruct",
                                            "nameLocation": "3387:14:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 279,
                                            "src": "3364:37:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                                "typeString": "struct Payroll.EmployeeStruct"
                                            },
                                            "typeName": {
                                                "id": 258,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 257,
                                                    "name": "EmployeeStruct",
                                                    "nameLocations": [
                                                        "3364:14:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 102,
                                                    "src": "3364:14:0"
                                                },
                                                "referencedDeclaration": 102,
                                                "src": "3364:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage_ptr",
                                                    "typeString": "struct Payroll.EmployeeStruct"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 266,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 261,
                                                "name": "employeeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 222,
                                                "src": "3419:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 262,
                                                "name": "salary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 224,
                                                "src": "3435:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 263,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3442:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            {
                                                "hexValue": "30",
                                                "id": 264,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3444:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                }
                                            ],
                                            "id": 260,
                                            "name": "EmployeeStruct",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 102,
                                            "src": "3404:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_EmployeeStruct_$102_storage_ptr_$",
                                                "typeString": "type(struct Payroll.EmployeeStruct storage pointer)"
                                            }
                                        },
                                        "id": 265,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3404:42:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                            "typeString": "struct Payroll.EmployeeStruct memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3364:82:0"
                                },
                                {
                                    "expression": {
                                        "id": 271,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 267,
                                                "name": "employeesAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 131,
                                                "src": "3457:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                    "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                }
                                            },
                                            "id": 269,
                                            "indexExpression": {
                                                "id": 268,
                                                "name": "employeeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 222,
                                                "src": "3474:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "3457:33:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                "typeString": "struct Payroll.EmployeeStruct storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 270,
                                            "name": "employeeStruct",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 259,
                                            "src": "3493:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                                "typeString": "struct Payroll.EmployeeStruct memory"
                                            }
                                        },
                                        "src": "3457:50:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                            "typeString": "struct Payroll.EmployeeStruct storage ref"
                                        }
                                    },
                                    "id": 272,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3457:50:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 276,
                                                "name": "employeeStruct",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 259,
                                                "src": "3533:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                                    "typeString": "struct Payroll.EmployeeStruct memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                                    "typeString": "struct Payroll.EmployeeStruct memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 273,
                                                "name": "employees",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "3518:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                }
                                            },
                                            "id": 275,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3528:4:0",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "3518:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage_ptr_$_t_struct$_EmployeeStruct_$102_storage_$returns$__$bound_to$_t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct Payroll.EmployeeStruct storage ref[] storage pointer,struct Payroll.EmployeeStruct storage ref)"
                                            }
                                        },
                                        "id": 277,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3518:30:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 278,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3518:30:0"
                                }
                            ]
                        },
                        "functionSelector": "e7fd9a13",
                        "id": 280,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 227,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 226,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "3093:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "3093:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3093:9:0"
                            }
                        ],
                        "name": "addEmployee",
                        "nameLocation": "3033:11:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 222,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "3054:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 280,
                                    "src": "3046:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 221,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3046:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 224,
                                    "mutability": "mutable",
                                    "name": "salary",
                                    "nameLocation": "3078:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 280,
                                    "src": "3070:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 223,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3070:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3044:41:0"
                        },
                        "returnParameters": {
                            "id": 228,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3103:0:0"
                        },
                        "scope": 730,
                        "src": "3024:532:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 335,
                            "nodeType": "Block",
                            "src": "3630:437:0",
                            "statements": [
                                {
                                    "body": {
                                        "id": 333,
                                        "nodeType": "Block",
                                        "src": "3681:379:0",
                                        "statements": [
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 303,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "id": 298,
                                                                "name": "employees",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 126,
                                                                "src": "3699:9:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                                                                    "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                                }
                                                            },
                                                            "id": 300,
                                                            "indexExpression": {
                                                                "id": 299,
                                                                "name": "i",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 288,
                                                                "src": "3709:1:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "3699:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                                "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                            }
                                                        },
                                                        "id": 301,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "3712:14:0",
                                                        "memberName": "paymentAddress",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 95,
                                                        "src": "3699:27:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 302,
                                                        "name": "employeeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 282,
                                                        "src": "3730:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "3699:46:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 332,
                                                "nodeType": "IfStatement",
                                                "src": "3696:353:0",
                                                "trueBody": {
                                                    "id": 331,
                                                    "nodeType": "Block",
                                                    "src": "3746:303:0",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 308,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 304,
                                                                        "name": "isEmployee",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 122,
                                                                        "src": "3765:10:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                                                                            "typeString": "mapping(address => bool)"
                                                                        }
                                                                    },
                                                                    "id": 306,
                                                                    "indexExpression": {
                                                                        "id": 305,
                                                                        "name": "employeeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 282,
                                                                        "src": "3776:15:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "3765:27:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "hexValue": "66616c7365",
                                                                    "id": 307,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "bool",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "3795:5:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bool",
                                                                        "typeString": "bool"
                                                                    },
                                                                    "value": "false"
                                                                },
                                                                "src": "3765:35:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bool",
                                                                    "typeString": "bool"
                                                                }
                                                            },
                                                            "id": 309,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3765:35:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 313,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "UnaryOperation",
                                                                "operator": "delete",
                                                                "prefix": true,
                                                                "src": "3819:19:0",
                                                                "subExpression": {
                                                                    "baseExpression": {
                                                                        "id": 310,
                                                                        "name": "employees",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 126,
                                                                        "src": "3826:9:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                                                                            "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                                        }
                                                                    },
                                                                    "id": 312,
                                                                    "indexExpression": {
                                                                        "id": 311,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 288,
                                                                        "src": "3836:1:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "3826:12:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                                        "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                                    }
                                                                },
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 314,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3819:19:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 318,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "UnaryOperation",
                                                                "operator": "delete",
                                                                "prefix": true,
                                                                "src": "3857:40:0",
                                                                "subExpression": {
                                                                    "baseExpression": {
                                                                        "id": 315,
                                                                        "name": "employeesAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 131,
                                                                        "src": "3864:16:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                                            "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 317,
                                                                    "indexExpression": {
                                                                        "id": 316,
                                                                        "name": "employeeAddress",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 282,
                                                                        "src": "3881:15:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "3864:33:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                                        "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                                    }
                                                                },
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_tuple$__$",
                                                                    "typeString": "tuple()"
                                                                }
                                                            },
                                                            "id": 319,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3857:40:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 325,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "id": 320,
                                                                    "name": "totalSalaries",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 76,
                                                                    "src": "3916:13:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "-=",
                                                                "rightHandSide": {
                                                                    "expression": {
                                                                        "baseExpression": {
                                                                            "id": 321,
                                                                            "name": "employeesAddress",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 131,
                                                                            "src": "3934:16:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                                                "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                                            }
                                                                        },
                                                                        "id": 323,
                                                                        "indexExpression": {
                                                                            "id": 322,
                                                                            "name": "employeeAddress",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 282,
                                                                            "src": "3951:15:0",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_address",
                                                                                "typeString": "address"
                                                                            }
                                                                        },
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "IndexAccess",
                                                                        "src": "3934:33:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                                            "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                                        }
                                                                    },
                                                                    "id": 324,
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "3968:6:0",
                                                                    "memberName": "salary",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 97,
                                                                    "src": "3934:40:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "3916:58:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 326,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3916:58:0"
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 328,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "UnaryOperation",
                                                                "operator": "--",
                                                                "prefix": false,
                                                                "src": "3993:16:0",
                                                                "subExpression": {
                                                                    "id": 327,
                                                                    "name": "totalEmployees",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 73,
                                                                    "src": "3993:14:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "id": 329,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "3993:16:0"
                                                        },
                                                        {
                                                            "id": 330,
                                                            "nodeType": "Break",
                                                            "src": "4028:5:0"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 294,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 291,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 288,
                                            "src": "3657:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 292,
                                                "name": "employees",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 126,
                                                "src": "3659:9:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                                }
                                            },
                                            "id": 293,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3669:6:0",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "3659:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3657:18:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 334,
                                    "initializationExpression": {
                                        "assignments": [
                                            288
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 288,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "3652:1:0",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 334,
                                                "src": "3647:6:0",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 287,
                                                    "name": "uint",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "3647:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 290,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 289,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3654:1:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "3647:8:0"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 296,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "3677:3:0",
                                            "subExpression": {
                                                "id": 295,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 288,
                                                "src": "3677:1:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 297,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3677:3:0"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "3643:417:0"
                                }
                            ]
                        },
                        "functionSelector": "d108177a",
                        "id": 336,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 285,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 284,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "3620:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "3620:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3620:9:0"
                            }
                        ],
                        "name": "removeEmployee",
                        "nameLocation": "3573:14:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 283,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 282,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "3596:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 336,
                                    "src": "3588:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 281,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3588:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3587:25:0"
                        },
                        "returnParameters": {
                            "id": 286,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3630:0:0"
                        },
                        "scope": 730,
                        "src": "3564:503:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 345,
                            "nodeType": "Block",
                            "src": "4147:35:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 343,
                                        "name": "employees",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 126,
                                        "src": "4165:9:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage",
                                            "typeString": "struct Payroll.EmployeeStruct storage ref[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 342,
                                    "id": 344,
                                    "nodeType": "Return",
                                    "src": "4158:16:0"
                                }
                            ]
                        },
                        "functionSelector": "4abefa36",
                        "id": 346,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEmployees",
                        "nameLocation": "4084:12:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 337,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4096:2:0"
                        },
                        "returnParameters": {
                            "id": 342,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 341,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 346,
                                    "src": "4122:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct Payroll.EmployeeStruct[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 339,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 338,
                                                "name": "EmployeeStruct",
                                                "nameLocations": [
                                                    "4122:14:0"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 102,
                                                "src": "4122:14:0"
                                            },
                                            "referencedDeclaration": 102,
                                            "src": "4122:14:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage_ptr",
                                                "typeString": "struct Payroll.EmployeeStruct"
                                            }
                                        },
                                        "id": 340,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4122:16:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_EmployeeStruct_$102_storage_$dyn_storage_ptr",
                                            "typeString": "struct Payroll.EmployeeStruct[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4121:25:0"
                        },
                        "scope": 730,
                        "src": "4075:107:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 358,
                            "nodeType": "Block",
                            "src": "4282:59:0",
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 354,
                                            "name": "employeesAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 131,
                                            "src": "4300:16:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                            }
                                        },
                                        "id": 356,
                                        "indexExpression": {
                                            "id": 355,
                                            "name": "employeeAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 348,
                                            "src": "4317:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "4300:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                            "typeString": "struct Payroll.EmployeeStruct storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 353,
                                    "id": 357,
                                    "nodeType": "Return",
                                    "src": "4293:40:0"
                                }
                            ]
                        },
                        "functionSelector": "32648e09",
                        "id": 359,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getEmployee",
                        "nameLocation": "4199:11:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 349,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 348,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "4219:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 359,
                                    "src": "4211:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 347,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4211:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4210:25:0"
                        },
                        "returnParameters": {
                            "id": 353,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 352,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 359,
                                    "src": "4259:21:0",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_memory_ptr",
                                        "typeString": "struct Payroll.EmployeeStruct"
                                    },
                                    "typeName": {
                                        "id": 351,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 350,
                                            "name": "EmployeeStruct",
                                            "nameLocations": [
                                                "4259:14:0"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 102,
                                            "src": "4259:14:0"
                                        },
                                        "referencedDeclaration": 102,
                                        "src": "4259:14:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage_ptr",
                                            "typeString": "struct Payroll.EmployeeStruct"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4258:23:0"
                        },
                        "scope": 730,
                        "src": "4190:151:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 373,
                            "nodeType": "Block",
                            "src": "4401:52:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 369,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 361,
                                                "src": "4434:2:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 370,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 363,
                                                "src": "4438:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 366,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "4412:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 368,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4425:8:0",
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13520,
                                            "src": "4412:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 371,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4412:33:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 372,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4412:33:0"
                                }
                            ]
                        },
                        "id": 374,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "payTo",
                        "nameLocation": "4358:5:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 364,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 361,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "4372:2:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 374,
                                    "src": "4364:10:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 360,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4364:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 363,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "4384:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 374,
                                    "src": "4376:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 362,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4376:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4363:28:0"
                        },
                        "returnParameters": {
                            "id": 365,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4401:0:0"
                        },
                        "scope": 730,
                        "src": "4349:104:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 389,
                            "nodeType": "Block",
                            "src": "4521:63:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 385,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967268,
                                                        "src": "4570:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    ],
                                                    "id": 384,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4562:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 383,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4562:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 386,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4562:13:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 381,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "4539:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 382,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4552:9:0",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13495,
                                            "src": "4539:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 387,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4539:37:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 380,
                                    "id": 388,
                                    "nodeType": "Return",
                                    "src": "4532:44:0"
                                }
                            ]
                        },
                        "functionSelector": "9e1a4d19",
                        "id": 390,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 377,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 376,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "4497:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "4497:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4497:9:0"
                            }
                        ],
                        "name": "tokenBalance",
                        "nameLocation": "4470:12:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 375,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4482:2:0"
                        },
                        "returnParameters": {
                            "id": 380,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 379,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 390,
                                    "src": "4516:4:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 378,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4516:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4515:6:0"
                        },
                        "scope": 730,
                        "src": "4461:123:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 401,
                            "nodeType": "Block",
                            "src": "4651:60:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 397,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "4692:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 398,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "4696:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "4692:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "expression": {
                                                "id": 395,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "4669:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 396,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4682:9:0",
                                            "memberName": "balanceOf",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13495,
                                            "src": "4669:22:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                "typeString": "function (address) view external returns (uint256)"
                                            }
                                        },
                                        "id": 399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4669:34:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 394,
                                    "id": 400,
                                    "nodeType": "Return",
                                    "src": "4662:41:0"
                                }
                            ]
                        },
                        "functionSelector": "4f70bb92",
                        "id": 402,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "employeeTokenBalance",
                        "nameLocation": "4601:20:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 391,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4621:2:0"
                        },
                        "returnParameters": {
                            "id": 394,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 393,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 402,
                                    "src": "4646:4:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 392,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4646:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4645:6:0"
                        },
                        "scope": 730,
                        "src": "4592:119:0",
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 422,
                            "nodeType": "Block",
                            "src": "4760:112:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 410,
                                                "name": "companyAcc",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 70,
                                                "src": "4793:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [],
                                                "expression": {
                                                    "argumentTypes": [],
                                                    "id": 411,
                                                    "name": "tokenBalance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 390,
                                                    "src": "4805:12:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                        "typeString": "function () view returns (uint256)"
                                                    }
                                                },
                                                "id": 412,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4805:14:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 407,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "4771:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 409,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4784:8:0",
                                            "memberName": "transfer",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13520,
                                            "src": "4771:21:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 413,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4771:49:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 414,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4771:49:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 418,
                                                        "name": "companyAcc",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 70,
                                                        "src": "4852:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "id": 417,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4844:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_payable_$",
                                                        "typeString": "type(address payable)"
                                                    },
                                                    "typeName": {
                                                        "id": 416,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4844:8:0",
                                                        "stateMutability": "payable",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 419,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4844:19:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address_payable",
                                                    "typeString": "address payable"
                                                }
                                            ],
                                            "id": 415,
                                            "name": "selfdestruct",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967275,
                                            "src": "4831:12:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                                                "typeString": "function (address payable)"
                                            }
                                        },
                                        "id": 420,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4831:33:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 421,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4831:33:0"
                                }
                            ]
                        },
                        "functionSelector": "068ffb31",
                        "id": 423,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 405,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 404,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "4750:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "4750:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4750:9:0"
                            }
                        ],
                        "name": "closeCompany",
                        "nameLocation": "4728:12:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 403,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4740:2:0"
                        },
                        "returnParameters": {
                            "id": 406,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4760:0:0"
                        },
                        "scope": 730,
                        "src": "4719:153:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 450,
                            "nodeType": "Block",
                            "src": "4966:176:0",
                            "statements": [
                                {
                                    "expression": {
                                        "id": 437,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 432,
                                            "name": "totalSalaries",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 76,
                                            "src": "4977:13:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 433,
                                                    "name": "employeesAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 131,
                                                    "src": "4994:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                        "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                    }
                                                },
                                                "id": 435,
                                                "indexExpression": {
                                                    "id": 434,
                                                    "name": "employeeAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 425,
                                                    "src": "5011:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "4994:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                }
                                            },
                                            "id": 436,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5028:6:0",
                                            "memberName": "salary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 97,
                                            "src": "4994:40:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4977:57:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 438,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4977:57:0"
                                },
                                {
                                    "expression": {
                                        "id": 444,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 439,
                                                    "name": "employeesAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 131,
                                                    "src": "5045:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                        "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                    }
                                                },
                                                "id": 441,
                                                "indexExpression": {
                                                    "id": 440,
                                                    "name": "employeeAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 425,
                                                    "src": "5062:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5045:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                }
                                            },
                                            "id": 442,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "5079:6:0",
                                            "memberName": "salary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 97,
                                            "src": "5045:40:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 443,
                                            "name": "newSalary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 427,
                                            "src": "5088:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5045:52:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 445,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5045:52:0"
                                },
                                {
                                    "expression": {
                                        "id": 448,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 446,
                                            "name": "totalSalaries",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 76,
                                            "src": "5108:13:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 447,
                                            "name": "newSalary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 427,
                                            "src": "5125:9:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5108:26:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 449,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5108:26:0"
                                }
                            ]
                        },
                        "functionSelector": "ec34ece8",
                        "id": 451,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 430,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 429,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "4957:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "4957:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4957:9:0"
                            }
                        ],
                        "name": "updateEmployeeSalary",
                        "nameLocation": "4889:20:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 428,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 425,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "4918:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 451,
                                    "src": "4910:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 424,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4910:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 427,
                                    "mutability": "mutable",
                                    "name": "newSalary",
                                    "nameLocation": "4939:9:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 451,
                                    "src": "4934:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 426,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4934:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4909:40:0"
                        },
                        "returnParameters": {
                            "id": 431,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4966:0:0"
                        },
                        "scope": 730,
                        "src": "4880:262:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 507,
                            "nodeType": "Block",
                            "src": "5196:553:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 467,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 459,
                                                    "name": "totalSalaries",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 76,
                                                    "src": "5215:13:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 464,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4294967268,
                                                                    "src": "5263:4:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Payroll_$730",
                                                                        "typeString": "contract Payroll"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Payroll_$730",
                                                                        "typeString": "contract Payroll"
                                                                    }
                                                                ],
                                                                "id": 463,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "5255:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 462,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "5255:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 465,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5255:13:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 460,
                                                            "name": "paymentToken",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 68,
                                                            "src": "5232:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                                "typeString": "contract PayrollToken"
                                                            }
                                                        },
                                                        "id": 461,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5245:9:0",
                                                        "memberName": "balanceOf",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 13495,
                                                        "src": "5232:22:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) view external returns (uint256)"
                                                        }
                                                    },
                                                    "id": 466,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5232:37:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5215:54:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "496e73756666696369656e742062616c616e636520746f2070617920616c6c20656d706c6f79656573",
                                                "id": 468,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5271:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_feb7eb4e7da90a817a9ac1e703e26097b25165130899543782c16a14e7edf3cb",
                                                    "typeString": "literal_string \"Insufficient balance to pay all employees\""
                                                },
                                                "value": "Insufficient balance to pay all employees"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_feb7eb4e7da90a817a9ac1e703e26097b25165130899543782c16a14e7edf3cb",
                                                    "typeString": "literal_string \"Insufficient balance to pay all employees\""
                                                }
                                            ],
                                            "id": 458,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "5207:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 469,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5207:108:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 470,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5207:108:0"
                                },
                                {
                                    "expression": {
                                        "id": 478,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 471,
                                                    "name": "employeesAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 131,
                                                    "src": "5481:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                        "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                    }
                                                },
                                                "id": 474,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 472,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "5498:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 473,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5502:6:0",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5498:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5481:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                }
                                            },
                                            "id": 475,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "5510:11:0",
                                            "memberName": "lastPayment",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 99,
                                            "src": "5481:40:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 476,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 4294967292,
                                                "src": "5524:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 477,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "5530:9:0",
                                            "memberName": "timestamp",
                                            "nodeType": "MemberAccess",
                                            "src": "5524:15:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "5481:58:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 479,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5481:58:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 481,
                                                        "name": "employeesAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 131,
                                                        "src": "5556:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                            "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                        }
                                                    },
                                                    "id": 484,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 482,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4294967281,
                                                            "src": "5573:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 483,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5577:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5573:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "5556:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                        "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                    }
                                                },
                                                "id": 485,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5585:14:0",
                                                "memberName": "paymentAddress",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 95,
                                                "src": "5556:43:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 486,
                                                        "name": "employeesAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 131,
                                                        "src": "5601:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                            "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                        }
                                                    },
                                                    "id": 489,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 487,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 4294967281,
                                                            "src": "5618:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 488,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5622:6:0",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5618:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "5601:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                        "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                    }
                                                },
                                                "id": 490,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5630:6:0",
                                                "memberName": "salary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 97,
                                                "src": "5601:35:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 480,
                                            "name": "payTo",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 374,
                                            "src": "5550:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 491,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5550:87:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 492,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5550:87:0"
                                },
                                {
                                    "expression": {
                                        "id": 498,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "5648:43:0",
                                        "subExpression": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 493,
                                                    "name": "employeesAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 131,
                                                    "src": "5648:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                        "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                    }
                                                },
                                                "id": 496,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 494,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "5665:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 495,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5669:6:0",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5665:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "5648:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                }
                                            },
                                            "id": 497,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "5677:12:0",
                                            "memberName": "paymentCount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 101,
                                            "src": "5648:41:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 499,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5648:43:0"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 501,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "5714:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 502,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5718:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "5714:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 503,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967292,
                                                    "src": "5725:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 504,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5731:9:0",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "5725:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 500,
                                            "name": "Paid",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 85,
                                            "src": "5709:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 505,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5709:32:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 506,
                                    "nodeType": "EmitStatement",
                                    "src": "5704:37:0"
                                }
                            ]
                        },
                        "functionSelector": "4e71d92d",
                        "id": 508,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "expression": {
                                            "id": 454,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "5185:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 455,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "5189:6:0",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "5185:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 456,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 453,
                                    "name": "IsEmployee",
                                    "nameLocations": [
                                        "5174:10:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 170,
                                    "src": "5174:10:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5174:22:0"
                            }
                        ],
                        "name": "claim",
                        "nameLocation": "5159:5:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 452,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5164:2:0"
                        },
                        "returnParameters": {
                            "id": 457,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5196:0:0"
                        },
                        "scope": 730,
                        "src": "5150:599:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 550,
                            "nodeType": "Block",
                            "src": "5849:311:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 525,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 519,
                                                            "name": "employeesAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 131,
                                                            "src": "5868:16:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                                "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                            }
                                                        },
                                                        "id": 521,
                                                        "indexExpression": {
                                                            "id": 520,
                                                            "name": "employeeAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 510,
                                                            "src": "5885:15:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5868:33:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                            "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                        }
                                                    },
                                                    "id": 522,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5902:6:0",
                                                    "memberName": "salary",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 97,
                                                    "src": "5868:40:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "id": 523,
                                                        "name": "tokenBalance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 390,
                                                        "src": "5912:12:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                                            "typeString": "function () view returns (uint256)"
                                                        }
                                                    },
                                                    "id": 524,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5912:14:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5868:58:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "496e73756666696369656e742062616c616e636520746f2070617920616e20656d706c6f796565",
                                                "id": 526,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5928:41:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c3b9d841f8ed3a19dfa6e91a127ab9a337e67e45ccc72435c7c78456edb90fce",
                                                    "typeString": "literal_string \"Insufficient balance to pay an employee\""
                                                },
                                                "value": "Insufficient balance to pay an employee"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c3b9d841f8ed3a19dfa6e91a127ab9a337e67e45ccc72435c7c78456edb90fce",
                                                    "typeString": "literal_string \"Insufficient balance to pay an employee\""
                                                }
                                            ],
                                            "id": 518,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "5860:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 527,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5860:110:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 528,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5860:110:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 530,
                                                "name": "employeeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 510,
                                                "src": "5987:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 531,
                                                        "name": "employeesAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 131,
                                                        "src": "6004:16:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                            "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                        }
                                                    },
                                                    "id": 533,
                                                    "indexExpression": {
                                                        "id": 532,
                                                        "name": "employeeAddress",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 510,
                                                        "src": "6021:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6004:33:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                        "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                    }
                                                },
                                                "id": 534,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6038:6:0",
                                                "memberName": "salary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 97,
                                                "src": "6004:40:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 529,
                                            "name": "payTo",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 374,
                                            "src": "5981:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 535,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5981:64:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 536,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5981:64:0"
                                },
                                {
                                    "expression": {
                                        "id": 541,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "6056:48:0",
                                        "subExpression": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 537,
                                                    "name": "employeesAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 131,
                                                    "src": "6056:16:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                        "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                    }
                                                },
                                                "id": 539,
                                                "indexExpression": {
                                                    "id": 538,
                                                    "name": "employeeAddress",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 510,
                                                    "src": "6073:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "6056:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                    "typeString": "struct Payroll.EmployeeStruct storage ref"
                                                }
                                            },
                                            "id": 540,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "6090:12:0",
                                            "memberName": "paymentCount",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 101,
                                            "src": "6056:46:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 542,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6056:48:0"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 544,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "6125:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 545,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6129:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6125:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 546,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967292,
                                                    "src": "6136:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 547,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6142:9:0",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "6136:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 543,
                                            "name": "Paid",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 85,
                                            "src": "6120:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 548,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6120:32:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 549,
                                    "nodeType": "EmitStatement",
                                    "src": "6115:37:0"
                                }
                            ]
                        },
                        "functionSelector": "c3c73ecd",
                        "id": 551,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 513,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 512,
                                    "name": "ownerOnly",
                                    "nameLocations": [
                                        "5812:9:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 143,
                                    "src": "5812:9:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5812:9:0"
                            },
                            {
                                "arguments": [
                                    {
                                        "id": 515,
                                        "name": "employeeAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 510,
                                        "src": "5833:15:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 516,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 514,
                                    "name": "IsEmployee",
                                    "nameLocations": [
                                        "5822:10:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 170,
                                    "src": "5822:10:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5822:27:0"
                            }
                        ],
                        "name": "payAnEmployee",
                        "nameLocation": "5766:13:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 511,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 510,
                                    "mutability": "mutable",
                                    "name": "employeeAddress",
                                    "nameLocation": "5788:15:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 551,
                                    "src": "5780:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 509,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5780:7:0",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5779:25:0"
                        },
                        "returnParameters": {
                            "id": 517,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5849:0:0"
                        },
                        "scope": 730,
                        "src": "5757:403:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 574,
                            "nodeType": "Block",
                            "src": "6216:117:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 561,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967268,
                                                        "src": "6253:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    ],
                                                    "id": 560,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6245:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 559,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6245:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 562,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6245:13:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 563,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 553,
                                                "src": "6260:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 556,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "6227:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 558,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6240:4:0",
                                            "memberName": "mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 64,
                                            "src": "6227:17:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256) external"
                                            }
                                        },
                                        "id": 564,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6227:40:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 565,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6227:40:0"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 567,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "6289:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 568,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6293:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6289:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 569,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 553,
                                                "src": "6301:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 570,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967292,
                                                    "src": "6309:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 571,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6315:9:0",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "6309:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 566,
                                            "name": "Fund",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 93,
                                            "src": "6284:4:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256,uint256)"
                                            }
                                        },
                                        "id": 572,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6284:41:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 573,
                                    "nodeType": "EmitStatement",
                                    "src": "6279:46:0"
                                }
                            ]
                        },
                        "functionSelector": "ff0061a6",
                        "id": 575,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "fundCompanyAccount",
                        "nameLocation": "6177:18:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 554,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 553,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6201:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 575,
                                    "src": "6196:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 552,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6196:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6195:13:0"
                        },
                        "returnParameters": {
                            "id": 555,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6216:0:0"
                        },
                        "scope": 730,
                        "src": "6168:165:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 646,
                            "nodeType": "Block",
                            "src": "6399:551:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 587,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 585,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 577,
                                                    "src": "6418:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 586,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6427:1:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "6418:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374616b6520616d6f756e742073686f756c642062652061626f76652030",
                                                "id": 588,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6430:32:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_859bc9ee8f5226e78f5af9be79402132ca7f6095f5a040a858eec59b1503aa2b",
                                                    "typeString": "literal_string \"Stake amount should be above 0\""
                                                },
                                                "value": "Stake amount should be above 0"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_859bc9ee8f5226e78f5af9be79402132ca7f6095f5a040a858eec59b1503aa2b",
                                                    "typeString": "literal_string \"Stake amount should be above 0\""
                                                }
                                            ],
                                            "id": 584,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "6410:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 589,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6410:53:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 590,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6410:53:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 601,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "expression": {
                                                                        "id": 596,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 4294967281,
                                                                        "src": "6513:3:0",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 597,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "6517:6:0",
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "6513:10:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                ],
                                                                "id": 595,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "6505:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 594,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "6505:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 598,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "6505:19:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 592,
                                                            "name": "paymentToken",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 68,
                                                            "src": "6482:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                                "typeString": "contract PayrollToken"
                                                            }
                                                        },
                                                        "id": 593,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6495:9:0",
                                                        "memberName": "balanceOf",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 13495,
                                                        "src": "6482:22:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) view external returns (uint256)"
                                                        }
                                                    },
                                                    "id": 599,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6482:43:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "id": 600,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 577,
                                                    "src": "6529:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6482:53:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "4e6f7420656e6f7567682066756e647320746f207374616b65",
                                                "id": 602,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6537:27:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_20383b7ae22be4180b2192394b4c2c5b0532fbd798a2d2d565c87e51ea296d27",
                                                    "typeString": "literal_string \"Not enough funds to stake\""
                                                },
                                                "value": "Not enough funds to stake"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_20383b7ae22be4180b2192394b4c2c5b0532fbd798a2d2d565c87e51ea296d27",
                                                    "typeString": "literal_string \"Not enough funds to stake\""
                                                }
                                            ],
                                            "id": 591,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "6474:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 603,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6474:91:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 604,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6474:91:0"
                                },
                                {
                                    "assignments": [
                                        606
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 606,
                                            "mutability": "mutable",
                                            "name": "employeeAddress",
                                            "nameLocation": "6584:15:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 646,
                                            "src": "6576:23:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 605,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6576:7:0",
                                                "stateMutability": "nonpayable",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 612,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 607,
                                                "name": "employeesAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 131,
                                                "src": "6602:16:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_EmployeeStruct_$102_storage_$",
                                                    "typeString": "mapping(address => struct Payroll.EmployeeStruct storage ref)"
                                                }
                                            },
                                            "id": 610,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 608,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "6619:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 609,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6623:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6619:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "6602:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_EmployeeStruct_$102_storage",
                                                "typeString": "struct Payroll.EmployeeStruct storage ref"
                                            }
                                        },
                                        "id": 611,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "6631:14:0",
                                        "memberName": "paymentAddress",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 95,
                                        "src": "6602:43:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6576:69:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 616,
                                                "name": "employeeAddress",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 606,
                                                "src": "6684:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 619,
                                                        "name": "this",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967268,
                                                        "src": "6709:4:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_contract$_Payroll_$730",
                                                            "typeString": "contract Payroll"
                                                        }
                                                    ],
                                                    "id": 618,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6701:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 617,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6701:7:0",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 620,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6701:13:0",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 621,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 577,
                                                "src": "6716:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "id": 613,
                                                "name": "paymentToken",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 68,
                                                "src": "6658:12:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                    "typeString": "contract PayrollToken"
                                                }
                                            },
                                            "id": 615,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6671:12:0",
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 13596,
                                            "src": "6658:25:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                                "typeString": "function (address,address,uint256) external returns (bool)"
                                            }
                                        },
                                        "id": 622,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6658:65:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 623,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6658:65:0"
                                },
                                {
                                    "expression": {
                                        "id": 625,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "++",
                                        "prefix": false,
                                        "src": "6777:13:0",
                                        "subExpression": {
                                            "id": 624,
                                            "name": "totalStakes",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 79,
                                            "src": "6777:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 626,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6777:13:0"
                                },
                                {
                                    "assignments": [
                                        629
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 629,
                                            "mutability": "mutable",
                                            "name": "stakeStruct",
                                            "nameLocation": "6820:11:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 646,
                                            "src": "6801:30:0",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_StakeStruct_$113_memory_ptr",
                                                "typeString": "struct Payroll.StakeStruct"
                                            },
                                            "typeName": {
                                                "id": 628,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 627,
                                                    "name": "StakeStruct",
                                                    "nameLocations": [
                                                        "6801:11:0"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 113,
                                                    "src": "6801:11:0"
                                                },
                                                "referencedDeclaration": 113,
                                                "src": "6801:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StakeStruct_$113_storage_ptr",
                                                    "typeString": "struct Payroll.StakeStruct"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 639,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 631,
                                                "name": "totalStakes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 79,
                                                "src": "6846:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 632,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "6858:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 633,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6862:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "6858:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 634,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967292,
                                                    "src": "6870:5:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 635,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6876:9:0",
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "src": "6870:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 636,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 577,
                                                "src": "6886:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "hexValue": "74727565",
                                                "id": 637,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "bool",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6893:4:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "value": "true"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 630,
                                            "name": "StakeStruct",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 113,
                                            "src": "6834:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_StakeStruct_$113_storage_ptr_$",
                                                "typeString": "type(struct Payroll.StakeStruct storage pointer)"
                                            }
                                        },
                                        "id": 638,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6834:64:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_StakeStruct_$113_memory_ptr",
                                            "typeString": "struct Payroll.StakeStruct memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "6801:97:0"
                                },
                                {
                                    "expression": {
                                        "id": 644,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 640,
                                                "name": "stakes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 118,
                                                "src": "6909:6:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                    "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                }
                                            },
                                            "id": 642,
                                            "indexExpression": {
                                                "id": 641,
                                                "name": "totalStakes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 79,
                                                "src": "6916:11:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "6909:19:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                "typeString": "struct Payroll.StakeStruct storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 643,
                                            "name": "stakeStruct",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 629,
                                            "src": "6931:11:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_StakeStruct_$113_memory_ptr",
                                                "typeString": "struct Payroll.StakeStruct memory"
                                            }
                                        },
                                        "src": "6909:33:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                            "typeString": "struct Payroll.StakeStruct storage ref"
                                        }
                                    },
                                    "id": 645,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6909:33:0"
                                }
                            ]
                        },
                        "functionSelector": "a694fc3a",
                        "id": 647,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "expression": {
                                            "id": 580,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "6388:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 581,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "6392:6:0",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "6388:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 582,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 579,
                                    "name": "IsEmployee",
                                    "nameLocations": [
                                        "6377:10:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 170,
                                    "src": "6377:10:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6377:22:0"
                            }
                        ],
                        "name": "stake",
                        "nameLocation": "6350:5:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 578,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 577,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6361:6:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 647,
                                    "src": "6356:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 576,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6356:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6355:13:0"
                        },
                        "returnParameters": {
                            "id": 583,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6399:0:0"
                        },
                        "scope": 730,
                        "src": "6341:609:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 720,
                            "nodeType": "Block",
                            "src": "7026:652:0",
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 663,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 657,
                                                            "name": "stakes",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 118,
                                                            "src": "7045:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                                "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                            }
                                                        },
                                                        "id": 659,
                                                        "indexExpression": {
                                                            "id": 658,
                                                            "name": "stakeId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 649,
                                                            "src": "7052:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "7045:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                            "typeString": "struct Payroll.StakeStruct storage ref"
                                                        }
                                                    },
                                                    "id": 660,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7061:15:0",
                                                    "memberName": "employeeAddress",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 106,
                                                    "src": "7045:31:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 661,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 4294967281,
                                                        "src": "7080:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 662,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7084:6:0",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "7080:10:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "7045:45:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "596f7520646f206e6f74206861766520616e79207374616b65",
                                                "id": 664,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7092:27:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_0ecc88fa036845ac69580a65188a41a5650a35193189da413a793b2cd368900d",
                                                    "typeString": "literal_string \"You do not have any stake\""
                                                },
                                                "value": "You do not have any stake"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_0ecc88fa036845ac69580a65188a41a5650a35193189da413a793b2cd368900d",
                                                    "typeString": "literal_string \"You do not have any stake\""
                                                }
                                            ],
                                            "id": 656,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "7037:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 665,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7037:83:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 666,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7037:83:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 673,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 668,
                                                            "name": "stakes",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 118,
                                                            "src": "7139:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                                "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                            }
                                                        },
                                                        "id": 670,
                                                        "indexExpression": {
                                                            "id": 669,
                                                            "name": "stakeId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 649,
                                                            "src": "7146:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "7139:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                            "typeString": "struct Payroll.StakeStruct storage ref"
                                                        }
                                                    },
                                                    "id": 671,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7155:4:0",
                                                    "memberName": "open",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 112,
                                                    "src": "7139:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "hexValue": "74727565",
                                                    "id": 672,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "bool",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "7163:4:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "value": "true"
                                                },
                                                "src": "7139:28:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374616b652068617320636c6f7365",
                                                "id": 674,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7169:17:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_126fb1260ec7c820531f5085ce3d1549eddee30ec8a4962a0984f25f32b1336c",
                                                    "typeString": "literal_string \"Stake has close\""
                                                },
                                                "value": "Stake has close"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_126fb1260ec7c820531f5085ce3d1549eddee30ec8a4962a0984f25f32b1336c",
                                                    "typeString": "literal_string \"Stake has close\""
                                                }
                                            ],
                                            "id": 667,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "7131:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 675,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7131:56:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 676,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7131:56:0"
                                },
                                {
                                    "expression": {
                                        "id": 682,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "baseExpression": {
                                                    "id": 677,
                                                    "name": "stakes",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 118,
                                                    "src": "7200:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                        "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                    }
                                                },
                                                "id": 679,
                                                "indexExpression": {
                                                    "id": 678,
                                                    "name": "stakeId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 649,
                                                    "src": "7207:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "7200:15:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                    "typeString": "struct Payroll.StakeStruct storage ref"
                                                }
                                            },
                                            "id": 680,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "7216:4:0",
                                            "memberName": "open",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 112,
                                            "src": "7200:20:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "66616c7365",
                                            "id": 681,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7223:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "false"
                                        },
                                        "src": "7200:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 683,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7200:28:0"
                                },
                                {
                                    "assignments": [
                                        685
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 685,
                                            "mutability": "mutable",
                                            "name": "interest",
                                            "nameLocation": "7249:8:0",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 720,
                                            "src": "7241:16:0",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 684,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "7241:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 686,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "7241:16:0"
                                },
                                {
                                    "expression": {
                                        "id": 694,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 687,
                                            "name": "interest",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 685,
                                            "src": "7268:8:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 693,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 688,
                                                        "name": "stakes",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 118,
                                                        "src": "7278:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                            "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                        }
                                                    },
                                                    "id": 690,
                                                    "indexExpression": {
                                                        "id": 689,
                                                        "name": "stakeId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 649,
                                                        "src": "7285:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "7278:15:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                        "typeString": "struct Payroll.StakeStruct storage ref"
                                                    }
                                                },
                                                "id": 691,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7294:6:0",
                                                "memberName": "amount",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 110,
                                                "src": "7278:22:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "/",
                                            "rightExpression": {
                                                "hexValue": "3130",
                                                "id": 692,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7301:2:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_10_by_1",
                                                    "typeString": "int_const 10"
                                                },
                                                "value": "10"
                                            },
                                            "src": "7278:25:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "7268:35:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 695,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7268:35:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 705,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 701,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 4294967268,
                                                                    "src": "7418:4:0",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Payroll_$730",
                                                                        "typeString": "contract Payroll"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Payroll_$730",
                                                                        "typeString": "contract Payroll"
                                                                    }
                                                                ],
                                                                "id": 700,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "7410:7:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 699,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "7410:7:0",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 702,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "7410:13:0",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 697,
                                                            "name": "paymentToken",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 68,
                                                            "src": "7387:12:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_PayrollToken_$65",
                                                                "typeString": "contract PayrollToken"
                                                            }
                                                        },
                                                        "id": 698,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "7400:9:0",
                                                        "memberName": "balanceOf",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 13495,
                                                        "src": "7387:22:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                                            "typeString": "function (address) view external returns (uint256)"
                                                        }
                                                    },
                                                    "id": 703,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7387:37:0",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "id": 704,
                                                    "name": "interest",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 685,
                                                    "src": "7428:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "7387:49:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "436f6d70616e792063616e6e6f742070617920796f752074686520696e746572657374",
                                                "id": 706,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7438:37:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c07c0ebe6646e42d3b44d5005c9c785d4153e2317f7576f712221b36fe64df17",
                                                    "typeString": "literal_string \"Company cannot pay you the interest\""
                                                },
                                                "value": "Company cannot pay you the interest"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c07c0ebe6646e42d3b44d5005c9c785d4153e2317f7576f712221b36fe64df17",
                                                    "typeString": "literal_string \"Company cannot pay you the interest\""
                                                }
                                            ],
                                            "id": 696,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                4294967278,
                                                4294967278
                                            ],
                                            "referencedDeclaration": 4294967278,
                                            "src": "7379:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 707,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7379:97:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 708,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7379:97:0"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 710,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 4294967281,
                                                    "src": "7497:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 711,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "7501:6:0",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "7497:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 717,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 712,
                                                            "name": "stakes",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 118,
                                                            "src": "7509:6:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_StakeStruct_$113_storage_$",
                                                                "typeString": "mapping(uint256 => struct Payroll.StakeStruct storage ref)"
                                                            }
                                                        },
                                                        "id": 714,
                                                        "indexExpression": {
                                                            "id": 713,
                                                            "name": "stakeId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 649,
                                                            "src": "7516:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "7509:15:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_StakeStruct_$113_storage",
                                                            "typeString": "struct Payroll.StakeStruct storage ref"
                                                        }
                                                    },
                                                    "id": 715,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "7525:6:0",
                                                    "memberName": "amount",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 110,
                                                    "src": "7509:22:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "+",
                                                "rightExpression": {
                                                    "id": 716,
                                                    "name": "interest",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 685,
                                                    "src": "7534:8:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "7509:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 709,
                                            "name": "payTo",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 374,
                                            "src": "7491:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 718,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7491:52:0",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 719,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7491:52:0"
                                }
                            ]
                        },
                        "functionSelector": "2e17de78",
                        "id": 721,
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "expression": {
                                            "id": 652,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 4294967281,
                                            "src": "7015:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 653,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "7019:6:0",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "7015:10:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 654,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 651,
                                    "name": "IsEmployee",
                                    "nameLocations": [
                                        "7004:10:0"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 170,
                                    "src": "7004:10:0"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7004:22:0"
                            }
                        ],
                        "name": "unstake",
                        "nameLocation": "6967:7:0",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 650,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 649,
                                    "mutability": "mutable",
                                    "name": "stakeId",
                                    "nameLocation": "6980:7:0",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 721,
                                    "src": "6975:12:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 648,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6975:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6974:14:0"
                        },
                        "returnParameters": {
                            "id": 655,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7026:0:0"
                        },
                        "scope": 730,
                        "src": "6958:720:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 724,
                            "nodeType": "Block",
                            "src": "7705:2:0",
                            "statements": []
                        },
                        "id": 725,
                        "implemented": true,
                        "kind": "fallback",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 722,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7694:2:0"
                        },
                        "returnParameters": {
                            "id": 723,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7705:0:0"
                        },
                        "scope": 730,
                        "src": "7686:21:0",
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 728,
                            "nodeType": "Block",
                            "src": "7741:2:0",
                            "statements": []
                        },
                        "id": 729,
                        "implemented": true,
                        "kind": "receive",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 726,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7722:2:0"
                        },
                        "returnParameters": {
                            "id": 727,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7741:0:0"
                        },
                        "scope": 730,
                        "src": "7715:28:0",
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "scope": 731,
                "src": "1275:6476:0",
                "usedErrors": []
            }
        ],
        "src": "32:7721:0"
    },
    "functionHashes": {
        "DEFAULT_ADMIN_ROLE()": "a217fddf",
        "MINTER_ROLE()": "d5391393",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "burn(uint256)": "42966c68",
        "burnFrom(address,uint256)": "79cc6790",
        "decimals()": "313ce567",
        "decreaseAllowance(address,uint256)": "a457c2d7",
        "getRoleAdmin(bytes32)": "248a9ca3",
        "grantRole(bytes32,address)": "2f2ff15d",
        "hasRole(bytes32,address)": "91d14854",
        "increaseAllowance(address,uint256)": "39509351",
        "mint(address,uint256)": "40c10f19",
        "name()": "06fdde03",
        "renounceRole(bytes32,address)": "36568abe",
        "revokeRole(bytes32,address)": "d547741f",
        "supportsInterface(bytes4)": "01ffc9a7",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "gasEstimates": {
        "creation": {
            "codeDepositCost": "936400",
            "executionCost": "infinite",
            "totalCost": "infinite"
        },
        "external": {
            "DEFAULT_ADMIN_ROLE()": "217",
            "MINTER_ROLE()": "283",
            "allowance(address,address)": "infinite",
            "approve(address,uint256)": "24658",
            "balanceOf(address)": "2585",
            "burn(uint256)": "50880",
            "burnFrom(address,uint256)": "77634",
            "decimals()": "244",
            "decreaseAllowance(address,uint256)": "26983",
            "getRoleAdmin(bytes32)": "2467",
            "grantRole(bytes32,address)": "infinite",
            "hasRole(bytes32,address)": "2743",
            "increaseAllowance(address,uint256)": "27083",
            "mint(address,uint256)": "infinite",
            "name()": "infinite",
            "renounceRole(bytes32,address)": "29090",
            "revokeRole(bytes32,address)": "infinite",
            "supportsInterface(bytes4)": "450",
            "symbol()": "infinite",
            "totalSupply()": "2371",
            "transfer(address,uint256)": "51242",
            "transferFrom(address,address,uint256)": "infinite"
        }
    }
}