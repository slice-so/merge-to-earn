export const gnosisSafeInterface = {
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AddedOwner",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "approvedHash",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "ApproveHash",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "handler",
          type: "address"
        }
      ],
      name: "ChangedFallbackHandler",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "guard",
          type: "address"
        }
      ],
      name: "ChangedGuard",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "threshold",
          type: "uint256"
        }
      ],
      name: "ChangedThreshold",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "DisabledModule",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "EnabledModule",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "txHash",
          type: "bytes32"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payment",
          type: "uint256"
        }
      ],
      name: "ExecutionFailure",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "ExecutionFromModuleFailure",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "ExecutionFromModuleSuccess",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes32",
          name: "txHash",
          type: "bytes32"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "payment",
          type: "uint256"
        }
      ],
      name: "ExecutionSuccess",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "RemovedOwner",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "SafeReceived",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "initiator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "owners",
          type: "address[]"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "threshold",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "initializer",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "fallbackHandler",
          type: "address"
        }
      ],
      name: "SafeSetup",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "msgHash",
          type: "bytes32"
        }
      ],
      name: "SignMsg",
      type: "event"
    },
    {
      stateMutability: "nonpayable",
      type: "fallback"
    },
    {
      inputs: [],
      name: "VERSION",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256"
        }
      ],
      name: "addOwnerWithThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hashToApprove",
          type: "bytes32"
        }
      ],
      name: "approveHash",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "approvedHashes",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256"
        }
      ],
      name: "changeThreshold",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "dataHash",
          type: "bytes32"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes"
        },
        {
          internalType: "uint256",
          name: "requiredSignatures",
          type: "uint256"
        }
      ],
      name: "checkNSignatures",
      outputs: [],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "dataHash",
          type: "bytes32"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes"
        }
      ],
      name: "checkSignatures",
      outputs: [],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevModule",
          type: "address"
        },
        {
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "disableModule",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "domainSeparator",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "enableModule",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address"
        },
        {
          internalType: "address",
          name: "refundReceiver",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_nonce",
          type: "uint256"
        }
      ],
      name: "encodeTransactionData",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address"
        },
        {
          internalType: "address payable",
          name: "refundReceiver",
          type: "address"
        },
        {
          internalType: "bytes",
          name: "signatures",
          type: "bytes"
        }
      ],
      name: "execTransaction",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        }
      ],
      name: "execTransactionFromModule",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        }
      ],
      name: "execTransactionFromModuleReturnData",
      outputs: [
        {
          internalType: "bool",
          name: "success",
          type: "bool"
        },
        {
          internalType: "bytes",
          name: "returnData",
          type: "bytes"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "getChainId",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "start",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "pageSize",
          type: "uint256"
        }
      ],
      name: "getModulesPaginated",
      outputs: [
        {
          internalType: "address[]",
          name: "array",
          type: "address[]"
        },
        {
          internalType: "address",
          name: "next",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getOwners",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "offset",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "length",
          type: "uint256"
        }
      ],
      name: "getStorageAt",
      outputs: [
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "getThreshold",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        },
        {
          internalType: "uint256",
          name: "safeTxGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "baseGas",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "gasPrice",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "gasToken",
          type: "address"
        },
        {
          internalType: "address",
          name: "refundReceiver",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_nonce",
          type: "uint256"
        }
      ],
      name: "getTransactionHash",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "module",
          type: "address"
        }
      ],
      name: "isModuleEnabled",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "nonce",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevOwner",
          type: "address"
        },
        {
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256"
        }
      ],
      name: "removeOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "enum Enum.Operation",
          name: "operation",
          type: "uint8"
        }
      ],
      name: "requiredTxGas",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "handler",
          type: "address"
        }
      ],
      name: "setFallbackHandler",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "guard",
          type: "address"
        }
      ],
      name: "setGuard",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "_owners",
          type: "address[]"
        },
        {
          internalType: "uint256",
          name: "_threshold",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        },
        {
          internalType: "address",
          name: "fallbackHandler",
          type: "address"
        },
        {
          internalType: "address",
          name: "paymentToken",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "payment",
          type: "uint256"
        },
        {
          internalType: "address payable",
          name: "paymentReceiver",
          type: "address"
        }
      ],
      name: "setup",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32"
        }
      ],
      name: "signedMessages",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "targetContract",
          type: "address"
        },
        {
          internalType: "bytes",
          name: "calldataPayload",
          type: "bytes"
        }
      ],
      name: "simulateAndRevert",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "prevOwner",
          type: "address"
        },
        {
          internalType: "address",
          name: "oldOwner",
          type: "address"
        },
        {
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "swapOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      stateMutability: "payable",
      type: "receive"
    }
  ],
  bytecode: {
    object:
      "0x608060405234801561001057600080fd5b506001600455614104806100256000396000f3fe6080604052600436106101dc5760003560e01c8063affed0e011610102578063e19a9dd911610095578063f08a032311610064578063f08a032314610620578063f698da2514610640578063f8dc5dd9146106a7578063ffa1ad74146106c757610218565b8063e19a9dd9146105ab578063e318b52b146105cb578063e75235b8146105eb578063e86637db1461060057610218565b8063cc2f8452116100d1578063cc2f84521461051d578063d4d9bdcd1461054b578063d8d11f781461056b578063e009cfde1461058b57610218565b8063affed0e0146104a7578063b4faba09146104bd578063b63e800d146104dd578063c4ca3a9c146104fd57610218565b80635624b25b1161017a5780636a761202116101495780636a7612021461041a5780637d8329741461042d578063934f3a1114610465578063a0e67e2b1461048557610218565b80635624b25b146103805780635ae6bd37146103ad578063610b5925146103da578063694e80c3146103fa57610218565b80632f54bf6e116101b65780632f54bf6e146102f55780633408e47014610315578063468721a7146103325780635229073f1461035257610218565b80630d582f131461027e57806312fb68e0146102a05780632d9ad53d146102c057610218565b366102185760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b34801561022457600080fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d580548061024f57005b36600080373360601b365260008060143601600080855af190503d6000803e80610278573d6000fd5b503d6000f35b34801561028a57600080fd5b5061029e6102993660046133f9565b610710565b005b3480156102ac57600080fd5b5061029e6102bb3660046134ff565b610966565b3480156102cc57600080fd5b506102e06102db366004613574565b610fb8565b60405190151581526020015b60405180910390f35b34801561030157600080fd5b506102e0610310366004613574565b61100d565b34801561032157600080fd5b50465b6040519081526020016102ec565b34801561033e57600080fd5b506102e061034d3660046135a0565b61105f565b34801561035e57600080fd5b5061037261036d3660046135a0565b611175565b6040516102ec929190613675565b34801561038c57600080fd5b506103a061039b366004613690565b6111ab565b6040516102ec91906136b2565b3480156103b957600080fd5b506103246103c83660046136c5565b60076020526000908152604090205481565b3480156103e657600080fd5b5061029e6103f5366004613574565b611231565b34801561040657600080fd5b5061029e6104153660046136c5565b611423565b6102e0610428366004613727565b611537565b34801561043957600080fd5b506103246104483660046133f9565b600860209081526000928352604080842090915290825290205481565b34801561047157600080fd5b5061029e610480366004613800565b611931565b34801561049157600080fd5b5061049a6119ad565b6040516102ec91906138be565b3480156104b357600080fd5b5061032460055481565b3480156104c957600080fd5b5061029e6104d83660046138d1565b611ac5565b3480156104e957600080fd5b5061029e6104f8366004613921565b611ae8565b34801561050957600080fd5b50610324610518366004613a16565b611c23565b34801561052957600080fd5b5061053d6105383660046133f9565b611cf5565b6040516102ec929190613a87565b34801561055757600080fd5b5061029e6105663660046136c5565b611e23565b34801561057757600080fd5b50610324610586366004613abf565b611ef7565b34801561059757600080fd5b5061029e6105a6366004613b80565b611f24565b3480156105b757600080fd5b5061029e6105c6366004613574565b612103565b3480156105d757600080fd5b5061029e6105e6366004613bb9565b6122a5565b3480156105f757600080fd5b50600454610324565b34801561060c57600080fd5b506103a061061b366004613abf565b612631565b34801561062c57600080fd5b5061029e61063b366004613574565b6127ca565b34801561064c57600080fd5b5061032460007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692184660408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b3480156106b357600080fd5b5061029e6106c2366004613c04565b612840565b3480156106d357600080fd5b506103a06040518060400160405280600581526020017f312e332e3000000000000000000000000000000000000000000000000000000081525081565b610718612ad2565b73ffffffffffffffffffffffffffffffffffffffff821615801590610754575073ffffffffffffffffffffffffffffffffffffffff8216600114155b8015610776575073ffffffffffffffffffffffffffffffffffffffff82163014155b6107e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600260205260409020541615610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b60026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0805473ffffffffffffffffffffffffffffffffffffffff8481166000818152604081208054939094167fffffffffffffffffffffffff00000000000000000000000000000000000000009384161790935560018352835490911617909155600380549161090283613c74565b909155505060405173ffffffffffffffffffffffffffffffffffffffff831681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a180600454146109625761096281611423565b5050565b610971816041612b3d565b825110156109db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6000808060008060005b86811015610fac576041818102890160208101516040820151919092015160ff169550909350915083610cb8579193508391610a22876041612b3d565b821015610a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323100000000000000000000000000000000000000000000000000000060448201526064016107d8565b8751610a98836020612b76565b1115610b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323200000000000000000000000000000000000000000000000000000060448201526064016107d8565b602082890181015189519091610b23908390610b1d908790612b76565b90612b76565b1115610b8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323300000000000000000000000000000000000000000000000000000060448201526064016107d8565b6040517f20c13b0b000000000000000000000000000000000000000000000000000000008082528a85016020019173ffffffffffffffffffffffffffffffffffffffff8916906320c13b0b90610be7908f908690600401613cad565b602060405180830381865afa158015610c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c289190613cd2565b7fffffffff000000000000000000000000000000000000000000000000000000001614610cb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323400000000000000000000000000000000000000000000000000000060448201526064016107d8565b5050610eac565b8360ff1660011415610d875791935083913373ffffffffffffffffffffffffffffffffffffffff84161480610d1c575073ffffffffffffffffffffffffffffffffffffffff851660009081526008602090815260408083208d845290915290205415155b610d82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323500000000000000000000000000000000000000000000000000000060448201526064016107d8565b610eac565b601e8460ff161115610e4c576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018b9052600190605c0160405160208183030381529060405280519060200120600486610dec9190613d14565b6040805160008152602081018083529390935260ff90911690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610e3b573d6000803e3d6000fd5b505050602060405103519450610eac565b6040805160008152602081018083528c905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610e9f573d6000803e3d6000fd5b5050506020604051035194505b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16118015610f0d575073ffffffffffffffffffffffffffffffffffffffff8581166000908152600260205260409020541615155b8015610f30575073ffffffffffffffffffffffffffffffffffffffff8516600114155b610f96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323600000000000000000000000000000000000000000000000000000060448201526064016107d8565b8495508080610fa490613c74565b9150506109e5565b50505050505050505050565b6000600173ffffffffffffffffffffffffffffffffffffffff831614801590611007575073ffffffffffffffffffffffffffffffffffffffff8281166000908152600160205260409020541615155b92915050565b600073ffffffffffffffffffffffffffffffffffffffff821660011480159061100757505073ffffffffffffffffffffffffffffffffffffffff90811660009081526002602052604090205416151590565b60003360011480159061109657503360009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b6110fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b611109858585855a612b92565b905080156111415760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a261116d565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b600060606111858686868661105f565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b606060006111ba836020613d37565b67ffffffffffffffff8111156111d2576111d2613425565b6040519080825280601f01601f1916602001820160405280156111fc576020820181803683370190505b50905060005b8381101561122957848101546020808302840101528061122181613c74565b915050611202565b509392505050565b611239612ad2565b73ffffffffffffffffffffffffffffffffffffffff811615801590611275575073ffffffffffffffffffffffffffffffffffffffff8116600114155b6112db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff818116600090815260016020526040902054161561136a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b600160208181527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f805473ffffffffffffffffffffffffffffffffffffffff858116600081815260408082208054949095167fffffffffffffffffffffffff000000000000000000000000000000000000000094851617909455959095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844091015b60405180910390a150565b61142b612ad2565b600354811115611497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001811015611502576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b60048190556040518181527f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c9390602001611418565b60008060006115518e8e8e8e8e8e8e8e8e8e600554612631565b60058054919250600061156383613c74565b909155505080516020820120915061157c828286611931565b5060006115a77f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c85490565b905073ffffffffffffffffffffffffffffffffffffffff811615611647578073ffffffffffffffffffffffffffffffffffffffff166375f0bb528f8f8f8f8f8f8f8f8f8f8f336040518d63ffffffff1660e01b81526004016116149c9b9a99989796959493929190613dde565b600060405180830381600087803b15801561162e57600080fd5b505af1158015611642573d6000803e3d6000fd5b505050505b6116736116568a6109c4613ef4565b603f6116638c6040613d37565b61166d9190613f0c565b90612bda565b61167f906101f4613ef4565b5a10156116e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313000000000000000000000000000000000000000000000000000000060448201526064016107d8565b60005a90506117598f8f8f8f8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508e8c600014611746578e612b92565b6109c45a6117549190613f47565b612b92565b93506117665a8290612bf1565b9050838061177357508915155b8061177d57508715155b6117e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313300000000000000000000000000000000000000000000000000000060448201526064016107d8565b600088156117fb576117f8828b8b8b8b612c0c565b90505b841561183f5760408051858152602081018390527f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e910160405180910390a1611879565b60408051858152602081018390527f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d23910160405180910390a15b505073ffffffffffffffffffffffffffffffffffffffff811615611920576040517f9327136800000000000000000000000000000000000000000000000000000000815260048101839052831515602482015273ffffffffffffffffffffffffffffffffffffffff821690639327136890604401600060405180830381600087803b15801561190757600080fd5b505af115801561191b573d6000803e3d6000fd5b505050505b50509b9a5050505050505050505050565b6004548061199b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6119a784848484610966565b50505050565b6060600060035467ffffffffffffffff8111156119cc576119cc613425565b6040519080825280602002602001820160405280156119f5578160200160208202803683370190505b506001600090815260026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0549192509073ffffffffffffffffffffffffffffffffffffffff165b73ffffffffffffffffffffffffffffffffffffffff8116600114611abd5780838381518110611a7057611a70613f5e565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152918116600090815260029092526040909120541681611ab581613c74565b925050611a3f565b509092915050565b600080825160208401855af480600052503d6020523d600060403e60403d016000fd5b611b268a8a808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508c9250612d9d915050565b73ffffffffffffffffffffffffffffffffffffffff841615611b6a57611b6a847f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b611baa8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061316a92505050565b8115611bc157611bbf82600060018685612c0c565b505b3373ffffffffffffffffffffffffffffffffffffffff167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a88b8b8b8b89604051611c0f959493929190613f8d565b60405180910390a250505050505050505050565b6000805a9050611c6c878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525089925050505a612b92565b611c7557600080fd5b60005a611c829083613f47565b905080604051602001611c9791815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526107d8916004016136b2565b606060008267ffffffffffffffff811115611d1257611d12613425565b604051908082528060200260200182016040528015611d3b578160200160208202803683370190505b5073ffffffffffffffffffffffffffffffffffffffff80861660009081526001602052604081205492945091165b73ffffffffffffffffffffffffffffffffffffffff811615801590611da5575073ffffffffffffffffffffffffffffffffffffffff8116600114155b8015611db057508482105b15611e155780848381518110611dc857611dc8613f5e565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152918116600090815260019092526040909120541681611e0d81613c74565b925050611d69565b908352919491935090915050565b3360009081526002602052604090205473ffffffffffffffffffffffffffffffffffffffff16611eaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330333000000000000000000000000000000000000000000000000000000060448201526064016107d8565b336000818152600860209081526040808320858452909152808220600190555183917ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c91a350565b6000611f0c8c8c8c8c8c8c8c8c8c8c8c612631565b8051906020012090509b9a5050505050505050505050565b611f2c612ad2565b73ffffffffffffffffffffffffffffffffffffffff811615801590611f68575073ffffffffffffffffffffffffffffffffffffffff8116600114155b611fce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff828116600090815260016020526040902054811690821614612061576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8181166000818152600160209081526040808320805488871685528285208054919097167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427691015b60405180910390a15050565b61210b612ad2565b73ffffffffffffffffffffffffffffffffffffffff81161561223b576040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fe6d7a83a00000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa1580156121b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d59190614013565b61223b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475333303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c881815560405173ffffffffffffffffffffffffffffffffffffffff831681527f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa2906020016120f7565b6122ad612ad2565b73ffffffffffffffffffffffffffffffffffffffff8116158015906122e9575073ffffffffffffffffffffffffffffffffffffffff8116600114155b801561230b575073ffffffffffffffffffffffffffffffffffffffff81163014155b612371576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8181166000908152600260205260409020541615612400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff82161580159061243c575073ffffffffffffffffffffffffffffffffffffffff8216600114155b6124a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260026020526040902054811690831614612535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303500000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152600260209081526040808320805487871680865283862080549289167fffffffffffffffffffffffff0000000000000000000000000000000000000000938416179055968a1685528285208054821690971790965592849052825490941690915591519081527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf910160405180910390a160405173ffffffffffffffffffffffffffffffffffffffff821681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a1505050565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8d8d8d8d60405161266b929190614035565b604051908190038120612691949392918e908e908e908e908e908e908e90602001614045565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090507f19000000000000000000000000000000000000000000000000000000000000007f010000000000000000000000000000000000000000000000000000000000000061276560007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692184660408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b6040517fff0000000000000000000000000000000000000000000000000000000000000093841660208201529290911660218301526022820152604281018290526062016040516020818303038152906040529150509b9a5050505050505050505050565b6127d2612ad2565b6127fa817f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b090602001611418565b612848612ad2565b8060016003546128589190613f47565b10156128c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8216158015906128fc575073ffffffffffffffffffffffffffffffffffffffff8216600114155b612962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260205260409020548116908316146129f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303500000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff828116600081815260026020526040808220805488861684529183208054929095167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790945591815282549091169091556003805491612a6d836140c2565b909155505060405173ffffffffffffffffffffffffffffffffffffffff831681527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf9060200160405180910390a18060045414612acd57612acd81611423565b505050565b333014612b3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330333100000000000000000000000000000000000000000000000000000060448201526064016107d8565b565b600082612b4c57506000611007565b6000612b588385613d37565b905082612b658583613f0c565b14612b6f57600080fd5b9392505050565b600080612b838385613ef4565b905083811015612b6f57600080fd5b60006001836001811115612ba857612ba8613d74565b1415612bc1576000808551602087018986f49050612bd1565b600080855160208701888a87f190505b95945050505050565b600081831015612bea5781612b6f565b5090919050565b600082821115612c0057600080fd5b600061116d8385613f47565b60008073ffffffffffffffffffffffffffffffffffffffff831615612c315782612c33565b325b905073ffffffffffffffffffffffffffffffffffffffff8416612d1257612c723a8610612c60573a612c62565b855b612c6c8989612b76565b90612b3d565b60405190925073ffffffffffffffffffffffffffffffffffffffff82169083156108fc029084906000818181858888f19350505050612d0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313100000000000000000000000000000000000000000000000000000060448201526064016107d8565b612d93565b612d2085612c6c8989612b76565b9150612d2d8482846132fa565b612d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313200000000000000000000000000000000000000000000000000000060448201526064016107d8565b5095945050505050565b60045415612e07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b8151811115612e72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001811015612edd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b600160005b8351811015613112576000848281518110612eff57612eff613f5e565b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015612f5d575073ffffffffffffffffffffffffffffffffffffffff8116600114155b8015612f7f575073ffffffffffffffffffffffffffffffffffffffff81163014155b8015612fb757508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b61301d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff81811660009081526002602052604090205416156130ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff928316600090815260026020526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016938216939093179092558061310a81613c74565b915050612ee2565b5073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001660011790559051600355600455565b600160008190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f5473ffffffffffffffffffffffffffffffffffffffff1615613213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001600081905260208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80547fffffffffffffffffffffffff000000000000000000000000000000000000000016909117905573ffffffffffffffffffffffffffffffffffffffff821615610962576132948260008360015a612b92565b610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6040805173ffffffffffffffffffffffffffffffffffffffff841660248201526044808201849052825180830390910181526064909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781528251600093929184919082896127105a03f13d80156133a757602081146133af57600093506133ba565b8193506133ba565b600051158215171593505b5050509392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146133e657600080fd5b50565b80356133f4816133c4565b919050565b6000806040838503121561340c57600080fd5b8235613417816133c4565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261346557600080fd5b813567ffffffffffffffff8082111561348057613480613425565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156134c6576134c6613425565b816040528381528660208588010111156134df57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561351557600080fd5b84359350602085013567ffffffffffffffff8082111561353457600080fd5b61354088838901613454565b9450604087013591508082111561355657600080fd5b5061356387828801613454565b949793965093946060013593505050565b60006020828403121561358657600080fd5b8135612b6f816133c4565b8035600281106133f457600080fd5b600080600080608085870312156135b657600080fd5b84356135c1816133c4565b935060208501359250604085013567ffffffffffffffff8111156135e457600080fd5b6135f087828801613454565b9250506135ff60608601613591565b905092959194509250565b6000815180845260005b8181101561363057602081850181015186830182015201613614565b81811115613642576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b821515815260406020820152600061116d604083018461360a565b600080604083850312156136a357600080fd5b50508035926020909101359150565b602081526000612b6f602083018461360a565b6000602082840312156136d757600080fd5b5035919050565b60008083601f8401126136f057600080fd5b50813567ffffffffffffffff81111561370857600080fd5b60208301915083602082850101111561372057600080fd5b9250929050565b60008060008060008060008060008060006101408c8e03121561374957600080fd5b6137528c6133e9565b9a5060208c0135995067ffffffffffffffff8060408e0135111561377557600080fd5b6137858e60408f01358f016136de565b909a50985061379660608e01613591565b975060808d0135965060a08d0135955060c08d013594506137b960e08e016133e9565b93506137c86101008e016133e9565b9250806101208e013511156137dc57600080fd5b506137ee8d6101208e01358e01613454565b90509295989b509295989b9093969950565b60008060006060848603121561381557600080fd5b83359250602084013567ffffffffffffffff8082111561383457600080fd5b61384087838801613454565b9350604086013591508082111561385657600080fd5b5061386386828701613454565b9150509250925092565b600081518084526020808501945080840160005b838110156138b357815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101613881565b509495945050505050565b602081526000612b6f602083018461386d565b600080604083850312156138e457600080fd5b82356138ef816133c4565b9150602083013567ffffffffffffffff81111561390b57600080fd5b61391785828601613454565b9150509250929050565b6000806000806000806000806000806101008b8d03121561394157600080fd5b8a3567ffffffffffffffff8082111561395957600080fd5b818d0191508d601f83011261396d57600080fd5b81358181111561397c57600080fd5b8e60208260051b850101111561399157600080fd5b60208381019d50909b508d013599506139ac60408e016133e9565b985060608d01359150808211156139c257600080fd5b506139cf8d828e016136de565b90975095506139e2905060808c016133e9565b93506139f060a08c016133e9565b925060c08b01359150613a0560e08c016133e9565b90509295989b9194979a5092959850565b600080600080600060808688031215613a2e57600080fd5b8535613a39816133c4565b945060208601359350604086013567ffffffffffffffff811115613a5c57600080fd5b613a68888289016136de565b9094509250613a7b905060608701613591565b90509295509295909350565b604081526000613a9a604083018561386d565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b60008060008060008060008060008060006101408c8e031215613ae157600080fd5b8b35613aec816133c4565b9a5060208c0135995060408c013567ffffffffffffffff811115613b0f57600080fd5b613b1b8e828f016136de565b909a509850613b2e905060608d01613591565b965060808c0135955060a08c0135945060c08c0135935060e08c0135613b53816133c4565b92506101008c0135613b64816133c4565b809250506101208c013590509295989b509295989b9093969950565b60008060408385031215613b9357600080fd5b8235613b9e816133c4565b91506020830135613bae816133c4565b809150509250929050565b600080600060608486031215613bce57600080fd5b8335613bd9816133c4565b92506020840135613be9816133c4565b91506040840135613bf9816133c4565b809150509250925092565b600080600060608486031215613c1957600080fd5b8335613c24816133c4565b92506020840135613c34816133c4565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613ca657613ca6613c45565b5060010190565b604081526000613cc0604083018561360a565b8281036020840152612bd1818561360a565b600060208284031215613ce457600080fd5b81517fffffffff0000000000000000000000000000000000000000000000000000000081168114612b6f57600080fd5b600060ff821660ff841680821015613d2e57613d2e613c45565b90039392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613d6f57613d6f613c45565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110613dda577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b600061016073ffffffffffffffffffffffffffffffffffffffff8f1683528d60208401528060408401528b81840152506101808b8d828501376000818d850101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8d01168301613e54606085018d613da3565b8a60808501528960a08501528860c0850152613e8860e085018973ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff87166101008501528184820301610120850152613ebc8282018761360a565b92505050613ee361014083018473ffffffffffffffffffffffffffffffffffffffff169052565b9d9c50505050505050505050505050565b60008219821115613f0757613f07613c45565b500190565b600082613f42577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015613f5957613f59613c45565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6080808252810185905260008660a08301825b88811015613fdd578235613fb3816133c4565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101613fa0565b506020840196909652505073ffffffffffffffffffffffffffffffffffffffff9283166040820152911660609091015292915050565b60006020828403121561402557600080fd5b81518015158114612b6f57600080fd5b8183823760009101908152919050565b6000610160820190508c825273ffffffffffffffffffffffffffffffffffffffff808d1660208401528b60408401528a6060840152614087608084018b613da3565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b6000816140d1576140d1613c45565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea164736f6c634300080c000a",
    sourceMap:
      "722:19529:9:-:0;;;2492:247;;;;;;;;;-1:-1:-1;2731:1:9;2719:9;:13;722:19529;;;;;;",
    linkReferences: {}
  },
  deployedBytecode: {
    object:
      "0x6080604052600436106101dc5760003560e01c8063affed0e011610102578063e19a9dd911610095578063f08a032311610064578063f08a032314610620578063f698da2514610640578063f8dc5dd9146106a7578063ffa1ad74146106c757610218565b8063e19a9dd9146105ab578063e318b52b146105cb578063e75235b8146105eb578063e86637db1461060057610218565b8063cc2f8452116100d1578063cc2f84521461051d578063d4d9bdcd1461054b578063d8d11f781461056b578063e009cfde1461058b57610218565b8063affed0e0146104a7578063b4faba09146104bd578063b63e800d146104dd578063c4ca3a9c146104fd57610218565b80635624b25b1161017a5780636a761202116101495780636a7612021461041a5780637d8329741461042d578063934f3a1114610465578063a0e67e2b1461048557610218565b80635624b25b146103805780635ae6bd37146103ad578063610b5925146103da578063694e80c3146103fa57610218565b80632f54bf6e116101b65780632f54bf6e146102f55780633408e47014610315578063468721a7146103325780635229073f1461035257610218565b80630d582f131461027e57806312fb68e0146102a05780632d9ad53d146102c057610218565b366102185760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b34801561022457600080fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d580548061024f57005b36600080373360601b365260008060143601600080855af190503d6000803e80610278573d6000fd5b503d6000f35b34801561028a57600080fd5b5061029e6102993660046133f9565b610710565b005b3480156102ac57600080fd5b5061029e6102bb3660046134ff565b610966565b3480156102cc57600080fd5b506102e06102db366004613574565b610fb8565b60405190151581526020015b60405180910390f35b34801561030157600080fd5b506102e0610310366004613574565b61100d565b34801561032157600080fd5b50465b6040519081526020016102ec565b34801561033e57600080fd5b506102e061034d3660046135a0565b61105f565b34801561035e57600080fd5b5061037261036d3660046135a0565b611175565b6040516102ec929190613675565b34801561038c57600080fd5b506103a061039b366004613690565b6111ab565b6040516102ec91906136b2565b3480156103b957600080fd5b506103246103c83660046136c5565b60076020526000908152604090205481565b3480156103e657600080fd5b5061029e6103f5366004613574565b611231565b34801561040657600080fd5b5061029e6104153660046136c5565b611423565b6102e0610428366004613727565b611537565b34801561043957600080fd5b506103246104483660046133f9565b600860209081526000928352604080842090915290825290205481565b34801561047157600080fd5b5061029e610480366004613800565b611931565b34801561049157600080fd5b5061049a6119ad565b6040516102ec91906138be565b3480156104b357600080fd5b5061032460055481565b3480156104c957600080fd5b5061029e6104d83660046138d1565b611ac5565b3480156104e957600080fd5b5061029e6104f8366004613921565b611ae8565b34801561050957600080fd5b50610324610518366004613a16565b611c23565b34801561052957600080fd5b5061053d6105383660046133f9565b611cf5565b6040516102ec929190613a87565b34801561055757600080fd5b5061029e6105663660046136c5565b611e23565b34801561057757600080fd5b50610324610586366004613abf565b611ef7565b34801561059757600080fd5b5061029e6105a6366004613b80565b611f24565b3480156105b757600080fd5b5061029e6105c6366004613574565b612103565b3480156105d757600080fd5b5061029e6105e6366004613bb9565b6122a5565b3480156105f757600080fd5b50600454610324565b34801561060c57600080fd5b506103a061061b366004613abf565b612631565b34801561062c57600080fd5b5061029e61063b366004613574565b6127ca565b34801561064c57600080fd5b5061032460007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692184660408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b3480156106b357600080fd5b5061029e6106c2366004613c04565b612840565b3480156106d357600080fd5b506103a06040518060400160405280600581526020017f312e332e3000000000000000000000000000000000000000000000000000000081525081565b610718612ad2565b73ffffffffffffffffffffffffffffffffffffffff821615801590610754575073ffffffffffffffffffffffffffffffffffffffff8216600114155b8015610776575073ffffffffffffffffffffffffffffffffffffffff82163014155b6107e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600260205260409020541615610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b60026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0805473ffffffffffffffffffffffffffffffffffffffff8481166000818152604081208054939094167fffffffffffffffffffffffff00000000000000000000000000000000000000009384161790935560018352835490911617909155600380549161090283613c74565b909155505060405173ffffffffffffffffffffffffffffffffffffffff831681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a180600454146109625761096281611423565b5050565b610971816041612b3d565b825110156109db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6000808060008060005b86811015610fac576041818102890160208101516040820151919092015160ff169550909350915083610cb8579193508391610a22876041612b3d565b821015610a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323100000000000000000000000000000000000000000000000000000060448201526064016107d8565b8751610a98836020612b76565b1115610b00576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323200000000000000000000000000000000000000000000000000000060448201526064016107d8565b602082890181015189519091610b23908390610b1d908790612b76565b90612b76565b1115610b8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323300000000000000000000000000000000000000000000000000000060448201526064016107d8565b6040517f20c13b0b000000000000000000000000000000000000000000000000000000008082528a85016020019173ffffffffffffffffffffffffffffffffffffffff8916906320c13b0b90610be7908f908690600401613cad565b602060405180830381865afa158015610c04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c289190613cd2565b7fffffffff000000000000000000000000000000000000000000000000000000001614610cb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323400000000000000000000000000000000000000000000000000000060448201526064016107d8565b5050610eac565b8360ff1660011415610d875791935083913373ffffffffffffffffffffffffffffffffffffffff84161480610d1c575073ffffffffffffffffffffffffffffffffffffffff851660009081526008602090815260408083208d845290915290205415155b610d82576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323500000000000000000000000000000000000000000000000000000060448201526064016107d8565b610eac565b601e8460ff161115610e4c576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018b9052600190605c0160405160208183030381529060405280519060200120600486610dec9190613d14565b6040805160008152602081018083529390935260ff90911690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610e3b573d6000803e3d6000fd5b505050602060405103519450610eac565b6040805160008152602081018083528c905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610e9f573d6000803e3d6000fd5b5050506020604051035194505b8573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16118015610f0d575073ffffffffffffffffffffffffffffffffffffffff8581166000908152600260205260409020541615155b8015610f30575073ffffffffffffffffffffffffffffffffffffffff8516600114155b610f96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330323600000000000000000000000000000000000000000000000000000060448201526064016107d8565b8495508080610fa490613c74565b9150506109e5565b50505050505050505050565b6000600173ffffffffffffffffffffffffffffffffffffffff831614801590611007575073ffffffffffffffffffffffffffffffffffffffff8281166000908152600160205260409020541615155b92915050565b600073ffffffffffffffffffffffffffffffffffffffff821660011480159061100757505073ffffffffffffffffffffffffffffffffffffffff90811660009081526002602052604090205416151590565b60003360011480159061109657503360009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1615155b6110fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b611109858585855a612b92565b905080156111415760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a261116d565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a25b949350505050565b600060606111858686868661105f565b915060405160203d0181016040523d81523d6000602083013e8091505094509492505050565b606060006111ba836020613d37565b67ffffffffffffffff8111156111d2576111d2613425565b6040519080825280601f01601f1916602001820160405280156111fc576020820181803683370190505b50905060005b8381101561122957848101546020808302840101528061122181613c74565b915050611202565b509392505050565b611239612ad2565b73ffffffffffffffffffffffffffffffffffffffff811615801590611275575073ffffffffffffffffffffffffffffffffffffffff8116600114155b6112db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff818116600090815260016020526040902054161561136a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b600160208181527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f805473ffffffffffffffffffffffffffffffffffffffff858116600081815260408082208054949095167fffffffffffffffffffffffff000000000000000000000000000000000000000094851617909455959095528254168417909155519182527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844091015b60405180910390a150565b61142b612ad2565b600354811115611497576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001811015611502576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b60048190556040518181527f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c9390602001611418565b60008060006115518e8e8e8e8e8e8e8e8e8e600554612631565b60058054919250600061156383613c74565b909155505080516020820120915061157c828286611931565b5060006115a77f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c85490565b905073ffffffffffffffffffffffffffffffffffffffff811615611647578073ffffffffffffffffffffffffffffffffffffffff166375f0bb528f8f8f8f8f8f8f8f8f8f8f336040518d63ffffffff1660e01b81526004016116149c9b9a99989796959493929190613dde565b600060405180830381600087803b15801561162e57600080fd5b505af1158015611642573d6000803e3d6000fd5b505050505b6116736116568a6109c4613ef4565b603f6116638c6040613d37565b61166d9190613f0c565b90612bda565b61167f906101f4613ef4565b5a10156116e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313000000000000000000000000000000000000000000000000000000060448201526064016107d8565b60005a90506117598f8f8f8f8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508e8c600014611746578e612b92565b6109c45a6117549190613f47565b612b92565b93506117665a8290612bf1565b9050838061177357508915155b8061177d57508715155b6117e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313300000000000000000000000000000000000000000000000000000060448201526064016107d8565b600088156117fb576117f8828b8b8b8b612c0c565b90505b841561183f5760408051858152602081018390527f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e910160405180910390a1611879565b60408051858152602081018390527f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d23910160405180910390a15b505073ffffffffffffffffffffffffffffffffffffffff811615611920576040517f9327136800000000000000000000000000000000000000000000000000000000815260048101839052831515602482015273ffffffffffffffffffffffffffffffffffffffff821690639327136890604401600060405180830381600087803b15801561190757600080fd5b505af115801561191b573d6000803e3d6000fd5b505050505b50509b9a5050505050505050505050565b6004548061199b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6119a784848484610966565b50505050565b6060600060035467ffffffffffffffff8111156119cc576119cc613425565b6040519080825280602002602001820160405280156119f5578160200160208202803683370190505b506001600090815260026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e0549192509073ffffffffffffffffffffffffffffffffffffffff165b73ffffffffffffffffffffffffffffffffffffffff8116600114611abd5780838381518110611a7057611a70613f5e565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152918116600090815260029092526040909120541681611ab581613c74565b925050611a3f565b509092915050565b600080825160208401855af480600052503d6020523d600060403e60403d016000fd5b611b268a8a808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508c9250612d9d915050565b73ffffffffffffffffffffffffffffffffffffffff841615611b6a57611b6a847f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b611baa8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061316a92505050565b8115611bc157611bbf82600060018685612c0c565b505b3373ffffffffffffffffffffffffffffffffffffffff167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a88b8b8b8b89604051611c0f959493929190613f8d565b60405180910390a250505050505050505050565b6000805a9050611c6c878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525089925050505a612b92565b611c7557600080fd5b60005a611c829083613f47565b905080604051602001611c9791815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526107d8916004016136b2565b606060008267ffffffffffffffff811115611d1257611d12613425565b604051908082528060200260200182016040528015611d3b578160200160208202803683370190505b5073ffffffffffffffffffffffffffffffffffffffff80861660009081526001602052604081205492945091165b73ffffffffffffffffffffffffffffffffffffffff811615801590611da5575073ffffffffffffffffffffffffffffffffffffffff8116600114155b8015611db057508482105b15611e155780848381518110611dc857611dc8613f5e565b73ffffffffffffffffffffffffffffffffffffffff928316602091820292909201810191909152918116600090815260019092526040909120541681611e0d81613c74565b925050611d69565b908352919491935090915050565b3360009081526002602052604090205473ffffffffffffffffffffffffffffffffffffffff16611eaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330333000000000000000000000000000000000000000000000000000000060448201526064016107d8565b336000818152600860209081526040808320858452909152808220600190555183917ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c91a350565b6000611f0c8c8c8c8c8c8c8c8c8c8c8c612631565b8051906020012090509b9a5050505050505050505050565b611f2c612ad2565b73ffffffffffffffffffffffffffffffffffffffff811615801590611f68575073ffffffffffffffffffffffffffffffffffffffff8116600114155b611fce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff828116600090815260016020526040902054811690821614612061576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8181166000818152600160209081526040808320805488871685528285208054919097167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790965592849052825490941690915591519081527faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427691015b60405180910390a15050565b61210b612ad2565b73ffffffffffffffffffffffffffffffffffffffff81161561223b576040517f01ffc9a70000000000000000000000000000000000000000000000000000000081527fe6d7a83a00000000000000000000000000000000000000000000000000000000600482015273ffffffffffffffffffffffffffffffffffffffff8216906301ffc9a790602401602060405180830381865afa1580156121b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121d59190614013565b61223b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475333303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c881815560405173ffffffffffffffffffffffffffffffffffffffff831681527f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa2906020016120f7565b6122ad612ad2565b73ffffffffffffffffffffffffffffffffffffffff8116158015906122e9575073ffffffffffffffffffffffffffffffffffffffff8116600114155b801561230b575073ffffffffffffffffffffffffffffffffffffffff81163014155b612371576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8181166000908152600260205260409020541615612400576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff82161580159061243c575073ffffffffffffffffffffffffffffffffffffffff8216600114155b6124a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff838116600090815260026020526040902054811690831614612535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303500000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8281166000818152600260209081526040808320805487871680865283862080549289167fffffffffffffffffffffffff0000000000000000000000000000000000000000938416179055968a1685528285208054821690971790965592849052825490941690915591519081527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf910160405180910390a160405173ffffffffffffffffffffffffffffffffffffffff821681527f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea269060200160405180910390a1505050565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8d8d8d8d60405161266b929190614035565b604051908190038120612691949392918e908e908e908e908e908e908e90602001614045565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090507f19000000000000000000000000000000000000000000000000000000000000007f010000000000000000000000000000000000000000000000000000000000000061276560007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692184660408051602081019390935282015230606082015260800160405160208183030381529060405280519060200120905090565b6040517fff0000000000000000000000000000000000000000000000000000000000000093841660208201529290911660218301526022820152604281018290526062016040516020818303038152906040529150509b9a5050505050505050505050565b6127d2612ad2565b6127fa817f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b090602001611418565b612848612ad2565b8060016003546128589190613f47565b10156128c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8216158015906128fc575073ffffffffffffffffffffffffffffffffffffffff8216600114155b612962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600260205260409020548116908316146129f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303500000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff828116600081815260026020526040808220805488861684529183208054929095167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790945591815282549091169091556003805491612a6d836140c2565b909155505060405173ffffffffffffffffffffffffffffffffffffffff831681527ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf9060200160405180910390a18060045414612acd57612acd81611423565b505050565b333014612b3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330333100000000000000000000000000000000000000000000000000000060448201526064016107d8565b565b600082612b4c57506000611007565b6000612b588385613d37565b905082612b658583613f0c565b14612b6f57600080fd5b9392505050565b600080612b838385613ef4565b905083811015612b6f57600080fd5b60006001836001811115612ba857612ba8613d74565b1415612bc1576000808551602087018986f49050612bd1565b600080855160208701888a87f190505b95945050505050565b600081831015612bea5781612b6f565b5090919050565b600082821115612c0057600080fd5b600061116d8385613f47565b60008073ffffffffffffffffffffffffffffffffffffffff831615612c315782612c33565b325b905073ffffffffffffffffffffffffffffffffffffffff8416612d1257612c723a8610612c60573a612c62565b855b612c6c8989612b76565b90612b3d565b60405190925073ffffffffffffffffffffffffffffffffffffffff82169083156108fc029084906000818181858888f19350505050612d0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313100000000000000000000000000000000000000000000000000000060448201526064016107d8565b612d93565b612d2085612c6c8989612b76565b9150612d2d8482846132fa565b612d93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330313200000000000000000000000000000000000000000000000000000060448201526064016107d8565b5095945050505050565b60045415612e07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b8151811115612e72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303100000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001811015612edd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303200000000000000000000000000000000000000000000000000000060448201526064016107d8565b600160005b8351811015613112576000848281518110612eff57612eff613f5e565b60200260200101519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015612f5d575073ffffffffffffffffffffffffffffffffffffffff8116600114155b8015612f7f575073ffffffffffffffffffffffffffffffffffffffff81163014155b8015612fb757508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b61301d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303300000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff81811660009081526002602052604090205416156130ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475332303400000000000000000000000000000000000000000000000000000060448201526064016107d8565b73ffffffffffffffffffffffffffffffffffffffff928316600090815260026020526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016938216939093179092558061310a81613c74565b915050612ee2565b5073ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001660011790559051600355600455565b600160008190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f5473ffffffffffffffffffffffffffffffffffffffff1615613213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475331303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6001600081905260208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80547fffffffffffffffffffffffff000000000000000000000000000000000000000016909117905573ffffffffffffffffffffffffffffffffffffffff821615610962576132948260008360015a612b92565b610962576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600560248201527f475330303000000000000000000000000000000000000000000000000000000060448201526064016107d8565b6040805173ffffffffffffffffffffffffffffffffffffffff841660248201526044808201849052825180830390910181526064909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781528251600093929184919082896127105a03f13d80156133a757602081146133af57600093506133ba565b8193506133ba565b600051158215171593505b5050509392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146133e657600080fd5b50565b80356133f4816133c4565b919050565b6000806040838503121561340c57600080fd5b8235613417816133c4565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261346557600080fd5b813567ffffffffffffffff8082111561348057613480613425565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156134c6576134c6613425565b816040528381528660208588010111156134df57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561351557600080fd5b84359350602085013567ffffffffffffffff8082111561353457600080fd5b61354088838901613454565b9450604087013591508082111561355657600080fd5b5061356387828801613454565b949793965093946060013593505050565b60006020828403121561358657600080fd5b8135612b6f816133c4565b8035600281106133f457600080fd5b600080600080608085870312156135b657600080fd5b84356135c1816133c4565b935060208501359250604085013567ffffffffffffffff8111156135e457600080fd5b6135f087828801613454565b9250506135ff60608601613591565b905092959194509250565b6000815180845260005b8181101561363057602081850181015186830182015201613614565b81811115613642576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b821515815260406020820152600061116d604083018461360a565b600080604083850312156136a357600080fd5b50508035926020909101359150565b602081526000612b6f602083018461360a565b6000602082840312156136d757600080fd5b5035919050565b60008083601f8401126136f057600080fd5b50813567ffffffffffffffff81111561370857600080fd5b60208301915083602082850101111561372057600080fd5b9250929050565b60008060008060008060008060008060006101408c8e03121561374957600080fd5b6137528c6133e9565b9a5060208c0135995067ffffffffffffffff8060408e0135111561377557600080fd5b6137858e60408f01358f016136de565b909a50985061379660608e01613591565b975060808d0135965060a08d0135955060c08d013594506137b960e08e016133e9565b93506137c86101008e016133e9565b9250806101208e013511156137dc57600080fd5b506137ee8d6101208e01358e01613454565b90509295989b509295989b9093969950565b60008060006060848603121561381557600080fd5b83359250602084013567ffffffffffffffff8082111561383457600080fd5b61384087838801613454565b9350604086013591508082111561385657600080fd5b5061386386828701613454565b9150509250925092565b600081518084526020808501945080840160005b838110156138b357815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101613881565b509495945050505050565b602081526000612b6f602083018461386d565b600080604083850312156138e457600080fd5b82356138ef816133c4565b9150602083013567ffffffffffffffff81111561390b57600080fd5b61391785828601613454565b9150509250929050565b6000806000806000806000806000806101008b8d03121561394157600080fd5b8a3567ffffffffffffffff8082111561395957600080fd5b818d0191508d601f83011261396d57600080fd5b81358181111561397c57600080fd5b8e60208260051b850101111561399157600080fd5b60208381019d50909b508d013599506139ac60408e016133e9565b985060608d01359150808211156139c257600080fd5b506139cf8d828e016136de565b90975095506139e2905060808c016133e9565b93506139f060a08c016133e9565b925060c08b01359150613a0560e08c016133e9565b90509295989b9194979a5092959850565b600080600080600060808688031215613a2e57600080fd5b8535613a39816133c4565b945060208601359350604086013567ffffffffffffffff811115613a5c57600080fd5b613a68888289016136de565b9094509250613a7b905060608701613591565b90509295509295909350565b604081526000613a9a604083018561386d565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b60008060008060008060008060008060006101408c8e031215613ae157600080fd5b8b35613aec816133c4565b9a5060208c0135995060408c013567ffffffffffffffff811115613b0f57600080fd5b613b1b8e828f016136de565b909a509850613b2e905060608d01613591565b965060808c0135955060a08c0135945060c08c0135935060e08c0135613b53816133c4565b92506101008c0135613b64816133c4565b809250506101208c013590509295989b509295989b9093969950565b60008060408385031215613b9357600080fd5b8235613b9e816133c4565b91506020830135613bae816133c4565b809150509250929050565b600080600060608486031215613bce57600080fd5b8335613bd9816133c4565b92506020840135613be9816133c4565b91506040840135613bf9816133c4565b809150509250925092565b600080600060608486031215613c1957600080fd5b8335613c24816133c4565b92506020840135613c34816133c4565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415613ca657613ca6613c45565b5060010190565b604081526000613cc0604083018561360a565b8281036020840152612bd1818561360a565b600060208284031215613ce457600080fd5b81517fffffffff0000000000000000000000000000000000000000000000000000000081168114612b6f57600080fd5b600060ff821660ff841680821015613d2e57613d2e613c45565b90039392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613d6f57613d6f613c45565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110613dda577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b600061016073ffffffffffffffffffffffffffffffffffffffff8f1683528d60208401528060408401528b81840152506101808b8d828501376000818d850101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8d01168301613e54606085018d613da3565b8a60808501528960a08501528860c0850152613e8860e085018973ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff87166101008501528184820301610120850152613ebc8282018761360a565b92505050613ee361014083018473ffffffffffffffffffffffffffffffffffffffff169052565b9d9c50505050505050505050505050565b60008219821115613f0757613f07613c45565b500190565b600082613f42577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015613f5957613f59613c45565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6080808252810185905260008660a08301825b88811015613fdd578235613fb3816133c4565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101613fa0565b506020840196909652505073ffffffffffffffffffffffffffffffffffffffff9283166040820152911660609091015292915050565b60006020828403121561402557600080fd5b81518015158114612b6f57600080fd5b8183823760009101908152919050565b6000610160820190508c825273ffffffffffffffffffffffffffffffffffffffff808d1660208401528b60408401528a6060840152614087608084018b613da3565b60a083019890985260c082019690965260e0810194909452918516610100840152909316610120820152610140019190915295945050505050565b6000816140d1576140d1613c45565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea164736f6c634300080c000a",
    sourceMap:
      "722:19529:9:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;417:35:16;;442:9;160:25:63;;430:10:16;;417:35;;148:2:63;133:18;417:35:16;;;;;;;722:19529:9;;;;;;;;;;;-1:-1:-1;469:66:11;1466:11;;;1490:63;;1527:12;1490:63;1585:14;1582:1;1579;1566:34;1822:8;1818:2;1814:17;1798:14;1791:41;1980:1;1977;1972:2;1956:14;1952:23;1949:1;1946;1937:7;1930:5;1925:57;1910:72;;2016:16;2013:1;2010;1995:38;2056:7;2046:78;;2093:16;2090:1;2083:27;2046:78;;2147:16;2144:1;2137:27;2305:625:14;;;;;;;;;;-1:-1:-1;2305:625:14;;;;;:::i;:::-;;:::i;:::-;;11350:3812:9;;;;;;;;;;-1:-1:-1;11350:3812:9;;;;;:::i;:::-;;:::i;4861:151:13:-;;;;;;;;;;-1:-1:-1;4861:151:13;;;;;:::i;:::-;;:::i;:::-;;;2883:14:63;;2876:22;2858:41;;2846:2;2831:18;4861:151:13;;;;;;;;6048:138:14;;;;;;;;;;-1:-1:-1;6048:138:14;;;;;:::i;:::-;;:::i;17042:211:9:-;;;;;;;;;;-1:-1:-1;17209:9:9;17042:211;;;160:25:63;;;148:2;133:18;17042:211:9;14:177:63;2868:586:13;;;;;;;;;;-1:-1:-1;2868:586:13;;;;;:::i;:::-;;:::i;3805:959::-;;;;;;;;;;-1:-1:-1;3805:959:13;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;643:464:21:-;;;;;;;;;;-1:-1:-1;643:464:21;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;2150:49:9:-;;;;;;;;;;-1:-1:-1;2150:49:9;;;;;:::i;:::-;;;;;;;;;;;;;;1363:426:13;;;;;;;;;;-1:-1:-1;1363:426:13;;;;;:::i;:::-;;:::i;5589:360:14:-;;;;;;;;;;-1:-1:-1;5589:360:14;;;;;:::i;:::-;;:::i;5532:3628:9:-;;;;;;:::i;:::-;;:::i;2311:69::-;;;;;;;;;;-1:-1:-1;2311:69:9;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;10442:383;;;;;;;;;;-1:-1:-1;10442:383:9;;;;;:::i;:::-;;:::i;6268:437:14:-;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;1978:20:9:-;;;;;;;;;;;;;;;;1740:486:21;;;;;;;;;;-1:-1:-1;1740:486:21;;;;;:::i;:::-;;:::i;3354:1151:9:-;;;;;;;;;;-1:-1:-1;3354:1151:9;;;;;:::i;:::-;;:::i;15971:533::-;;;;;;;;;;-1:-1:-1;15971:533:9;;;;;:::i;:::-;;:::i;5257:775:13:-;;;;;;;;;;-1:-1:-1;5257:775:13;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;16751:228:9:-;;;;;;;;;;-1:-1:-1;16751:228:9;;;;;:::i;:::-;;:::i;19771:478::-;;;;;;;;;;-1:-1:-1;19771:478:9;;;;;:::i;:::-;;:::i;2109:423:13:-;;;;;;;;;;-1:-1:-1;2109:423:13;;;;;:::i;:::-;;:::i;1495:386:12:-;;;;;;;;;;-1:-1:-1;1495:386:12;;;;;:::i;:::-;;:::i;4507:826:14:-;;;;;;;;;;-1:-1:-1;4507:826:14;;;;;:::i;:::-;;:::i;5955:87::-;;;;;;;;;;-1:-1:-1;6026:9:14;;5955:87;;18195:890:9;;;;;;;;;;-1:-1:-1;18195:890:9;;;;;:::i;:::-;;:::i;1051:161:11:-;;;;;;;;;;-1:-1:-1;1051:161:11;;;;;:::i;:::-;;:::i;17259:149:9:-;;;;;;;;;;;;17307:7;1208:66;17209:9;17343:57;;;;;;31254:25:63;;;;31295:18;;31288:34;17395:4:9;31338:18:63;;;31331:83;31227:18;;17343:57:9;;;;;;;;;;;;17333:68;;;;;;17326:75;;17259:149;;3371:727:14;;;;;;;;;;-1:-1:-1;3371:727:14;;;;;:::i;:::-;;:::i;1011:40:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2305:625:14;440:17:18;:15;:17::i;:::-;2481:19:14::1;::::0;::::1;::::0;;::::1;::::0;:47:::1;;-1:-1:-1::0;2504:24:14::1;::::0;::::1;520:3;2504:24;;2481:47;:73;;;;-1:-1:-1::0;2532:22:14::1;::::0;::::1;2549:4;2532:22;;2481:73;2473:91;;;::::0;::::1;::::0;;14963:2:63;2473:91:14::1;::::0;::::1;14945:21:63::0;15002:1;14982:18;;;14975:29;15040:7;15020:18;;;15013:35;15065:18;;2473:91:14::1;;;;;;;;;2622:27;:13:::0;;::::1;2647:1;2622:13:::0;;;:6:::1;:13;::::0;;;;;::::1;:27:::0;2614:45:::1;;;::::0;::::1;::::0;;15296:2:63;2614:45:14::1;::::0;::::1;15278:21:63::0;15335:1;15315:18;;;15308:29;15373:7;15353:18;;;15346:35;15398:18;;2614:45:14::1;15094:328:63::0;2614:45:14::1;2685:6;:23;::::0;;;;::::1;2669:13:::0;;::::1;2685:23;2669:13:::0;;;2685:23;2669:13;;:39;;2685:23;;;::::1;2669:39:::0;;;::::1;;::::0;;;-1:-1:-1;2718:23:14;;:31;;;;::::1;;::::0;;;2759:10:::1;:12:::0;;;::::1;::::0;::::1;:::i;:::-;::::0;;;-1:-1:-1;;2786:17:14::1;::::0;15992:42:63;15980:55;;15962:74;;2786:17:14::1;::::0;15950:2:63;15935:18;2786:17:14::1;;;;;;;2884:10;2871:9;;:23;2867:56;;2896:27;2912:10;2896:15;:27::i;:::-;2305:625:::0;;:::o;11350:3812:9:-;11622:26;:18;11645:2;11622:22;:26::i;:::-;11601:10;:17;:47;;11593:65;;;;;;;16249:2:63;11593:65:9;;;16231:21:63;16288:1;16268:18;;;16261:29;16326:7;16306:18;;;16299:35;16351:18;;11593:65:9;16047:328:63;11593:65:9;11720:17;11760:20;11790:7;11807:9;11826;11845;11864:3292;11880:18;11876:1;:22;11864:3292;;;1074:4:19;1070:14;;;1108:40;;1142:4;1108:40;;1102:47;1207:4;1173:40;;1167:47;1508:40;;;;1502:47;1551:4;1498:58;;-1:-1:-1;1102:47:19;;-1:-1:-1;1167:47:19;-1:-1:-1;1498:58:19;11974:3005:9;;12203:1;;-1:-1:-1;12203:1:9;;12608:26;:18;12631:2;12608:22;:26::i;:::-;12594:40;;;12586:58;;;;;;;16582:2:63;12586:58:9;;;16564:21:63;16621:1;16601:18;;;16594:29;16659:7;16639:18;;;16632:35;16684:18;;12586:58:9;16380:328:63;12586:58:9;12806:17;;12784:18;12792:1;12799:2;12784:14;:18::i;:::-;:39;;12776:57;;;;;;;16915:2:63;12776:57:9;;;16897:21:63;16954:1;16934:18;;;16927:29;16992:7;16972:18;;;16965:35;17017:18;;12776:57:9;16713:328:63;12776:57:9;13172:4;13152:18;;;13148:29;;13142:36;13269:17;;13142:36;;13221:44;;13142:36;;13221:18;;13152;;13221:14;:18::i;:::-;:22;;:44::i;:::-;:65;;13213:83;;;;;;;17248:2:63;13213:83:9;;;17230:21:63;17287:1;17267:18;;;17260:29;17325:7;17305:18;;;17298:35;17350:18;;13213:83:9;17046:328:63;13213:83:9;13725:75;;13804:19;13725:75;;;13657:18;;;13677:4;13653:29;;13725:50;;;;223:10:24;;13725:75:9;;13776:4;;13653:29;;13725:75;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:98;;;13717:116;;;;;;;18304:2:63;13717:116:9;;;18286:21:63;18343:1;18323:18;;;18316:29;18381:7;18361:18;;;18354:35;18406:18;;13717:116:9;18102:328:63;13717:116:9;11986:1862;;11974:3005;;;13858:1;:6;;13863:1;13858:6;13854:1125;;;14075:1;;-1:-1:-1;14075:1:9;;14250:10;:26;;;;;:73;;-1:-1:-1;14280:28:9;;;;;;;:14;:28;;;;;;;;:38;;;;;;;;;:43;;14250:73;14242:91;;;;;;;18637:2:63;14242:91:9;;;18619:21:63;18676:1;18656:18;;;18649:29;18714:7;18694:18;;;18687:35;18739:18;;14242:91:9;18435:328:63;14242:91:9;13854:1125;;;14362:2;14358:1;:6;;;14354:625;;;14655:62;;19010:66:63;14655:62:9;;;18998:79:63;19093:12;;;19086:28;;;14635:97:9;;19130:12:63;;14655:62:9;;;;;;;;;;;;14645:73;;;;;;14724:1;14720;:5;;;;:::i;:::-;14635:97;;;;;;;;;;;;19580:25:63;;;;19653:4;19641:17;;;19621:18;;;19614:45;19675:18;;;19668:34;;;19718:18;;;19711:34;;;19552:19;;14635:97:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14620:112;;14354:625;;;14936:28;;;;;;;;;;;;19580:25:63;;;19653:4;19641:17;;19621:18;;;19614:45;;;;19675:18;;;19668:34;;;19718:18;;;19711:34;;;14936:28:9;;19552:19:63;;14936:28:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14921:43;;14354:625;15015:9;15000:24;;:12;:24;;;:62;;;;-1:-1:-1;15028:34:9;:20;;;15060:1;15028:20;;;:6;:20;;;;;;;:34;;15000:62;:97;;;;-1:-1:-1;15066:31:9;;;520:3:14;15066:31:9;;15000:97;14992:115;;;;;;;19958:2:63;14992:115:9;;;19940:21:63;19997:1;19977:18;;;19970:29;20035:7;20015:18;;;20008:35;20060:18;;14992:115:9;19756:328:63;14992:115:9;15133:12;15121:24;;11900:3;;;;;:::i;:::-;;;;11864:3292;;;11516:3646;;;;;;11350:3812;;;;:::o;4861:151:13:-;4923:4;692:3;4946:26;;;;;;;:59;;-1:-1:-1;4976:29:13;:15;;;5003:1;4976:15;;;:7;:15;;;;;;;:29;;4946:59;4939:66;4861:151;-1:-1:-1;;4861:151:13:o;6048:138:14:-;6101:4;6124:24;;;520:3;6124:24;;;;:55;;-1:-1:-1;;6152:27:14;:13;;;6177:1;6152:13;;;:6;:13;;;;;;;:27;;;6048:138::o;2868:586:13:-;3037:12;3118:10;692:3;3118:30;;;;:67;;-1:-1:-1;3160:10:13;3183:1;3152:19;;;:7;:19;;;;;;:33;:19;:33;;3118:67;3110:85;;;;;;;20291:2:63;3110:85:13;;;20273:21:63;20330:1;20310:18;;;20303:29;20368:7;20348:18;;;20341:35;20393:18;;3110:85:13;20089:328:63;3110:85:13;3277:46;3285:2;3289:5;3296:4;3302:9;3313;3277:7;:46::i;:::-;3267:56;;3337:7;3333:114;;;3351:38;;3378:10;;3351:38;;;;;3333:114;;;3409:38;;3436:10;;3409:38;;;;;3333:114;2868:586;;;;;;:::o;3805:959::-;3976:12;3990:23;4035:53;4061:2;4065:5;4072:4;4078:9;4035:25;:53::i;:::-;4025:63;;4235:4;4229:11;4477:4;4459:16;4455:27;4450:3;4446:37;4440:4;4433:51;4539:16;4534:3;4527:29;4633:16;4630:1;4623:4;4618:3;4614:14;4599:51;4745:3;4731:17;;;3805:959;;;;;;;:::o;643:464:21:-;718:12;742:19;774:11;:6;783:2;774:11;:::i;:::-;764:22;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;764:22:21;;742:44;;801:13;796:282;828:6;820:5;:14;796:282;;;964:18;;;958:25;1041:4;1030:16;;;1007:40;;;1000:54;976:5;836:7;976:5;836:7;:::i;:::-;;;;796:282;;;-1:-1:-1;1094:6:21;643:464;-1:-1:-1;;;643:464:21:o;1363:426:13:-;440:17:18;:15;:17::i;:::-;1491:20:13::1;::::0;::::1;::::0;;::::1;::::0;:50:::1;;-1:-1:-1::0;1515:26:13::1;::::0;::::1;692:3;1515:26;;1491:50;1483:68;;;::::0;::::1;::::0;;20857:2:63;1483:68:13::1;::::0;::::1;20839:21:63::0;20896:1;20876:18;;;20869:29;20934:7;20914:18;;;20907:35;20959:18;;1483:68:13::1;20655:328:63::0;1483:68:13::1;1610:29;:15:::0;;::::1;1637:1;1610:15:::0;;;:7:::1;:15;::::0;;;;;::::1;:29:::0;1602:47:::1;;;::::0;::::1;::::0;;21190:2:63;1602:47:13::1;::::0;::::1;21172:21:63::0;21229:1;21209:18;;;21202:29;21267:7;21247:18;;;21240:35;21292:18;;1602:47:13::1;20988:328:63::0;1602:47:13::1;1677:7;:25;::::0;;;;;;::::1;1659:15:::0;;::::1;1677:25;1659:15:::0;;;1677:25;1659:15;;;:43;;1677:25;;;::::1;1659:43:::0;;;::::1;;::::0;;;1712:25;;;;:34;;::::1;::::0;::::1;::::0;;;1761:21;15962:74:63;;;1761:21:13::1;::::0;15935:18:63;1761:21:13::1;;;;;;;;1363:426:::0;:::o;5589:360:14:-;440:17:18;:15;:17::i;:::-;5753:10:14::1;;5739;:24;;5731:42;;;::::0;::::1;::::0;;21523:2:63;5731:42:14::1;::::0;::::1;21505:21:63::0;21562:1;21542:18;;;21535:29;21600:7;21580:18;;;21573:35;21625:18;;5731:42:14::1;21321:328:63::0;5731:42:14::1;5857:1;5843:10;:15;;5835:33;;;::::0;::::1;::::0;;21856:2:63;5835:33:14::1;::::0;::::1;21838:21:63::0;21895:1;21875:18;;;21868:29;21933:7;21913:18;;;21906:35;21958:18;;5835:33:14::1;21654:328:63::0;5835:33:14::1;5878:9;:22:::0;;;5915:27:::1;::::0;160:25:63;;;5915:27:14::1;::::0;148:2:63;133:18;5915:27:14::1;14:177:63::0;5532:3628:9;5878:12;5902:14;6029:23;6071:444;6154:2;6178:5;6205:4;;6231:9;6262;6329:7;6358:8;6388;6418:14;6492:5;;6071:21;:444::i;:::-;6584:5;:7;;6029:486;;-1:-1:-1;6584:5:9;:7;;;:::i;:::-;;;;-1:-1:-1;;6614:21:9;;;;;;;-1:-1:-1;6649:47:9;6614:21;6624:10;6685;6649:15;:47::i;:::-;6015:692;6716:13;6732:10;1260:66:12;2086:11;;1887:226;6732:10:9;6716:26;-1:-1:-1;6770:19:9;;;;6766:547;;6815:5;6809:29;;;6900:2;6924:5;6951:4;;6977:9;7008;7075:7;7104:8;7134;7164:14;7238:10;7270;6809:489;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6766:547;7627:45;7655:16;:9;7667:4;7655:16;:::i;:::-;7647:2;7629:14;:9;7641:2;7629:14;:::i;:::-;7628:21;;;;:::i;:::-;7627:27;;:45::i;:::-;:51;;7675:3;7627:51;:::i;:::-;7614:9;:64;;7606:82;;;;;;;24525:2:63;7606:82:9;;;24507:21:63;24564:1;24544:18;;;24537:29;24602:7;24582:18;;;24575:35;24627:18;;7606:82:9;24323:328:63;7606:82:9;7801:15;7819:9;7801:27;;8107:83;8115:2;8119:5;8126:4;;8107:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8132:9;8143:8;8155:1;8143:13;:46;;8180:9;8107:7;:83::i;8143:46::-;8172:4;8160:9;:16;;;;:::i;:::-;8107:7;:83::i;:::-;8097:93;;8214:22;8226:9;8214:7;;:11;:22::i;:::-;8204:32;;8520:7;:25;;;-1:-1:-1;8531:14:9;;;8520:25;:42;;;-1:-1:-1;8549:13:9;;;8520:42;8512:60;;;;;;;24988:2:63;8512:60:9;;;24970:21:63;25027:1;25007:18;;;25000:29;25065:7;25045:18;;;25038:35;25090:18;;8512:60:9;24786:328:63;8512:60:9;8721:15;8758:12;;8754:128;;8800:67;8814:7;8823;8832:8;8842;8852:14;8800:13;:67::i;:::-;8790:77;;8754:128;8899:7;8895:108;;;8913:33;;;25293:25:63;;;25349:2;25334:18;;25327:34;;;8913:33:9;;25266:18:63;8913:33:9;;;;;;;8895:108;;;8970:33;;;25293:25:63;;;25349:2;25334:18;;25327:34;;;8970:33:9;;25266:18:63;8970:33:9;;;;;;;8895:108;-1:-1:-1;;9041:19:9;;;;9037:107;;9080:49;;;;;;;;25540:25:63;;;25608:14;;25601:22;25581:18;;;25574:50;9080:32:9;;;;;;25513:18:63;;9080:49:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9037:107;5892:3268;;5532:3628;;;;;;;;;;;;;:::o;10442:383::-;10660:9;;10728:14;10720:32;;;;;;;25837:2:63;10720:32:9;;;25819:21:63;25876:1;25856:18;;;25849:29;25914:7;25894:18;;;25887:35;25939:18;;10720:32:9;25635:328:63;10720:32:9;10762:56;10779:8;10789:4;10795:10;10807;10762:16;:56::i;:::-;10571:254;10442:383;;;:::o;6268:437:14:-;6310:16;6338:22;6377:10;;6363:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;6363:25:14;-1:-1:-1;520:3:14;6432:13;6482:23;;;:6;:23;;;;6338:50;;-1:-1:-1;6432:13:14;6482:23;;6515:162;6522:31;;;520:3;6522:31;6515:162;;6584:12;6569:5;6575;6569:12;;;;;;;;:::i;:::-;:27;;;;:12;;;;;;;;;;:27;;;;6625:20;;;;;;;:6;:20;;;;;;;;;6659:7;;;;:::i;:::-;;;;6515:162;;;-1:-1:-1;6693:5:14;;6268:437;-1:-1:-1;;6268:437:14:o;1740:486:21:-;2025:1;2022;2004:15;1998:22;1991:4;1974:15;1970:26;1954:14;1947:5;1934:93;2054:7;2048:4;2041:21;;2088:16;2082:4;2075:30;2142:16;2139:1;2133:4;2118:41;2204:4;2186:16;2182:27;2179:1;2172:38;3354:1151:9;3753:32;3765:7;;3753:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3774:10:9;;-1:-1:-1;3753:11:9;;-1:-1:-1;;3753:32:9:i;:::-;3799:29;;;;3795:78;;3830:43;3857:15;469:66:11;747:21;542:242;3830:43:9;4008:22;4021:2;4025:4;;4008:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4008:12:9;;-1:-1:-1;;;4008:22:9:i;:::-;4045:11;;4041:380;;4351:59;4365:7;4374:1;4377;4380:12;4394:15;4351:13;:59::i;:::-;;4041:380;4445:10;4435:63;;;4457:7;;4466:10;4478:2;4482:15;4435:63;;;;;;;;;;:::i;:::-;;;;;;;;3354:1151;;;;;;;;;;:::o;15971:533::-;16124:7;16143:16;16162:9;16143:28;;16276:46;16284:2;16288:5;16295:4;;16276:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;16301:9:9;;-1:-1:-1;;;16312:9:9;16276:7;:46::i;:::-;16268:55;;;;;;16333:19;16366:9;16355:20;;:8;:20;:::i;:::-;16333:42;;16483:11;16466:29;;;;;;27322:19:63;;27366:2;27357:12;;27193:182;16466:29:9;;;;;;;;;;;;;;;16452:45;;;;;;;;:::i;5257:775:13:-;5342:22;5366:12;5453:8;5439:23;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;5439:23:13;-1:-1:-1;5563:14:13;;;;5506:19;5563:14;;;:7;:14;;;;;;5431:31;;-1:-1:-1;5506:19:13;5563:14;5587:239;5594:29;;;;;;;:66;;-1:-1:-1;5627:33:13;;;692:3;5627:33;;5594:66;:92;;;;;5678:8;5664:11;:22;5594:92;5587:239;;;5723:13;5702:5;5708:11;5702:18;;;;;;;;:::i;:::-;:34;;;;:18;;;;;;;;;;:34;;;;5766:22;;;;;;;:7;:22;;;;;;;;;5802:13;;;;:::i;:::-;;;;5587:239;;;5990:26;;;5997:5;;5842:13;;-1:-1:-1;5257:775:13;;-1:-1:-1;;5257:775:13:o;16751:228:9:-;16829:10;16852:1;16822:18;;;:6;:18;;;;;;:32;:18;16814:50;;;;;;;27582:2:63;16814:50:9;;;27564:21:63;27621:1;27601:18;;;27594:29;27659:7;27639:18;;;27632:35;27684:18;;16814:50:9;27380:328:63;16814:50:9;16889:10;16874:26;;;;:14;:26;;;;;;;;:41;;;;;;;;;16918:1;16874:45;;16934:38;16901:13;;16934:38;;;16751:228;:::o;19771:478::-;20092:7;20128:113;20150:2;20154:5;20161:4;;20167:9;20178;20189:7;20198:8;20208;20218:14;20234:6;20128:21;:113::i;:::-;20118:124;;;;;;20111:131;;19771:478;;;;;;;;;;;;;:::o;2109:423:13:-;440:17:18;:15;:17::i;:::-;2286:20:13::1;::::0;::::1;::::0;;::::1;::::0;:50:::1;;-1:-1:-1::0;2310:26:13::1;::::0;::::1;692:3;2310:26;;2286:50;2278:68;;;::::0;::::1;::::0;;20857:2:63;2278:68:13::1;::::0;::::1;20839:21:63::0;20896:1;20876:18;;;20869:29;20934:7;20914:18;;;20907:35;20959:18;;2278:68:13::1;20655:328:63::0;2278:68:13::1;2364:29;:19:::0;;::::1;;::::0;;;:7:::1;:19;::::0;;;;;;::::1;:29:::0;;::::1;;2356:47;;;::::0;::::1;::::0;;27915:2:63;2356:47:13::1;::::0;::::1;27897:21:63::0;27954:1;27934:18;;;27927:29;27992:7;27972:18;;;27965:35;28017:18;;2356:47:13::1;27713:328:63::0;2356:47:13::1;2435:15;::::0;;::::1;;::::0;;;:7:::1;:15;::::0;;;;;;;;;2413:19;;::::1;::::0;;;;;:37;;2435:15;;;::::1;2413:37:::0;;;::::1;;::::0;;;2460:15;;;;:28;;;;::::1;::::0;;;2503:22;;15962:74:63;;;2503:22:13::1;::::0;15935:18:63;2503:22:13::1;;;;;;;;2109:423:::0;;:::o;1495:386:12:-;440:17:18;:15;:17::i;:::-;1562:19:12::1;::::0;::::1;::::0;1558:123:::1;;1605:55;::::0;;;;1636:23:::1;1605:55;::::0;::::1;28190:98:63::0;1605:30:12::1;::::0;::::1;::::0;::::1;::::0;28163:18:63;;1605:55:12::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1597:73;;;::::0;::::1;::::0;;28783:2:63;1597:73:12::1;::::0;::::1;28765:21:63::0;28822:1;28802:18;;;28795:29;28860:7;28840:18;;;28833:35;28885:18;;1597:73:12::1;28581:328:63::0;1597:73:12::1;1260:66;1812:19:::0;;;1855::::1;::::0;15992:42:63;15980:55;;15962:74;;1855:19:12::1;::::0;15950:2:63;15935:18;1855:19:12::1;15816:226:63::0;4507:826:14;440:17:18;:15;:17::i;:::-;4721:22:14::1;::::0;::::1;::::0;;::::1;::::0;:53:::1;;-1:-1:-1::0;4747:27:14::1;::::0;::::1;520:3;4747:27;;4721:53;:82;;;;-1:-1:-1::0;4778:25:14::1;::::0;::::1;4798:4;4778:25;;4721:82;4713:100;;;::::0;::::1;::::0;;14963:2:63;4713:100:14::1;::::0;::::1;14945:21:63::0;15002:1;14982:18;;;14975:29;15040:7;15020:18;;;15013:35;15065:18;;4713:100:14::1;14761:328:63::0;4713:100:14::1;4871:30;:16:::0;;::::1;4899:1;4871:16:::0;;;:6:::1;:16;::::0;;;;;::::1;:30:::0;4863:48:::1;;;::::0;::::1;::::0;;15296:2:63;4863:48:14::1;::::0;::::1;15278:21:63::0;15335:1;15315:18;;;15308:29;15373:7;15353:18;;;15346:35;15398:18;;4863:48:14::1;15094:328:63::0;4863:48:14::1;5012:22;::::0;::::1;::::0;;::::1;::::0;:53:::1;;-1:-1:-1::0;5038:27:14::1;::::0;::::1;520:3;5038:27;;5012:53;5004:71;;;::::0;::::1;::::0;;14963:2:63;5004:71:14::1;::::0;::::1;14945:21:63::0;15002:1;14982:18;;;14975:29;15040:7;15020:18;;;15013:35;15065:18;;5004:71:14::1;14761:328:63::0;5004:71:14::1;5093:29;:17:::0;;::::1;;::::0;;;:6:::1;:17;::::0;;;;;;::::1;:29:::0;;::::1;;5085:47;;;::::0;::::1;::::0;;29116:2:63;5085:47:14::1;::::0;::::1;29098:21:63::0;29155:1;29135:18;;;29128:29;29193:7;29173:18;;;29166:35;29218:18;;5085:47:14::1;28914:328:63::0;5085:47:14::1;5161:16;::::0;;::::1;;::::0;;;:6:::1;:16;::::0;;;;;;;;;5142;;::::1;::::0;;;;;;:35;;5161:16;;::::1;5142:35:::0;;;::::1;;::::0;;5187:17;;::::1;::::0;;;;;:28;;;::::1;::::0;;::::1;::::0;;;5225:16;;;;:29;;;;::::1;::::0;;;5269:22;;15962:74:63;;;5269:22:14::1;::::0;15935:18:63;5269:22:14::1;;;;;;;5306:20;::::0;15992:42:63;15980:55;;15962:74;;5306:20:14::1;::::0;15950:2:63;15935:18;5306:20:14::1;;;;;;;4507:826:::0;;;:::o;18195:890:9:-;18519:12;18543:18;1531:66;18635:16;;18673:2;18697:5;18734:4;;18724:15;;;;;;;:::i;:::-;;;;;;;;;18603:369;;;;;18761:9;;18792;;18823:7;;18852:8;;18882;;18912:14;;18948:6;;18603:369;;;:::i;:::-;;;;;;;;;;;;;;18576:410;;18603:369;18576:410;;;;;-1:-1:-1;19020:12:9;19034;19048:17;17307:7;1208:66;17209:9;17343:57;;;;;;31254:25:63;;;;31295:18;;31288:34;17395:4:9;31338:18:63;;;31331:83;31227:18;;17343:57:9;;;;;;;;;;;;17333:68;;;;;;17326:75;;17259:149;;19048:17;19003:75;;30764:66:63;30851:15;;;19003:75:9;;;30839:28:63;30896:15;;;;30883:11;;;30876:36;30928:11;;;30921:27;30964:12;;;30957:28;;;31001:12;;19003:75:9;;;;;;;;;;;;18996:82;;;18195:890;;;;;;;;;;;;;:::o;1051:161:11:-;440:17:18;:15;:17::i;:::-;1124:35:11::1;1151:7;469:66:::0;747:21;542:242;1124:35:::1;1174:31;::::0;15992:42:63;15980:55;;15962:74;;1174:31:11::1;::::0;15950:2:63;15935:18;1174:31:11::1;15816:226:63::0;3371:727:14;440:17:18;:15;:17::i;:::-;3607:10:14::1;3602:1;3589:10;;:14;;;;:::i;:::-;:28;;3581:46;;;::::0;::::1;::::0;;21523:2:63;3581:46:14::1;::::0;::::1;21505:21:63::0;21562:1;21542:18;;;21535:29;21600:7;21580:18;;;21573:35;21625:18;;3581:46:14::1;21321:328:63::0;3581:46:14::1;3725:19;::::0;::::1;::::0;;::::1;::::0;:47:::1;;-1:-1:-1::0;3748:24:14::1;::::0;::::1;520:3;3748:24;;3725:47;3717:65;;;::::0;::::1;::::0;;14963:2:63;3717:65:14::1;::::0;::::1;14945:21:63::0;15002:1;14982:18;;;14975:29;15040:7;15020:18;;;15013:35;15065:18;;3717:65:14::1;14761:328:63::0;3717:65:14::1;3800:26;:17:::0;;::::1;;::::0;;;:6:::1;:17;::::0;;;;;;::::1;:26:::0;;::::1;;3792:44;;;::::0;::::1;::::0;;29116:2:63;3792:44:14::1;::::0;::::1;29098:21:63::0;29155:1;29135:18;;;29128:29;29193:7;29173:18;;;29166:35;29218:18;;3792:44:14::1;28914:328:63::0;3792:44:14::1;3866:13;::::0;;::::1;;::::0;;;:6:::1;:13;::::0;;;;;;;3846:17;;::::1;::::0;;;;;:33;;3866:13;;;::::1;3846:33:::0;;;::::1;;::::0;;;3889:13;;;:26;;;;::::1;::::0;;;3925:10:::1;:12:::0;;;::::1;::::0;::::1;:::i;:::-;::::0;;;-1:-1:-1;;3952:19:14::1;::::0;15992:42:63;15980:55;;15962:74;;3952:19:14::1;::::0;15950:2:63;15935:18;3952:19:14::1;;;;;;;4052:10;4039:9;;:23;4035:56;;4064:27;4080:10;4064:15;:27::i;:::-;3371:727:::0;;;:::o;231:102:18:-;289:10;311:4;289:27;281:45;;;;;;;31828:2:63;281:45:18;;;31810:21:63;31867:1;31847:18;;;31840:29;31905:7;31885:18;;;31878:35;31930:18;;281:45:18;31626:328:63;281:45:18;231:102::o;392:421:22:-;450:7;690:6;686:45;;-1:-1:-1;719:1:22;712:8;;686:45;741:9;753:5;757:1;753;:5;:::i;:::-;741:17;-1:-1:-1;785:1:22;776:5;780:1;741:17;776:5;:::i;:::-;:10;768:19;;;;;;805:1;392:421;-1:-1:-1;;;392:421:22:o;1154:145::-;1212:7;;1243:5;1247:1;1243;:5;:::i;:::-;1231:17;;1271:1;1266;:6;;1258:15;;;;;242:639:10;410:12;451:27;438:9;:40;;;;;;;;:::i;:::-;;434:441;;;649:1;646;639:4;633:11;626:4;620;616:15;612:2;605:5;592:59;581:70;;434:441;;;849:1;846;839:4;833:11;826:4;820;816:15;809:5;805:2;798:5;793:58;782:69;;434:441;242:639;;;;;;;:::o;1369:105:22:-;1427:7;1458:1;1453;:6;;:14;;1466:1;1453:14;;;-1:-1:-1;1462:1:22;;1446:21;-1:-1:-1;1369:105:22:o;936:145::-;994:7;1026:1;1021;:6;;1013:15;;;;;;1038:9;1050:5;1054:1;1050;:5;:::i;9166:821:9:-;9354:15;;9461:28;;;;:66;;9513:14;9461:66;;;9500:9;9461:66;9434:93;-1:-1:-1;9541:22:9;;;9537:444;;9694:73;9730:11;9719:8;:22;:47;;9755:11;9719:47;;;9744:8;9719:47;9694:20;:7;9706;9694:11;:20::i;:::-;:24;;:73::i;:::-;9789:22;;9684:83;;-1:-1:-1;9789:13:9;;;;:22;;;;;9684:83;;9789:22;;;;9684:83;9789:13;:22;;;;;;;9781:40;;;;;;;32161:2:63;9781:40:9;;;32143:21:63;32200:1;32180:18;;;32173:29;32238:7;32218:18;;;32211:35;32263:18;;9781:40:9;31959:328:63;9781:40:9;9537:444;;;9862:34;9887:8;9862:20;:7;9874;9862:11;:20::i;:34::-;9852:44;;9918:42;9932:8;9942;9952:7;9918:13;:42::i;:::-;9910:60;;;;;;;32494:2:63;9910:60:9;;;32476:21:63;32533:1;32513:18;;;32506:29;32571:7;32551:18;;;32544:35;32596:18;;9910:60:9;32292:328:63;9910:60:9;9371:616;9166:821;;;;;;;:::o;835:1136:14:-;1053:9;;:14;1045:32;;;;;;;32827:2:63;1045:32:14;;;32809:21:63;32866:1;32846:18;;;32839:29;32904:7;32884:18;;;32877:35;32929:18;;1045:32:14;32625:328:63;1045:32:14;1184:7;:14;1170:10;:28;;1162:46;;;;;;;21523:2:63;1162:46:14;;;21505:21:63;21562:1;21542:18;;;21535:29;21600:7;21580:18;;;21573:35;21625:18;;1162:46:14;21321:328:63;1162:46:14;1292:1;1278:10;:15;;1270:33;;;;;;;21856:2:63;1270:33:14;;;21838:21:63;21895:1;21875:18;;;21868:29;21933:7;21913:18;;;21906:35;21958:18;;1270:33:14;21654:328:63;1270:33:14;520:3;1350:20;1398:450;1422:7;:14;1418:1;:18;1398:450;;;1502:13;1518:7;1526:1;1518:10;;;;;;;;:::i;:::-;;;;;;;1502:26;;1567:1;1550:19;;:5;:19;;;;:47;;;;-1:-1:-1;1573:24:14;;;520:3;1573:24;;1550:47;:73;;;;-1:-1:-1;1601:22:14;;;1618:4;1601:22;;1550:73;:98;;;;;1643:5;1627:21;;:12;:21;;;;1550:98;1542:116;;;;;;;14963:2:63;1542:116:14;;;14945:21:63;15002:1;14982:18;;;14975:29;15040:7;15020:18;;;15013:35;15065:18;;1542:116:14;14761:328:63;1542:116:14;1724:27;:13;;;1749:1;1724:13;;;:6;:13;;;;;;;:27;1716:45;;;;;;;15296:2:63;1716:45:14;;;15278:21:63;15335:1;15315:18;;;15308:29;15373:7;15353:18;;;15346:35;15398:18;;1716:45:14;15094:328:63;1716:45:14;1775:20;;;;;;;;:6;:20;;;;;:28;;;;;;;;;;;;;;1438:3;;;;:::i;:::-;;;;1398:450;;;-1:-1:-1;1857:20:14;;;;;;:6;:20;;;;;:38;;;;520:3;1857:38;;;1918:14;;1905:10;:27;1942:9;:22;835:1136::o;754:384:13:-;834:7;871:1;834:25;;;;;;;:39;:25;:39;826:57;;;;;;;33160:2:63;826:57:13;;;33142:21:63;33199:1;33179:18;;;33172:29;33237:7;33217:18;;;33210:35;33262:18;;826:57:13;32958:328:63;826:57:13;692:3;893:25;;;;;;;;;:44;;;;;;;;;:25;951:16;;;947:184;;1061:60;1069:2;1073:1;1076:4;1082:27;1111:9;1061:7;:60::i;:::-;1053:78;;;;;;;33493:2:63;1053:78:13;;;33475:21:63;33532:1;33512:18;;;33505:29;33570:7;33550:18;;;33543:35;33595:18;;1053:78:13;33291:328:63;478:970:17;707:52;;;33828:42:63;33816:55;;707:52:17;;;33798:74:63;33888:18;;;;33881:34;;;707:52:17;;;;;;;;;;33771:18:63;;;;707:52:17;;;;;;;;;;;;;;;1081:11;;-1:-1:-1;;707:52:17;;-1:-1:-1;;1081:11:17;-1:-1:-1;1054:5:17;1046;1039;1035:17;1030:72;1122:16;1155:69;;;;1246:4;1241:110;;;;1413:1;1398:16;;1115:317;;1155:69;1199:7;1184:22;;1155:69;;1241:110;1328:1;1322:8;1315:16;1305:7;1298:15;1295:37;1288:45;1273:60;;1115:317;;;834:608;478:970;;;;;:::o;196:154:63:-;282:42;275:5;271:54;264:5;261:65;251:93;;340:1;337;330:12;251:93;196:154;:::o;355:134::-;423:20;;452:31;423:20;452:31;:::i;:::-;355:134;;;:::o;494:315::-;562:6;570;623:2;611:9;602:7;598:23;594:32;591:52;;;639:1;636;629:12;591:52;678:9;665:23;697:31;722:5;697:31;:::i;:::-;747:5;799:2;784:18;;;;771:32;;-1:-1:-1;;;494:315:63:o;814:184::-;866:77;863:1;856:88;963:4;960:1;953:15;987:4;984:1;977:15;1003:777;1045:5;1098:3;1091:4;1083:6;1079:17;1075:27;1065:55;;1116:1;1113;1106:12;1065:55;1152:6;1139:20;1178:18;1215:2;1211;1208:10;1205:36;;;1221:18;;:::i;:::-;1355:2;1349:9;1417:4;1409:13;;1260:66;1405:22;;;1429:2;1401:31;1397:40;1385:53;;;1453:18;;;1473:22;;;1450:46;1447:72;;;1499:18;;:::i;:::-;1539:10;1535:2;1528:22;1574:2;1566:6;1559:18;1620:3;1613:4;1608:2;1600:6;1596:15;1592:26;1589:35;1586:55;;;1637:1;1634;1627:12;1586:55;1701:2;1694:4;1686:6;1682:17;1675:4;1667:6;1663:17;1650:54;1748:1;1741:4;1736:2;1728:6;1724:15;1720:26;1713:37;1768:6;1759:15;;;;;;1003:777;;;;:::o;1785:676::-;1889:6;1897;1905;1913;1966:3;1954:9;1945:7;1941:23;1937:33;1934:53;;;1983:1;1980;1973:12;1934:53;2019:9;2006:23;1996:33;;2080:2;2069:9;2065:18;2052:32;2103:18;2144:2;2136:6;2133:14;2130:34;;;2160:1;2157;2150:12;2130:34;2183:49;2224:7;2215:6;2204:9;2200:22;2183:49;:::i;:::-;2173:59;;2285:2;2274:9;2270:18;2257:32;2241:48;;2314:2;2304:8;2301:16;2298:36;;;2330:1;2327;2320:12;2298:36;;2353:51;2396:7;2385:8;2374:9;2370:24;2353:51;:::i;:::-;1785:676;;;;-1:-1:-1;2343:61:63;;2451:2;2436:18;2423:32;;-1:-1:-1;;;1785:676:63:o;2466:247::-;2525:6;2578:2;2566:9;2557:7;2553:23;2549:32;2546:52;;;2594:1;2591;2584:12;2546:52;2633:9;2620:23;2652:31;2677:5;2652:31;:::i;2910:150::-;2985:20;;3034:1;3024:12;;3014:40;;3050:1;3047;3040:12;3065:620;3175:6;3183;3191;3199;3252:3;3240:9;3231:7;3227:23;3223:33;3220:53;;;3269:1;3266;3259:12;3220:53;3308:9;3295:23;3327:31;3352:5;3327:31;:::i;:::-;3377:5;-1:-1:-1;3429:2:63;3414:18;;3401:32;;-1:-1:-1;3484:2:63;3469:18;;3456:32;3511:18;3500:30;;3497:50;;;3543:1;3540;3533:12;3497:50;3566:49;3607:7;3598:6;3587:9;3583:22;3566:49;:::i;:::-;3556:59;;;3634:45;3675:2;3664:9;3660:18;3634:45;:::i;:::-;3624:55;;3065:620;;;;;;;:::o;3690:530::-;3731:3;3769:5;3763:12;3796:6;3791:3;3784:19;3821:1;3831:162;3845:6;3842:1;3839:13;3831:162;;;3907:4;3963:13;;;3959:22;;3953:29;3935:11;;;3931:20;;3924:59;3860:12;3831:162;;;4011:6;4008:1;4005:13;4002:87;;;4077:1;4070:4;4061:6;4056:3;4052:16;4048:27;4041:38;4002:87;-1:-1:-1;4134:2:63;4122:15;4139:66;4118:88;4109:98;;;;4209:4;4105:109;;3690:530;-1:-1:-1;;3690:530:63:o;4225:298::-;4408:6;4401:14;4394:22;4383:9;4376:41;4453:2;4448;4437:9;4433:18;4426:30;4357:4;4473:44;4513:2;4502:9;4498:18;4490:6;4473:44;:::i;4528:248::-;4596:6;4604;4657:2;4645:9;4636:7;4632:23;4628:32;4625:52;;;4673:1;4670;4663:12;4625:52;-1:-1:-1;;4696:23:63;;;4766:2;4751:18;;;4738:32;;-1:-1:-1;4528:248:63:o;4781:217::-;4928:2;4917:9;4910:21;4891:4;4948:44;4988:2;4977:9;4973:18;4965:6;4948:44;:::i;5003:180::-;5062:6;5115:2;5103:9;5094:7;5090:23;5086:32;5083:52;;;5131:1;5128;5121:12;5083:52;-1:-1:-1;5154:23:63;;5003:180;-1:-1:-1;5003:180:63:o;5373:347::-;5424:8;5434:6;5488:3;5481:4;5473:6;5469:17;5465:27;5455:55;;5506:1;5503;5496:12;5455:55;-1:-1:-1;5529:20:63;;5572:18;5561:30;;5558:50;;;5604:1;5601;5594:12;5558:50;5641:4;5633:6;5629:17;5617:29;;5693:3;5686:4;5677:6;5669;5665:19;5661:30;5658:39;5655:59;;;5710:1;5707;5700:12;5655:59;5373:347;;;;;:::o;5725:1224::-;5908:6;5916;5924;5932;5940;5948;5956;5964;5972;5980;5988:7;6042:3;6030:9;6021:7;6017:23;6013:33;6010:53;;;6059:1;6056;6049:12;6010:53;6082:29;6101:9;6082:29;:::i;:::-;6072:39;;6158:2;6147:9;6143:18;6130:32;6120:42;;6181:18;6248:2;6242;6231:9;6227:18;6214:32;6211:40;6208:60;;;6264:1;6261;6254:12;6208:60;6303:84;6379:7;6372:2;6361:9;6357:18;6344:32;6333:9;6329:48;6303:84;:::i;:::-;6406:8;;-1:-1:-1;6433:8:63;-1:-1:-1;6460:45:63;6501:2;6486:18;;6460:45;:::i;:::-;6450:55;;6552:3;6541:9;6537:19;6524:33;6514:43;;6604:3;6593:9;6589:19;6576:33;6566:43;;6656:3;6645:9;6641:19;6628:33;6618:43;;6680:39;6714:3;6703:9;6699:19;6680:39;:::i;:::-;6670:49;;6738:39;6772:3;6761:9;6757:19;6738:39;:::i;:::-;6728:49;;6827:2;6820:3;6809:9;6805:19;6792:33;6789:41;6786:61;;;6843:1;6840;6833:12;6786:61;;6867:76;6935:7;6927:3;6916:9;6912:19;6899:33;6888:9;6884:49;6867:76;:::i;:::-;6856:87;;5725:1224;;;;;;;;;;;;;;:::o;7274:607::-;7369:6;7377;7385;7438:2;7426:9;7417:7;7413:23;7409:32;7406:52;;;7454:1;7451;7444:12;7406:52;7490:9;7477:23;7467:33;;7551:2;7540:9;7536:18;7523:32;7574:18;7615:2;7607:6;7604:14;7601:34;;;7631:1;7628;7621:12;7601:34;7654:49;7695:7;7686:6;7675:9;7671:22;7654:49;:::i;:::-;7644:59;;7756:2;7745:9;7741:18;7728:32;7712:48;;7785:2;7775:8;7772:16;7769:36;;;7801:1;7798;7791:12;7769:36;;7824:51;7867:7;7856:8;7845:9;7841:24;7824:51;:::i;:::-;7814:61;;;7274:607;;;;;:::o;8018:484::-;8071:3;8109:5;8103:12;8136:6;8131:3;8124:19;8162:4;8191:2;8186:3;8182:12;8175:19;;8228:2;8221:5;8217:14;8249:1;8259:218;8273:6;8270:1;8267:13;8259:218;;;8338:13;;8353:42;8334:62;8322:75;;8417:12;;;;8452:15;;;;8295:1;8288:9;8259:218;;;-1:-1:-1;8493:3:63;;8018:484;-1:-1:-1;;;;;8018:484:63:o;8507:261::-;8686:2;8675:9;8668:21;8649:4;8706:56;8758:2;8747:9;8743:18;8735:6;8706:56;:::i;8773:455::-;8850:6;8858;8911:2;8899:9;8890:7;8886:23;8882:32;8879:52;;;8927:1;8924;8917:12;8879:52;8966:9;8953:23;8985:31;9010:5;8985:31;:::i;:::-;9035:5;-1:-1:-1;9091:2:63;9076:18;;9063:32;9118:18;9107:30;;9104:50;;;9150:1;9147;9140:12;9104:50;9173:49;9214:7;9205:6;9194:9;9190:22;9173:49;:::i;:::-;9163:59;;;8773:455;;;;;:::o;9233:1353::-;9401:6;9409;9417;9425;9433;9441;9449;9457;9465;9473;9526:3;9514:9;9505:7;9501:23;9497:33;9494:53;;;9543:1;9540;9533:12;9494:53;9583:9;9570:23;9612:18;9653:2;9645:6;9642:14;9639:34;;;9669:1;9666;9659:12;9639:34;9707:6;9696:9;9692:22;9682:32;;9752:7;9745:4;9741:2;9737:13;9733:27;9723:55;;9774:1;9771;9764:12;9723:55;9814:2;9801:16;9840:2;9832:6;9829:14;9826:34;;;9856:1;9853;9846:12;9826:34;9911:7;9904:4;9894:6;9891:1;9887:14;9883:2;9879:23;9875:34;9872:47;9869:67;;;9932:1;9929;9922:12;9869:67;9963:4;9955:13;;;;-1:-1:-1;9987:6:63;;-1:-1:-1;10025:20:63;;10012:34;;-1:-1:-1;10065:38:63;10099:2;10084:18;;10065:38;:::i;:::-;10055:48;;10156:2;10145:9;10141:18;10128:32;10112:48;;10185:2;10175:8;10172:16;10169:36;;;10201:1;10198;10191:12;10169:36;;10240:60;10292:7;10281:8;10270:9;10266:24;10240:60;:::i;:::-;10319:8;;-1:-1:-1;10214:86:63;-1:-1:-1;10373:39:63;;-1:-1:-1;10407:3:63;10392:19;;10373:39;:::i;:::-;10363:49;;10431:39;10465:3;10454:9;10450:19;10431:39;:::i;:::-;10421:49;;10517:3;10506:9;10502:19;10489:33;10479:43;;10541:39;10575:3;10564:9;10560:19;10541:39;:::i;:::-;10531:49;;9233:1353;;;;;;;;;;;;;:::o;10591:709::-;10703:6;10711;10719;10727;10735;10788:3;10776:9;10767:7;10763:23;10759:33;10756:53;;;10805:1;10802;10795:12;10756:53;10844:9;10831:23;10863:31;10888:5;10863:31;:::i;:::-;10913:5;-1:-1:-1;10965:2:63;10950:18;;10937:32;;-1:-1:-1;11020:2:63;11005:18;;10992:32;11047:18;11036:30;;11033:50;;;11079:1;11076;11069:12;11033:50;11118:58;11168:7;11159:6;11148:9;11144:22;11118:58;:::i;:::-;11195:8;;-1:-1:-1;11092:84:63;-1:-1:-1;11249:45:63;;-1:-1:-1;11290:2:63;11275:18;;11249:45;:::i;:::-;11239:55;;10591:709;;;;;;;;:::o;11305:381::-;11512:2;11501:9;11494:21;11475:4;11532:56;11584:2;11573:9;11569:18;11561:6;11532:56;:::i;:::-;11524:64;;11636:42;11628:6;11624:55;11619:2;11608:9;11604:18;11597:83;11305:381;;;;;:::o;11691:1271::-;11857:6;11865;11873;11881;11889;11897;11905;11913;11921;11929;11937:7;11991:3;11979:9;11970:7;11966:23;11962:33;11959:53;;;12008:1;12005;11998:12;11959:53;12047:9;12034:23;12066:31;12091:5;12066:31;:::i;:::-;12116:5;-1:-1:-1;12168:2:63;12153:18;;12140:32;;-1:-1:-1;12223:2:63;12208:18;;12195:32;12250:18;12239:30;;12236:50;;;12282:1;12279;12272:12;12236:50;12321:58;12371:7;12362:6;12351:9;12347:22;12321:58;:::i;:::-;12398:8;;-1:-1:-1;12295:84:63;-1:-1:-1;12452:45:63;;-1:-1:-1;12493:2:63;12478:18;;12452:45;:::i;:::-;12442:55;;12544:3;12533:9;12529:19;12516:33;12506:43;;12596:3;12585:9;12581:19;12568:33;12558:43;;12648:3;12637:9;12633:19;12620:33;12610:43;;12705:3;12694:9;12690:19;12677:33;12719;12744:7;12719:33;:::i;:::-;12771:7;-1:-1:-1;12830:3:63;12815:19;;12802:33;12844;12802;12844;:::i;:::-;12896:7;12886:17;;;12951:3;12940:9;12936:19;12923:33;12912:44;;11691:1271;;;;;;;;;;;;;;:::o;13149:388::-;13217:6;13225;13278:2;13266:9;13257:7;13253:23;13249:32;13246:52;;;13294:1;13291;13284:12;13246:52;13333:9;13320:23;13352:31;13377:5;13352:31;:::i;:::-;13402:5;-1:-1:-1;13459:2:63;13444:18;;13431:32;13472:33;13431:32;13472:33;:::i;:::-;13524:7;13514:17;;;13149:388;;;;;:::o;13542:529::-;13619:6;13627;13635;13688:2;13676:9;13667:7;13663:23;13659:32;13656:52;;;13704:1;13701;13694:12;13656:52;13743:9;13730:23;13762:31;13787:5;13762:31;:::i;:::-;13812:5;-1:-1:-1;13869:2:63;13854:18;;13841:32;13882:33;13841:32;13882:33;:::i;:::-;13934:7;-1:-1:-1;13993:2:63;13978:18;;13965:32;14006:33;13965:32;14006:33;:::i;:::-;14058:7;14048:17;;;13542:529;;;;;:::o;14076:456::-;14153:6;14161;14169;14222:2;14210:9;14201:7;14197:23;14193:32;14190:52;;;14238:1;14235;14228:12;14190:52;14277:9;14264:23;14296:31;14321:5;14296:31;:::i;:::-;14346:5;-1:-1:-1;14403:2:63;14388:18;;14375:32;14416:33;14375:32;14416:33;:::i;:::-;14076:456;;14468:7;;-1:-1:-1;;;14522:2:63;14507:18;;;;14494:32;;14076:456::o;15427:184::-;15479:77;15476:1;15469:88;15576:4;15573:1;15566:15;15600:4;15597:1;15590:15;15616:195;15655:3;15686:66;15679:5;15676:77;15673:103;;;15756:18;;:::i;:::-;-1:-1:-1;15803:1:63;15792:13;;15616:195::o;17379:377::-;17572:2;17561:9;17554:21;17535:4;17598:44;17638:2;17627:9;17623:18;17615:6;17598:44;:::i;:::-;17690:9;17682:6;17678:22;17673:2;17662:9;17658:18;17651:50;17718:32;17743:6;17735;17718:32;:::i;17761:336::-;17830:6;17883:2;17871:9;17862:7;17858:23;17854:32;17851:52;;;17899:1;17896;17889:12;17851:52;17931:9;17925:16;17981:66;17974:5;17970:78;17963:5;17960:89;17950:117;;18063:1;18060;18053:12;19153:195;19191:4;19228;19225:1;19221:12;19260:4;19257:1;19253:12;19285:3;19280;19277:12;19274:38;;;19292:18;;:::i;:::-;19329:13;;;19153:195;-1:-1:-1;;;19153:195:63:o;20422:228::-;20462:7;20588:1;20520:66;20516:74;20513:1;20510:81;20505:1;20498:9;20491:17;20487:105;20484:131;;;20595:18;;:::i;:::-;-1:-1:-1;20635:9:63;;20422:228::o;21987:184::-;22039:77;22036:1;22029:88;22136:4;22133:1;22126:15;22160:4;22157:1;22150:15;22176:294;22257:1;22250:5;22247:12;22237:200;;22293:77;22290:1;22283:88;22394:4;22391:1;22384:15;22422:4;22419:1;22412:15;22237:200;22446:18;;22176:294::o;22475:1431::-;22924:4;22953:3;22995:42;22987:6;22983:55;22972:9;22965:74;23075:6;23070:2;23059:9;23055:18;23048:34;23118:2;23113;23102:9;23098:18;23091:30;23157:6;23152:2;23141:9;23137:18;23130:34;;23183:3;23236:6;23228;23223:2;23212:9;23208:18;23195:48;23292:1;23287:2;23278:6;23267:9;23263:22;23259:31;23252:42;23349:66;23344:2;23336:6;23332:15;23328:88;23317:9;23313:104;23426:53;23475:2;23464:9;23460:18;23452:6;23426:53;:::i;:::-;23516:6;23510:3;23499:9;23495:19;23488:35;23560:6;23554:3;23543:9;23539:19;23532:35;23604:6;23598:3;23587:9;23583:19;23576:35;23620:47;23662:3;23651:9;23647:19;23639:6;7963:42;7952:54;7940:67;;7886:127;23620:47;7963:42;7952:54;;23718:3;23703:19;;7940:67;23784:2;23772:9;23768:2;23764:18;23760:27;23754:3;23743:9;23739:19;23732:56;23805:38;23839:2;23835;23831:11;23822:7;23805:38;:::i;:::-;23797:46;;;;23852:48;23895:3;23884:9;23880:19;23871:7;7963:42;7952:54;7940:67;;7886:127;23852:48;22475:1431;;;;;;;;;;;;;;;:::o;23911:128::-;23951:3;23982:1;23978:6;23975:1;23972:13;23969:39;;;23988:18;;:::i;:::-;-1:-1:-1;24024:9:63;;23911:128::o;24044:274::-;24084:1;24110;24100:189;;24145:77;24142:1;24135:88;24246:4;24243:1;24236:15;24274:4;24271:1;24264:15;24100:189;-1:-1:-1;24303:9:63;;24044:274::o;24656:125::-;24696:4;24724:1;24721;24718:8;24715:34;;;24729:18;;:::i;:::-;-1:-1:-1;24766:9:63;;24656:125::o;25968:184::-;26020:77;26017:1;26010:88;26117:4;26114:1;26107:15;26141:4;26138:1;26131:15;26157:1031;26441:3;26454:22;;;26426:19;;26511:22;;;26393:4;26591:6;26564:3;26549:19;;26393:4;26625:327;26639:6;26636:1;26633:13;26625:327;;;26714:6;26701:20;26734:31;26759:5;26734:31;:::i;:::-;26801:42;26790:54;26778:67;;26868:4;26927:15;;;;26892:12;;;;26661:1;26654:9;26625:327;;;-1:-1:-1;27003:4:63;26988:20;;26981:36;;;;-1:-1:-1;;27036:42:63;27114:15;;;27109:2;27094:18;;27087:43;27166:15;;27161:2;27146:18;;;27139:43;26969:3;26157:1031;-1:-1:-1;;26157:1031:63:o;28299:277::-;28366:6;28419:2;28407:9;28398:7;28394:23;28390:32;28387:52;;;28435:1;28432;28425:12;28387:52;28467:9;28461:16;28520:5;28513:13;28506:21;28499:5;28496:32;28486:60;;28542:1;28539;28532:12;29247:271;29430:6;29422;29417:3;29404:33;29386:3;29456:16;;29481:13;;;29456:16;29247:271;-1:-1:-1;29247:271:63:o;29523:1017::-;29909:4;29951:3;29940:9;29936:19;29928:27;;29982:6;29971:9;29964:25;30008:42;30098:2;30090:6;30086:15;30081:2;30070:9;30066:18;30059:43;30138:6;30133:2;30122:9;30118:18;30111:34;30181:6;30176:2;30165:9;30161:18;30154:34;30197:54;30246:3;30235:9;30231:19;30223:6;30197:54;:::i;:::-;30282:3;30267:19;;30260:35;;;;30326:3;30311:19;;30304:35;;;;30370:3;30355:19;;30348:35;;;;30420:15;;;30414:3;30399:19;;30392:44;30473:15;;;30467:3;30452:19;;30445:44;30520:3;30505:19;30498:36;;;;29523:1017;;-1:-1:-1;;;;;29523:1017:63:o;31425:196::-;31464:3;31492:5;31482:39;;31501:18;;:::i;:::-;-1:-1:-1;31548:66:63;31537:78;;31425:196::o",
    linkReferences: {}
  },
  methodIdentifiers: {
    "VERSION()": "ffa1ad74",
    "addOwnerWithThreshold(address,uint256)": "0d582f13",
    "approveHash(bytes32)": "d4d9bdcd",
    "approvedHashes(address,bytes32)": "7d832974",
    "changeThreshold(uint256)": "694e80c3",
    "checkNSignatures(bytes32,bytes,bytes,uint256)": "12fb68e0",
    "checkSignatures(bytes32,bytes,bytes)": "934f3a11",
    "disableModule(address,address)": "e009cfde",
    "domainSeparator()": "f698da25",
    "enableModule(address)": "610b5925",
    "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":
      "e86637db",
    "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)":
      "6a761202",
    "execTransactionFromModule(address,uint256,bytes,uint8)": "468721a7",
    "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)":
      "5229073f",
    "getChainId()": "3408e470",
    "getModulesPaginated(address,uint256)": "cc2f8452",
    "getOwners()": "a0e67e2b",
    "getStorageAt(uint256,uint256)": "5624b25b",
    "getThreshold()": "e75235b8",
    "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":
      "d8d11f78",
    "isModuleEnabled(address)": "2d9ad53d",
    "isOwner(address)": "2f54bf6e",
    "nonce()": "affed0e0",
    "removeOwner(address,address,uint256)": "f8dc5dd9",
    "requiredTxGas(address,uint256,bytes,uint8)": "c4ca3a9c",
    "setFallbackHandler(address)": "f08a0323",
    "setGuard(address)": "e19a9dd9",
    "setup(address[],uint256,address,bytes,address,address,uint256,address)":
      "b63e800d",
    "signedMessages(bytes32)": "5ae6bd37",
    "simulateAndRevert(address,bytes)": "b4faba09",
    "swapOwner(address,address,address)": "e318b52b"
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.12+commit.f00d7308"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"AddedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"approvedHash","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"ApproveHash","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"handler","type":"address"}],"name":"ChangedFallbackHandler","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"guard","type":"address"}],"name":"ChangedGuard","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"}],"name":"ChangedThreshold","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"DisabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"module","type":"address"}],"name":"EnabledModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"module","type":"address"}],"name":"ExecutionFromModuleSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"payment","type":"uint256"}],"name":"ExecutionSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"RemovedOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"SafeReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":false,"internalType":"address[]","name":"owners","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"threshold","type":"uint256"},{"indexed":false,"internalType":"address","name":"initializer","type":"address"},{"indexed":false,"internalType":"address","name":"fallbackHandler","type":"address"}],"name":"SafeSetup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"msgHash","type":"bytes32"}],"name":"SignMsg","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"addOwnerWithThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hashToApprove","type":"bytes32"}],"name":"approveHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"approvedHashes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"changeThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"},{"internalType":"uint256","name":"requiredSignatures","type":"uint256"}],"name":"checkNSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dataHash","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"checkSignatures","outputs":[],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevModule","type":"address"},{"internalType":"address","name":"module","type":"address"}],"name":"disableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"enableModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"encodeTransactionData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address payable","name":"refundReceiver","type":"address"},{"internalType":"bytes","name":"signatures","type":"bytes"}],"name":"execTransaction","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModule","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"execTransactionFromModuleReturnData","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getChainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"start","type":"address"},{"internalType":"uint256","name":"pageSize","type":"uint256"}],"name":"getModulesPaginated","outputs":[{"internalType":"address[]","name":"array","type":"address[]"},{"internalType":"address","name":"next","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offset","type":"uint256"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"getStorageAt","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"},{"internalType":"uint256","name":"safeTxGas","type":"uint256"},{"internalType":"uint256","name":"baseGas","type":"uint256"},{"internalType":"uint256","name":"gasPrice","type":"uint256"},{"internalType":"address","name":"gasToken","type":"address"},{"internalType":"address","name":"refundReceiver","type":"address"},{"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"getTransactionHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"module","type":"address"}],"name":"isModuleEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_threshold","type":"uint256"}],"name":"removeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"enum Enum.Operation","name":"operation","type":"uint8"}],"name":"requiredTxGas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"handler","type":"address"}],"name":"setFallbackHandler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"guard","type":"address"}],"name":"setGuard","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"fallbackHandler","type":"address"},{"internalType":"address","name":"paymentToken","type":"address"},{"internalType":"uint256","name":"payment","type":"uint256"},{"internalType":"address payable","name":"paymentReceiver","type":"address"}],"name":"setup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"signedMessages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"targetContract","type":"address"},{"internalType":"bytes","name":"calldataPayload","type":"bytes"}],"name":"simulateAndRevert","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"prevOwner","type":"address"},{"internalType":"address","name":"oldOwner","type":"address"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"swapOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"author":"Stefan George - <stefan@gnosis.io>Richard Meissner - <richard@gnosis.io>","kind":"dev","methods":{"addOwnerWithThreshold(address,uint256)":{"details":"Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.","params":{"_threshold":"New threshold.","owner":"New owner address."}},"approveHash(bytes32)":{"details":"Marks a hash as approved. This can be used to validate a hash that is used by a signature.","params":{"hashToApprove":"The hash that should be marked as approved for signatures that are verified by this contract."}},"changeThreshold(uint256)":{"details":"Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.","params":{"_threshold":"New threshold."}},"checkNSignatures(bytes32,bytes,bytes,uint256)":{"details":"Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.","params":{"data":"That should be signed (this is passed to an external validator contract)","dataHash":"Hash of the data (could be either a message hash or transaction hash)","requiredSignatures":"Amount of required valid signatures.","signatures":"Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash."}},"checkSignatures(bytes32,bytes,bytes)":{"details":"Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.","params":{"data":"That should be signed (this is passed to an external validator contract)","dataHash":"Hash of the data (could be either a message hash or transaction hash)","signatures":"Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash."}},"disableModule(address,address)":{"details":"Allows to remove a module from the whitelist.      This can only be done via a Safe transaction.","params":{"module":"Module to be removed.","prevModule":"Module that pointed to the module to be removed in the linked list"}},"enableModule(address)":{"details":"Allows to add a module to the whitelist.      This can only be done via a Safe transaction.","params":{"module":"Module to be whitelisted."}},"encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":{"details":"Returns the bytes that are hashed to be signed by owners.","params":{"_nonce":"Transaction nonce.","baseGas":"Gas costs for that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)","data":"Data payload.","gasPrice":"Maximum gas price that should be used for this transaction.","gasToken":"Token address (or 0 if ETH) that is used for the payment.","operation":"Operation type.","refundReceiver":"Address of receiver of gas payment (or 0 if tx.origin).","safeTxGas":"Gas that should be used for the safe transaction.","to":"Destination address.","value":"Ether value."},"returns":{"_0":"Transaction hash bytes."}},"execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)":{"details":"Allows to execute a Safe transaction confirmed by required number of owners and then pays the account that submitted the transaction.      Note: The fees are always transferred, even if the user transaction fails.","params":{"baseGas":"Gas costs that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)","data":"Data payload of Safe transaction.","gasPrice":"Gas price that should be used for the payment calculation.","gasToken":"Token address (or 0 if ETH) that is used for the payment.","operation":"Operation type of Safe transaction.","refundReceiver":"Address of receiver of gas payment (or 0 if tx.origin).","safeTxGas":"Gas that should be used for the Safe transaction.","signatures":"Packed signature data ({bytes32 r}{bytes32 s}{uint8 v})","to":"Destination address of Safe transaction.","value":"Ether value of Safe transaction."}},"execTransactionFromModule(address,uint256,bytes,uint8)":{"details":"Allows a Module to execute a Safe transaction without any further confirmations.","params":{"data":"Data payload of module transaction.","operation":"Operation type of module transaction.","to":"Destination address of module transaction.","value":"Ether value of module transaction."}},"execTransactionFromModuleReturnData(address,uint256,bytes,uint8)":{"details":"Allows a Module to execute a Safe transaction without any further confirmations and return data","params":{"data":"Data payload of module transaction.","operation":"Operation type of module transaction.","to":"Destination address of module transaction.","value":"Ether value of module transaction."}},"getChainId()":{"details":"Returns the chain id used by this contract."},"getModulesPaginated(address,uint256)":{"details":"Returns array of modules.","params":{"pageSize":"Maximum number of modules that should be returned.","start":"Start of the page."},"returns":{"array":"Array of modules.","next":"Start of the next page."}},"getOwners()":{"details":"Returns array of owners.","returns":{"_0":"Array of Safe owners."}},"getStorageAt(uint256,uint256)":{"details":"Reads `length` bytes of storage in the currents contract","params":{"length":"- the number of words (32 bytes) of data to read","offset":"- the offset in the current contract\'s storage in words to start reading from"},"returns":{"_0":"the bytes that were read."}},"getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":{"details":"Returns hash to be signed by owners.","params":{"_nonce":"Transaction nonce.","baseGas":"Gas costs for data used to trigger the safe transaction.","data":"Data payload.","gasPrice":"Maximum gas price that should be used for this transaction.","gasToken":"Token address (or 0 if ETH) that is used for the payment.","operation":"Operation type.","refundReceiver":"Address of receiver of gas payment (or 0 if tx.origin).","safeTxGas":"Fas that should be used for the safe transaction.","to":"Destination address.","value":"Ether value."},"returns":{"_0":"Transaction hash."}},"isModuleEnabled(address)":{"details":"Returns if an module is enabled","returns":{"_0":"True if the module is enabled"}},"removeOwner(address,address,uint256)":{"details":"Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.","params":{"_threshold":"New threshold.","owner":"Owner address to be removed.","prevOwner":"Owner that pointed to the owner to be removed in the linked list"}},"requiredTxGas(address,uint256,bytes,uint8)":{"details":"Allows to estimate a Safe transaction.      This method is only meant for estimation purpose, therefore the call will always revert and encode the result in the revert data.      Since the `estimateGas` function includes refunds, call this method to get an estimated of the costs that are deducted from the safe with `execTransaction`","params":{"data":"Data payload of Safe transaction.","operation":"Operation type of Safe transaction.","to":"Destination address of Safe transaction.","value":"Ether value of Safe transaction."},"returns":{"_0":"Estimate without refunds and overhead fees (base transaction and payload data gas costs)."}},"setFallbackHandler(address)":{"details":"Allows to add a contract to handle fallback calls.      Only fallback calls without value and with data will be forwarded.      This can only be done via a Safe transaction.","params":{"handler":"contract to handle fallback calls."}},"setGuard(address)":{"details":"Set a guard that checks transactions before execution","params":{"guard":"The address of the guard to be used or the 0 address to disable the guard"}},"setup(address[],uint256,address,bytes,address,address,uint256,address)":{"details":"Setup function sets initial storage of contract.","params":{"_owners":"List of Safe owners.","_threshold":"Number of required confirmations for a Safe transaction.","data":"Data payload for optional delegate call.","fallbackHandler":"Handler for fallback calls to this contract","payment":"Value that should be paid","paymentReceiver":"Address that should receive the payment (or 0 if tx.origin)","paymentToken":"Token that should be used for the payment (0 is ETH)","to":"Contract address for optional delegate call."}},"simulateAndRevert(address,bytes)":{"details":"Performs a delegatecall on a targetContract in the context of self. Internally reverts execution to avoid side effects (making it static). This method reverts with data equal to `abi.encode(bool(success), bytes(response))`. Specifically, the `returndata` after a call to this method will be: `success:bool || response.length:uint256 || response:bytes`.","params":{"calldataPayload":"Calldata that should be sent to the target contract (encoded method name and arguments).","targetContract":"Address of the contract containing the code to execute."}},"swapOwner(address,address,address)":{"details":"Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.","params":{"newOwner":"New owner address.","oldOwner":"Owner address to be replaced.","prevOwner":"Owner that pointed to the owner to be replaced in the linked list"}}},"title":"Gnosis Safe - A multisignature wallet with support for confirmations using signed messages based on ERC191.","version":1},"userdoc":{"kind":"user","methods":{"addOwnerWithThreshold(address,uint256)":{"notice":"Adds the owner `owner` to the Safe and updates the threshold to `_threshold`."},"changeThreshold(uint256)":{"notice":"Changes the threshold of the Safe to `_threshold`."},"disableModule(address,address)":{"notice":"Disables the module `module` for the Safe."},"enableModule(address)":{"notice":"Enables the module `module` for the Safe."},"removeOwner(address,address,uint256)":{"notice":"Removes the owner `owner` from the Safe and updates the threshold to `_threshold`."},"requiredTxGas(address,uint256,bytes,uint8)":{"notice":"Deprecated in favor of common/StorageAccessible.sol and will be removed in next version."},"swapOwner(address,address,address)":{"notice":"Replaces the owner `oldOwner` in the Safe with `newOwner`."}},"version":1}},"settings":{"compilationTarget":{"lib/safe-contracts/contracts/GnosisSafe.sol":"GnosisSafe"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"none"},"optimizer":{"enabled":true,"runs":1000000},"remappings":[":@uniswap/v3-core/=lib/v3-core/",":@uniswap/v3-periphery/=lib/v3-periphery/",":create3-factory/=lib/create3-factory/src/",":ds-test/=lib/ds-test/src/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",":safe-contracts/=lib/safe-contracts/contracts/",":solmate/=lib/create3-factory/lib/solmate/src/",":v3-core/=lib/v3-core/contracts/",":v3-periphery/=lib/v3-periphery/contracts/"]},"sources":{"lib/safe-contracts/contracts/GnosisSafe.sol":{"keccak256":"0x08a8750ac2e42bdab1d7483ccc698b019a2b448b5296db2b0ecc5d318b2fe763","license":"LGPL-3.0-only","urls":["bzz-raw://67ff79afa7060d3a18b25c6ad6420dcbee6b6f788e2afe937c91ab4d64e3ce27","dweb:/ipfs/QmVtN8xjT7eoieeDfCiTstaja9n9KBG7qYdD9gfSDfrCg8"]},"lib/safe-contracts/contracts/base/Executor.sol":{"keccak256":"0x4d3a900673473466bc27413fdbb11aae60b5580b792c49411f01544e0b24fe08","license":"LGPL-3.0-only","urls":["bzz-raw://71ada0590998f47d1ee9759aa190c82d4b348d59a2f582747650d9720245a309","dweb:/ipfs/Qmb9UudLoJpPutHVP9pXd1poP5CqFf5sxVFuYw14SYfRFk"]},"lib/safe-contracts/contracts/base/FallbackManager.sol":{"keccak256":"0x1a6d2eab5094e4219408e502a47d560a09e0fdd9f947440e6708ea024741bc6a","license":"LGPL-3.0-only","urls":["bzz-raw://ea9bd1225c38a9f1383a9f2aa613d9b493bb7e851a01164e312b63cecc4dd3b3","dweb:/ipfs/Qma4UN216kpt8Nn6MkqUFRNeyZEsuXqQcuPfj2wfQdRzxW"]},"lib/safe-contracts/contracts/base/GuardManager.sol":{"keccak256":"0x7496e28d7fb5b729f68f95db2ec9c54352ade263d51a3dcc7d2ac13edcae5508","license":"LGPL-3.0-only","urls":["bzz-raw://31618b7dcfe9d67c21f0d68b5fb82f794461177ac19290f2c4dd7ebf1c2e8d75","dweb:/ipfs/QmcQMfK7q56bJwNN3WmjmX6YV5CxDZ5UPXRXfTeJiPHnys"]},"lib/safe-contracts/contracts/base/ModuleManager.sol":{"keccak256":"0x5512760a0328309f82a71cbe2ac14e0942501b9d44d5fb417bd02174546672e5","license":"LGPL-3.0-only","urls":["bzz-raw://763cf803a98a921d62ed51d7876a13aed63968c828f026ce2beb747d2631c0bc","dweb:/ipfs/QmbHZoYsbkxC2kVCs4pQ4nRaFrcgU5X8FuLX7vV3qDR9Y5"]},"lib/safe-contracts/contracts/base/OwnerManager.sol":{"keccak256":"0x01a3d64cc0967f42ae63802409f5404d18352516ea2a6335005003d919ffcf12","license":"LGPL-3.0-only","urls":["bzz-raw://91824103f2966612103705d6493290e193b0c0ca2bbe7141965184435dbb999b","dweb:/ipfs/Qmd7u917v4DnD4hvQGAGbchVJ8A7pm1UCzCv7sAzQnRoi4"]},"lib/safe-contracts/contracts/common/Enum.sol":{"keccak256":"0x473e45b1a5cc47be494b0e123c9127f0c11c1e0992a321ae5a644c0bfdb2c14f","license":"LGPL-3.0-only","urls":["bzz-raw://948e6d5a8bd7377f7795b6e28584eab9be5c0a8db240bf5e606744a175238c3d","dweb:/ipfs/QmQQaUmQfpuejV41jbxKSTgEBYYCcVTjCsDMgf2htgz6ej"]},"lib/safe-contracts/contracts/common/EtherPaymentFallback.sol":{"keccak256":"0x1a7928d29877da84a3d0df846d5cd933d48ee095c1bde0aa044e249b12e27a72","license":"LGPL-3.0-only","urls":["bzz-raw://962fc098cfdd8a43cc7d294c1105718ea985cacf1172ea0426f7370e2096b830","dweb:/ipfs/QmdZrxJ7dSWuTjbrN133YiRDLwYQr21zLr3CqWWtowY9Gu"]},"lib/safe-contracts/contracts/common/SecuredTokenTransfer.sol":{"keccak256":"0x178682d8477da42936c7e8e24d39094c4ac08ecd8623794b9535d77001b665f1","license":"LGPL-3.0-only","urls":["bzz-raw://2ae8a6d5c7d4cc19c3b957c8857e87e92a4570effebf32ba54184c2b8375a0a2","dweb:/ipfs/QmVNgRcRVgQZriJm8KVXQvRbHQf74wH7ABmBNTjBTqBa8r"]},"lib/safe-contracts/contracts/common/SelfAuthorized.sol":{"keccak256":"0x59d36efca578b75541a776f62a0d0ef03712fc27b6647c3915c14b572106d7bc","license":"LGPL-3.0-only","urls":["bzz-raw://8530c6e0392415d42486847cd4368d30f6cac42051596330692a571fcdbb9e29","dweb:/ipfs/QmWw51Pshw5t2sMKANzxtfNdBSQUyQQpfTr3Mi7oNJGk7U"]},"lib/safe-contracts/contracts/common/SignatureDecoder.sol":{"keccak256":"0xb3e2e3b9d17c47201414341d2ccfc6437bc09f31af6dddf4a7de1f6294543072","license":"LGPL-3.0-only","urls":["bzz-raw://0ee25eaebfd78a167949dcef64e1425b257311211cba8ec2fc1b6216edf1bcbe","dweb:/ipfs/QmYL4uXE8wqdv7YCkHQSTWAsjco1pi8sJbDASuodDmNCpt"]},"lib/safe-contracts/contracts/common/Singleton.sol":{"keccak256":"0x6e02c18998de8834dd7d69890cb6ede996b6f635d2337081a596d91e35e2c648","license":"LGPL-3.0-only","urls":["bzz-raw://ce1dfe9f820352b6f95b350ac0b3fa8afc24ad77bffffc2c9e00462e2a41a666","dweb:/ipfs/QmVr2dCUbNbg5e7UsgngGij5mybgkXcbf5e5cPhT21aFXA"]},"lib/safe-contracts/contracts/common/StorageAccessible.sol":{"keccak256":"0x40a5f239d9639d4e44cb195a8a2a0022bb27840e282990e6776d8581515ca7ed","license":"LGPL-3.0-only","urls":["bzz-raw://22fa3b633e76e7d58736c841730a05f2c37a09f612e7e90dfd6c1f35722a9157","dweb:/ipfs/QmTFhMtHEKkdzQdVN9gayKdEJY69HWoM7abW2dXEuWXF6i"]},"lib/safe-contracts/contracts/external/GnosisSafeMath.sol":{"keccak256":"0x2a2b4d74f5834a9437be0cd3254d7a676698fc78aa47941c2009470196998d98","license":"LGPL-3.0-only","urls":["bzz-raw://ea04449ba8b78ec44f3463b68cbce971875626e91d028add50900c41101a1156","dweb:/ipfs/QmR95ci4HVkJuyYGvYRHVpp6N3wefu5WVDhipKwRechWV6"]},"lib/safe-contracts/contracts/interfaces/IERC165.sol":{"keccak256":"0x5c64c2e071245db8fe3ea8b94f73c5a8de236933858ae240348d502433a9d178","license":"LGPL-3.0-only","urls":["bzz-raw://46a7796e0c5c451b86038253d488ffb0986472d17d0fb74e00c3809682f2fd7a","dweb:/ipfs/QmX7tYoCRrCLGqsZSHXgdcqbRhMGXpS6ezckaFjaiULd3e"]},"lib/safe-contracts/contracts/interfaces/ISignatureValidator.sol":{"keccak256":"0x5b6e9bf17f28738ce88e751f420b0559f5151ba7bec2ff3c7bb31e42673d6801","license":"LGPL-3.0-only","urls":["bzz-raw://bfdde8390deb619e38f98be67c5f9d26f12623855540af76b9f454142d3896c1","dweb:/ipfs/QmZrr1ocToR5S62W177qV2csfs7wCQNs3t9vatyx32uLXz"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.12+commit.f00d7308"
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "AddedOwner",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "approvedHash",
              type: "bytes32",
              indexed: true
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: true
            }
          ],
          type: "event",
          name: "ApproveHash",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "handler",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "ChangedFallbackHandler",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "guard",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "ChangedGuard",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "threshold",
              type: "uint256",
              indexed: false
            }
          ],
          type: "event",
          name: "ChangedThreshold",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "DisabledModule",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "EnabledModule",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "txHash",
              type: "bytes32",
              indexed: false
            },
            {
              internalType: "uint256",
              name: "payment",
              type: "uint256",
              indexed: false
            }
          ],
          type: "event",
          name: "ExecutionFailure",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address",
              indexed: true
            }
          ],
          type: "event",
          name: "ExecutionFromModuleFailure",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address",
              indexed: true
            }
          ],
          type: "event",
          name: "ExecutionFromModuleSuccess",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "txHash",
              type: "bytes32",
              indexed: false
            },
            {
              internalType: "uint256",
              name: "payment",
              type: "uint256",
              indexed: false
            }
          ],
          type: "event",
          name: "ExecutionSuccess",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "RemovedOwner",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
              indexed: true
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false
            }
          ],
          type: "event",
          name: "SafeReceived",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initiator",
              type: "address",
              indexed: true
            },
            {
              internalType: "address[]",
              name: "owners",
              type: "address[]",
              indexed: false
            },
            {
              internalType: "uint256",
              name: "threshold",
              type: "uint256",
              indexed: false
            },
            {
              internalType: "address",
              name: "initializer",
              type: "address",
              indexed: false
            },
            {
              internalType: "address",
              name: "fallbackHandler",
              type: "address",
              indexed: false
            }
          ],
          type: "event",
          name: "SafeSetup",
          anonymous: false
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "msgHash",
              type: "bytes32",
              indexed: true
            }
          ],
          type: "event",
          name: "SignMsg",
          anonymous: false
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "fallback"
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "VERSION",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_threshold",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "addOwnerWithThreshold"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "hashToApprove",
              type: "bytes32"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "approveHash"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address"
            },
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "approvedHashes",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_threshold",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "changeThreshold"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "dataHash",
              type: "bytes32"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "bytes",
              name: "signatures",
              type: "bytes"
            },
            {
              internalType: "uint256",
              name: "requiredSignatures",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "checkNSignatures"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "dataHash",
              type: "bytes32"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "bytes",
              name: "signatures",
              type: "bytes"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "checkSignatures"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "prevModule",
              type: "address"
            },
            {
              internalType: "address",
              name: "module",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "disableModule"
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "domainSeparator",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "enableModule"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "safeTxGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "baseGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "gasPrice",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "gasToken",
              type: "address"
            },
            {
              internalType: "address",
              name: "refundReceiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_nonce",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "encodeTransactionData",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "safeTxGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "baseGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "gasPrice",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "gasToken",
              type: "address"
            },
            {
              internalType: "address payable",
              name: "refundReceiver",
              type: "address"
            },
            {
              internalType: "bytes",
              name: "signatures",
              type: "bytes"
            }
          ],
          stateMutability: "payable",
          type: "function",
          name: "execTransaction",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "execTransactionFromModule",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "execTransactionFromModuleReturnData",
          outputs: [
            {
              internalType: "bool",
              name: "success",
              type: "bool"
            },
            {
              internalType: "bytes",
              name: "returnData",
              type: "bytes"
            }
          ]
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getChainId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "start",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "pageSize",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "getModulesPaginated",
          outputs: [
            {
              internalType: "address[]",
              name: "array",
              type: "address[]"
            },
            {
              internalType: "address",
              name: "next",
              type: "address"
            }
          ]
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getOwners",
          outputs: [
            {
              internalType: "address[]",
              name: "",
              type: "address[]"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "offset",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "length",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "getStorageAt",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes"
            }
          ]
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "getThreshold",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            },
            {
              internalType: "uint256",
              name: "safeTxGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "baseGas",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "gasPrice",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "gasToken",
              type: "address"
            },
            {
              internalType: "address",
              name: "refundReceiver",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_nonce",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "getTransactionHash",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "module",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "isModuleEnabled",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "isOwner",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool"
            }
          ]
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "nonce",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "prevOwner",
              type: "address"
            },
            {
              internalType: "address",
              name: "owner",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "_threshold",
              type: "uint256"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "removeOwner"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "enum Enum.Operation",
              name: "operation",
              type: "uint8"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "requiredTxGas",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "handler",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setFallbackHandler"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "guard",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setGuard"
        },
        {
          inputs: [
            {
              internalType: "address[]",
              name: "_owners",
              type: "address[]"
            },
            {
              internalType: "uint256",
              name: "_threshold",
              type: "uint256"
            },
            {
              internalType: "address",
              name: "to",
              type: "address"
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes"
            },
            {
              internalType: "address",
              name: "fallbackHandler",
              type: "address"
            },
            {
              internalType: "address",
              name: "paymentToken",
              type: "address"
            },
            {
              internalType: "uint256",
              name: "payment",
              type: "uint256"
            },
            {
              internalType: "address payable",
              name: "paymentReceiver",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setup"
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32"
            }
          ],
          stateMutability: "view",
          type: "function",
          name: "signedMessages",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ]
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "targetContract",
              type: "address"
            },
            {
              internalType: "bytes",
              name: "calldataPayload",
              type: "bytes"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "simulateAndRevert"
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "prevOwner",
              type: "address"
            },
            {
              internalType: "address",
              name: "oldOwner",
              type: "address"
            },
            {
              internalType: "address",
              name: "newOwner",
              type: "address"
            }
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "swapOwner"
        },
        {
          inputs: [],
          stateMutability: "payable",
          type: "receive"
        }
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "addOwnerWithThreshold(address,uint256)": {
            details:
              "Allows to add a new owner to the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.",
            params: {
              _threshold: "New threshold.",
              owner: "New owner address."
            }
          },
          "approveHash(bytes32)": {
            details:
              "Marks a hash as approved. This can be used to validate a hash that is used by a signature.",
            params: {
              hashToApprove:
                "The hash that should be marked as approved for signatures that are verified by this contract."
            }
          },
          "changeThreshold(uint256)": {
            details:
              "Allows to update the number of required confirmations by Safe owners.      This can only be done via a Safe transaction.",
            params: {
              _threshold: "New threshold."
            }
          },
          "checkNSignatures(bytes32,bytes,bytes,uint256)": {
            details:
              "Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.",
            params: {
              data: "That should be signed (this is passed to an external validator contract)",
              dataHash:
                "Hash of the data (could be either a message hash or transaction hash)",
              requiredSignatures: "Amount of required valid signatures.",
              signatures:
                "Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash."
            }
          },
          "checkSignatures(bytes32,bytes,bytes)": {
            details:
              "Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.",
            params: {
              data: "That should be signed (this is passed to an external validator contract)",
              dataHash:
                "Hash of the data (could be either a message hash or transaction hash)",
              signatures:
                "Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash."
            }
          },
          "disableModule(address,address)": {
            details:
              "Allows to remove a module from the whitelist.      This can only be done via a Safe transaction.",
            params: {
              module: "Module to be removed.",
              prevModule:
                "Module that pointed to the module to be removed in the linked list"
            }
          },
          "enableModule(address)": {
            details:
              "Allows to add a module to the whitelist.      This can only be done via a Safe transaction.",
            params: {
              module: "Module to be whitelisted."
            }
          },
          "encodeTransactionData(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":
            {
              details:
                "Returns the bytes that are hashed to be signed by owners.",
              params: {
                _nonce: "Transaction nonce.",
                baseGas:
                  "Gas costs for that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)",
                data: "Data payload.",
                gasPrice:
                  "Maximum gas price that should be used for this transaction.",
                gasToken:
                  "Token address (or 0 if ETH) that is used for the payment.",
                operation: "Operation type.",
                refundReceiver:
                  "Address of receiver of gas payment (or 0 if tx.origin).",
                safeTxGas: "Gas that should be used for the safe transaction.",
                to: "Destination address.",
                value: "Ether value."
              },
              returns: {
                _0: "Transaction hash bytes."
              }
            },
          "execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)":
            {
              details:
                "Allows to execute a Safe transaction confirmed by required number of owners and then pays the account that submitted the transaction.      Note: The fees are always transferred, even if the user transaction fails.",
              params: {
                baseGas:
                  "Gas costs that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)",
                data: "Data payload of Safe transaction.",
                gasPrice:
                  "Gas price that should be used for the payment calculation.",
                gasToken:
                  "Token address (or 0 if ETH) that is used for the payment.",
                operation: "Operation type of Safe transaction.",
                refundReceiver:
                  "Address of receiver of gas payment (or 0 if tx.origin).",
                safeTxGas: "Gas that should be used for the Safe transaction.",
                signatures:
                  "Packed signature data ({bytes32 r}{bytes32 s}{uint8 v})",
                to: "Destination address of Safe transaction.",
                value: "Ether value of Safe transaction."
              }
            },
          "execTransactionFromModule(address,uint256,bytes,uint8)": {
            details:
              "Allows a Module to execute a Safe transaction without any further confirmations.",
            params: {
              data: "Data payload of module transaction.",
              operation: "Operation type of module transaction.",
              to: "Destination address of module transaction.",
              value: "Ether value of module transaction."
            }
          },
          "execTransactionFromModuleReturnData(address,uint256,bytes,uint8)": {
            details:
              "Allows a Module to execute a Safe transaction without any further confirmations and return data",
            params: {
              data: "Data payload of module transaction.",
              operation: "Operation type of module transaction.",
              to: "Destination address of module transaction.",
              value: "Ether value of module transaction."
            }
          },
          "getChainId()": {
            details: "Returns the chain id used by this contract."
          },
          "getModulesPaginated(address,uint256)": {
            details: "Returns array of modules.",
            params: {
              pageSize: "Maximum number of modules that should be returned.",
              start: "Start of the page."
            },
            returns: {
              array: "Array of modules.",
              next: "Start of the next page."
            }
          },
          "getOwners()": {
            details: "Returns array of owners.",
            returns: {
              _0: "Array of Safe owners."
            }
          },
          "getStorageAt(uint256,uint256)": {
            details: "Reads `length` bytes of storage in the currents contract",
            params: {
              length: "- the number of words (32 bytes) of data to read",
              offset:
                "- the offset in the current contract's storage in words to start reading from"
            },
            returns: {
              _0: "the bytes that were read."
            }
          },
          "getTransactionHash(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)":
            {
              details: "Returns hash to be signed by owners.",
              params: {
                _nonce: "Transaction nonce.",
                baseGas:
                  "Gas costs for data used to trigger the safe transaction.",
                data: "Data payload.",
                gasPrice:
                  "Maximum gas price that should be used for this transaction.",
                gasToken:
                  "Token address (or 0 if ETH) that is used for the payment.",
                operation: "Operation type.",
                refundReceiver:
                  "Address of receiver of gas payment (or 0 if tx.origin).",
                safeTxGas: "Fas that should be used for the safe transaction.",
                to: "Destination address.",
                value: "Ether value."
              },
              returns: {
                _0: "Transaction hash."
              }
            },
          "isModuleEnabled(address)": {
            details: "Returns if an module is enabled",
            returns: {
              _0: "True if the module is enabled"
            }
          },
          "removeOwner(address,address,uint256)": {
            details:
              "Allows to remove an owner from the Safe and update the threshold at the same time.      This can only be done via a Safe transaction.",
            params: {
              _threshold: "New threshold.",
              owner: "Owner address to be removed.",
              prevOwner:
                "Owner that pointed to the owner to be removed in the linked list"
            }
          },
          "requiredTxGas(address,uint256,bytes,uint8)": {
            details:
              "Allows to estimate a Safe transaction.      This method is only meant for estimation purpose, therefore the call will always revert and encode the result in the revert data.      Since the `estimateGas` function includes refunds, call this method to get an estimated of the costs that are deducted from the safe with `execTransaction`",
            params: {
              data: "Data payload of Safe transaction.",
              operation: "Operation type of Safe transaction.",
              to: "Destination address of Safe transaction.",
              value: "Ether value of Safe transaction."
            },
            returns: {
              _0: "Estimate without refunds and overhead fees (base transaction and payload data gas costs)."
            }
          },
          "setFallbackHandler(address)": {
            details:
              "Allows to add a contract to handle fallback calls.      Only fallback calls without value and with data will be forwarded.      This can only be done via a Safe transaction.",
            params: {
              handler: "contract to handle fallback calls."
            }
          },
          "setGuard(address)": {
            details: "Set a guard that checks transactions before execution",
            params: {
              guard:
                "The address of the guard to be used or the 0 address to disable the guard"
            }
          },
          "setup(address[],uint256,address,bytes,address,address,uint256,address)":
            {
              details: "Setup function sets initial storage of contract.",
              params: {
                _owners: "List of Safe owners.",
                _threshold:
                  "Number of required confirmations for a Safe transaction.",
                data: "Data payload for optional delegate call.",
                fallbackHandler: "Handler for fallback calls to this contract",
                payment: "Value that should be paid",
                paymentReceiver:
                  "Address that should receive the payment (or 0 if tx.origin)",
                paymentToken:
                  "Token that should be used for the payment (0 is ETH)",
                to: "Contract address for optional delegate call."
              }
            },
          "simulateAndRevert(address,bytes)": {
            details:
              "Performs a delegatecall on a targetContract in the context of self. Internally reverts execution to avoid side effects (making it static). This method reverts with data equal to `abi.encode(bool(success), bytes(response))`. Specifically, the `returndata` after a call to this method will be: `success:bool || response.length:uint256 || response:bytes`.",
            params: {
              calldataPayload:
                "Calldata that should be sent to the target contract (encoded method name and arguments).",
              targetContract:
                "Address of the contract containing the code to execute."
            }
          },
          "swapOwner(address,address,address)": {
            details:
              "Allows to swap/replace an owner from the Safe with another address.      This can only be done via a Safe transaction.",
            params: {
              newOwner: "New owner address.",
              oldOwner: "Owner address to be replaced.",
              prevOwner:
                "Owner that pointed to the owner to be replaced in the linked list"
            }
          }
        },
        version: 1
      },
      userdoc: {
        kind: "user",
        methods: {
          "addOwnerWithThreshold(address,uint256)": {
            notice:
              "Adds the owner `owner` to the Safe and updates the threshold to `_threshold`."
          },
          "changeThreshold(uint256)": {
            notice: "Changes the threshold of the Safe to `_threshold`."
          },
          "disableModule(address,address)": {
            notice: "Disables the module `module` for the Safe."
          },
          "enableModule(address)": {
            notice: "Enables the module `module` for the Safe."
          },
          "removeOwner(address,address,uint256)": {
            notice:
              "Removes the owner `owner` from the Safe and updates the threshold to `_threshold`."
          },
          "requiredTxGas(address,uint256,bytes,uint8)": {
            notice:
              "Deprecated in favor of common/StorageAccessible.sol and will be removed in next version."
          },
          "swapOwner(address,address,address)": {
            notice: "Replaces the owner `oldOwner` in the Safe with `newOwner`."
          }
        },
        version: 1
      }
    },
    settings: {
      remappings: [
        ":@uniswap/v3-core/=lib/v3-core/",
        ":@uniswap/v3-periphery/=lib/v3-periphery/",
        ":create3-factory/=lib/create3-factory/src/",
        ":ds-test/=lib/ds-test/src/",
        ":forge-std/=lib/forge-std/src/",
        ":openzeppelin-contracts/=lib/openzeppelin-contracts/contracts/",
        ":safe-contracts/=lib/safe-contracts/contracts/",
        ":solmate/=lib/create3-factory/lib/solmate/src/",
        ":v3-core/=lib/v3-core/contracts/",
        ":v3-periphery/=lib/v3-periphery/contracts/"
      ],
      optimizer: {
        enabled: true,
        runs: 1000000
      },
      metadata: {
        bytecodeHash: "none"
      },
      compilationTarget: {
        "lib/safe-contracts/contracts/GnosisSafe.sol": "GnosisSafe"
      },
      libraries: {}
    },
    sources: {
      "lib/safe-contracts/contracts/GnosisSafe.sol": {
        keccak256:
          "0x08a8750ac2e42bdab1d7483ccc698b019a2b448b5296db2b0ecc5d318b2fe763",
        urls: [
          "bzz-raw://67ff79afa7060d3a18b25c6ad6420dcbee6b6f788e2afe937c91ab4d64e3ce27",
          "dweb:/ipfs/QmVtN8xjT7eoieeDfCiTstaja9n9KBG7qYdD9gfSDfrCg8"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/base/Executor.sol": {
        keccak256:
          "0x4d3a900673473466bc27413fdbb11aae60b5580b792c49411f01544e0b24fe08",
        urls: [
          "bzz-raw://71ada0590998f47d1ee9759aa190c82d4b348d59a2f582747650d9720245a309",
          "dweb:/ipfs/Qmb9UudLoJpPutHVP9pXd1poP5CqFf5sxVFuYw14SYfRFk"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/base/FallbackManager.sol": {
        keccak256:
          "0x1a6d2eab5094e4219408e502a47d560a09e0fdd9f947440e6708ea024741bc6a",
        urls: [
          "bzz-raw://ea9bd1225c38a9f1383a9f2aa613d9b493bb7e851a01164e312b63cecc4dd3b3",
          "dweb:/ipfs/Qma4UN216kpt8Nn6MkqUFRNeyZEsuXqQcuPfj2wfQdRzxW"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/base/GuardManager.sol": {
        keccak256:
          "0x7496e28d7fb5b729f68f95db2ec9c54352ade263d51a3dcc7d2ac13edcae5508",
        urls: [
          "bzz-raw://31618b7dcfe9d67c21f0d68b5fb82f794461177ac19290f2c4dd7ebf1c2e8d75",
          "dweb:/ipfs/QmcQMfK7q56bJwNN3WmjmX6YV5CxDZ5UPXRXfTeJiPHnys"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/base/ModuleManager.sol": {
        keccak256:
          "0x5512760a0328309f82a71cbe2ac14e0942501b9d44d5fb417bd02174546672e5",
        urls: [
          "bzz-raw://763cf803a98a921d62ed51d7876a13aed63968c828f026ce2beb747d2631c0bc",
          "dweb:/ipfs/QmbHZoYsbkxC2kVCs4pQ4nRaFrcgU5X8FuLX7vV3qDR9Y5"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/base/OwnerManager.sol": {
        keccak256:
          "0x01a3d64cc0967f42ae63802409f5404d18352516ea2a6335005003d919ffcf12",
        urls: [
          "bzz-raw://91824103f2966612103705d6493290e193b0c0ca2bbe7141965184435dbb999b",
          "dweb:/ipfs/Qmd7u917v4DnD4hvQGAGbchVJ8A7pm1UCzCv7sAzQnRoi4"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/Enum.sol": {
        keccak256:
          "0x473e45b1a5cc47be494b0e123c9127f0c11c1e0992a321ae5a644c0bfdb2c14f",
        urls: [
          "bzz-raw://948e6d5a8bd7377f7795b6e28584eab9be5c0a8db240bf5e606744a175238c3d",
          "dweb:/ipfs/QmQQaUmQfpuejV41jbxKSTgEBYYCcVTjCsDMgf2htgz6ej"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/EtherPaymentFallback.sol": {
        keccak256:
          "0x1a7928d29877da84a3d0df846d5cd933d48ee095c1bde0aa044e249b12e27a72",
        urls: [
          "bzz-raw://962fc098cfdd8a43cc7d294c1105718ea985cacf1172ea0426f7370e2096b830",
          "dweb:/ipfs/QmdZrxJ7dSWuTjbrN133YiRDLwYQr21zLr3CqWWtowY9Gu"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/SecuredTokenTransfer.sol": {
        keccak256:
          "0x178682d8477da42936c7e8e24d39094c4ac08ecd8623794b9535d77001b665f1",
        urls: [
          "bzz-raw://2ae8a6d5c7d4cc19c3b957c8857e87e92a4570effebf32ba54184c2b8375a0a2",
          "dweb:/ipfs/QmVNgRcRVgQZriJm8KVXQvRbHQf74wH7ABmBNTjBTqBa8r"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/SelfAuthorized.sol": {
        keccak256:
          "0x59d36efca578b75541a776f62a0d0ef03712fc27b6647c3915c14b572106d7bc",
        urls: [
          "bzz-raw://8530c6e0392415d42486847cd4368d30f6cac42051596330692a571fcdbb9e29",
          "dweb:/ipfs/QmWw51Pshw5t2sMKANzxtfNdBSQUyQQpfTr3Mi7oNJGk7U"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/SignatureDecoder.sol": {
        keccak256:
          "0xb3e2e3b9d17c47201414341d2ccfc6437bc09f31af6dddf4a7de1f6294543072",
        urls: [
          "bzz-raw://0ee25eaebfd78a167949dcef64e1425b257311211cba8ec2fc1b6216edf1bcbe",
          "dweb:/ipfs/QmYL4uXE8wqdv7YCkHQSTWAsjco1pi8sJbDASuodDmNCpt"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/Singleton.sol": {
        keccak256:
          "0x6e02c18998de8834dd7d69890cb6ede996b6f635d2337081a596d91e35e2c648",
        urls: [
          "bzz-raw://ce1dfe9f820352b6f95b350ac0b3fa8afc24ad77bffffc2c9e00462e2a41a666",
          "dweb:/ipfs/QmVr2dCUbNbg5e7UsgngGij5mybgkXcbf5e5cPhT21aFXA"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/common/StorageAccessible.sol": {
        keccak256:
          "0x40a5f239d9639d4e44cb195a8a2a0022bb27840e282990e6776d8581515ca7ed",
        urls: [
          "bzz-raw://22fa3b633e76e7d58736c841730a05f2c37a09f612e7e90dfd6c1f35722a9157",
          "dweb:/ipfs/QmTFhMtHEKkdzQdVN9gayKdEJY69HWoM7abW2dXEuWXF6i"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/external/GnosisSafeMath.sol": {
        keccak256:
          "0x2a2b4d74f5834a9437be0cd3254d7a676698fc78aa47941c2009470196998d98",
        urls: [
          "bzz-raw://ea04449ba8b78ec44f3463b68cbce971875626e91d028add50900c41101a1156",
          "dweb:/ipfs/QmR95ci4HVkJuyYGvYRHVpp6N3wefu5WVDhipKwRechWV6"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/interfaces/IERC165.sol": {
        keccak256:
          "0x5c64c2e071245db8fe3ea8b94f73c5a8de236933858ae240348d502433a9d178",
        urls: [
          "bzz-raw://46a7796e0c5c451b86038253d488ffb0986472d17d0fb74e00c3809682f2fd7a",
          "dweb:/ipfs/QmX7tYoCRrCLGqsZSHXgdcqbRhMGXpS6ezckaFjaiULd3e"
        ],
        license: "LGPL-3.0-only"
      },
      "lib/safe-contracts/contracts/interfaces/ISignatureValidator.sol": {
        keccak256:
          "0x5b6e9bf17f28738ce88e751f420b0559f5151ba7bec2ff3c7bb31e42673d6801",
        urls: [
          "bzz-raw://bfdde8390deb619e38f98be67c5f9d26f12623855540af76b9f454142d3896c1",
          "dweb:/ipfs/QmZrr1ocToR5S62W177qV2csfs7wCQNs3t9vatyx32uLXz"
        ],
        license: "LGPL-3.0-only"
      }
    },
    version: 1
  },
  ast: {
    absolutePath: "lib/safe-contracts/contracts/GnosisSafe.sol",
    id: 11517,
    exportedSymbols: {
      BaseGuard: [11666],
      Enum: [12612],
      EtherPaymentFallback: [12634],
      Executor: [11548],
      FallbackManager: [11599],
      GnosisSafe: [11516],
      GnosisSafeMath: [12868],
      Guard: [11640],
      GuardManager: [11727],
      IERC165: [12880],
      ISignatureValidator: [12899],
      ISignatureValidatorConstants: [12886],
      ModuleManager: [12094],
      OwnerManager: [12605],
      SecuredTokenTransfer: [12661],
      SelfAuthorized: [12687],
      SignatureDecoder: [12707],
      Singleton: [12713],
      StorageAccessible: [12762]
    },
    nodeType: "SourceUnit",
    src: "42:20210:9",
    nodes: [
      {
        id: 10565,
        nodeType: "PragmaDirective",
        src: "42:31:9",
        literals: ["solidity", ">=", "0.7", ".0", "<", "0.9", ".0"]
      },
      {
        id: 10566,
        nodeType: "ImportDirective",
        src: "75:34:9",
        absolutePath: "lib/safe-contracts/contracts/base/ModuleManager.sol",
        file: "./base/ModuleManager.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12095,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10567,
        nodeType: "ImportDirective",
        src: "110:33:9",
        absolutePath: "lib/safe-contracts/contracts/base/OwnerManager.sol",
        file: "./base/OwnerManager.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12606,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10568,
        nodeType: "ImportDirective",
        src: "144:36:9",
        absolutePath: "lib/safe-contracts/contracts/base/FallbackManager.sol",
        file: "./base/FallbackManager.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 11600,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10569,
        nodeType: "ImportDirective",
        src: "181:33:9",
        absolutePath: "lib/safe-contracts/contracts/base/GuardManager.sol",
        file: "./base/GuardManager.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 11728,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10570,
        nodeType: "ImportDirective",
        src: "215:43:9",
        absolutePath:
          "lib/safe-contracts/contracts/common/EtherPaymentFallback.sol",
        file: "./common/EtherPaymentFallback.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12635,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10571,
        nodeType: "ImportDirective",
        src: "259:32:9",
        absolutePath: "lib/safe-contracts/contracts/common/Singleton.sol",
        file: "./common/Singleton.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12714,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10572,
        nodeType: "ImportDirective",
        src: "292:39:9",
        absolutePath:
          "lib/safe-contracts/contracts/common/SignatureDecoder.sol",
        file: "./common/SignatureDecoder.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12708,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10573,
        nodeType: "ImportDirective",
        src: "332:43:9",
        absolutePath:
          "lib/safe-contracts/contracts/common/SecuredTokenTransfer.sol",
        file: "./common/SecuredTokenTransfer.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12662,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10574,
        nodeType: "ImportDirective",
        src: "376:40:9",
        absolutePath:
          "lib/safe-contracts/contracts/common/StorageAccessible.sol",
        file: "./common/StorageAccessible.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12763,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10575,
        nodeType: "ImportDirective",
        src: "417:46:9",
        absolutePath:
          "lib/safe-contracts/contracts/interfaces/ISignatureValidator.sol",
        file: "./interfaces/ISignatureValidator.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12900,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 10576,
        nodeType: "ImportDirective",
        src: "464:39:9",
        absolutePath:
          "lib/safe-contracts/contracts/external/GnosisSafeMath.sol",
        file: "./external/GnosisSafeMath.sol",
        nameLocation: "-1:-1:-1",
        scope: 11517,
        sourceUnit: 12869,
        symbolAliases: [],
        unitAlias: ""
      },
      {
        id: 11516,
        nodeType: "ContractDefinition",
        src: "722:19529:9",
        nodes: [
          {
            id: 10600,
            nodeType: "UsingForDirective",
            src: "972:33:9",
            libraryName: {
              id: 10598,
              name: "GnosisSafeMath",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12868,
              src: "978:14:9"
            },
            typeName: {
              id: 10599,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "997:7:9",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256"
              }
            }
          },
          {
            id: 10603,
            nodeType: "VariableDeclaration",
            src: "1011:40:9",
            constant: true,
            functionSelector: "ffa1ad74",
            mutability: "constant",
            name: "VERSION",
            nameLocation: "1034:7:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_memory_ptr",
              typeString: "string"
            },
            typeName: {
              id: 10601,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "1011:6:9",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string"
              }
            },
            value: {
              hexValue: "312e332e30",
              id: 10602,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "string",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1044:7:9",
              typeDescriptions: {
                typeIdentifier:
                  "t_stringliteral_6a08c3e203132c561752255a4d52ffae85bb9c5d33cb3291520dea1b84356389",
                typeString: 'literal_string "1.3.0"'
              },
              value: "1.3.0"
            },
            visibility: "public"
          },
          {
            id: 10606,
            nodeType: "VariableDeclaration",
            src: "1155:119:9",
            constant: true,
            mutability: "constant",
            name: "DOMAIN_SEPARATOR_TYPEHASH",
            nameLocation: "1180:25:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bytes32",
              typeString: "bytes32"
            },
            typeName: {
              id: 10604,
              name: "bytes32",
              nodeType: "ElementaryTypeName",
              src: "1155:7:9",
              typeDescriptions: {
                typeIdentifier: "t_bytes32",
                typeString: "bytes32"
              }
            },
            value: {
              hexValue:
                "307834376537393533346132343539353265386231363839336133333662383561336439656139666138633537336633643830336166623932613739343639323138",
              id: 10605,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1208:66:9",
              typeDescriptions: {
                typeIdentifier:
                  "t_rational_32523383700587834770323112271211932718128200013265661849047136999858837557784_by_1",
                typeString: "int_const 3252...(69 digits omitted)...7784"
              },
              value:
                "0x47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218"
            },
            visibility: "private"
          },
          {
            id: 10609,
            nodeType: "VariableDeclaration",
            src: "1487:110:9",
            constant: true,
            mutability: "constant",
            name: "SAFE_TX_TYPEHASH",
            nameLocation: "1512:16:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bytes32",
              typeString: "bytes32"
            },
            typeName: {
              id: 10607,
              name: "bytes32",
              nodeType: "ElementaryTypeName",
              src: "1487:7:9",
              typeDescriptions: {
                typeIdentifier: "t_bytes32",
                typeString: "bytes32"
              }
            },
            value: {
              hexValue:
                "307862623833313064343836333638646236626436663834393430326664643733616435336433313662356134623236343461643665666530663934313238366438",
              id: 10608,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "number",
              lValueRequested: false,
              nodeType: "Literal",
              src: "1531:66:9",
              typeDescriptions: {
                typeIdentifier:
                  "t_rational_84814075808141314178395468817534025465894426928601295766380145544921651250904_by_1",
                typeString: "int_const 8481...(69 digits omitted)...0904"
              },
              value:
                "0xbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d8"
            },
            visibility: "private"
          },
          {
            id: 10622,
            nodeType: "EventDefinition",
            src: "1604:126:9",
            anonymous: false,
            name: "SafeSetup",
            nameLocation: "1610:9:9",
            parameters: {
              id: 10621,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10611,
                  indexed: true,
                  mutability: "mutable",
                  name: "initiator",
                  nameLocation: "1636:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 10622,
                  src: "1620:25:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10610,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1620:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10614,
                  indexed: false,
                  mutability: "mutable",
                  name: "owners",
                  nameLocation: "1657:6:9",
                  nodeType: "VariableDeclaration",
                  scope: 10622,
                  src: "1647:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_address_$dyn_memory_ptr",
                    typeString: "address[]"
                  },
                  typeName: {
                    baseType: {
                      id: 10612,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1647:7:9",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    id: 10613,
                    nodeType: "ArrayTypeName",
                    src: "1647:9:9",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_address_$dyn_storage_ptr",
                      typeString: "address[]"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10616,
                  indexed: false,
                  mutability: "mutable",
                  name: "threshold",
                  nameLocation: "1673:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 10622,
                  src: "1665:17:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10615,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1665:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10618,
                  indexed: false,
                  mutability: "mutable",
                  name: "initializer",
                  nameLocation: "1692:11:9",
                  nodeType: "VariableDeclaration",
                  scope: 10622,
                  src: "1684:19:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10617,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1684:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10620,
                  indexed: false,
                  mutability: "mutable",
                  name: "fallbackHandler",
                  nameLocation: "1713:15:9",
                  nodeType: "VariableDeclaration",
                  scope: 10622,
                  src: "1705:23:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10619,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1705:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1619:110:9"
            }
          },
          {
            id: 10628,
            nodeType: "EventDefinition",
            src: "1735:71:9",
            anonymous: false,
            name: "ApproveHash",
            nameLocation: "1741:11:9",
            parameters: {
              id: 10627,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10624,
                  indexed: true,
                  mutability: "mutable",
                  name: "approvedHash",
                  nameLocation: "1769:12:9",
                  nodeType: "VariableDeclaration",
                  scope: 10628,
                  src: "1753:28:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 10623,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1753:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10626,
                  indexed: true,
                  mutability: "mutable",
                  name: "owner",
                  nameLocation: "1799:5:9",
                  nodeType: "VariableDeclaration",
                  scope: 10628,
                  src: "1783:21:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10625,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1783:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1752:53:9"
            }
          },
          {
            id: 10632,
            nodeType: "EventDefinition",
            src: "1811:39:9",
            anonymous: false,
            name: "SignMsg",
            nameLocation: "1817:7:9",
            parameters: {
              id: 10631,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10630,
                  indexed: true,
                  mutability: "mutable",
                  name: "msgHash",
                  nameLocation: "1841:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10632,
                  src: "1825:23:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 10629,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1825:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1824:25:9"
            }
          },
          {
            id: 10638,
            nodeType: "EventDefinition",
            src: "1855:56:9",
            anonymous: false,
            name: "ExecutionFailure",
            nameLocation: "1861:16:9",
            parameters: {
              id: 10637,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10634,
                  indexed: false,
                  mutability: "mutable",
                  name: "txHash",
                  nameLocation: "1886:6:9",
                  nodeType: "VariableDeclaration",
                  scope: 10638,
                  src: "1878:14:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 10633,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1878:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10636,
                  indexed: false,
                  mutability: "mutable",
                  name: "payment",
                  nameLocation: "1902:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10638,
                  src: "1894:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10635,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1894:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1877:33:9"
            }
          },
          {
            id: 10644,
            nodeType: "EventDefinition",
            src: "1916:56:9",
            anonymous: false,
            name: "ExecutionSuccess",
            nameLocation: "1922:16:9",
            parameters: {
              id: 10643,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10640,
                  indexed: false,
                  mutability: "mutable",
                  name: "txHash",
                  nameLocation: "1947:6:9",
                  nodeType: "VariableDeclaration",
                  scope: 10644,
                  src: "1939:14:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 10639,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "1939:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10642,
                  indexed: false,
                  mutability: "mutable",
                  name: "payment",
                  nameLocation: "1963:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10644,
                  src: "1955:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10641,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1955:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1938:33:9"
            }
          },
          {
            id: 10646,
            nodeType: "VariableDeclaration",
            src: "1978:20:9",
            constant: false,
            functionSelector: "affed0e0",
            mutability: "mutable",
            name: "nonce",
            nameLocation: "1993:5:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256"
            },
            typeName: {
              id: 10645,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "1978:7:9",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256"
              }
            },
            visibility: "public"
          },
          {
            id: 10648,
            nodeType: "VariableDeclaration",
            src: "2004:42:9",
            constant: false,
            mutability: "mutable",
            name: "_deprecatedDomainSeparator",
            nameLocation: "2020:26:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_bytes32",
              typeString: "bytes32"
            },
            typeName: {
              id: 10647,
              name: "bytes32",
              nodeType: "ElementaryTypeName",
              src: "2004:7:9",
              typeDescriptions: {
                typeIdentifier: "t_bytes32",
                typeString: "bytes32"
              }
            },
            visibility: "private"
          },
          {
            id: 10652,
            nodeType: "VariableDeclaration",
            src: "2150:49:9",
            constant: false,
            functionSelector: "5ae6bd37",
            mutability: "mutable",
            name: "signedMessages",
            nameLocation: "2185:14:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_mapping$_t_bytes32_$_t_uint256_$",
              typeString: "mapping(bytes32 => uint256)"
            },
            typeName: {
              id: 10651,
              keyType: {
                id: 10649,
                name: "bytes32",
                nodeType: "ElementaryTypeName",
                src: "2158:7:9",
                typeDescriptions: {
                  typeIdentifier: "t_bytes32",
                  typeString: "bytes32"
                }
              },
              nodeType: "Mapping",
              src: "2150:27:9",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_bytes32_$_t_uint256_$",
                typeString: "mapping(bytes32 => uint256)"
              },
              valueType: {
                id: 10650,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "2169:7:9",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256"
                }
              }
            },
            visibility: "public"
          },
          {
            id: 10658,
            nodeType: "VariableDeclaration",
            src: "2311:69:9",
            constant: false,
            functionSelector: "7d832974",
            mutability: "mutable",
            name: "approvedHashes",
            nameLocation: "2366:14:9",
            scope: 11516,
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
              typeString: "mapping(address => mapping(bytes32 => uint256))"
            },
            typeName: {
              id: 10657,
              keyType: {
                id: 10653,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "2319:7:9",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address"
                }
              },
              nodeType: "Mapping",
              src: "2311:47:9",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                typeString: "mapping(address => mapping(bytes32 => uint256))"
              },
              valueType: {
                id: 10656,
                keyType: {
                  id: 10654,
                  name: "bytes32",
                  nodeType: "ElementaryTypeName",
                  src: "2338:7:9",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  }
                },
                nodeType: "Mapping",
                src: "2330:27:9",
                typeDescriptions: {
                  typeIdentifier: "t_mapping$_t_bytes32_$_t_uint256_$",
                  typeString: "mapping(bytes32 => uint256)"
                },
                valueType: {
                  id: 10655,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "2349:7:9",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  }
                }
              }
            },
            visibility: "public"
          },
          {
            id: 10666,
            nodeType: "FunctionDefinition",
            src: "2492:247:9",
            body: {
              id: 10665,
              nodeType: "Block",
              src: "2506:233:9",
              statements: [
                {
                  expression: {
                    id: 10663,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 10661,
                      name: "threshold",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 12126,
                      src: "2719:9:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "31",
                      id: 10662,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2731:1:9",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_1_by_1",
                        typeString: "int_const 1"
                      },
                      value: "1"
                    },
                    src: "2719:13:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  id: 10664,
                  nodeType: "ExpressionStatement",
                  src: "2719:13:9"
                }
              ]
            },
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            parameters: {
              id: 10659,
              nodeType: "ParameterList",
              parameters: [],
              src: "2503:2:9"
            },
            returnParameters: {
              id: 10660,
              nodeType: "ParameterList",
              parameters: [],
              src: "2506:0:9"
            },
            scope: 11516,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public"
          },
          {
            id: 10731,
            nodeType: "FunctionDefinition",
            src: "3354:1151:9",
            body: {
              id: 10730,
              nodeType: "Block",
              src: "3626:879:9",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 10688,
                        name: "_owners",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10670,
                        src: "3765:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_address_$dyn_calldata_ptr",
                          typeString: "address[] calldata"
                        }
                      },
                      {
                        id: 10689,
                        name: "_threshold",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10672,
                        src: "3774:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier:
                            "t_array$_t_address_$dyn_calldata_ptr",
                          typeString: "address[] calldata"
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      ],
                      id: 10687,
                      name: "setupOwners",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 12243,
                      src: "3753:11:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$returns$__$",
                        typeString: "function (address[] memory,uint256)"
                      }
                    },
                    id: 10690,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3753:32:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 10691,
                  nodeType: "ExpressionStatement",
                  src: "3753:32:9"
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    },
                    id: 10697,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 10692,
                      name: "fallbackHandler",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10678,
                      src: "3799:15:9",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    nodeType: "BinaryOperation",
                    operator: "!=",
                    rightExpression: {
                      arguments: [
                        {
                          hexValue: "30",
                          id: 10695,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "3826:1:9",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          },
                          value: "0"
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          }
                        ],
                        id: 10694,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "3818:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_address_$",
                          typeString: "type(address)"
                        },
                        typeName: {
                          id: 10693,
                          name: "address",
                          nodeType: "ElementaryTypeName",
                          src: "3818:7:9",
                          typeDescriptions: {}
                        }
                      },
                      id: 10696,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "typeConversion",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "3818:10:9",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    src: "3799:29:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  id: 10702,
                  nodeType: "IfStatement",
                  src: "3795:78:9",
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          id: 10699,
                          name: "fallbackHandler",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10678,
                          src: "3857:15:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        ],
                        id: 10698,
                        name: "internalSetFallbackHandler",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11572,
                        src: "3830:26:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_nonpayable$_t_address_$returns$__$",
                          typeString: "function (address)"
                        }
                      },
                      id: 10700,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "3830:43:9",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()"
                      }
                    },
                    id: 10701,
                    nodeType: "ExpressionStatement",
                    src: "3830:43:9"
                  }
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 10704,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10674,
                        src: "4021:2:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      {
                        id: 10705,
                        name: "data",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10676,
                        src: "4025:4:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_calldata_ptr",
                          typeString: "bytes calldata"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        {
                          typeIdentifier: "t_bytes_calldata_ptr",
                          typeString: "bytes calldata"
                        }
                      ],
                      id: 10703,
                      name: "setupModules",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11810,
                      src: "4008:12:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_bytes_memory_ptr_$returns$__$",
                        typeString: "function (address,bytes memory)"
                      }
                    },
                    id: 10706,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4008:22:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 10707,
                  nodeType: "ExpressionStatement",
                  src: "4008:22:9"
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    },
                    id: 10710,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 10708,
                      name: "payment",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10682,
                      src: "4045:7:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "BinaryOperation",
                    operator: ">",
                    rightExpression: {
                      hexValue: "30",
                      id: 10709,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "4055:1:9",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_0_by_1",
                        typeString: "int_const 0"
                      },
                      value: "0"
                    },
                    src: "4045:11:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  id: 10720,
                  nodeType: "IfStatement",
                  src: "4041:380:9",
                  trueBody: {
                    id: 10719,
                    nodeType: "Block",
                    src: "4058:363:9",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              id: 10712,
                              name: "payment",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10682,
                              src: "4365:7:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            },
                            {
                              hexValue: "30",
                              id: 10713,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "4374:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              },
                              value: "0"
                            },
                            {
                              hexValue: "31",
                              id: 10714,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "4377:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_1_by_1",
                                typeString: "int_const 1"
                              },
                              value: "1"
                            },
                            {
                              id: 10715,
                              name: "paymentToken",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10680,
                              src: "4380:12:9",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address"
                              }
                            },
                            {
                              id: 10716,
                              name: "paymentReceiver",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10684,
                              src: "4394:15:9",
                              typeDescriptions: {
                                typeIdentifier: "t_address_payable",
                                typeString: "address payable"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              },
                              {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              },
                              {
                                typeIdentifier: "t_rational_1_by_1",
                                typeString: "int_const 1"
                              },
                              {
                                typeIdentifier: "t_address",
                                typeString: "address"
                              },
                              {
                                typeIdentifier: "t_address_payable",
                                typeString: "address payable"
                              }
                            ],
                            id: 10711,
                            name: "handlePayment",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11025,
                            src: "4351:13:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_address_payable_$returns$_t_uint256_$",
                              typeString:
                                "function (uint256,uint256,uint256,address,address payable) returns (uint256)"
                            }
                          },
                          id: 10717,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "4351:59:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        id: 10718,
                        nodeType: "ExpressionStatement",
                        src: "4351:59:9"
                      }
                    ]
                  }
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        expression: {
                          id: 10722,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: "4445:3:9",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg"
                          }
                        },
                        id: 10723,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "4445:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      {
                        id: 10724,
                        name: "_owners",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10670,
                        src: "4457:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_array$_t_address_$dyn_calldata_ptr",
                          typeString: "address[] calldata"
                        }
                      },
                      {
                        id: 10725,
                        name: "_threshold",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10672,
                        src: "4466:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      {
                        id: 10726,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10674,
                        src: "4478:2:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      {
                        id: 10727,
                        name: "fallbackHandler",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10678,
                        src: "4482:15:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        {
                          typeIdentifier:
                            "t_array$_t_address_$dyn_calldata_ptr",
                          typeString: "address[] calldata"
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      ],
                      id: 10721,
                      name: "SafeSetup",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10622,
                      src: "4435:9:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_array$_t_address_$dyn_memory_ptr_$_t_uint256_$_t_address_$_t_address_$returns$__$",
                        typeString:
                          "function (address,address[] memory,uint256,address,address)"
                      }
                    },
                    id: 10728,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4435:63:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 10729,
                  nodeType: "EmitStatement",
                  src: "4430:68:9"
                }
              ]
            },
            documentation: {
              id: 10667,
              nodeType: "StructuredDocumentation",
              src: "2745:604:9",
              text: "@dev Setup function sets initial storage of contract.\n @param _owners List of Safe owners.\n @param _threshold Number of required confirmations for a Safe transaction.\n @param to Contract address for optional delegate call.\n @param data Data payload for optional delegate call.\n @param fallbackHandler Handler for fallback calls to this contract\n @param paymentToken Token that should be used for the payment (0 is ETH)\n @param payment Value that should be paid\n @param paymentReceiver Address that should receive the payment (or 0 if tx.origin)"
            },
            functionSelector: "b63e800d",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "setup",
            nameLocation: "3363:5:9",
            parameters: {
              id: 10685,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10670,
                  mutability: "mutable",
                  name: "_owners",
                  nameLocation: "3397:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3378:26:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_address_$dyn_calldata_ptr",
                    typeString: "address[]"
                  },
                  typeName: {
                    baseType: {
                      id: 10668,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "3378:7:9",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    id: 10669,
                    nodeType: "ArrayTypeName",
                    src: "3378:9:9",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_address_$dyn_storage_ptr",
                      typeString: "address[]"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10672,
                  mutability: "mutable",
                  name: "_threshold",
                  nameLocation: "3422:10:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3414:18:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10671,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3414:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10674,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "3450:2:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3442:10:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10673,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3442:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10676,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "3477:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3462:19:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_calldata_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 10675,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "3462:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10678,
                  mutability: "mutable",
                  name: "fallbackHandler",
                  nameLocation: "3499:15:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3491:23:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10677,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3491:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10680,
                  mutability: "mutable",
                  name: "paymentToken",
                  nameLocation: "3532:12:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3524:20:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10679,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3524:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10682,
                  mutability: "mutable",
                  name: "payment",
                  nameLocation: "3562:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3554:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10681,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "3554:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10684,
                  mutability: "mutable",
                  name: "paymentReceiver",
                  nameLocation: "3595:15:9",
                  nodeType: "VariableDeclaration",
                  scope: 10731,
                  src: "3579:31:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address_payable",
                    typeString: "address payable"
                  },
                  typeName: {
                    id: 10683,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "3579:15:9",
                    stateMutability: "payable",
                    typeDescriptions: {
                      typeIdentifier: "t_address_payable",
                      typeString: "address payable"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "3368:248:9"
            },
            returnParameters: {
              id: 10686,
              nodeType: "ParameterList",
              parameters: [],
              src: "3626:0:9"
            },
            scope: 11516,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external"
          },
          {
            id: 10940,
            nodeType: "FunctionDefinition",
            src: "5532:3628:9",
            body: {
              id: 10939,
              nodeType: "Block",
              src: "5892:3268:9",
              statements: [
                {
                  assignments: [10759],
                  declarations: [
                    {
                      constant: false,
                      id: 10759,
                      mutability: "mutable",
                      name: "txHash",
                      nameLocation: "5910:6:9",
                      nodeType: "VariableDeclaration",
                      scope: 10939,
                      src: "5902:14:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32"
                      },
                      typeName: {
                        id: 10758,
                        name: "bytes32",
                        nodeType: "ElementaryTypeName",
                        src: "5902:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 10760,
                  nodeType: "VariableDeclarationStatement",
                  src: "5902:14:9"
                },
                {
                  id: 10791,
                  nodeType: "Block",
                  src: "6015:692:9",
                  statements: [
                    {
                      assignments: [10762],
                      declarations: [
                        {
                          constant: false,
                          id: 10762,
                          mutability: "mutable",
                          name: "txHashData",
                          nameLocation: "6042:10:9",
                          nodeType: "VariableDeclaration",
                          scope: 10791,
                          src: "6029:23:9",
                          stateVariable: false,
                          storageLocation: "memory",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes_memory_ptr",
                            typeString: "bytes"
                          },
                          typeName: {
                            id: 10761,
                            name: "bytes",
                            nodeType: "ElementaryTypeName",
                            src: "6029:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_storage_ptr",
                              typeString: "bytes"
                            }
                          },
                          visibility: "internal"
                        }
                      ],
                      id: 10775,
                      initialValue: {
                        arguments: [
                          {
                            id: 10764,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10734,
                            src: "6154:2:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 10765,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10736,
                            src: "6178:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 10766,
                            name: "data",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10738,
                            src: "6205:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            }
                          },
                          {
                            id: 10767,
                            name: "operation",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10741,
                            src: "6231:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            }
                          },
                          {
                            id: 10768,
                            name: "safeTxGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10743,
                            src: "6262:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 10769,
                            name: "baseGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10745,
                            src: "6329:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 10770,
                            name: "gasPrice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10747,
                            src: "6358:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 10771,
                            name: "gasToken",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10749,
                            src: "6388:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 10772,
                            name: "refundReceiver",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10751,
                            src: "6418:14:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address_payable",
                              typeString: "address payable"
                            }
                          },
                          {
                            id: 10773,
                            name: "nonce",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10646,
                            src: "6492:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            },
                            {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_address_payable",
                              typeString: "address payable"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          ],
                          id: 10763,
                          name: "encodeTransactionData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11472,
                          src: "6071:21:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$_t_enum$_Operation_$12611_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_address_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function (address,uint256,bytes calldata,enum Enum.Operation,uint256,uint256,uint256,address,address,uint256) view returns (bytes memory)"
                          }
                        },
                        id: 10774,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "6071:444:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "6029:486:9"
                    },
                    {
                      expression: {
                        id: 10777,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "UnaryOperation",
                        operator: "++",
                        prefix: false,
                        src: "6584:7:9",
                        subExpression: {
                          id: 10776,
                          name: "nonce",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10646,
                          src: "6584:5:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      id: 10778,
                      nodeType: "ExpressionStatement",
                      src: "6584:7:9"
                    },
                    {
                      expression: {
                        id: 10783,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 10779,
                          name: "txHash",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10759,
                          src: "6605:6:9",
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32"
                          }
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          arguments: [
                            {
                              id: 10781,
                              name: "txHashData",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10762,
                              src: "6624:10:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes_memory_ptr",
                                typeString: "bytes memory"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes_memory_ptr",
                                typeString: "bytes memory"
                              }
                            ],
                            id: 10780,
                            name: "keccak256",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -8,
                            src: "6614:9:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              typeString:
                                "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          id: 10782,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "6614:21:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bytes32",
                            typeString: "bytes32"
                          }
                        },
                        src: "6605:30:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      id: 10784,
                      nodeType: "ExpressionStatement",
                      src: "6605:30:9"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            id: 10786,
                            name: "txHash",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10759,
                            src: "6665:6:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            }
                          },
                          {
                            id: 10787,
                            name: "txHashData",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10762,
                            src: "6673:10:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          },
                          {
                            id: 10788,
                            name: "signatures",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10753,
                            src: "6685:10:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            },
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            },
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          ],
                          id: 10785,
                          name: "checkSignatures",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11054,
                          src: "6649:15:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_bytes32_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                            typeString:
                              "function (bytes32,bytes memory,bytes memory) view"
                          }
                        },
                        id: 10789,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "6649:47:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()"
                        }
                      },
                      id: 10790,
                      nodeType: "ExpressionStatement",
                      src: "6649:47:9"
                    }
                  ]
                },
                {
                  assignments: [10793],
                  declarations: [
                    {
                      constant: false,
                      id: 10793,
                      mutability: "mutable",
                      name: "guard",
                      nameLocation: "6724:5:9",
                      nodeType: "VariableDeclaration",
                      scope: 10939,
                      src: "6716:13:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      },
                      typeName: {
                        id: 10792,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "6716:7:9",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 10796,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 10794,
                      name: "getGuard",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11726,
                      src: "6732:8:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$__$returns$_t_address_$",
                        typeString: "function () view returns (address)"
                      }
                    },
                    id: 10795,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6732:10:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6716:26:9"
                },
                {
                  id: 10823,
                  nodeType: "Block",
                  src: "6752:571:9",
                  statements: [
                    {
                      condition: {
                        commonType: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        id: 10802,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 10797,
                          name: "guard",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10793,
                          src: "6770:5:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: "30",
                              id: 10800,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "6787:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              },
                              value: "0"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              }
                            ],
                            id: 10799,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "6779:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)"
                            },
                            typeName: {
                              id: 10798,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "6779:7:9",
                              typeDescriptions: {}
                            }
                          },
                          id: 10801,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "typeConversion",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "6779:10:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        src: "6770:19:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      id: 10822,
                      nodeType: "IfStatement",
                      src: "6766:547:9",
                      trueBody: {
                        id: 10821,
                        nodeType: "Block",
                        src: "6791:522:9",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  id: 10807,
                                  name: "to",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10734,
                                  src: "6900:2:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                {
                                  id: 10808,
                                  name: "value",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10736,
                                  src: "6924:5:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                {
                                  id: 10809,
                                  name: "data",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10738,
                                  src: "6951:4:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes_calldata_ptr",
                                    typeString: "bytes calldata"
                                  }
                                },
                                {
                                  id: 10810,
                                  name: "operation",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10741,
                                  src: "6977:9:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_enum$_Operation_$12611",
                                    typeString: "enum Enum.Operation"
                                  }
                                },
                                {
                                  id: 10811,
                                  name: "safeTxGas",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10743,
                                  src: "7008:9:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                {
                                  id: 10812,
                                  name: "baseGas",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10745,
                                  src: "7075:7:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                {
                                  id: 10813,
                                  name: "gasPrice",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10747,
                                  src: "7104:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                {
                                  id: 10814,
                                  name: "gasToken",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10749,
                                  src: "7134:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                {
                                  id: 10815,
                                  name: "refundReceiver",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10751,
                                  src: "7164:14:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address_payable",
                                    typeString: "address payable"
                                  }
                                },
                                {
                                  id: 10816,
                                  name: "signatures",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10753,
                                  src: "7238:10:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes memory"
                                  }
                                },
                                {
                                  expression: {
                                    id: 10817,
                                    name: "msg",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: -15,
                                    src: "7270:3:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_magic_message",
                                      typeString: "msg"
                                    }
                                  },
                                  id: 10818,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: "sender",
                                  nodeType: "MemberAccess",
                                  src: "7270:10:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  },
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  {
                                    typeIdentifier: "t_bytes_calldata_ptr",
                                    typeString: "bytes calldata"
                                  },
                                  {
                                    typeIdentifier: "t_enum$_Operation_$12611",
                                    typeString: "enum Enum.Operation"
                                  },
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  },
                                  {
                                    typeIdentifier: "t_address_payable",
                                    typeString: "address payable"
                                  },
                                  {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes memory"
                                  },
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                ],
                                expression: {
                                  arguments: [
                                    {
                                      id: 10804,
                                      name: "guard",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 10793,
                                      src: "6815:5:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    }
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    ],
                                    id: 10803,
                                    name: "Guard",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 11640,
                                    src: "6809:5:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_type$_t_contract$_Guard_$11640_$",
                                      typeString: "type(contract Guard)"
                                    }
                                  },
                                  id: 10805,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "6809:12:9",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_contract$_Guard_$11640",
                                    typeString: "contract Guard"
                                  }
                                },
                                id: 10806,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "checkTransaction",
                                nodeType: "MemberAccess",
                                referencedDeclaration: 11632,
                                src: "6809:29:9",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_external_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_enum$_Operation_$12611_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_address_payable_$_t_bytes_memory_ptr_$_t_address_$returns$__$",
                                  typeString:
                                    "function (address,uint256,bytes memory,enum Enum.Operation,uint256,uint256,uint256,address,address payable,bytes memory,address) external"
                                }
                              },
                              id: 10819,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "6809:489:9",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_tuple$__$",
                                typeString: "tuple()"
                              }
                            },
                            id: 10820,
                            nodeType: "ExpressionStatement",
                            src: "6809:489:9"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 10841,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          arguments: [],
                          expression: {
                            argumentTypes: [],
                            id: 10825,
                            name: "gasleft",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -7,
                            src: "7614:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_gasleft_view$__$returns$_t_uint256_$",
                              typeString: "function () view returns (uint256)"
                            }
                          },
                          id: 10826,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "7614:9:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: ">=",
                        rightExpression: {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          },
                          id: 10840,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            arguments: [
                              {
                                commonType: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                },
                                id: 10837,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  id: 10835,
                                  name: "safeTxGas",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10743,
                                  src: "7655:9:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                nodeType: "BinaryOperation",
                                operator: "+",
                                rightExpression: {
                                  hexValue: "32353030",
                                  id: 10836,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: "number",
                                  lValueRequested: false,
                                  nodeType: "Literal",
                                  src: "7667:4:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_rational_2500_by_1",
                                    typeString: "int_const 2500"
                                  },
                                  value: "2500"
                                },
                                src: "7655:16:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              ],
                              expression: {
                                components: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    id: 10832,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      components: [
                                        {
                                          commonType: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          },
                                          id: 10829,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          lValueRequested: false,
                                          leftExpression: {
                                            id: 10827,
                                            name: "safeTxGas",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 10743,
                                            src: "7629:9:9",
                                            typeDescriptions: {
                                              typeIdentifier: "t_uint256",
                                              typeString: "uint256"
                                            }
                                          },
                                          nodeType: "BinaryOperation",
                                          operator: "*",
                                          rightExpression: {
                                            hexValue: "3634",
                                            id: 10828,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            kind: "number",
                                            lValueRequested: false,
                                            nodeType: "Literal",
                                            src: "7641:2:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_rational_64_by_1",
                                              typeString: "int_const 64"
                                            },
                                            value: "64"
                                          },
                                          src: "7629:14:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        }
                                      ],
                                      id: 10830,
                                      isConstant: false,
                                      isInlineArray: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      nodeType: "TupleExpression",
                                      src: "7628:16:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "/",
                                    rightExpression: {
                                      hexValue: "3633",
                                      id: 10831,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      kind: "number",
                                      lValueRequested: false,
                                      nodeType: "Literal",
                                      src: "7647:2:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_rational_63_by_1",
                                        typeString: "int_const 63"
                                      },
                                      value: "63"
                                    },
                                    src: "7628:21:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  }
                                ],
                                id: 10833,
                                isConstant: false,
                                isInlineArray: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: "TupleExpression",
                                src: "7627:23:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              id: 10834,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "max",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 12867,
                              src: "7627:27:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            id: 10838,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "7627:45:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          nodeType: "BinaryOperation",
                          operator: "+",
                          rightExpression: {
                            hexValue: "353030",
                            id: 10839,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "7675:3:9",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_500_by_1",
                              typeString: "int_const 500"
                            },
                            value: "500"
                          },
                          src: "7627:51:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        src: "7614:64:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      {
                        hexValue: "4753303130",
                        id: 10842,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "7680:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_9d970fd9adbe3047cd5b7a20406b6bf2e613338cfe3a19aca4ca1810b67fad10",
                          typeString: 'literal_string "GS010"'
                        },
                        value: "GS010"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_9d970fd9adbe3047cd5b7a20406b6bf2e613338cfe3a19aca4ca1810b67fad10",
                          typeString: 'literal_string "GS010"'
                        }
                      ],
                      id: 10824,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "7606:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure"
                      }
                    },
                    id: 10843,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "7606:82:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 10844,
                  nodeType: "ExpressionStatement",
                  src: "7606:82:9"
                },
                {
                  id: 10921,
                  nodeType: "Block",
                  src: "7787:1227:9",
                  statements: [
                    {
                      assignments: [10846],
                      declarations: [
                        {
                          constant: false,
                          id: 10846,
                          mutability: "mutable",
                          name: "gasUsed",
                          nameLocation: "7809:7:9",
                          nodeType: "VariableDeclaration",
                          scope: 10921,
                          src: "7801:15:9",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          },
                          typeName: {
                            id: 10845,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "7801:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          visibility: "internal"
                        }
                      ],
                      id: 10849,
                      initialValue: {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          id: 10847,
                          name: "gasleft",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: -7,
                          src: "7819:7:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_gasleft_view$__$returns$_t_uint256_$",
                            typeString: "function () view returns (uint256)"
                          }
                        },
                        id: 10848,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "7819:9:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "7801:27:9"
                    },
                    {
                      expression: {
                        id: 10867,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 10850,
                          name: "success",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10756,
                          src: "8097:7:9",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool"
                          }
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          arguments: [
                            {
                              id: 10852,
                              name: "to",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10734,
                              src: "8115:2:9",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address"
                              }
                            },
                            {
                              id: 10853,
                              name: "value",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10736,
                              src: "8119:5:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            },
                            {
                              id: 10854,
                              name: "data",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10738,
                              src: "8126:4:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes_calldata_ptr",
                                typeString: "bytes calldata"
                              }
                            },
                            {
                              id: 10855,
                              name: "operation",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10741,
                              src: "8132:9:9",
                              typeDescriptions: {
                                typeIdentifier: "t_enum$_Operation_$12611",
                                typeString: "enum Enum.Operation"
                              }
                            },
                            {
                              condition: {
                                commonType: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                },
                                id: 10858,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  id: 10856,
                                  name: "gasPrice",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10747,
                                  src: "8143:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                nodeType: "BinaryOperation",
                                operator: "==",
                                rightExpression: {
                                  hexValue: "30",
                                  id: 10857,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: "number",
                                  lValueRequested: false,
                                  nodeType: "Literal",
                                  src: "8155:1:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_rational_0_by_1",
                                    typeString: "int_const 0"
                                  },
                                  value: "0"
                                },
                                src: "8143:13:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                }
                              },
                              falseExpression: {
                                id: 10864,
                                name: "safeTxGas",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 10743,
                                src: "8180:9:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              id: 10865,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              nodeType: "Conditional",
                              src: "8143:46:9",
                              trueExpression: {
                                components: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    id: 10862,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      arguments: [],
                                      expression: {
                                        argumentTypes: [],
                                        id: 10859,
                                        name: "gasleft",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: -7,
                                        src: "8160:7:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_gasleft_view$__$returns$_t_uint256_$",
                                          typeString:
                                            "function () view returns (uint256)"
                                        }
                                      },
                                      id: 10860,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "8160:9:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "-",
                                    rightExpression: {
                                      hexValue: "32353030",
                                      id: 10861,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      kind: "number",
                                      lValueRequested: false,
                                      nodeType: "Literal",
                                      src: "8172:4:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_rational_2500_by_1",
                                        typeString: "int_const 2500"
                                      },
                                      value: "2500"
                                    },
                                    src: "8160:16:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  }
                                ],
                                id: 10863,
                                isConstant: false,
                                isInlineArray: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: "TupleExpression",
                                src: "8159:18:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address"
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              },
                              {
                                typeIdentifier: "t_bytes_calldata_ptr",
                                typeString: "bytes calldata"
                              },
                              {
                                typeIdentifier: "t_enum$_Operation_$12611",
                                typeString: "enum Enum.Operation"
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            ],
                            id: 10851,
                            name: "execute",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11547,
                            src: "8107:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_enum$_Operation_$12611_$_t_uint256_$returns$_t_bool_$",
                              typeString:
                                "function (address,uint256,bytes memory,enum Enum.Operation,uint256) returns (bool)"
                            }
                          },
                          id: 10866,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "8107:83:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool"
                          }
                        },
                        src: "8097:93:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      id: 10868,
                      nodeType: "ExpressionStatement",
                      src: "8097:93:9"
                    },
                    {
                      expression: {
                        id: 10875,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftHandSide: {
                          id: 10869,
                          name: "gasUsed",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10846,
                          src: "8204:7:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "Assignment",
                        operator: "=",
                        rightHandSide: {
                          arguments: [
                            {
                              arguments: [],
                              expression: {
                                argumentTypes: [],
                                id: 10872,
                                name: "gasleft",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -7,
                                src: "8226:7:9",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_gasleft_view$__$returns$_t_uint256_$",
                                  typeString:
                                    "function () view returns (uint256)"
                                }
                              },
                              id: 10873,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "8226:9:9",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            ],
                            expression: {
                              id: 10870,
                              name: "gasUsed",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10846,
                              src: "8214:7:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            },
                            id: 10871,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sub",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 12824,
                            src: "8214:11:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              typeString:
                                "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          id: 10874,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "8214:22:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        src: "8204:32:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      id: 10876,
                      nodeType: "ExpressionStatement",
                      src: "8204:32:9"
                    },
                    {
                      expression: {
                        arguments: [
                          {
                            commonType: {
                              typeIdentifier: "t_bool",
                              typeString: "bool"
                            },
                            id: 10886,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              commonType: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              },
                              id: 10882,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                id: 10878,
                                name: "success",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 10756,
                                src: "8520:7:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                }
                              },
                              nodeType: "BinaryOperation",
                              operator: "||",
                              rightExpression: {
                                commonType: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                },
                                id: 10881,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  id: 10879,
                                  name: "safeTxGas",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10743,
                                  src: "8531:9:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                nodeType: "BinaryOperation",
                                operator: "!=",
                                rightExpression: {
                                  hexValue: "30",
                                  id: 10880,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: "number",
                                  lValueRequested: false,
                                  nodeType: "Literal",
                                  src: "8544:1:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_rational_0_by_1",
                                    typeString: "int_const 0"
                                  },
                                  value: "0"
                                },
                                src: "8531:14:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                }
                              },
                              src: "8520:25:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            nodeType: "BinaryOperation",
                            operator: "||",
                            rightExpression: {
                              commonType: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              },
                              id: 10885,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                id: 10883,
                                name: "gasPrice",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 10747,
                                src: "8549:8:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              nodeType: "BinaryOperation",
                              operator: "!=",
                              rightExpression: {
                                hexValue: "30",
                                id: 10884,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "number",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "8561:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_rational_0_by_1",
                                  typeString: "int_const 0"
                                },
                                value: "0"
                              },
                              src: "8549:13:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            src: "8520:42:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool"
                            }
                          },
                          {
                            hexValue: "4753303133",
                            id: 10887,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "string",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "8564:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_stringliteral_99333b4627cde46d9c53d7148b33b8b1f4f065f5dceb2cb210893e67e551978e",
                              typeString: 'literal_string "GS013"'
                            },
                            value: "GS013"
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bool",
                              typeString: "bool"
                            },
                            {
                              typeIdentifier:
                                "t_stringliteral_99333b4627cde46d9c53d7148b33b8b1f4f065f5dceb2cb210893e67e551978e",
                              typeString: 'literal_string "GS013"'
                            }
                          ],
                          id: 10877,
                          name: "require",
                          nodeType: "Identifier",
                          overloadedDeclarations: [-18, -18],
                          referencedDeclaration: -18,
                          src: "8512:7:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            typeString: "function (bool,string memory) pure"
                          }
                        },
                        id: 10888,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "8512:60:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_tuple$__$",
                          typeString: "tuple()"
                        }
                      },
                      id: 10889,
                      nodeType: "ExpressionStatement",
                      src: "8512:60:9"
                    },
                    {
                      assignments: [10891],
                      declarations: [
                        {
                          constant: false,
                          id: 10891,
                          mutability: "mutable",
                          name: "payment",
                          nameLocation: "8729:7:9",
                          nodeType: "VariableDeclaration",
                          scope: 10921,
                          src: "8721:15:9",
                          stateVariable: false,
                          storageLocation: "default",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          },
                          typeName: {
                            id: 10890,
                            name: "uint256",
                            nodeType: "ElementaryTypeName",
                            src: "8721:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          visibility: "internal"
                        }
                      ],
                      id: 10893,
                      initialValue: {
                        hexValue: "30",
                        id: 10892,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "8739:1:9",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0"
                        },
                        value: "0"
                      },
                      nodeType: "VariableDeclarationStatement",
                      src: "8721:19:9"
                    },
                    {
                      condition: {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 10896,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 10894,
                          name: "gasPrice",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10747,
                          src: "8758:8:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: ">",
                        rightExpression: {
                          hexValue: "30",
                          id: 10895,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "8769:1:9",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          },
                          value: "0"
                        },
                        src: "8758:12:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      id: 10908,
                      nodeType: "IfStatement",
                      src: "8754:128:9",
                      trueBody: {
                        id: 10907,
                        nodeType: "Block",
                        src: "8772:110:9",
                        statements: [
                          {
                            expression: {
                              id: 10905,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftHandSide: {
                                id: 10897,
                                name: "payment",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 10891,
                                src: "8790:7:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              nodeType: "Assignment",
                              operator: "=",
                              rightHandSide: {
                                arguments: [
                                  {
                                    id: 10899,
                                    name: "gasUsed",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10846,
                                    src: "8814:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  {
                                    id: 10900,
                                    name: "baseGas",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10745,
                                    src: "8823:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  {
                                    id: 10901,
                                    name: "gasPrice",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10747,
                                    src: "8832:8:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  {
                                    id: 10902,
                                    name: "gasToken",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10749,
                                    src: "8842:8:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  {
                                    id: 10903,
                                    name: "refundReceiver",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10751,
                                    src: "8852:14:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address_payable",
                                      typeString: "address payable"
                                    }
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    },
                                    {
                                      typeIdentifier: "t_address_payable",
                                      typeString: "address payable"
                                    }
                                  ],
                                  id: 10898,
                                  name: "handlePayment",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 11025,
                                  src: "8800:13:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_address_payable_$returns$_t_uint256_$",
                                    typeString:
                                      "function (uint256,uint256,uint256,address,address payable) returns (uint256)"
                                  }
                                },
                                id: 10904,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "8800:67:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              src: "8790:77:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            },
                            id: 10906,
                            nodeType: "ExpressionStatement",
                            src: "8790:77:9"
                          }
                        ]
                      }
                    },
                    {
                      condition: {
                        id: 10909,
                        name: "success",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10756,
                        src: "8899:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      falseBody: {
                        eventCall: {
                          arguments: [
                            {
                              id: 10916,
                              name: "txHash",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10759,
                              src: "8987:6:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32"
                              }
                            },
                            {
                              id: 10917,
                              name: "payment",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10891,
                              src: "8995:7:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32"
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            ],
                            id: 10915,
                            name: "ExecutionFailure",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10638,
                            src: "8970:16:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                              typeString: "function (bytes32,uint256)"
                            }
                          },
                          id: 10918,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "8970:33:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 10919,
                        nodeType: "EmitStatement",
                        src: "8965:38:9"
                      },
                      id: 10920,
                      nodeType: "IfStatement",
                      src: "8895:108:9",
                      trueBody: {
                        eventCall: {
                          arguments: [
                            {
                              id: 10911,
                              name: "txHash",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10759,
                              src: "8930:6:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32"
                              }
                            },
                            {
                              id: 10912,
                              name: "payment",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 10891,
                              src: "8938:7:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bytes32",
                                typeString: "bytes32"
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            ],
                            id: 10910,
                            name: "ExecutionSuccess",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10644,
                            src: "8913:16:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_event_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                              typeString: "function (bytes32,uint256)"
                            }
                          },
                          id: 10913,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "8913:33:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 10914,
                        nodeType: "EmitStatement",
                        src: "8908:38:9"
                      }
                    }
                  ]
                },
                {
                  id: 10938,
                  nodeType: "Block",
                  src: "9023:131:9",
                  statements: [
                    {
                      condition: {
                        commonType: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        id: 10927,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 10922,
                          name: "guard",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10793,
                          src: "9041:5:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: "30",
                              id: 10925,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "9058:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              },
                              value: "0"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              }
                            ],
                            id: 10924,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "9050:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)"
                            },
                            typeName: {
                              id: 10923,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "9050:7:9",
                              typeDescriptions: {}
                            }
                          },
                          id: 10926,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "typeConversion",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "9050:10:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        src: "9041:19:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      id: 10937,
                      nodeType: "IfStatement",
                      src: "9037:107:9",
                      trueBody: {
                        id: 10936,
                        nodeType: "Block",
                        src: "9062:82:9",
                        statements: [
                          {
                            expression: {
                              arguments: [
                                {
                                  id: 10932,
                                  name: "txHash",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10759,
                                  src: "9113:6:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes32",
                                    typeString: "bytes32"
                                  }
                                },
                                {
                                  id: 10933,
                                  name: "success",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10756,
                                  src: "9121:7:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bool",
                                    typeString: "bool"
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_bytes32",
                                    typeString: "bytes32"
                                  },
                                  {
                                    typeIdentifier: "t_bool",
                                    typeString: "bool"
                                  }
                                ],
                                expression: {
                                  arguments: [
                                    {
                                      id: 10929,
                                      name: "guard",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 10793,
                                      src: "9086:5:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    }
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    ],
                                    id: 10928,
                                    name: "Guard",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 11640,
                                    src: "9080:5:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_type$_t_contract$_Guard_$11640_$",
                                      typeString: "type(contract Guard)"
                                    }
                                  },
                                  id: 10930,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "9080:12:9",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_contract$_Guard_$11640",
                                    typeString: "contract Guard"
                                  }
                                },
                                id: 10931,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "checkAfterExecution",
                                nodeType: "MemberAccess",
                                referencedDeclaration: 11639,
                                src: "9080:32:9",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_external_nonpayable$_t_bytes32_$_t_bool_$returns$__$",
                                  typeString: "function (bytes32,bool) external"
                                }
                              },
                              id: 10934,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "9080:49:9",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_tuple$__$",
                                typeString: "tuple()"
                              }
                            },
                            id: 10935,
                            nodeType: "ExpressionStatement",
                            src: "9080:49:9"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            documentation: {
              id: 10732,
              nodeType: "StructuredDocumentation",
              src: "4511:1016:9",
              text: "@dev Allows to execute a Safe transaction confirmed by required number of owners and then pays the account that submitted the transaction.\n      Note: The fees are always transferred, even if the user transaction fails.\n @param to Destination address of Safe transaction.\n @param value Ether value of Safe transaction.\n @param data Data payload of Safe transaction.\n @param operation Operation type of Safe transaction.\n @param safeTxGas Gas that should be used for the Safe transaction.\n @param baseGas Gas costs that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)\n @param gasPrice Gas price that should be used for the payment calculation.\n @param gasToken Token address (or 0 if ETH) that is used for the payment.\n @param refundReceiver Address of receiver of gas payment (or 0 if tx.origin).\n @param signatures Packed signature data ({bytes32 r}{bytes32 s}{uint8 v})"
            },
            functionSelector: "6a761202",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "execTransaction",
            nameLocation: "5541:15:9",
            parameters: {
              id: 10754,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10734,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "5574:2:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5566:10:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10733,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "5566:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10736,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "5594:5:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5586:13:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10735,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5586:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10738,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "5624:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5609:19:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_calldata_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 10737,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "5609:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10741,
                  mutability: "mutable",
                  name: "operation",
                  nameLocation: "5653:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5638:24:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_enum$_Operation_$12611",
                    typeString: "enum Enum.Operation"
                  },
                  typeName: {
                    id: 10740,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 10739,
                      name: "Enum.Operation",
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 12611,
                      src: "5638:14:9"
                    },
                    referencedDeclaration: 12611,
                    src: "5638:14:9",
                    typeDescriptions: {
                      typeIdentifier: "t_enum$_Operation_$12611",
                      typeString: "enum Enum.Operation"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10743,
                  mutability: "mutable",
                  name: "safeTxGas",
                  nameLocation: "5680:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5672:17:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10742,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5672:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10745,
                  mutability: "mutable",
                  name: "baseGas",
                  nameLocation: "5707:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5699:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10744,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5699:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10747,
                  mutability: "mutable",
                  name: "gasPrice",
                  nameLocation: "5732:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5724:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10746,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "5724:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10749,
                  mutability: "mutable",
                  name: "gasToken",
                  nameLocation: "5758:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5750:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10748,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "5750:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10751,
                  mutability: "mutable",
                  name: "refundReceiver",
                  nameLocation: "5792:14:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5776:30:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address_payable",
                    typeString: "address payable"
                  },
                  typeName: {
                    id: 10750,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "5776:15:9",
                    stateMutability: "payable",
                    typeDescriptions: {
                      typeIdentifier: "t_address_payable",
                      typeString: "address payable"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10753,
                  mutability: "mutable",
                  name: "signatures",
                  nameLocation: "5829:10:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5816:23:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 10752,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "5816:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "5556:289:9"
            },
            returnParameters: {
              id: 10757,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10756,
                  mutability: "mutable",
                  name: "success",
                  nameLocation: "5883:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 10940,
                  src: "5878:12:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool"
                  },
                  typeName: {
                    id: 10755,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "5878:4:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "5877:14:9"
            },
            scope: 11516,
            stateMutability: "payable",
            virtual: true,
            visibility: "public"
          },
          {
            id: 11025,
            nodeType: "FunctionDefinition",
            src: "9166:821:9",
            body: {
              id: 11024,
              nodeType: "Block",
              src: "9371:616:9",
              statements: [
                {
                  assignments: [10956],
                  declarations: [
                    {
                      constant: false,
                      id: 10956,
                      mutability: "mutable",
                      name: "receiver",
                      nameLocation: "9450:8:9",
                      nodeType: "VariableDeclaration",
                      scope: 11024,
                      src: "9434:24:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address_payable",
                        typeString: "address payable"
                      },
                      typeName: {
                        id: 10955,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "9434:15:9",
                        stateMutability: "payable",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 10970,
                  initialValue: {
                    condition: {
                      commonType: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      },
                      id: 10962,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        id: 10957,
                        name: "refundReceiver",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 10950,
                        src: "9461:14:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address_payable",
                          typeString: "address payable"
                        }
                      },
                      nodeType: "BinaryOperation",
                      operator: "==",
                      rightExpression: {
                        arguments: [
                          {
                            hexValue: "30",
                            id: 10960,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "9487:1:9",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0"
                            },
                            value: "0"
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0"
                            }
                          ],
                          id: 10959,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "9479:7:9",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_address_$",
                            typeString: "type(address)"
                          },
                          typeName: {
                            id: 10958,
                            name: "address",
                            nodeType: "ElementaryTypeName",
                            src: "9479:7:9",
                            typeDescriptions: {}
                          }
                        },
                        id: 10961,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "9479:10:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      src: "9461:28:9",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool"
                      }
                    },
                    falseExpression: {
                      id: 10968,
                      name: "refundReceiver",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10950,
                      src: "9513:14:9",
                      typeDescriptions: {
                        typeIdentifier: "t_address_payable",
                        typeString: "address payable"
                      }
                    },
                    id: 10969,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "Conditional",
                    src: "9461:66:9",
                    trueExpression: {
                      arguments: [
                        {
                          expression: {
                            id: 10965,
                            name: "tx",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -26,
                            src: "9500:2:9",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_transaction",
                              typeString: "tx"
                            }
                          },
                          id: 10966,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "origin",
                          nodeType: "MemberAccess",
                          src: "9500:9:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        ],
                        id: 10964,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "9492:8:9",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_address_payable_$",
                          typeString: "type(address payable)"
                        },
                        typeName: {
                          id: 10963,
                          name: "address",
                          nodeType: "ElementaryTypeName",
                          src: "9492:8:9",
                          stateMutability: "payable",
                          typeDescriptions: {}
                        }
                      },
                      id: 10967,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "typeConversion",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "9492:18:9",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_address_payable",
                        typeString: "address payable"
                      }
                    },
                    typeDescriptions: {
                      typeIdentifier: "t_address_payable",
                      typeString: "address payable"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "9434:93:9"
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    },
                    id: 10976,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 10971,
                      name: "gasToken",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10948,
                      src: "9541:8:9",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    nodeType: "BinaryOperation",
                    operator: "==",
                    rightExpression: {
                      arguments: [
                        {
                          hexValue: "30",
                          id: 10974,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "9561:1:9",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          },
                          value: "0"
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          }
                        ],
                        id: 10973,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "9553:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_address_$",
                          typeString: "type(address)"
                        },
                        typeName: {
                          id: 10972,
                          name: "address",
                          nodeType: "ElementaryTypeName",
                          src: "9553:7:9",
                          typeDescriptions: {}
                        }
                      },
                      id: 10975,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "typeConversion",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "9553:10:9",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      }
                    },
                    src: "9541:22:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  falseBody: {
                    id: 11022,
                    nodeType: "Block",
                    src: "9838:143:9",
                    statements: [
                      {
                        expression: {
                          id: 11011,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 11003,
                            name: "payment",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10953,
                            src: "9852:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            arguments: [
                              {
                                id: 11009,
                                name: "gasPrice",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 10946,
                                src: "9887:8:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              ],
                              expression: {
                                arguments: [
                                  {
                                    id: 11006,
                                    name: "baseGas",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10944,
                                    src: "9874:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  ],
                                  expression: {
                                    id: 11004,
                                    name: "gasUsed",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10942,
                                    src: "9862:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  id: 11005,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: "add",
                                  nodeType: "MemberAccess",
                                  referencedDeclaration: 12849,
                                  src: "9862:11:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    typeString:
                                      "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                id: 11007,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "9862:20:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              id: 11008,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "mul",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 12799,
                              src: "9862:24:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            id: 11010,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "9862:34:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          src: "9852:44:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        id: 11012,
                        nodeType: "ExpressionStatement",
                        src: "9852:44:9"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  id: 11015,
                                  name: "gasToken",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10948,
                                  src: "9932:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                {
                                  id: 11016,
                                  name: "receiver",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10956,
                                  src: "9942:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address_payable",
                                    typeString: "address payable"
                                  }
                                },
                                {
                                  id: 11017,
                                  name: "payment",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10953,
                                  src: "9952:7:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  },
                                  {
                                    typeIdentifier: "t_address_payable",
                                    typeString: "address payable"
                                  },
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                ],
                                id: 11014,
                                name: "transferToken",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 12660,
                                src: "9918:13:9",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                                  typeString:
                                    "function (address,address,uint256) returns (bool)"
                                }
                              },
                              id: 11018,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "9918:42:9",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            {
                              hexValue: "4753303132",
                              id: 11019,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "string",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "9962:7:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_stringliteral_74edef16877c9a34a97f281dbea2805f9198008e7df330ab6416449a66143b07",
                                typeString: 'literal_string "GS012"'
                              },
                              value: "GS012"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              },
                              {
                                typeIdentifier:
                                  "t_stringliteral_74edef16877c9a34a97f281dbea2805f9198008e7df330ab6416449a66143b07",
                                typeString: 'literal_string "GS012"'
                              }
                            ],
                            id: 11013,
                            name: "require",
                            nodeType: "Identifier",
                            overloadedDeclarations: [-18, -18],
                            referencedDeclaration: -18,
                            src: "9910:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              typeString: "function (bool,string memory) pure"
                            }
                          },
                          id: 11020,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "9910:60:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 11021,
                        nodeType: "ExpressionStatement",
                        src: "9910:60:9"
                      }
                    ]
                  },
                  id: 11023,
                  nodeType: "IfStatement",
                  src: "9537:444:9",
                  trueBody: {
                    id: 11002,
                    nodeType: "Block",
                    src: "9565:267:9",
                    statements: [
                      {
                        expression: {
                          id: 10992,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 10977,
                            name: "payment",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10953,
                            src: "9684:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            arguments: [
                              {
                                condition: {
                                  commonType: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  id: 10986,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    id: 10983,
                                    name: "gasPrice",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10946,
                                    src: "9719:8:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  nodeType: "BinaryOperation",
                                  operator: "<",
                                  rightExpression: {
                                    expression: {
                                      id: 10984,
                                      name: "tx",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: -26,
                                      src: "9730:2:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_magic_transaction",
                                        typeString: "tx"
                                      }
                                    },
                                    id: 10985,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: "gasprice",
                                    nodeType: "MemberAccess",
                                    src: "9730:11:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  src: "9719:22:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bool",
                                    typeString: "bool"
                                  }
                                },
                                falseExpression: {
                                  expression: {
                                    id: 10988,
                                    name: "tx",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: -26,
                                    src: "9755:2:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_magic_transaction",
                                      typeString: "tx"
                                    }
                                  },
                                  id: 10989,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: "gasprice",
                                  nodeType: "MemberAccess",
                                  src: "9755:11:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                id: 10990,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: "Conditional",
                                src: "9719:47:9",
                                trueExpression: {
                                  id: 10987,
                                  name: "gasPrice",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10946,
                                  src: "9744:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                },
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              ],
                              expression: {
                                arguments: [
                                  {
                                    id: 10980,
                                    name: "baseGas",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10944,
                                    src: "9706:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  ],
                                  expression: {
                                    id: 10978,
                                    name: "gasUsed",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 10942,
                                    src: "9694:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  id: 10979,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: "add",
                                  nodeType: "MemberAccess",
                                  referencedDeclaration: 12849,
                                  src: "9694:11:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    typeString:
                                      "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                id: 10981,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "9694:20:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              },
                              id: 10982,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "mul",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 12799,
                              src: "9694:24:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            id: 10991,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "9694:73:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          src: "9684:83:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        id: 10993,
                        nodeType: "ExpressionStatement",
                        src: "9684:83:9"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  id: 10997,
                                  name: "payment",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10953,
                                  src: "9803:7:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                }
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  }
                                ],
                                expression: {
                                  id: 10995,
                                  name: "receiver",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 10956,
                                  src: "9789:8:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address_payable",
                                    typeString: "address payable"
                                  }
                                },
                                id: 10996,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "send",
                                nodeType: "MemberAccess",
                                src: "9789:13:9",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_send_nonpayable$_t_uint256_$returns$_t_bool_$",
                                  typeString:
                                    "function (uint256) returns (bool)"
                                }
                              },
                              id: 10998,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "9789:22:9",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            {
                              hexValue: "4753303131",
                              id: 10999,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "string",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "9813:7:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_stringliteral_4353e9bcd8ea99b4d56990ac4b8777f1ab67cada8356790f30e482f2408a44b0",
                                typeString: 'literal_string "GS011"'
                              },
                              value: "GS011"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              },
                              {
                                typeIdentifier:
                                  "t_stringliteral_4353e9bcd8ea99b4d56990ac4b8777f1ab67cada8356790f30e482f2408a44b0",
                                typeString: 'literal_string "GS011"'
                              }
                            ],
                            id: 10994,
                            name: "require",
                            nodeType: "Identifier",
                            overloadedDeclarations: [-18, -18],
                            referencedDeclaration: -18,
                            src: "9781:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              typeString: "function (bool,string memory) pure"
                            }
                          },
                          id: 11000,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "9781:40:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 11001,
                        nodeType: "ExpressionStatement",
                        src: "9781:40:9"
                      }
                    ]
                  }
                }
              ]
            },
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "handlePayment",
            nameLocation: "9175:13:9",
            parameters: {
              id: 10951,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10942,
                  mutability: "mutable",
                  name: "gasUsed",
                  nameLocation: "9206:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9198:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10941,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "9198:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10944,
                  mutability: "mutable",
                  name: "baseGas",
                  nameLocation: "9231:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9223:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10943,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "9223:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10946,
                  mutability: "mutable",
                  name: "gasPrice",
                  nameLocation: "9256:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9248:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10945,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "9248:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10948,
                  mutability: "mutable",
                  name: "gasToken",
                  nameLocation: "9282:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9274:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 10947,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "9274:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 10950,
                  mutability: "mutable",
                  name: "refundReceiver",
                  nameLocation: "9316:14:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9300:30:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address_payable",
                    typeString: "address payable"
                  },
                  typeName: {
                    id: 10949,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "9300:15:9",
                    stateMutability: "payable",
                    typeDescriptions: {
                      typeIdentifier: "t_address_payable",
                      typeString: "address payable"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "9188:148:9"
            },
            returnParameters: {
              id: 10954,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 10953,
                  mutability: "mutable",
                  name: "payment",
                  nameLocation: "9362:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 11025,
                  src: "9354:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 10952,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "9354:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "9353:17:9"
            },
            scope: 11516,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "private"
          },
          {
            id: 11054,
            nodeType: "FunctionDefinition",
            src: "10442:383:9",
            body: {
              id: 11053,
              nodeType: "Block",
              src: "10571:254:9",
              statements: [
                {
                  assignments: [11036],
                  declarations: [
                    {
                      constant: false,
                      id: 11036,
                      mutability: "mutable",
                      name: "_threshold",
                      nameLocation: "10647:10:9",
                      nodeType: "VariableDeclaration",
                      scope: 11053,
                      src: "10639:18:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      },
                      typeName: {
                        id: 11035,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "10639:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11038,
                  initialValue: {
                    id: 11037,
                    name: "threshold",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 12126,
                    src: "10660:9:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "10639:30:9"
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 11042,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 11040,
                          name: "_threshold",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11036,
                          src: "10728:10:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: ">",
                        rightExpression: {
                          hexValue: "30",
                          id: 11041,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "10741:1:9",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_0_by_1",
                            typeString: "int_const 0"
                          },
                          value: "0"
                        },
                        src: "10728:14:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      {
                        hexValue: "4753303031",
                        id: 11043,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "10744:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_93293a4a2e4cde533ea81b8912d8934c2d7892ceb975e9ad2c25f4abf449a730",
                          typeString: 'literal_string "GS001"'
                        },
                        value: "GS001"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_93293a4a2e4cde533ea81b8912d8934c2d7892ceb975e9ad2c25f4abf449a730",
                          typeString: 'literal_string "GS001"'
                        }
                      ],
                      id: 11039,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "10720:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure"
                      }
                    },
                    id: 11044,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10720:32:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11045,
                  nodeType: "ExpressionStatement",
                  src: "10720:32:9"
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 11047,
                        name: "dataHash",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11028,
                        src: "10779:8:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      {
                        id: 11048,
                        name: "data",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11030,
                        src: "10789:4:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      },
                      {
                        id: 11049,
                        name: "signatures",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11032,
                        src: "10795:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      },
                      {
                        id: 11050,
                        name: "_threshold",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11036,
                        src: "10807:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        },
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        },
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      ],
                      id: 11046,
                      name: "checkNSignatures",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11295,
                      src: "10762:16:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_bytes32_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$_t_uint256_$returns$__$",
                        typeString:
                          "function (bytes32,bytes memory,bytes memory,uint256) view"
                      }
                    },
                    id: 11051,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "10762:56:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11052,
                  nodeType: "ExpressionStatement",
                  src: "10762:56:9"
                }
              ]
            },
            documentation: {
              id: 11026,
              nodeType: "StructuredDocumentation",
              src: "9993:444:9",
              text: " @dev Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.\n @param dataHash Hash of the data (could be either a message hash or transaction hash)\n @param data That should be signed (this is passed to an external validator contract)\n @param signatures Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash."
            },
            functionSelector: "934f3a11",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "checkSignatures",
            nameLocation: "10451:15:9",
            parameters: {
              id: 11033,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11028,
                  mutability: "mutable",
                  name: "dataHash",
                  nameLocation: "10484:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11054,
                  src: "10476:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 11027,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "10476:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11030,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "10515:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 11054,
                  src: "10502:17:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11029,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "10502:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11032,
                  mutability: "mutable",
                  name: "signatures",
                  nameLocation: "10542:10:9",
                  nodeType: "VariableDeclaration",
                  scope: 11054,
                  src: "10529:23:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11031,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "10529:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "10466:92:9"
            },
            returnParameters: {
              id: 11034,
              nodeType: "ParameterList",
              parameters: [],
              src: "10571:0:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            id: 11295,
            nodeType: "FunctionDefinition",
            src: "11350:3812:9",
            body: {
              id: 11294,
              nodeType: "Block",
              src: "11516:3646:9",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 11073,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 11067,
                            name: "signatures",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11061,
                            src: "11601:10:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          },
                          id: 11068,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "11601:17:9",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: ">=",
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: "3635",
                              id: 11071,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "11645:2:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_65_by_1",
                                typeString: "int_const 65"
                              },
                              value: "65"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_rational_65_by_1",
                                typeString: "int_const 65"
                              }
                            ],
                            expression: {
                              id: 11069,
                              name: "requiredSignatures",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 11063,
                              src: "11622:18:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256"
                              }
                            },
                            id: 11070,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "mul",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 12799,
                            src: "11622:22:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                              typeString:
                                "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          id: 11072,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "11622:26:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        src: "11601:47:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      {
                        hexValue: "4753303230",
                        id: 11074,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "11650:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_f27dba96666375fe844b71e8ea4f388db2ce9f87fa9882d36a17036a7478b232",
                          typeString: 'literal_string "GS020"'
                        },
                        value: "GS020"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_f27dba96666375fe844b71e8ea4f388db2ce9f87fa9882d36a17036a7478b232",
                          typeString: 'literal_string "GS020"'
                        }
                      ],
                      id: 11066,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "11593:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure"
                      }
                    },
                    id: 11075,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "11593:65:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11076,
                  nodeType: "ExpressionStatement",
                  src: "11593:65:9"
                },
                {
                  assignments: [11078],
                  declarations: [
                    {
                      constant: false,
                      id: 11078,
                      mutability: "mutable",
                      name: "lastOwner",
                      nameLocation: "11728:9:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11720:17:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      },
                      typeName: {
                        id: 11077,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "11720:7:9",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11083,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: "30",
                        id: 11081,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "11748:1:9",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0"
                        },
                        value: "0"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0"
                        }
                      ],
                      id: 11080,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: "ElementaryTypeNameExpression",
                      src: "11740:7:9",
                      typeDescriptions: {
                        typeIdentifier: "t_type$_t_address_$",
                        typeString: "type(address)"
                      },
                      typeName: {
                        id: 11079,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "11740:7:9",
                        typeDescriptions: {}
                      }
                    },
                    id: 11082,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "typeConversion",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "11740:10:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "11720:30:9"
                },
                {
                  assignments: [11085],
                  declarations: [
                    {
                      constant: false,
                      id: 11085,
                      mutability: "mutable",
                      name: "currentOwner",
                      nameLocation: "11768:12:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11760:20:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address"
                      },
                      typeName: {
                        id: 11084,
                        name: "address",
                        nodeType: "ElementaryTypeName",
                        src: "11760:7:9",
                        stateMutability: "nonpayable",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11086,
                  nodeType: "VariableDeclarationStatement",
                  src: "11760:20:9"
                },
                {
                  assignments: [11088],
                  declarations: [
                    {
                      constant: false,
                      id: 11088,
                      mutability: "mutable",
                      name: "v",
                      nameLocation: "11796:1:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11790:7:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint8",
                        typeString: "uint8"
                      },
                      typeName: {
                        id: 11087,
                        name: "uint8",
                        nodeType: "ElementaryTypeName",
                        src: "11790:5:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint8",
                          typeString: "uint8"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11089,
                  nodeType: "VariableDeclarationStatement",
                  src: "11790:7:9"
                },
                {
                  assignments: [11091],
                  declarations: [
                    {
                      constant: false,
                      id: 11091,
                      mutability: "mutable",
                      name: "r",
                      nameLocation: "11815:1:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11807:9:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32"
                      },
                      typeName: {
                        id: 11090,
                        name: "bytes32",
                        nodeType: "ElementaryTypeName",
                        src: "11807:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11092,
                  nodeType: "VariableDeclarationStatement",
                  src: "11807:9:9"
                },
                {
                  assignments: [11094],
                  declarations: [
                    {
                      constant: false,
                      id: 11094,
                      mutability: "mutable",
                      name: "s",
                      nameLocation: "11834:1:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11826:9:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32"
                      },
                      typeName: {
                        id: 11093,
                        name: "bytes32",
                        nodeType: "ElementaryTypeName",
                        src: "11826:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11095,
                  nodeType: "VariableDeclarationStatement",
                  src: "11826:9:9"
                },
                {
                  assignments: [11097],
                  declarations: [
                    {
                      constant: false,
                      id: 11097,
                      mutability: "mutable",
                      name: "i",
                      nameLocation: "11853:1:9",
                      nodeType: "VariableDeclaration",
                      scope: 11294,
                      src: "11845:9:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      },
                      typeName: {
                        id: 11096,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "11845:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11098,
                  nodeType: "VariableDeclarationStatement",
                  src: "11845:9:9"
                },
                {
                  body: {
                    id: 11292,
                    nodeType: "Block",
                    src: "11905:3251:9",
                    statements: [
                      {
                        expression: {
                          id: 11117,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            components: [
                              {
                                id: 11109,
                                name: "v",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11088,
                                src: "11920:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint8",
                                  typeString: "uint8"
                                }
                              },
                              {
                                id: 11110,
                                name: "r",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11091,
                                src: "11923:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes32",
                                  typeString: "bytes32"
                                }
                              },
                              {
                                id: 11111,
                                name: "s",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11094,
                                src: "11926:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes32",
                                  typeString: "bytes32"
                                }
                              }
                            ],
                            id: 11112,
                            isConstant: false,
                            isInlineArray: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: true,
                            nodeType: "TupleExpression",
                            src: "11919:9:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_tuple$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                              typeString: "tuple(uint8,bytes32,bytes32)"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            arguments: [
                              {
                                id: 11114,
                                name: "signatures",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11061,
                                src: "11946:10:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory"
                                }
                              },
                              {
                                id: 11115,
                                name: "i",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11097,
                                src: "11958:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_bytes_memory_ptr",
                                  typeString: "bytes memory"
                                },
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              ],
                              id: 11113,
                              name: "signatureSplit",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 12706,
                              src: "11931:14:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_bytes_memory_ptr_$_t_uint256_$returns$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                                typeString:
                                  "function (bytes memory,uint256) pure returns (uint8,bytes32,bytes32)"
                              }
                            },
                            id: 11116,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "11931:29:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier:
                                "t_tuple$_t_uint8_$_t_bytes32_$_t_bytes32_$",
                              typeString: "tuple(uint8,bytes32,bytes32)"
                            }
                          },
                          src: "11919:41:9",
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 11118,
                        nodeType: "ExpressionStatement",
                        src: "11919:41:9"
                      },
                      {
                        condition: {
                          commonType: {
                            typeIdentifier: "t_uint8",
                            typeString: "uint8"
                          },
                          id: 11121,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 11119,
                            name: "v",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11088,
                            src: "11978:1:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint8",
                              typeString: "uint8"
                            }
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            hexValue: "30",
                            id: 11120,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "11983:1:9",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_0_by_1",
                              typeString: "int_const 0"
                            },
                            value: "0"
                          },
                          src: "11978:6:9",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool"
                          }
                        },
                        falseBody: {
                          condition: {
                            commonType: {
                              typeIdentifier: "t_uint8",
                              typeString: "uint8"
                            },
                            id: 11203,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 11201,
                              name: "v",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 11088,
                              src: "13858:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_uint8",
                                typeString: "uint8"
                              }
                            },
                            nodeType: "BinaryOperation",
                            operator: "==",
                            rightExpression: {
                              hexValue: "31",
                              id: 11202,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "13863:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_1_by_1",
                                typeString: "int_const 1"
                              },
                              value: "1"
                            },
                            src: "13858:6:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool"
                            }
                          },
                          falseBody: {
                            condition: {
                              commonType: {
                                typeIdentifier: "t_uint8",
                                typeString: "uint8"
                              },
                              id: 11236,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                id: 11234,
                                name: "v",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11088,
                                src: "14358:1:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint8",
                                  typeString: "uint8"
                                }
                              },
                              nodeType: "BinaryOperation",
                              operator: ">",
                              rightExpression: {
                                hexValue: "3330",
                                id: 11235,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: "number",
                                lValueRequested: false,
                                nodeType: "Literal",
                                src: "14362:2:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_rational_30_by_1",
                                  typeString: "int_const 30"
                                },
                                value: "30"
                              },
                              src: "14358:6:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            falseBody: {
                              id: 11264,
                              nodeType: "Block",
                              src: "14753:226:9",
                              statements: [
                                {
                                  expression: {
                                    id: 11262,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftHandSide: {
                                      id: 11255,
                                      name: "currentOwner",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 11085,
                                      src: "14921:12:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    },
                                    nodeType: "Assignment",
                                    operator: "=",
                                    rightHandSide: {
                                      arguments: [
                                        {
                                          id: 11257,
                                          name: "dataHash",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11057,
                                          src: "14946:8:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        },
                                        {
                                          id: 11258,
                                          name: "v",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11088,
                                          src: "14956:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint8",
                                            typeString: "uint8"
                                          }
                                        },
                                        {
                                          id: 11259,
                                          name: "r",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11091,
                                          src: "14959:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        },
                                        {
                                          id: 11260,
                                          name: "s",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11094,
                                          src: "14962:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          },
                                          {
                                            typeIdentifier: "t_uint8",
                                            typeString: "uint8"
                                          },
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          },
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        ],
                                        id: 11256,
                                        name: "ecrecover",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: -6,
                                        src: "14936:9:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                          typeString:
                                            "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                        }
                                      },
                                      id: 11261,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "14936:28:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    },
                                    src: "14921:43:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  id: 11263,
                                  nodeType: "ExpressionStatement",
                                  src: "14921:43:9"
                                }
                              ]
                            },
                            id: 11265,
                            nodeType: "IfStatement",
                            src: "14354:625:9",
                            trueBody: {
                              id: 11254,
                              nodeType: "Block",
                              src: "14366:381:9",
                              statements: [
                                {
                                  expression: {
                                    id: 11252,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftHandSide: {
                                      id: 11237,
                                      name: "currentOwner",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 11085,
                                      src: "14620:12:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    },
                                    nodeType: "Assignment",
                                    operator: "=",
                                    rightHandSide: {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              arguments: [
                                                {
                                                  hexValue:
                                                    "19457468657265756d205369676e6564204d6573736167653a0a3332",
                                                  id: 11242,
                                                  isConstant: false,
                                                  isLValue: false,
                                                  isPure: true,
                                                  kind: "string",
                                                  lValueRequested: false,
                                                  nodeType: "Literal",
                                                  src: "14672:34:9",
                                                  typeDescriptions: {
                                                    typeIdentifier:
                                                      "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                    typeString:
                                                      'literal_string hex"19457468657265756d205369676e6564204d6573736167653a0a3332"'
                                                  },
                                                  value:
                                                    "\u0019Ethereum Signed Message:\n32"
                                                },
                                                {
                                                  id: 11243,
                                                  name: "dataHash",
                                                  nodeType: "Identifier",
                                                  overloadedDeclarations: [],
                                                  referencedDeclaration: 11057,
                                                  src: "14708:8:9",
                                                  typeDescriptions: {
                                                    typeIdentifier: "t_bytes32",
                                                    typeString: "bytes32"
                                                  }
                                                }
                                              ],
                                              expression: {
                                                argumentTypes: [
                                                  {
                                                    typeIdentifier:
                                                      "t_stringliteral_178a2411ab6fbc1ba11064408972259c558d0e82fd48b0aba3ad81d14f065e73",
                                                    typeString:
                                                      'literal_string hex"19457468657265756d205369676e6564204d6573736167653a0a3332"'
                                                  },
                                                  {
                                                    typeIdentifier: "t_bytes32",
                                                    typeString: "bytes32"
                                                  }
                                                ],
                                                expression: {
                                                  id: 11240,
                                                  name: "abi",
                                                  nodeType: "Identifier",
                                                  overloadedDeclarations: [],
                                                  referencedDeclaration: -1,
                                                  src: "14655:3:9",
                                                  typeDescriptions: {
                                                    typeIdentifier:
                                                      "t_magic_abi",
                                                    typeString: "abi"
                                                  }
                                                },
                                                id: 11241,
                                                isConstant: false,
                                                isLValue: false,
                                                isPure: true,
                                                lValueRequested: false,
                                                memberName: "encodePacked",
                                                nodeType: "MemberAccess",
                                                src: "14655:16:9",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                  typeString:
                                                    "function () pure returns (bytes memory)"
                                                }
                                              },
                                              id: 11244,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: false,
                                              kind: "functionCall",
                                              lValueRequested: false,
                                              names: [],
                                              nodeType: "FunctionCall",
                                              src: "14655:62:9",
                                              tryCall: false,
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_bytes_memory_ptr",
                                                typeString: "bytes memory"
                                              }
                                            }
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier:
                                                  "t_bytes_memory_ptr",
                                                typeString: "bytes memory"
                                              }
                                            ],
                                            id: 11239,
                                            name: "keccak256",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: -8,
                                            src: "14645:9:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                              typeString:
                                                "function (bytes memory) pure returns (bytes32)"
                                            }
                                          },
                                          id: 11245,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "functionCall",
                                          lValueRequested: false,
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "14645:73:9",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        },
                                        {
                                          commonType: {
                                            typeIdentifier: "t_uint8",
                                            typeString: "uint8"
                                          },
                                          id: 11248,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          lValueRequested: false,
                                          leftExpression: {
                                            id: 11246,
                                            name: "v",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 11088,
                                            src: "14720:1:9",
                                            typeDescriptions: {
                                              typeIdentifier: "t_uint8",
                                              typeString: "uint8"
                                            }
                                          },
                                          nodeType: "BinaryOperation",
                                          operator: "-",
                                          rightExpression: {
                                            hexValue: "34",
                                            id: 11247,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            kind: "number",
                                            lValueRequested: false,
                                            nodeType: "Literal",
                                            src: "14724:1:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_rational_4_by_1",
                                              typeString: "int_const 4"
                                            },
                                            value: "4"
                                          },
                                          src: "14720:5:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint8",
                                            typeString: "uint8"
                                          }
                                        },
                                        {
                                          id: 11249,
                                          name: "r",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11091,
                                          src: "14727:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        },
                                        {
                                          id: 11250,
                                          name: "s",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11094,
                                          src: "14730:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          },
                                          {
                                            typeIdentifier: "t_uint8",
                                            typeString: "uint8"
                                          },
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          },
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        ],
                                        id: 11238,
                                        name: "ecrecover",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: -6,
                                        src: "14635:9:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                          typeString:
                                            "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                        }
                                      },
                                      id: 11251,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "14635:97:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    },
                                    src: "14620:112:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  id: 11253,
                                  nodeType: "ExpressionStatement",
                                  src: "14620:112:9"
                                }
                              ]
                            }
                          },
                          id: 11266,
                          nodeType: "IfStatement",
                          src: "13854:1125:9",
                          trueBody: {
                            id: 11233,
                            nodeType: "Block",
                            src: "13866:482:9",
                            statements: [
                              {
                                expression: {
                                  id: 11215,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftHandSide: {
                                    id: 11204,
                                    name: "currentOwner",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 11085,
                                    src: "14036:12:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  nodeType: "Assignment",
                                  operator: "=",
                                  rightHandSide: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                id: 11211,
                                                name: "r",
                                                nodeType: "Identifier",
                                                overloadedDeclarations: [],
                                                referencedDeclaration: 11091,
                                                src: "14075:1:9",
                                                typeDescriptions: {
                                                  typeIdentifier: "t_bytes32",
                                                  typeString: "bytes32"
                                                }
                                              }
                                            ],
                                            expression: {
                                              argumentTypes: [
                                                {
                                                  typeIdentifier: "t_bytes32",
                                                  typeString: "bytes32"
                                                }
                                              ],
                                              id: 11210,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: true,
                                              lValueRequested: false,
                                              nodeType:
                                                "ElementaryTypeNameExpression",
                                              src: "14067:7:9",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_type$_t_uint256_$",
                                                typeString: "type(uint256)"
                                              },
                                              typeName: {
                                                id: 11209,
                                                name: "uint256",
                                                nodeType: "ElementaryTypeName",
                                                src: "14067:7:9",
                                                typeDescriptions: {}
                                              }
                                            },
                                            id: 11212,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            kind: "typeConversion",
                                            lValueRequested: false,
                                            names: [],
                                            nodeType: "FunctionCall",
                                            src: "14067:10:9",
                                            tryCall: false,
                                            typeDescriptions: {
                                              typeIdentifier: "t_uint256",
                                              typeString: "uint256"
                                            }
                                          }
                                        ],
                                        expression: {
                                          argumentTypes: [
                                            {
                                              typeIdentifier: "t_uint256",
                                              typeString: "uint256"
                                            }
                                          ],
                                          id: 11208,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          lValueRequested: false,
                                          nodeType:
                                            "ElementaryTypeNameExpression",
                                          src: "14059:7:9",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_type$_t_uint160_$",
                                            typeString: "type(uint160)"
                                          },
                                          typeName: {
                                            id: 11207,
                                            name: "uint160",
                                            nodeType: "ElementaryTypeName",
                                            src: "14059:7:9",
                                            typeDescriptions: {}
                                          }
                                        },
                                        id: 11213,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        kind: "typeConversion",
                                        lValueRequested: false,
                                        names: [],
                                        nodeType: "FunctionCall",
                                        src: "14059:19:9",
                                        tryCall: false,
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint160",
                                          typeString: "uint160"
                                        }
                                      }
                                    ],
                                    expression: {
                                      argumentTypes: [
                                        {
                                          typeIdentifier: "t_uint160",
                                          typeString: "uint160"
                                        }
                                      ],
                                      id: 11206,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      lValueRequested: false,
                                      nodeType: "ElementaryTypeNameExpression",
                                      src: "14051:7:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_type$_t_address_$",
                                        typeString: "type(address)"
                                      },
                                      typeName: {
                                        id: 11205,
                                        name: "address",
                                        nodeType: "ElementaryTypeName",
                                        src: "14051:7:9",
                                        typeDescriptions: {}
                                      }
                                    },
                                    id: 11214,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    kind: "typeConversion",
                                    lValueRequested: false,
                                    names: [],
                                    nodeType: "FunctionCall",
                                    src: "14051:28:9",
                                    tryCall: false,
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  src: "14036:43:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                id: 11216,
                                nodeType: "ExpressionStatement",
                                src: "14036:43:9"
                              },
                              {
                                expression: {
                                  arguments: [
                                    {
                                      commonType: {
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                      },
                                      id: 11229,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        commonType: {
                                          typeIdentifier: "t_address",
                                          typeString: "address"
                                        },
                                        id: 11221,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        leftExpression: {
                                          expression: {
                                            id: 11218,
                                            name: "msg",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: -15,
                                            src: "14250:3:9",
                                            typeDescriptions: {
                                              typeIdentifier: "t_magic_message",
                                              typeString: "msg"
                                            }
                                          },
                                          id: 11219,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          lValueRequested: false,
                                          memberName: "sender",
                                          nodeType: "MemberAccess",
                                          src: "14250:10:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_address",
                                            typeString: "address"
                                          }
                                        },
                                        nodeType: "BinaryOperation",
                                        operator: "==",
                                        rightExpression: {
                                          id: 11220,
                                          name: "currentOwner",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11085,
                                          src: "14264:12:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_address",
                                            typeString: "address"
                                          }
                                        },
                                        src: "14250:26:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_bool",
                                          typeString: "bool"
                                        }
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "||",
                                      rightExpression: {
                                        commonType: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256"
                                        },
                                        id: 11228,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        leftExpression: {
                                          baseExpression: {
                                            baseExpression: {
                                              id: 11222,
                                              name: "approvedHashes",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 10658,
                                              src: "14280:14:9",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                                                typeString:
                                                  "mapping(address => mapping(bytes32 => uint256))"
                                              }
                                            },
                                            id: 11224,
                                            indexExpression: {
                                              id: 11223,
                                              name: "currentOwner",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 11085,
                                              src: "14295:12:9",
                                              typeDescriptions: {
                                                typeIdentifier: "t_address",
                                                typeString: "address"
                                              }
                                            },
                                            isConstant: false,
                                            isLValue: true,
                                            isPure: false,
                                            lValueRequested: false,
                                            nodeType: "IndexAccess",
                                            src: "14280:28:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_mapping$_t_bytes32_$_t_uint256_$",
                                              typeString:
                                                "mapping(bytes32 => uint256)"
                                            }
                                          },
                                          id: 11226,
                                          indexExpression: {
                                            id: 11225,
                                            name: "dataHash",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 11057,
                                            src: "14309:8:9",
                                            typeDescriptions: {
                                              typeIdentifier: "t_bytes32",
                                              typeString: "bytes32"
                                            }
                                          },
                                          isConstant: false,
                                          isLValue: true,
                                          isPure: false,
                                          lValueRequested: false,
                                          nodeType: "IndexAccess",
                                          src: "14280:38:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        },
                                        nodeType: "BinaryOperation",
                                        operator: "!=",
                                        rightExpression: {
                                          hexValue: "30",
                                          id: 11227,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          kind: "number",
                                          lValueRequested: false,
                                          nodeType: "Literal",
                                          src: "14322:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_rational_0_by_1",
                                            typeString: "int_const 0"
                                          },
                                          value: "0"
                                        },
                                        src: "14280:43:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_bool",
                                          typeString: "bool"
                                        }
                                      },
                                      src: "14250:73:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                      }
                                    },
                                    {
                                      hexValue: "4753303235",
                                      id: 11230,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      kind: "string",
                                      lValueRequested: false,
                                      nodeType: "Literal",
                                      src: "14325:7:9",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_stringliteral_bc2491dc7fc5c71a630e01bcb9c3e39f61f559ab54f6528d2adb67d65ed9ff6b",
                                        typeString: 'literal_string "GS025"'
                                      },
                                      value: "GS025"
                                    }
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier: "t_bool",
                                        typeString: "bool"
                                      },
                                      {
                                        typeIdentifier:
                                          "t_stringliteral_bc2491dc7fc5c71a630e01bcb9c3e39f61f559ab54f6528d2adb67d65ed9ff6b",
                                        typeString: 'literal_string "GS025"'
                                      }
                                    ],
                                    id: 11217,
                                    name: "require",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [-18, -18],
                                    referencedDeclaration: -18,
                                    src: "14242:7:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                      typeString:
                                        "function (bool,string memory) pure"
                                    }
                                  },
                                  id: 11231,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "functionCall",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "14242:91:9",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_tuple$__$",
                                    typeString: "tuple()"
                                  }
                                },
                                id: 11232,
                                nodeType: "ExpressionStatement",
                                src: "14242:91:9"
                              }
                            ]
                          }
                        },
                        id: 11267,
                        nodeType: "IfStatement",
                        src: "11974:3005:9",
                        trueBody: {
                          id: 11200,
                          nodeType: "Block",
                          src: "11986:1862:9",
                          statements: [
                            {
                              expression: {
                                id: 11133,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftHandSide: {
                                  id: 11122,
                                  name: "currentOwner",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 11085,
                                  src: "12164:12:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                nodeType: "Assignment",
                                operator: "=",
                                rightHandSide: {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              id: 11129,
                                              name: "r",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 11091,
                                              src: "12203:1:9",
                                              typeDescriptions: {
                                                typeIdentifier: "t_bytes32",
                                                typeString: "bytes32"
                                              }
                                            }
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier: "t_bytes32",
                                                typeString: "bytes32"
                                              }
                                            ],
                                            id: 11128,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            lValueRequested: false,
                                            nodeType:
                                              "ElementaryTypeNameExpression",
                                            src: "12195:7:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_type$_t_uint256_$",
                                              typeString: "type(uint256)"
                                            },
                                            typeName: {
                                              id: 11127,
                                              name: "uint256",
                                              nodeType: "ElementaryTypeName",
                                              src: "12195:7:9",
                                              typeDescriptions: {}
                                            }
                                          },
                                          id: 11130,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "typeConversion",
                                          lValueRequested: false,
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "12195:10:9",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        ],
                                        id: 11126,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        lValueRequested: false,
                                        nodeType:
                                          "ElementaryTypeNameExpression",
                                        src: "12187:7:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_type$_t_uint160_$",
                                          typeString: "type(uint160)"
                                        },
                                        typeName: {
                                          id: 11125,
                                          name: "uint160",
                                          nodeType: "ElementaryTypeName",
                                          src: "12187:7:9",
                                          typeDescriptions: {}
                                        }
                                      },
                                      id: 11131,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "typeConversion",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "12187:19:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint160",
                                        typeString: "uint160"
                                      }
                                    }
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier: "t_uint160",
                                        typeString: "uint160"
                                      }
                                    ],
                                    id: 11124,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    nodeType: "ElementaryTypeNameExpression",
                                    src: "12179:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_type$_t_address_$",
                                      typeString: "type(address)"
                                    },
                                    typeName: {
                                      id: 11123,
                                      name: "address",
                                      nodeType: "ElementaryTypeName",
                                      src: "12179:7:9",
                                      typeDescriptions: {}
                                    }
                                  },
                                  id: 11132,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "12179:28:9",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                src: "12164:43:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_address",
                                  typeString: "address"
                                }
                              },
                              id: 11134,
                              nodeType: "ExpressionStatement",
                              src: "12164:43:9"
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    id: 11144,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      arguments: [
                                        {
                                          id: 11138,
                                          name: "s",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11094,
                                          src: "12602:1:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier: "t_bytes32",
                                            typeString: "bytes32"
                                          }
                                        ],
                                        id: 11137,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        lValueRequested: false,
                                        nodeType:
                                          "ElementaryTypeNameExpression",
                                        src: "12594:7:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_type$_t_uint256_$",
                                          typeString: "type(uint256)"
                                        },
                                        typeName: {
                                          id: 11136,
                                          name: "uint256",
                                          nodeType: "ElementaryTypeName",
                                          src: "12594:7:9",
                                          typeDescriptions: {}
                                        }
                                      },
                                      id: 11139,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "typeConversion",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "12594:10:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: ">=",
                                    rightExpression: {
                                      arguments: [
                                        {
                                          hexValue: "3635",
                                          id: 11142,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          kind: "number",
                                          lValueRequested: false,
                                          nodeType: "Literal",
                                          src: "12631:2:9",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_rational_65_by_1",
                                            typeString: "int_const 65"
                                          },
                                          value: "65"
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier:
                                              "t_rational_65_by_1",
                                            typeString: "int_const 65"
                                          }
                                        ],
                                        expression: {
                                          id: 11140,
                                          name: "requiredSignatures",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11063,
                                          src: "12608:18:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        },
                                        id: 11141,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        memberName: "mul",
                                        nodeType: "MemberAccess",
                                        referencedDeclaration: 12799,
                                        src: "12608:22:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                          typeString:
                                            "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      id: 11143,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "12608:26:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    src: "12594:40:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    }
                                  },
                                  {
                                    hexValue: "4753303231",
                                    id: 11145,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: "string",
                                    lValueRequested: false,
                                    nodeType: "Literal",
                                    src: "12636:7:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_stringliteral_d153a9d5a0d4e2c2b7d4e887f02c1da6287d6d54f20f4d8ce40382a23140787a",
                                      typeString: 'literal_string "GS021"'
                                    },
                                    value: "GS021"
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    },
                                    {
                                      typeIdentifier:
                                        "t_stringliteral_d153a9d5a0d4e2c2b7d4e887f02c1da6287d6d54f20f4d8ce40382a23140787a",
                                      typeString: 'literal_string "GS021"'
                                    }
                                  ],
                                  id: 11135,
                                  name: "require",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [-18, -18],
                                  referencedDeclaration: -18,
                                  src: "12586:7:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    typeString:
                                      "function (bool,string memory) pure"
                                  }
                                },
                                id: 11146,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "12586:58:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_tuple$__$",
                                  typeString: "tuple()"
                                }
                              },
                              id: 11147,
                              nodeType: "ExpressionStatement",
                              src: "12586:58:9"
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    id: 11158,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      arguments: [
                                        {
                                          hexValue: "3332",
                                          id: 11154,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: true,
                                          kind: "number",
                                          lValueRequested: false,
                                          nodeType: "Literal",
                                          src: "12799:2:9",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_rational_32_by_1",
                                            typeString: "int_const 32"
                                          },
                                          value: "32"
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier:
                                              "t_rational_32_by_1",
                                            typeString: "int_const 32"
                                          }
                                        ],
                                        expression: {
                                          arguments: [
                                            {
                                              id: 11151,
                                              name: "s",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 11094,
                                              src: "12792:1:9",
                                              typeDescriptions: {
                                                typeIdentifier: "t_bytes32",
                                                typeString: "bytes32"
                                              }
                                            }
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier: "t_bytes32",
                                                typeString: "bytes32"
                                              }
                                            ],
                                            id: 11150,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: true,
                                            lValueRequested: false,
                                            nodeType:
                                              "ElementaryTypeNameExpression",
                                            src: "12784:7:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_type$_t_uint256_$",
                                              typeString: "type(uint256)"
                                            },
                                            typeName: {
                                              id: 11149,
                                              name: "uint256",
                                              nodeType: "ElementaryTypeName",
                                              src: "12784:7:9",
                                              typeDescriptions: {}
                                            }
                                          },
                                          id: 11152,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "typeConversion",
                                          lValueRequested: false,
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "12784:10:9",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        },
                                        id: 11153,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        memberName: "add",
                                        nodeType: "MemberAccess",
                                        referencedDeclaration: 12849,
                                        src: "12784:14:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                          typeString:
                                            "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      id: 11155,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "12784:18:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "<=",
                                    rightExpression: {
                                      expression: {
                                        id: 11156,
                                        name: "signatures",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 11061,
                                        src: "12806:10:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes_memory_ptr",
                                          typeString: "bytes memory"
                                        }
                                      },
                                      id: 11157,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      memberName: "length",
                                      nodeType: "MemberAccess",
                                      src: "12806:17:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    src: "12784:39:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    }
                                  },
                                  {
                                    hexValue: "4753303232",
                                    id: 11159,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: "string",
                                    lValueRequested: false,
                                    nodeType: "Literal",
                                    src: "12825:7:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_stringliteral_372498b513e17609439d064ce0277017b054c808f722c83ff57cee4e06a9e457",
                                      typeString: 'literal_string "GS022"'
                                    },
                                    value: "GS022"
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    },
                                    {
                                      typeIdentifier:
                                        "t_stringliteral_372498b513e17609439d064ce0277017b054c808f722c83ff57cee4e06a9e457",
                                      typeString: 'literal_string "GS022"'
                                    }
                                  ],
                                  id: 11148,
                                  name: "require",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [-18, -18],
                                  referencedDeclaration: -18,
                                  src: "12776:7:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    typeString:
                                      "function (bool,string memory) pure"
                                  }
                                },
                                id: 11160,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "12776:57:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_tuple$__$",
                                  typeString: "tuple()"
                                }
                              },
                              id: 11161,
                              nodeType: "ExpressionStatement",
                              src: "12776:57:9"
                            },
                            {
                              assignments: [11163],
                              declarations: [
                                {
                                  constant: false,
                                  id: 11163,
                                  mutability: "mutable",
                                  name: "contractSignatureLen",
                                  nameLocation: "12985:20:9",
                                  nodeType: "VariableDeclaration",
                                  scope: 11200,
                                  src: "12977:28:9",
                                  stateVariable: false,
                                  storageLocation: "default",
                                  typeDescriptions: {
                                    typeIdentifier: "t_uint256",
                                    typeString: "uint256"
                                  },
                                  typeName: {
                                    id: 11162,
                                    name: "uint256",
                                    nodeType: "ElementaryTypeName",
                                    src: "12977:7:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    }
                                  },
                                  visibility: "internal"
                                }
                              ],
                              id: 11164,
                              nodeType: "VariableDeclarationStatement",
                              src: "12977:28:9"
                            },
                            {
                              AST: {
                                nodeType: "YulBlock",
                                src: "13096:100:9",
                                statements: [
                                  {
                                    nodeType: "YulAssignment",
                                    src: "13118:60:9",
                                    value: {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              arguments: [
                                                {
                                                  name: "signatures",
                                                  nodeType: "YulIdentifier",
                                                  src: "13156:10:9"
                                                },
                                                {
                                                  name: "s",
                                                  nodeType: "YulIdentifier",
                                                  src: "13168:1:9"
                                                }
                                              ],
                                              functionName: {
                                                name: "add",
                                                nodeType: "YulIdentifier",
                                                src: "13152:3:9"
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "13152:18:9"
                                            },
                                            {
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "13172:4:9",
                                              type: "",
                                              value: "0x20"
                                            }
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "13148:3:9"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "13148:29:9"
                                        }
                                      ],
                                      functionName: {
                                        name: "mload",
                                        nodeType: "YulIdentifier",
                                        src: "13142:5:9"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "13142:36:9"
                                    },
                                    variableNames: [
                                      {
                                        name: "contractSignatureLen",
                                        nodeType: "YulIdentifier",
                                        src: "13118:20:9"
                                      }
                                    ]
                                  }
                                ]
                              },
                              evmVersion: "london",
                              externalReferences: [
                                {
                                  declaration: 11163,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13118:20:9",
                                  valueSize: 1
                                },
                                {
                                  declaration: 11094,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13168:1:9",
                                  valueSize: 1
                                },
                                {
                                  declaration: 11061,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13156:10:9",
                                  valueSize: 1
                                }
                              ],
                              id: 11165,
                              nodeType: "InlineAssembly",
                              src: "13087:109:9"
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256"
                                    },
                                    id: 11179,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      arguments: [
                                        {
                                          id: 11175,
                                          name: "contractSignatureLen",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11163,
                                          src: "13244:20:9",
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        ],
                                        expression: {
                                          arguments: [
                                            {
                                              hexValue: "3332",
                                              id: 11172,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: true,
                                              kind: "number",
                                              lValueRequested: false,
                                              nodeType: "Literal",
                                              src: "13236:2:9",
                                              typeDescriptions: {
                                                typeIdentifier:
                                                  "t_rational_32_by_1",
                                                typeString: "int_const 32"
                                              },
                                              value: "32"
                                            }
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier:
                                                  "t_rational_32_by_1",
                                                typeString: "int_const 32"
                                              }
                                            ],
                                            expression: {
                                              arguments: [
                                                {
                                                  id: 11169,
                                                  name: "s",
                                                  nodeType: "Identifier",
                                                  overloadedDeclarations: [],
                                                  referencedDeclaration: 11094,
                                                  src: "13229:1:9",
                                                  typeDescriptions: {
                                                    typeIdentifier: "t_bytes32",
                                                    typeString: "bytes32"
                                                  }
                                                }
                                              ],
                                              expression: {
                                                argumentTypes: [
                                                  {
                                                    typeIdentifier: "t_bytes32",
                                                    typeString: "bytes32"
                                                  }
                                                ],
                                                id: 11168,
                                                isConstant: false,
                                                isLValue: false,
                                                isPure: true,
                                                lValueRequested: false,
                                                nodeType:
                                                  "ElementaryTypeNameExpression",
                                                src: "13221:7:9",
                                                typeDescriptions: {
                                                  typeIdentifier:
                                                    "t_type$_t_uint256_$",
                                                  typeString: "type(uint256)"
                                                },
                                                typeName: {
                                                  id: 11167,
                                                  name: "uint256",
                                                  nodeType:
                                                    "ElementaryTypeName",
                                                  src: "13221:7:9",
                                                  typeDescriptions: {}
                                                }
                                              },
                                              id: 11170,
                                              isConstant: false,
                                              isLValue: false,
                                              isPure: false,
                                              kind: "typeConversion",
                                              lValueRequested: false,
                                              names: [],
                                              nodeType: "FunctionCall",
                                              src: "13221:10:9",
                                              tryCall: false,
                                              typeDescriptions: {
                                                typeIdentifier: "t_uint256",
                                                typeString: "uint256"
                                              }
                                            },
                                            id: 11171,
                                            isConstant: false,
                                            isLValue: false,
                                            isPure: false,
                                            lValueRequested: false,
                                            memberName: "add",
                                            nodeType: "MemberAccess",
                                            referencedDeclaration: 12849,
                                            src: "13221:14:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                              typeString:
                                                "function (uint256,uint256) pure returns (uint256)"
                                            }
                                          },
                                          id: 11173,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "functionCall",
                                          lValueRequested: false,
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "13221:18:9",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier: "t_uint256",
                                            typeString: "uint256"
                                          }
                                        },
                                        id: 11174,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        memberName: "add",
                                        nodeType: "MemberAccess",
                                        referencedDeclaration: 12849,
                                        src: "13221:22:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                          typeString:
                                            "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      id: 11176,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "13221:44:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "<=",
                                    rightExpression: {
                                      expression: {
                                        id: 11177,
                                        name: "signatures",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 11061,
                                        src: "13269:10:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_bytes_memory_ptr",
                                          typeString: "bytes memory"
                                        }
                                      },
                                      id: 11178,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      memberName: "length",
                                      nodeType: "MemberAccess",
                                      src: "13269:17:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256"
                                      }
                                    },
                                    src: "13221:65:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    }
                                  },
                                  {
                                    hexValue: "4753303233",
                                    id: 11180,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: "string",
                                    lValueRequested: false,
                                    nodeType: "Literal",
                                    src: "13288:7:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_stringliteral_00aecc0fa22d38afc0f465808a9fee188ba139fb53b2ca550ea01d91d6ecf29f",
                                      typeString: 'literal_string "GS023"'
                                    },
                                    value: "GS023"
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    },
                                    {
                                      typeIdentifier:
                                        "t_stringliteral_00aecc0fa22d38afc0f465808a9fee188ba139fb53b2ca550ea01d91d6ecf29f",
                                      typeString: 'literal_string "GS023"'
                                    }
                                  ],
                                  id: 11166,
                                  name: "require",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [-18, -18],
                                  referencedDeclaration: -18,
                                  src: "13213:7:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    typeString:
                                      "function (bool,string memory) pure"
                                  }
                                },
                                id: 11181,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "13213:83:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_tuple$__$",
                                  typeString: "tuple()"
                                }
                              },
                              id: 11182,
                              nodeType: "ExpressionStatement",
                              src: "13213:83:9"
                            },
                            {
                              assignments: [11184],
                              declarations: [
                                {
                                  constant: false,
                                  id: 11184,
                                  mutability: "mutable",
                                  name: "contractSignature",
                                  nameLocation: "13363:17:9",
                                  nodeType: "VariableDeclaration",
                                  scope: 11200,
                                  src: "13350:30:9",
                                  stateVariable: false,
                                  storageLocation: "memory",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bytes_memory_ptr",
                                    typeString: "bytes"
                                  },
                                  typeName: {
                                    id: 11183,
                                    name: "bytes",
                                    nodeType: "ElementaryTypeName",
                                    src: "13350:5:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bytes_storage_ptr",
                                      typeString: "bytes"
                                    }
                                  },
                                  visibility: "internal"
                                }
                              ],
                              id: 11185,
                              nodeType: "VariableDeclarationStatement",
                              src: "13350:30:9"
                            },
                            {
                              AST: {
                                nodeType: "YulBlock",
                                src: "13471:229:9",
                                statements: [
                                  {
                                    nodeType: "YulAssignment",
                                    src: "13632:50:9",
                                    value: {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              name: "signatures",
                                              nodeType: "YulIdentifier",
                                              src: "13661:10:9"
                                            },
                                            {
                                              name: "s",
                                              nodeType: "YulIdentifier",
                                              src: "13673:1:9"
                                            }
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "13657:3:9"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "13657:18:9"
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "13677:4:9",
                                          type: "",
                                          value: "0x20"
                                        }
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "13653:3:9"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "13653:29:9"
                                    },
                                    variableNames: [
                                      {
                                        name: "contractSignature",
                                        nodeType: "YulIdentifier",
                                        src: "13632:17:9"
                                      }
                                    ]
                                  }
                                ]
                              },
                              evmVersion: "london",
                              externalReferences: [
                                {
                                  declaration: 11184,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13632:17:9",
                                  valueSize: 1
                                },
                                {
                                  declaration: 11094,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13673:1:9",
                                  valueSize: 1
                                },
                                {
                                  declaration: 11061,
                                  isOffset: false,
                                  isSlot: false,
                                  src: "13661:10:9",
                                  valueSize: 1
                                }
                              ],
                              id: 11186,
                              nodeType: "InlineAssembly",
                              src: "13462:238:9"
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    commonType: {
                                      typeIdentifier: "t_bytes4",
                                      typeString: "bytes4"
                                    },
                                    id: 11196,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftExpression: {
                                      arguments: [
                                        {
                                          id: 11192,
                                          name: "data",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11059,
                                          src: "13776:4:9",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_bytes_memory_ptr",
                                            typeString: "bytes memory"
                                          }
                                        },
                                        {
                                          id: 11193,
                                          name: "contractSignature",
                                          nodeType: "Identifier",
                                          overloadedDeclarations: [],
                                          referencedDeclaration: 11184,
                                          src: "13782:17:9",
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_bytes_memory_ptr",
                                            typeString: "bytes memory"
                                          }
                                        }
                                      ],
                                      expression: {
                                        argumentTypes: [
                                          {
                                            typeIdentifier:
                                              "t_bytes_memory_ptr",
                                            typeString: "bytes memory"
                                          },
                                          {
                                            typeIdentifier:
                                              "t_bytes_memory_ptr",
                                            typeString: "bytes memory"
                                          }
                                        ],
                                        expression: {
                                          arguments: [
                                            {
                                              id: 11189,
                                              name: "currentOwner",
                                              nodeType: "Identifier",
                                              overloadedDeclarations: [],
                                              referencedDeclaration: 11085,
                                              src: "13745:12:9",
                                              typeDescriptions: {
                                                typeIdentifier: "t_address",
                                                typeString: "address"
                                              }
                                            }
                                          ],
                                          expression: {
                                            argumentTypes: [
                                              {
                                                typeIdentifier: "t_address",
                                                typeString: "address"
                                              }
                                            ],
                                            id: 11188,
                                            name: "ISignatureValidator",
                                            nodeType: "Identifier",
                                            overloadedDeclarations: [],
                                            referencedDeclaration: 12899,
                                            src: "13725:19:9",
                                            typeDescriptions: {
                                              typeIdentifier:
                                                "t_type$_t_contract$_ISignatureValidator_$12899_$",
                                              typeString:
                                                "type(contract ISignatureValidator)"
                                            }
                                          },
                                          id: 11190,
                                          isConstant: false,
                                          isLValue: false,
                                          isPure: false,
                                          kind: "typeConversion",
                                          lValueRequested: false,
                                          names: [],
                                          nodeType: "FunctionCall",
                                          src: "13725:33:9",
                                          tryCall: false,
                                          typeDescriptions: {
                                            typeIdentifier:
                                              "t_contract$_ISignatureValidator_$12899",
                                            typeString:
                                              "contract ISignatureValidator"
                                          }
                                        },
                                        id: 11191,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: false,
                                        lValueRequested: false,
                                        memberName: "isValidSignature",
                                        nodeType: "MemberAccess",
                                        referencedDeclaration: 12898,
                                        src: "13725:50:9",
                                        typeDescriptions: {
                                          typeIdentifier:
                                            "t_function_external_view$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                                          typeString:
                                            "function (bytes memory,bytes memory) view external returns (bytes4)"
                                        }
                                      },
                                      id: 11194,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      kind: "functionCall",
                                      lValueRequested: false,
                                      names: [],
                                      nodeType: "FunctionCall",
                                      src: "13725:75:9",
                                      tryCall: false,
                                      typeDescriptions: {
                                        typeIdentifier: "t_bytes4",
                                        typeString: "bytes4"
                                      }
                                    },
                                    nodeType: "BinaryOperation",
                                    operator: "==",
                                    rightExpression: {
                                      id: 11195,
                                      name: "EIP1271_MAGIC_VALUE",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 12885,
                                      src: "13804:19:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_bytes4",
                                        typeString: "bytes4"
                                      }
                                    },
                                    src: "13725:98:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    }
                                  },
                                  {
                                    hexValue: "4753303234",
                                    id: 11197,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: "string",
                                    lValueRequested: false,
                                    nodeType: "Literal",
                                    src: "13825:7:9",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_stringliteral_1d9dfad0f7e80ccb3a898324566cbd9ed8451678d229622c4c1b5f1f19330139",
                                      typeString: 'literal_string "GS024"'
                                    },
                                    value: "GS024"
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: "t_bool",
                                      typeString: "bool"
                                    },
                                    {
                                      typeIdentifier:
                                        "t_stringliteral_1d9dfad0f7e80ccb3a898324566cbd9ed8451678d229622c4c1b5f1f19330139",
                                      typeString: 'literal_string "GS024"'
                                    }
                                  ],
                                  id: 11187,
                                  name: "require",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [-18, -18],
                                  referencedDeclaration: -18,
                                  src: "13717:7:9",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                    typeString:
                                      "function (bool,string memory) pure"
                                  }
                                },
                                id: 11198,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "functionCall",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "13717:116:9",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_tuple$__$",
                                  typeString: "tuple()"
                                }
                              },
                              id: 11199,
                              nodeType: "ExpressionStatement",
                              src: "13717:116:9"
                            }
                          ]
                        }
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              commonType: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              },
                              id: 11284,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                commonType: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                },
                                id: 11280,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  commonType: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  },
                                  id: 11271,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    id: 11269,
                                    name: "currentOwner",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 11085,
                                    src: "15000:12:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  nodeType: "BinaryOperation",
                                  operator: ">",
                                  rightExpression: {
                                    id: 11270,
                                    name: "lastOwner",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 11078,
                                    src: "15015:9:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  src: "15000:24:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bool",
                                    typeString: "bool"
                                  }
                                },
                                nodeType: "BinaryOperation",
                                operator: "&&",
                                rightExpression: {
                                  commonType: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  },
                                  id: 11279,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  leftExpression: {
                                    baseExpression: {
                                      id: 11272,
                                      name: "owners",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 12122,
                                      src: "15028:6:9",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_mapping$_t_address_$_t_address_$",
                                        typeString:
                                          "mapping(address => address)"
                                      }
                                    },
                                    id: 11274,
                                    indexExpression: {
                                      id: 11273,
                                      name: "currentOwner",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 11085,
                                      src: "15035:12:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_address",
                                        typeString: "address"
                                      }
                                    },
                                    isConstant: false,
                                    isLValue: true,
                                    isPure: false,
                                    lValueRequested: false,
                                    nodeType: "IndexAccess",
                                    src: "15028:20:9",
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  nodeType: "BinaryOperation",
                                  operator: "!=",
                                  rightExpression: {
                                    arguments: [
                                      {
                                        hexValue: "30",
                                        id: 11277,
                                        isConstant: false,
                                        isLValue: false,
                                        isPure: true,
                                        kind: "number",
                                        lValueRequested: false,
                                        nodeType: "Literal",
                                        src: "15060:1:9",
                                        typeDescriptions: {
                                          typeIdentifier: "t_rational_0_by_1",
                                          typeString: "int_const 0"
                                        },
                                        value: "0"
                                      }
                                    ],
                                    expression: {
                                      argumentTypes: [
                                        {
                                          typeIdentifier: "t_rational_0_by_1",
                                          typeString: "int_const 0"
                                        }
                                      ],
                                      id: 11276,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: true,
                                      lValueRequested: false,
                                      nodeType: "ElementaryTypeNameExpression",
                                      src: "15052:7:9",
                                      typeDescriptions: {
                                        typeIdentifier: "t_type$_t_address_$",
                                        typeString: "type(address)"
                                      },
                                      typeName: {
                                        id: 11275,
                                        name: "address",
                                        nodeType: "ElementaryTypeName",
                                        src: "15052:7:9",
                                        typeDescriptions: {}
                                      }
                                    },
                                    id: 11278,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    kind: "typeConversion",
                                    lValueRequested: false,
                                    names: [],
                                    nodeType: "FunctionCall",
                                    src: "15052:10:9",
                                    tryCall: false,
                                    typeDescriptions: {
                                      typeIdentifier: "t_address",
                                      typeString: "address"
                                    }
                                  },
                                  src: "15028:34:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_bool",
                                    typeString: "bool"
                                  }
                                },
                                src: "15000:62:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                }
                              },
                              nodeType: "BinaryOperation",
                              operator: "&&",
                              rightExpression: {
                                commonType: {
                                  typeIdentifier: "t_address",
                                  typeString: "address"
                                },
                                id: 11283,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  id: 11281,
                                  name: "currentOwner",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 11085,
                                  src: "15066:12:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                nodeType: "BinaryOperation",
                                operator: "!=",
                                rightExpression: {
                                  id: 11282,
                                  name: "SENTINEL_OWNERS",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 12118,
                                  src: "15082:15:9",
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address"
                                  }
                                },
                                src: "15066:31:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bool",
                                  typeString: "bool"
                                }
                              },
                              src: "15000:97:9",
                              typeDescriptions: {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              }
                            },
                            {
                              hexValue: "4753303236",
                              id: 11285,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "string",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "15099:7:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_stringliteral_14032cc06a7a2043c1b961d6b7d6cbfaea1511224ce5ca723af49fa68e55c159",
                                typeString: 'literal_string "GS026"'
                              },
                              value: "GS026"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_bool",
                                typeString: "bool"
                              },
                              {
                                typeIdentifier:
                                  "t_stringliteral_14032cc06a7a2043c1b961d6b7d6cbfaea1511224ce5ca723af49fa68e55c159",
                                typeString: 'literal_string "GS026"'
                              }
                            ],
                            id: 11268,
                            name: "require",
                            nodeType: "Identifier",
                            overloadedDeclarations: [-18, -18],
                            referencedDeclaration: -18,
                            src: "14992:7:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              typeString: "function (bool,string memory) pure"
                            }
                          },
                          id: 11286,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "14992:115:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_tuple$__$",
                            typeString: "tuple()"
                          }
                        },
                        id: 11287,
                        nodeType: "ExpressionStatement",
                        src: "14992:115:9"
                      },
                      {
                        expression: {
                          id: 11290,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 11288,
                            name: "lastOwner",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11078,
                            src: "15121:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            id: 11289,
                            name: "currentOwner",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11085,
                            src: "15133:12:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          src: "15121:24:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        id: 11291,
                        nodeType: "ExpressionStatement",
                        src: "15121:24:9"
                      }
                    ]
                  },
                  condition: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    },
                    id: 11105,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 11103,
                      name: "i",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11097,
                      src: "11876:1:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "BinaryOperation",
                    operator: "<",
                    rightExpression: {
                      id: 11104,
                      name: "requiredSignatures",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11063,
                      src: "11880:18:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    src: "11876:22:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool"
                    }
                  },
                  id: 11293,
                  initializationExpression: {
                    expression: {
                      id: 11101,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 11099,
                        name: "i",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11097,
                        src: "11869:1:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        hexValue: "30",
                        id: 11100,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "11873:1:9",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_0_by_1",
                          typeString: "int_const 0"
                        },
                        value: "0"
                      },
                      src: "11869:5:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    id: 11102,
                    nodeType: "ExpressionStatement",
                    src: "11869:5:9"
                  },
                  loopExpression: {
                    expression: {
                      id: 11107,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: "UnaryOperation",
                      operator: "++",
                      prefix: false,
                      src: "11900:3:9",
                      subExpression: {
                        id: 11106,
                        name: "i",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11097,
                        src: "11900:1:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    id: 11108,
                    nodeType: "ExpressionStatement",
                    src: "11900:3:9"
                  },
                  nodeType: "ForStatement",
                  src: "11864:3292:9"
                }
              ]
            },
            documentation: {
              id: 11055,
              nodeType: "StructuredDocumentation",
              src: "10831:514:9",
              text: " @dev Checks whether the signature provided is valid for the provided data, hash. Will revert otherwise.\n @param dataHash Hash of the data (could be either a message hash or transaction hash)\n @param data That should be signed (this is passed to an external validator contract)\n @param signatures Signature data that should be verified. Can be ECDSA signature, contract signature (EIP-1271) or approved hash.\n @param requiredSignatures Amount of required valid signatures."
            },
            functionSelector: "12fb68e0",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "checkNSignatures",
            nameLocation: "11359:16:9",
            parameters: {
              id: 11064,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11057,
                  mutability: "mutable",
                  name: "dataHash",
                  nameLocation: "11393:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11295,
                  src: "11385:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 11056,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "11385:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11059,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "11424:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 11295,
                  src: "11411:17:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11058,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "11411:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11061,
                  mutability: "mutable",
                  name: "signatures",
                  nameLocation: "11451:10:9",
                  nodeType: "VariableDeclaration",
                  scope: 11295,
                  src: "11438:23:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11060,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "11438:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11063,
                  mutability: "mutable",
                  name: "requiredSignatures",
                  nameLocation: "11479:18:9",
                  nodeType: "VariableDeclaration",
                  scope: 11295,
                  src: "11471:26:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11062,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "11471:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "11375:128:9"
            },
            returnParameters: {
              id: 11065,
              nodeType: "ParameterList",
              parameters: [],
              src: "11516:0:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            id: 11344,
            nodeType: "FunctionDefinition",
            src: "15971:533:9",
            body: {
              id: 11343,
              nodeType: "Block",
              src: "16133:371:9",
              statements: [
                {
                  assignments: [11311],
                  declarations: [
                    {
                      constant: false,
                      id: 11311,
                      mutability: "mutable",
                      name: "startGas",
                      nameLocation: "16151:8:9",
                      nodeType: "VariableDeclaration",
                      scope: 11343,
                      src: "16143:16:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      },
                      typeName: {
                        id: 11310,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "16143:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11314,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 11312,
                      name: "gasleft",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -7,
                      src: "16162:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_gasleft_view$__$returns$_t_uint256_$",
                        typeString: "function () view returns (uint256)"
                      }
                    },
                    id: 11313,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "16162:9:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "16143:28:9"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 11317,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11298,
                            src: "16284:2:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11318,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11300,
                            src: "16288:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11319,
                            name: "data",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11302,
                            src: "16295:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            }
                          },
                          {
                            id: 11320,
                            name: "operation",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11305,
                            src: "16301:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            }
                          },
                          {
                            arguments: [],
                            expression: {
                              argumentTypes: [],
                              id: 11321,
                              name: "gasleft",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: -7,
                              src: "16312:7:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_gasleft_view$__$returns$_t_uint256_$",
                                typeString: "function () view returns (uint256)"
                              }
                            },
                            id: 11322,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "16312:9:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            },
                            {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          ],
                          id: 11316,
                          name: "execute",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11547,
                          src: "16276:7:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_enum$_Operation_$12611_$_t_uint256_$returns$_t_bool_$",
                            typeString:
                              "function (address,uint256,bytes memory,enum Enum.Operation,uint256) returns (bool)"
                          }
                        },
                        id: 11323,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "16276:46:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      ],
                      id: 11315,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "16268:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$returns$__$",
                        typeString: "function (bool) pure"
                      }
                    },
                    id: 11324,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "16268:55:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11325,
                  nodeType: "ExpressionStatement",
                  src: "16268:55:9"
                },
                {
                  assignments: [11327],
                  declarations: [
                    {
                      constant: false,
                      id: 11327,
                      mutability: "mutable",
                      name: "requiredGas",
                      nameLocation: "16341:11:9",
                      nodeType: "VariableDeclaration",
                      scope: 11343,
                      src: "16333:19:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      },
                      typeName: {
                        id: 11326,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "16333:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11332,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    },
                    id: 11331,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 11328,
                      name: "startGas",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 11311,
                      src: "16355:8:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "BinaryOperation",
                    operator: "-",
                    rightExpression: {
                      arguments: [],
                      expression: {
                        argumentTypes: [],
                        id: 11329,
                        name: "gasleft",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -7,
                        src: "16366:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_gasleft_view$__$returns$_t_uint256_$",
                          typeString: "function () view returns (uint256)"
                        }
                      },
                      id: 11330,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "16366:9:9",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    src: "16355:20:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "16333:42:9"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                id: 11338,
                                name: "requiredGas",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11327,
                                src: "16483:11:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256"
                                }
                              ],
                              expression: {
                                id: 11336,
                                name: "abi",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: -1,
                                src: "16466:3:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_abi",
                                  typeString: "abi"
                                }
                              },
                              id: 11337,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              memberName: "encodePacked",
                              nodeType: "MemberAccess",
                              src: "16466:16:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                typeString:
                                  "function () pure returns (bytes memory)"
                              }
                            },
                            id: 11339,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "16466:29:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes_memory_ptr",
                              typeString: "bytes memory"
                            }
                          ],
                          id: 11335,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "16459:6:9",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_string_storage_ptr_$",
                            typeString: "type(string storage pointer)"
                          },
                          typeName: {
                            id: 11334,
                            name: "string",
                            nodeType: "ElementaryTypeName",
                            src: "16459:6:9",
                            typeDescriptions: {}
                          }
                        },
                        id: 11340,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "16459:37:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      ],
                      id: 11333,
                      name: "revert",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-19, -19],
                      referencedDeclaration: -19,
                      src: "16452:6:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_revert_pure$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (string memory) pure"
                      }
                    },
                    id: 11341,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "16452:45:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11342,
                  nodeType: "ExpressionStatement",
                  src: "16452:45:9"
                }
              ]
            },
            documentation: {
              id: 11296,
              nodeType: "StructuredDocumentation",
              src: "15168:798:9",
              text: "@dev Allows to estimate a Safe transaction.\n      This method is only meant for estimation purpose, therefore the call will always revert and encode the result in the revert data.\n      Since the `estimateGas` function includes refunds, call this method to get an estimated of the costs that are deducted from the safe with `execTransaction`\n @param to Destination address of Safe transaction.\n @param value Ether value of Safe transaction.\n @param data Data payload of Safe transaction.\n @param operation Operation type of Safe transaction.\n @return Estimate without refunds and overhead fees (base transaction and payload data gas costs).\n @notice Deprecated in favor of common/StorageAccessible.sol and will be removed in next version."
            },
            functionSelector: "c4ca3a9c",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "requiredTxGas",
            nameLocation: "15980:13:9",
            parameters: {
              id: 11306,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11298,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "16011:2:9",
                  nodeType: "VariableDeclaration",
                  scope: 11344,
                  src: "16003:10:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11297,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "16003:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11300,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "16031:5:9",
                  nodeType: "VariableDeclaration",
                  scope: 11344,
                  src: "16023:13:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11299,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "16023:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11302,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "16061:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 11344,
                  src: "16046:19:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_calldata_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11301,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "16046:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11305,
                  mutability: "mutable",
                  name: "operation",
                  nameLocation: "16090:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 11344,
                  src: "16075:24:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_enum$_Operation_$12611",
                    typeString: "enum Enum.Operation"
                  },
                  typeName: {
                    id: 11304,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 11303,
                      name: "Enum.Operation",
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 12611,
                      src: "16075:14:9"
                    },
                    referencedDeclaration: 12611,
                    src: "16075:14:9",
                    typeDescriptions: {
                      typeIdentifier: "t_enum$_Operation_$12611",
                      typeString: "enum Enum.Operation"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "15993:112:9"
            },
            returnParameters: {
              id: 11309,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11308,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 11344,
                  src: "16124:7:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11307,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "16124:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "16123:9:9"
            },
            scope: 11516,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external"
          },
          {
            id: 11379,
            nodeType: "FunctionDefinition",
            src: "16751:228:9",
            body: {
              id: 11378,
              nodeType: "Block",
              src: "16804:175:9",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        },
                        id: 11359,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          baseExpression: {
                            id: 11351,
                            name: "owners",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 12122,
                            src: "16822:6:9",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_address_$",
                              typeString: "mapping(address => address)"
                            }
                          },
                          id: 11354,
                          indexExpression: {
                            expression: {
                              id: 11352,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: -15,
                              src: "16829:3:9",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg"
                              }
                            },
                            id: 11353,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "16829:10:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "16822:18:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: "!=",
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: "30",
                              id: 11357,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "16852:1:9",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              },
                              value: "0"
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0"
                              }
                            ],
                            id: 11356,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "16844:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_$",
                              typeString: "type(address)"
                            },
                            typeName: {
                              id: 11355,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "16844:7:9",
                              typeDescriptions: {}
                            }
                          },
                          id: 11358,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "typeConversion",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "16844:10:9",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        src: "16822:32:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      {
                        hexValue: "4753303330",
                        id: 11360,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "string",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "16856:7:9",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_stringliteral_26b7fa7d947085035b53de5c25693e568c405e1e894ad22389a1528045f35ba8",
                          typeString: 'literal_string "GS030"'
                        },
                        value: "GS030"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        },
                        {
                          typeIdentifier:
                            "t_stringliteral_26b7fa7d947085035b53de5c25693e568c405e1e894ad22389a1528045f35ba8",
                          typeString: 'literal_string "GS030"'
                        }
                      ],
                      id: 11350,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [-18, -18],
                      referencedDeclaration: -18,
                      src: "16814:7:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure"
                      }
                    },
                    id: 11361,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "16814:50:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11362,
                  nodeType: "ExpressionStatement",
                  src: "16814:50:9"
                },
                {
                  expression: {
                    id: 11370,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        baseExpression: {
                          id: 11363,
                          name: "approvedHashes",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 10658,
                          src: "16874:14:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_uint256_$_$",
                            typeString:
                              "mapping(address => mapping(bytes32 => uint256))"
                          }
                        },
                        id: 11367,
                        indexExpression: {
                          expression: {
                            id: 11364,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -15,
                            src: "16889:3:9",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg"
                            }
                          },
                          id: 11365,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "16889:10:9",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address"
                          }
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: "IndexAccess",
                        src: "16874:26:9",
                        typeDescriptions: {
                          typeIdentifier: "t_mapping$_t_bytes32_$_t_uint256_$",
                          typeString: "mapping(bytes32 => uint256)"
                        }
                      },
                      id: 11368,
                      indexExpression: {
                        id: 11366,
                        name: "hashToApprove",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11347,
                        src: "16901:13:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "16874:41:9",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      hexValue: "31",
                      id: 11369,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "number",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "16918:1:9",
                      typeDescriptions: {
                        typeIdentifier: "t_rational_1_by_1",
                        typeString: "int_const 1"
                      },
                      value: "1"
                    },
                    src: "16874:45:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  id: 11371,
                  nodeType: "ExpressionStatement",
                  src: "16874:45:9"
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 11373,
                        name: "hashToApprove",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11347,
                        src: "16946:13:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      {
                        expression: {
                          id: 11374,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: "16961:3:9",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg"
                          }
                        },
                        id: 11375,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "16961:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        },
                        {
                          typeIdentifier: "t_address",
                          typeString: "address"
                        }
                      ],
                      id: 11372,
                      name: "ApproveHash",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 10628,
                      src: "16934:11:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        typeString: "function (bytes32,address)"
                      }
                    },
                    id: 11376,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "16934:38:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 11377,
                  nodeType: "EmitStatement",
                  src: "16929:43:9"
                }
              ]
            },
            documentation: {
              id: 11345,
              nodeType: "StructuredDocumentation",
              src: "16510:236:9",
              text: " @dev Marks a hash as approved. This can be used to validate a hash that is used by a signature.\n @param hashToApprove The hash that should be marked as approved for signatures that are verified by this contract."
            },
            functionSelector: "d4d9bdcd",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "approveHash",
            nameLocation: "16760:11:9",
            parameters: {
              id: 11348,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11347,
                  mutability: "mutable",
                  name: "hashToApprove",
                  nameLocation: "16780:13:9",
                  nodeType: "VariableDeclaration",
                  scope: 11379,
                  src: "16772:21:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 11346,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "16772:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "16771:23:9"
            },
            returnParameters: {
              id: 11349,
              nodeType: "ParameterList",
              parameters: [],
              src: "16804:0:9"
            },
            scope: 11516,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external"
          },
          {
            id: 11392,
            nodeType: "FunctionDefinition",
            src: "17042:211:9",
            body: {
              id: 11391,
              nodeType: "Block",
              src: "17094:159:9",
              statements: [
                {
                  assignments: [11386],
                  declarations: [
                    {
                      constant: false,
                      id: 11386,
                      mutability: "mutable",
                      name: "id",
                      nameLocation: "17112:2:9",
                      nodeType: "VariableDeclaration",
                      scope: 11391,
                      src: "17104:10:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      },
                      typeName: {
                        id: 11385,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "17104:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11387,
                  nodeType: "VariableDeclarationStatement",
                  src: "17104:10:9"
                },
                {
                  AST: {
                    nodeType: "YulBlock",
                    src: "17189:39:9",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "17203:15:9",
                        value: {
                          arguments: [],
                          functionName: {
                            name: "chainid",
                            nodeType: "YulIdentifier",
                            src: "17209:7:9"
                          },
                          nodeType: "YulFunctionCall",
                          src: "17209:9:9"
                        },
                        variableNames: [
                          {
                            name: "id",
                            nodeType: "YulIdentifier",
                            src: "17203:2:9"
                          }
                        ]
                      }
                    ]
                  },
                  evmVersion: "london",
                  externalReferences: [
                    {
                      declaration: 11386,
                      isOffset: false,
                      isSlot: false,
                      src: "17203:2:9",
                      valueSize: 1
                    }
                  ],
                  id: 11388,
                  nodeType: "InlineAssembly",
                  src: "17180:48:9"
                },
                {
                  expression: {
                    id: 11389,
                    name: "id",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 11386,
                    src: "17244:2:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  functionReturnParameters: 11384,
                  id: 11390,
                  nodeType: "Return",
                  src: "17237:9:9"
                }
              ]
            },
            documentation: {
              id: 11380,
              nodeType: "StructuredDocumentation",
              src: "16985:52:9",
              text: "@dev Returns the chain id used by this contract."
            },
            functionSelector: "3408e470",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getChainId",
            nameLocation: "17051:10:9",
            parameters: {
              id: 11381,
              nodeType: "ParameterList",
              parameters: [],
              src: "17061:2:9"
            },
            returnParameters: {
              id: 11384,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11383,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 11392,
                  src: "17085:7:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11382,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "17085:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "17084:9:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            id: 11408,
            nodeType: "FunctionDefinition",
            src: "17259:149:9",
            body: {
              id: 11407,
              nodeType: "Block",
              src: "17316:92:9",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 11400,
                            name: "DOMAIN_SEPARATOR_TYPEHASH",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10606,
                            src: "17354:25:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            }
                          },
                          {
                            arguments: [],
                            expression: {
                              argumentTypes: [],
                              id: 11401,
                              name: "getChainId",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 11392,
                              src: "17381:10:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_view$__$returns$_t_uint256_$",
                                typeString: "function () view returns (uint256)"
                              }
                            },
                            id: 11402,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "17381:12:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11403,
                            name: "this",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -28,
                            src: "17395:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_GnosisSafe_$11516",
                              typeString: "contract GnosisSafe"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_contract$_GnosisSafe_$11516",
                              typeString: "contract GnosisSafe"
                            }
                          ],
                          expression: {
                            id: 11398,
                            name: "abi",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -1,
                            src: "17343:3:9",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_abi",
                              typeString: "abi"
                            }
                          },
                          id: 11399,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberName: "encode",
                          nodeType: "MemberAccess",
                          src: "17343:10:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function () pure returns (bytes memory)"
                          }
                        },
                        id: 11404,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "17343:57:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      ],
                      id: 11397,
                      name: "keccak256",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -8,
                      src: "17333:9:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        typeString:
                          "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    id: 11405,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "17333:68:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  functionReturnParameters: 11396,
                  id: 11406,
                  nodeType: "Return",
                  src: "17326:75:9"
                }
              ]
            },
            functionSelector: "f698da25",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "domainSeparator",
            nameLocation: "17268:15:9",
            parameters: {
              id: 11393,
              nodeType: "ParameterList",
              parameters: [],
              src: "17283:2:9"
            },
            returnParameters: {
              id: 11396,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11395,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 11408,
                  src: "17307:7:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 11394,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "17307:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "17306:9:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            id: 11472,
            nodeType: "FunctionDefinition",
            src: "18195:890:9",
            body: {
              id: 11471,
              nodeType: "Block",
              src: "18533:552:9",
              statements: [
                {
                  assignments: [11436],
                  declarations: [
                    {
                      constant: false,
                      id: 11436,
                      mutability: "mutable",
                      name: "safeTxHash",
                      nameLocation: "18551:10:9",
                      nodeType: "VariableDeclaration",
                      scope: 11471,
                      src: "18543:18:9",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_bytes32",
                        typeString: "bytes32"
                      },
                      typeName: {
                        id: 11435,
                        name: "bytes32",
                        nodeType: "ElementaryTypeName",
                        src: "18543:7:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 11455,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 11440,
                            name: "SAFE_TX_TYPEHASH",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 10609,
                            src: "18635:16:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            }
                          },
                          {
                            id: 11441,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11411,
                            src: "18673:2:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11442,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11413,
                            src: "18697:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            arguments: [
                              {
                                id: 11444,
                                name: "data",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 11415,
                                src: "18734:4:9",
                                typeDescriptions: {
                                  typeIdentifier: "t_bytes_calldata_ptr",
                                  typeString: "bytes calldata"
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_bytes_calldata_ptr",
                                  typeString: "bytes calldata"
                                }
                              ],
                              id: 11443,
                              name: "keccak256",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: -8,
                              src: "18724:9:9",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                typeString:
                                  "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            id: 11445,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "18724:15:9",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            }
                          },
                          {
                            id: 11446,
                            name: "operation",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11418,
                            src: "18761:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            }
                          },
                          {
                            id: 11447,
                            name: "safeTxGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11420,
                            src: "18792:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11448,
                            name: "baseGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11422,
                            src: "18823:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11449,
                            name: "gasPrice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11424,
                            src: "18852:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11450,
                            name: "gasToken",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11426,
                            src: "18882:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11451,
                            name: "refundReceiver",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11428,
                            src: "18912:14:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11452,
                            name: "_nonce",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11430,
                            src: "18948:6:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_bytes32",
                              typeString: "bytes32"
                            },
                            {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          ],
                          expression: {
                            id: 11438,
                            name: "abi",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -1,
                            src: "18603:3:9",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_abi",
                              typeString: "abi"
                            }
                          },
                          id: 11439,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberName: "encode",
                          nodeType: "MemberAccess",
                          src: "18603:10:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function () pure returns (bytes memory)"
                          }
                        },
                        id: 11453,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "18603:369:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      ],
                      id: 11437,
                      name: "keccak256",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -8,
                      src: "18576:9:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        typeString:
                          "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    id: 11454,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "18576:410:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "18543:443:9"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            hexValue: "30783139",
                            id: 11460,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "19027:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_25_by_1",
                              typeString: "int_const 25"
                            },
                            value: "0x19"
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_25_by_1",
                              typeString: "int_const 25"
                            }
                          ],
                          id: 11459,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "19020:6:9",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_bytes1_$",
                            typeString: "type(bytes1)"
                          },
                          typeName: {
                            id: 11458,
                            name: "bytes1",
                            nodeType: "ElementaryTypeName",
                            src: "19020:6:9",
                            typeDescriptions: {}
                          }
                        },
                        id: 11461,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "19020:12:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes1",
                          typeString: "bytes1"
                        }
                      },
                      {
                        arguments: [
                          {
                            hexValue: "30783031",
                            id: 11464,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: "number",
                            lValueRequested: false,
                            nodeType: "Literal",
                            src: "19041:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_rational_1_by_1",
                              typeString: "int_const 1"
                            },
                            value: "0x01"
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_rational_1_by_1",
                              typeString: "int_const 1"
                            }
                          ],
                          id: 11463,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: "ElementaryTypeNameExpression",
                          src: "19034:6:9",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_bytes1_$",
                            typeString: "type(bytes1)"
                          },
                          typeName: {
                            id: 11462,
                            name: "bytes1",
                            nodeType: "ElementaryTypeName",
                            src: "19034:6:9",
                            typeDescriptions: {}
                          }
                        },
                        id: 11465,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "typeConversion",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "19034:12:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes1",
                          typeString: "bytes1"
                        }
                      },
                      {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          id: 11466,
                          name: "domainSeparator",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11408,
                          src: "19048:15:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$__$returns$_t_bytes32_$",
                            typeString: "function () view returns (bytes32)"
                          }
                        },
                        id: 11467,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "19048:17:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      },
                      {
                        id: 11468,
                        name: "safeTxHash",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 11436,
                        src: "19067:10:9",
                        typeDescriptions: {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes1",
                          typeString: "bytes1"
                        },
                        {
                          typeIdentifier: "t_bytes1",
                          typeString: "bytes1"
                        },
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        },
                        {
                          typeIdentifier: "t_bytes32",
                          typeString: "bytes32"
                        }
                      ],
                      expression: {
                        id: 11456,
                        name: "abi",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: -1,
                        src: "19003:3:9",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_abi",
                          typeString: "abi"
                        }
                      },
                      id: 11457,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberName: "encodePacked",
                      nodeType: "MemberAccess",
                      src: "19003:16:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                        typeString: "function () pure returns (bytes memory)"
                      }
                    },
                    id: 11469,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "19003:75:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_memory_ptr",
                      typeString: "bytes memory"
                    }
                  },
                  functionReturnParameters: 11434,
                  id: 11470,
                  nodeType: "Return",
                  src: "18996:82:9"
                }
              ]
            },
            documentation: {
              id: 11409,
              nodeType: "StructuredDocumentation",
              src: "17414:776:9",
              text: "@dev Returns the bytes that are hashed to be signed by owners.\n @param to Destination address.\n @param value Ether value.\n @param data Data payload.\n @param operation Operation type.\n @param safeTxGas Gas that should be used for the safe transaction.\n @param baseGas Gas costs for that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)\n @param gasPrice Maximum gas price that should be used for this transaction.\n @param gasToken Token address (or 0 if ETH) that is used for the payment.\n @param refundReceiver Address of receiver of gas payment (or 0 if tx.origin).\n @param _nonce Transaction nonce.\n @return Transaction hash bytes."
            },
            functionSelector: "e86637db",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "encodeTransactionData",
            nameLocation: "18204:21:9",
            parameters: {
              id: 11431,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11411,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "18243:2:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18235:10:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11410,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "18235:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11413,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "18263:5:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18255:13:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11412,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "18255:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11415,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "18293:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18278:19:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_calldata_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11414,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "18278:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11418,
                  mutability: "mutable",
                  name: "operation",
                  nameLocation: "18322:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18307:24:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_enum$_Operation_$12611",
                    typeString: "enum Enum.Operation"
                  },
                  typeName: {
                    id: 11417,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 11416,
                      name: "Enum.Operation",
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 12611,
                      src: "18307:14:9"
                    },
                    referencedDeclaration: 12611,
                    src: "18307:14:9",
                    typeDescriptions: {
                      typeIdentifier: "t_enum$_Operation_$12611",
                      typeString: "enum Enum.Operation"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11420,
                  mutability: "mutable",
                  name: "safeTxGas",
                  nameLocation: "18349:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18341:17:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11419,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "18341:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11422,
                  mutability: "mutable",
                  name: "baseGas",
                  nameLocation: "18376:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18368:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11421,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "18368:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11424,
                  mutability: "mutable",
                  name: "gasPrice",
                  nameLocation: "18401:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18393:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11423,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "18393:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11426,
                  mutability: "mutable",
                  name: "gasToken",
                  nameLocation: "18427:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18419:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11425,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "18419:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11428,
                  mutability: "mutable",
                  name: "refundReceiver",
                  nameLocation: "18453:14:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18445:22:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11427,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "18445:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11430,
                  mutability: "mutable",
                  name: "_nonce",
                  nameLocation: "18485:6:9",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18477:14:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11429,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "18477:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "18225:272:9"
            },
            returnParameters: {
              id: 11434,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11433,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 11472,
                  src: "18519:12:9",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_memory_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11432,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "18519:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "18518:14:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          },
          {
            id: 11515,
            nodeType: "FunctionDefinition",
            src: "19771:478:9",
            body: {
              id: 11514,
              nodeType: "Block",
              src: "20101:148:9",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 11501,
                            name: "to",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11475,
                            src: "20150:2:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11502,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11477,
                            src: "20154:5:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11503,
                            name: "data",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11479,
                            src: "20161:4:9",
                            typeDescriptions: {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            }
                          },
                          {
                            id: 11504,
                            name: "operation",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11482,
                            src: "20167:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            }
                          },
                          {
                            id: 11505,
                            name: "safeTxGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11484,
                            src: "20178:9:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11506,
                            name: "baseGas",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11486,
                            src: "20189:7:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11507,
                            name: "gasPrice",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11488,
                            src: "20198:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          {
                            id: 11508,
                            name: "gasToken",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11490,
                            src: "20208:8:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11509,
                            name: "refundReceiver",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11492,
                            src: "20218:14:9",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            }
                          },
                          {
                            id: 11510,
                            name: "_nonce",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 11494,
                            src: "20234:6:9",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_bytes_calldata_ptr",
                              typeString: "bytes calldata"
                            },
                            {
                              typeIdentifier: "t_enum$_Operation_$12611",
                              typeString: "enum Enum.Operation"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_address",
                              typeString: "address"
                            },
                            {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          ],
                          id: 11500,
                          name: "encodeTransactionData",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 11472,
                          src: "20128:21:9",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_address_$_t_uint256_$_t_bytes_calldata_ptr_$_t_enum$_Operation_$12611_$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$_t_address_$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                            typeString:
                              "function (address,uint256,bytes calldata,enum Enum.Operation,uint256,uint256,uint256,address,address,uint256) view returns (bytes memory)"
                          }
                        },
                        id: 11511,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        names: [],
                        nodeType: "FunctionCall",
                        src: "20128:113:9",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bytes_memory_ptr",
                          typeString: "bytes memory"
                        }
                      ],
                      id: 11499,
                      name: "keccak256",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: -8,
                      src: "20118:9:9",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        typeString:
                          "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    id: 11512,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    names: [],
                    nodeType: "FunctionCall",
                    src: "20118:124:9",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  functionReturnParameters: 11498,
                  id: 11513,
                  nodeType: "Return",
                  src: "20111:131:9"
                }
              ]
            },
            documentation: {
              id: 11473,
              nodeType: "StructuredDocumentation",
              src: "19091:675:9",
              text: "@dev Returns hash to be signed by owners.\n @param to Destination address.\n @param value Ether value.\n @param data Data payload.\n @param operation Operation type.\n @param safeTxGas Fas that should be used for the safe transaction.\n @param baseGas Gas costs for data used to trigger the safe transaction.\n @param gasPrice Maximum gas price that should be used for this transaction.\n @param gasToken Token address (or 0 if ETH) that is used for the payment.\n @param refundReceiver Address of receiver of gas payment (or 0 if tx.origin).\n @param _nonce Transaction nonce.\n @return Transaction hash."
            },
            functionSelector: "d8d11f78",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "getTransactionHash",
            nameLocation: "19780:18:9",
            parameters: {
              id: 11495,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11475,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "19816:2:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19808:10:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11474,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "19808:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11477,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "19836:5:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19828:13:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11476,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "19828:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11479,
                  mutability: "mutable",
                  name: "data",
                  nameLocation: "19866:4:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19851:19:9",
                  stateVariable: false,
                  storageLocation: "calldata",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes_calldata_ptr",
                    typeString: "bytes"
                  },
                  typeName: {
                    id: 11478,
                    name: "bytes",
                    nodeType: "ElementaryTypeName",
                    src: "19851:5:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes_storage_ptr",
                      typeString: "bytes"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11482,
                  mutability: "mutable",
                  name: "operation",
                  nameLocation: "19895:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19880:24:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_enum$_Operation_$12611",
                    typeString: "enum Enum.Operation"
                  },
                  typeName: {
                    id: 11481,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 11480,
                      name: "Enum.Operation",
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 12611,
                      src: "19880:14:9"
                    },
                    referencedDeclaration: 12611,
                    src: "19880:14:9",
                    typeDescriptions: {
                      typeIdentifier: "t_enum$_Operation_$12611",
                      typeString: "enum Enum.Operation"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11484,
                  mutability: "mutable",
                  name: "safeTxGas",
                  nameLocation: "19922:9:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19914:17:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11483,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "19914:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11486,
                  mutability: "mutable",
                  name: "baseGas",
                  nameLocation: "19949:7:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19941:15:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11485,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "19941:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11488,
                  mutability: "mutable",
                  name: "gasPrice",
                  nameLocation: "19974:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19966:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11487,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "19966:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11490,
                  mutability: "mutable",
                  name: "gasToken",
                  nameLocation: "20000:8:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "19992:16:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11489,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "19992:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11492,
                  mutability: "mutable",
                  name: "refundReceiver",
                  nameLocation: "20026:14:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "20018:22:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address"
                  },
                  typeName: {
                    id: 11491,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "20018:7:9",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: false,
                  id: 11494,
                  mutability: "mutable",
                  name: "_nonce",
                  nameLocation: "20058:6:9",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "20050:14:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 11493,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "20050:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "19798:272:9"
            },
            returnParameters: {
              id: 11498,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 11497,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 11515,
                  src: "20092:7:9",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32"
                  },
                  typeName: {
                    id: 11496,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "20092:7:9",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "20091:9:9"
            },
            scope: 11516,
            stateMutability: "view",
            virtual: false,
            visibility: "public"
          }
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 10578,
              name: "EtherPaymentFallback",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12634,
              src: "749:20:9"
            },
            id: 10579,
            nodeType: "InheritanceSpecifier",
            src: "749:20:9"
          },
          {
            baseName: {
              id: 10580,
              name: "Singleton",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12713,
              src: "775:9:9"
            },
            id: 10581,
            nodeType: "InheritanceSpecifier",
            src: "775:9:9"
          },
          {
            baseName: {
              id: 10582,
              name: "ModuleManager",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12094,
              src: "790:13:9"
            },
            id: 10583,
            nodeType: "InheritanceSpecifier",
            src: "790:13:9"
          },
          {
            baseName: {
              id: 10584,
              name: "OwnerManager",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12605,
              src: "809:12:9"
            },
            id: 10585,
            nodeType: "InheritanceSpecifier",
            src: "809:12:9"
          },
          {
            baseName: {
              id: 10586,
              name: "SignatureDecoder",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12707,
              src: "827:16:9"
            },
            id: 10587,
            nodeType: "InheritanceSpecifier",
            src: "827:16:9"
          },
          {
            baseName: {
              id: 10588,
              name: "SecuredTokenTransfer",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12661,
              src: "849:20:9"
            },
            id: 10589,
            nodeType: "InheritanceSpecifier",
            src: "849:20:9"
          },
          {
            baseName: {
              id: 10590,
              name: "ISignatureValidatorConstants",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12886,
              src: "875:28:9"
            },
            id: 10591,
            nodeType: "InheritanceSpecifier",
            src: "875:28:9"
          },
          {
            baseName: {
              id: 10592,
              name: "FallbackManager",
              nodeType: "IdentifierPath",
              referencedDeclaration: 11599,
              src: "909:15:9"
            },
            id: 10593,
            nodeType: "InheritanceSpecifier",
            src: "909:15:9"
          },
          {
            baseName: {
              id: 10594,
              name: "StorageAccessible",
              nodeType: "IdentifierPath",
              referencedDeclaration: 12762,
              src: "930:17:9"
            },
            id: 10595,
            nodeType: "InheritanceSpecifier",
            src: "930:17:9"
          },
          {
            baseName: {
              id: 10596,
              name: "GuardManager",
              nodeType: "IdentifierPath",
              referencedDeclaration: 11727,
              src: "953:12:9"
            },
            id: 10597,
            nodeType: "InheritanceSpecifier",
            src: "953:12:9"
          }
        ],
        canonicalName: "GnosisSafe",
        contractDependencies: [],
        contractKind: "contract",
        documentation: {
          id: 10577,
          nodeType: "StructuredDocumentation",
          src: "505:217:9",
          text: "@title Gnosis Safe - A multisignature wallet with support for confirmations using signed messages based on ERC191.\n @author Stefan George - <stefan@gnosis.io>\n @author Richard Meissner - <richard@gnosis.io>"
        },
        fullyImplemented: true,
        linearizedBaseContracts: [
          11516, 11727, 12762, 11599, 12886, 12661, 12707, 12605, 12094, 11548,
          12687, 12713, 12634
        ],
        name: "GnosisSafe",
        nameLocation: "731:10:9",
        scope: 11517,
        usedErrors: []
      }
    ],
    license: "LGPL-3.0-only"
  },
  id: 9
}
