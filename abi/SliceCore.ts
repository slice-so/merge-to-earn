export const sliceCoreInterface = {
  _format: "hh-sol-artifact-1",
  contractName: "SliceCore",
  sourceName: "contracts/SliceCore.sol",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [],
      name: "Invalid",
      type: "error"
    },
    {
      inputs: [],
      name: "IsPaused",
      type: "error"
    },
    {
      inputs: [],
      name: "NotAuthorized",
      type: "error"
    },
    {
      inputs: [],
      name: "NotSuccessful",
      type: "error"
    },
    {
      inputs: [],
      name: "PaymentLoop",
      type: "error"
    },
    {
      inputs: [],
      name: "transferLocked",
      type: "error"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address"
        }
      ],
      name: "AdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "ApprovalForAll",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address"
        }
      ],
      name: "BeaconUpgraded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8"
        }
      ],
      name: "Initialized",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "Paused",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isSlicer",
          type: "bool"
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isActive",
          type: "bool"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "royaltyPercentage",
          type: "uint256"
        }
      ],
      name: "RoyaltySet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: true,
          internalType: "address",
          name: "slicerController",
          type: "address"
        }
      ],
      name: "SlicerControllerSet",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address payable[]",
          name: "accounts",
          type: "address[]"
        },
        {
          indexed: false,
          internalType: "int32[]",
          name: "tokensDiffs",
          type: "int32[]"
        }
      ],
      name: "TokenResliced",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "slicerAddress",
          type: "address"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          components: [
            {
              components: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address"
                },
                {
                  internalType: "uint32",
                  name: "shares",
                  type: "uint32"
                },
                {
                  internalType: "bool",
                  name: "transfersAllowedWhileLocked",
                  type: "bool"
                }
              ],
              internalType: "struct Payee[]",
              name: "payees",
              type: "tuple[]"
            },
            {
              internalType: "uint256",
              name: "minimumShares",
              type: "uint256"
            },
            {
              internalType: "address[]",
              name: "currencies",
              type: "address[]"
            },
            {
              internalType: "uint256",
              name: "releaseTimelock",
              type: "uint256"
            },
            {
              internalType: "uint40",
              name: "transferTimelock",
              type: "uint40"
            },
            {
              internalType: "address",
              name: "controller",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "slicerFlags",
              type: "uint8"
            },
            {
              internalType: "uint8",
              name: "sliceCoreFlags",
              type: "uint8"
            }
          ],
          indexed: false,
          internalType: "struct SliceParams",
          name: "params",
          type: "tuple"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "slicerVersion",
          type: "uint256"
        }
      ],
      name: "TokenSliced",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]"
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]"
        }
      ],
      name: "TransferBatch",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "TransferSingle",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "value",
          type: "string"
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "URI",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "Unpaused",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address"
        }
      ],
      name: "Upgraded",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "basePath_",
          type: "string"
        }
      ],
      name: "_setBasePath",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "_togglePause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "balanceOf",
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
          internalType: "address[]",
          name: "accounts",
          type: "address[]"
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]"
        }
      ],
      name: "balanceOfBatch",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "controller",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "exists",
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
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          internalType: "address",
          name: "operator",
          type: "address"
        }
      ],
      name: "isApprovedForAll",
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
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "paused",
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
      name: "proxiableUUID",
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
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "address payable[]",
          name: "accounts",
          type: "address[]"
        },
        {
          internalType: "int32[]",
          name: "tokensDiffs",
          type: "int32[]"
        }
      ],
      name: "reslice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "salePrice",
          type: "uint256"
        }
      ],
      name: "royaltyInfo",
      outputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "royaltyAmount",
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
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]"
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        }
      ],
      name: "safeBatchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        }
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address",
          name: "to",
          type: "address"
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        }
      ],
      name: "safeTransferFromUnreleased",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address"
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool"
        }
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "newController",
          type: "address"
        }
      ],
      name: "setController",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256"
        },
        {
          internalType: "bool",
          name: "isSlicer",
          type: "bool"
        },
        {
          internalType: "bool",
          name: "isActive",
          type: "bool"
        },
        {
          internalType: "uint256",
          name: "royaltyPercentage",
          type: "uint256"
        }
      ],
      name: "setRoyalty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: "address",
                  name: "account",
                  type: "address"
                },
                {
                  internalType: "uint32",
                  name: "shares",
                  type: "uint32"
                },
                {
                  internalType: "bool",
                  name: "transfersAllowedWhileLocked",
                  type: "bool"
                }
              ],
              internalType: "struct Payee[]",
              name: "payees",
              type: "tuple[]"
            },
            {
              internalType: "uint256",
              name: "minimumShares",
              type: "uint256"
            },
            {
              internalType: "address[]",
              name: "currencies",
              type: "address[]"
            },
            {
              internalType: "uint256",
              name: "releaseTimelock",
              type: "uint256"
            },
            {
              internalType: "uint40",
              name: "transferTimelock",
              type: "uint40"
            },
            {
              internalType: "address",
              name: "controller",
              type: "address"
            },
            {
              internalType: "uint8",
              name: "slicerFlags",
              type: "uint8"
            },
            {
              internalType: "uint8",
              name: "sliceCoreFlags",
              type: "uint8"
            }
          ],
          internalType: "struct SliceParams",
          name: "params",
          type: "tuple"
        }
      ],
      name: "slice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          internalType: "address[]",
          name: "recipients",
          type: "address[]"
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          internalType: "uint256[]",
          name: "amounts",
          type: "uint256[]"
        },
        {
          internalType: "bool",
          name: "toRelease",
          type: "bool"
        }
      ],
      name: "slicerBatchTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "slicerManager",
      outputs: [
        {
          internalType: "contract ISlicerManager",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "slicerVersion",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "slicers",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "supply",
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
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4"
        }
      ],
      name: "supportsInterface",
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
          internalType: "uint256",
          name: "id",
          type: "uint256"
        }
      ],
      name: "totalSupply",
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
          name: "newOwner",
          type: "address"
        }
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address"
        }
      ],
      name: "upgradeTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address"
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes"
        }
      ],
      name: "upgradeToAndCall",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "uri",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ],
  bytecode:
    "0x60a0604052306080523480156200001557600080fd5b506200002062000026565b620000e8565b600054610100900460ff1615620000935760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e6576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b608051614a6962000120600039600081816114af015281816114ef01528181611775015281816117b501526118690152614a696000f3fe6080604052600436106101e25760003560e01c80634f1ef28611610102578063a468f1c711610095578063d0137a2c11610064578063d0137a2c146105e5578063e985e9c514610605578063f242432a1461064e578063f2fde38b1461066e57600080fd5b8063a468f1c71461052d578063a58fa7c414610567578063bd85b03914610587578063c3592b0c146105c557600080fd5b8063715018a6116100d1578063715018a6146104ce5780638129fc1c146104e35780638da5cb5b146104f8578063a22cb4651461050d57600080fd5b80634f1ef2861461046d5780634f558e791461048057806352d1902d146104a05780635c975abb146104b557600080fd5b806326b7fb481161017a5780633e5779ee116101495780633e5779ee146103e35780634038906114610403578063405b4c361461042b5780634e1273f41461044057600080fd5b806326b7fb48146103445780632a55205a146103645780632eb2c2d6146103a35780633659cfe6146103c357600080fd5b80630da9450a116101b65780630da9450a146102815780630e89341c146102a1578063175fa7ea146102ce57806322001c2b1461031d57600080fd5b8062fdd58e146101e757806301ffc9a71461021a578063047fc9aa1461024a578063059f424f1461025f575b600080fd5b3480156101f357600080fd5b50610207610202366004613738565b61068e565b6040519081526020015b60405180910390f35b34801561022657600080fd5b5061023a61023536600461377a565b610726565b6040519015158152602001610211565b34801561025657600080fd5b50610207610778565b34801561026b57600080fd5b5061027f61027a366004613797565b610789565b005b34801561028d57600080fd5b5061027f61029c366004613816565b6107bf565b3480156102ad57600080fd5b506102c16102bc36600461385e565b6109f3565b60405161021191906138cf565b3480156102da57600080fd5b506103056102e936600461385e565b600090815261016060205260409020546001600160a01b031690565b6040516001600160a01b039091168152602001610211565b34801561032957600080fd5b50610332600181565b60405160ff9091168152602001610211565b34801561035057600080fd5b5061027f61035f36600461392d565b610a87565b34801561037057600080fd5b5061038461037f3660046139a6565b6110fc565b604080516001600160a01b039093168352602083019190915201610211565b3480156103af57600080fd5b5061027f6103be366004613b11565b611278565b3480156103cf57600080fd5b5061027f6103de366004613bbe565b6114a5565b3480156103ef57600080fd5b5061027f6103fe366004613bdb565b611584565b34801561040f57600080fd5b50610305735fc8d32690cc91d4c39d9d3abcbd16989f87570781565b34801561043757600080fd5b5061027f61161c565b34801561044c57600080fd5b5061046061045b366004613c7a565b611642565b6040516102119190613d18565b61027f61047b366004613d2b565b61176b565b34801561048c57600080fd5b5061023a61049b36600461385e565b611837565b3480156104ac57600080fd5b5061020761185c565b3480156104c157600080fd5b5061012d5460ff1661023a565b3480156104da57600080fd5b5061027f611910565b3480156104ef57600080fd5b5061027f611922565b34801561050457600080fd5b50610305611a32565b34801561051957600080fd5b5061027f610528366004613d70565b611a46565b34801561053957600080fd5b5061030561054836600461385e565b600090815261016060205260409020600101546001600160a01b031690565b34801561057357600080fd5b5061027f610582366004613d9e565b611a51565b34801561059357600080fd5b506102076105a236600461385e565b60009081526101606020526040902060010154600160c81b900463ffffffff1690565b3480156105d157600080fd5b5061027f6105e0366004613e32565b611bf7565b3480156105f157600080fd5b5061027f610600366004613e9a565b611cb7565b34801561061157600080fd5b5061023a610620366004613ed5565b6001600160a01b03918216600090815260fc6020908152604080832093909416825291909152205460ff1690565b34801561065a57600080fd5b5061027f610669366004613e32565b6121a4565b34801561067a57600080fd5b5061027f610689366004613bbe565b612276565b60006001600160a01b0383166106fe5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b50600090815260fb602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061075757506001600160e01b031982166303a24d0760e21b145b8061077257506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061078461015f5490565b905090565b6107916122ec565b6107bb82826040516020016107a7929190613f03565b60405160208183030381529060405261234b565b5050565b6107c884611837565b15806107d45750606481115b156107f257604051636dac6a0960e01b815260040160405180910390fd5b600084815261016060205260409020600101546001600160a01b03161561085357600084815261016060205260409020600101546001600160a01b0316331461084e5760405163ea8e4eb560e01b815260040160405180910390fd5b61090c565b60008481526101606020526040808220548151634abf03db60e11b815291516001600160a01b039091169163957e07b691600480830192869291908290030181865afa1580156108a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108cf9190810190613f1c565b505050505092505050806001600160a01b0316336001600160a01b03161461090a5760405163ea8e4eb560e01b815260040160405180910390fd5b505b600084815261016060205260409020600101805460ff60e81b1916600160e81b60ff841602179055811561096f576000848152610160602052604090206001908101805460ff60f01b198116600160f01b9182900460ff16909317029190911790555b82156109a757600084815261016060205260409020600101805460ff60f01b1981166002600160f01b9283900460ff16179091021790555b604080518415158152831515602082015290810182905284907f4fbf3dc0947ba89435d8dee95cfad6b2e458d3474fb5b840ce6d4a41f5e707c99060600160405180910390a250505050565b606060fd8054610a0290614038565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2e90614038565b8015610a7b5780601f10610a5057610100808354040283529160200191610a7b565b820191906000526020600020905b815481529060010190602001808311610a5e57829003601f168201915b50505050509050919050565b600085815261016060205260409020600190810154600160f01b900460021c161580610ace5750600085815261016060205260409020600101546001600160a01b03163314155b15610aec5760405163ea8e4eb560e01b815260040160405180910390fd5b828114610b0c57604051636dac6a0960e01b815260040160405180910390fd5b60008581526101606020526040808220548151634abf03db60e11b815291516001600160a01b039091169163957e07b691600480830192869291908290030181865afa158015610b60573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b889190810190613f1c565b97505050505050505060008060005b86811015610f6457610bcf888883818110610bb457610bb4614072565b9050602002016020810190610bc99190613bbe565b8a61068e565b60008a815261016060205260409020549092506001600160a01b031663d3c65754898984818110610c0257610c02614072565b9050602002016020810190610c179190613bbe565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526000602482015260448101859052606401600060405180830381600087803b158015610c6657600080fd5b505af1158015610c7a573d6000803e3d6000fd5b50505060008a815261016060205260409020546001600160a01b0316905063d3c65754898984818110610caf57610caf614072565b9050602002016020810190610cc49190613bbe565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201527356639db16ac50a89228026e42a316b30179a5376602482015260448101859052606401600060405180830381600087803b158015610d2657600080fd5b505af1158015610d3a573d6000803e3d6000fd5b5050505060005b8451811015610e1e5760008a815261016060205260409020546001600160a01b031663d3c657548a8a85818110610d7a57610d7a614072565b9050602002016020810190610d8f9190613bbe565b878481518110610da157610da1614072565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101869052606401600060405180830381600087803b158015610dfb57600080fd5b505af1158015610e0f573d6000803e3d6000fd5b50505050806001019050610d41565b506000868683818110610e3357610e33614072565b9050602002016020810190610e48919061409a565b60030b1315610ec357610ebe888883818110610e6657610e66614072565b9050602002016020810190610e7b9190613bbe565b8a888885818110610e8e57610e8e614072565b9050602002016020810190610ea3919061409a565b63ffffffff166040518060200160405280600081525061235e565b610f29565b610f29888883818110610ed857610ed8614072565b9050602002016020810190610eed9190613bbe565b8a888885818110610f0057610f00614072565b9050602002016020810190610f15919061409a565b610f1e906140cb565b63ffffffff1661247a565b858582818110610f3b57610f3b614072565b9050602002016020810190610f50919061409a565b610f5a90846140ee565b9250600101610b97565b5060008260030b1315610fc6576000888152610160602052604090206001018054839190601990610fa3908490600160c81b900463ffffffff16614137565b92506101000a81548163ffffffff021916908363ffffffff160217905550611029565b60008260030b121561102957610fdb826140cb565b600089815261016060205260409020600101805460199061100a908490600160c81b900463ffffffff1661415f565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b60008881526101606020526040908190208054600190910154915163e32cf85160e01b81526001600160a01b039091169163e32cf85191611082918b918b918b918b91600160c81b900463ffffffff16906004016141f8565b600060405180830381600087803b15801561109c57600080fd5b505af11580156110b0573d6000803e3d6000fd5b50505050877f50ab7f68b6b57e8f7634376d5e840c72b2b7f3e69bc52a6a12e3c777061b36b0888888886040516110ea9493929190614238565b60405180910390a25050505050505050565b60008061110884611837565b61112557604051636dac6a0960e01b815260040160405180910390fd5b600084815261016060205260408120600180820154919291600160f01b9004168103611152576032611162565b6001820154600160e81b900460ff165b60ff1690506103e8611174828761426a565b61117e9190614289565b600183810154919450600160f01b909104811c16156111b757600086815261016060205260409020546001600160a01b0316935061126f565b60008681526101606020526040808220548151634abf03db60e11b8152915183926001600160a01b039092169163957e07b691600480830192869291908290030181865afa15801561120d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112359190810190613f1c565b50505094505093505050801561126857600088815261016060205260409020600101546001600160a01b0316955061126c565b8195505b50505b50509250929050565b600083516001600160401b03811115611293576112936139c8565b6040519080825280602002602001820160405280156112bc578160200160208202803683370190505b50905060006001600160a01b0387163314806112dd57506112dd8733610620565b905060005b855181101561147f5761130e86828151811061130057611300614072565b60200260200101518961260e565b6000610160600088848151811061132757611327614072565b6020026020010151815260200190815260200160002060010160009054906101000a90046001600160a01b031690506003610160600089858151811061136f5761136f614072565b60200260200101518152602001908152602001600020600101601e9054906101000a900460ff1660ff16901c60011660ff166000141580156113b957506001600160a01b03811615155b156113eb576001600160a01b03811633146113e65760405162461bcd60e51b81526004016106f5906142ab565b611408565b826114085760405162461bcd60e51b81526004016106f5906142e2565b610160600088848151811061141f5761141f614072565b6020026020010151815260200190815260200160002060000160009054906101000a90046001600160a01b031684838151811061145e5761145e614072565b6001600160a01b0390921660209283029190910190910152506001016112e2565b5061148f87878785886001612682565b61149c8787878787612832565b50505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036114ed5760405162461bcd60e51b81526004016106f59061432b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166115366000805160206149ed833981519152546001600160a01b031690565b6001600160a01b03161461155c5760405162461bcd60e51b81526004016106f590614377565b61156581612a20565b6040805160008082526020820190925261158191839190612a28565b50565b600082815261016060205260409020600101546001600160a01b031633146115bf5760405163ea8e4eb560e01b815260040160405180910390fd5b6000828152610160602052604080822060010180546001600160a01b0319166001600160a01b0385169081179091559051909184917f2f1bd54f0cb5e0788fcb50aa92b6c88987bd2459fee273daa38b57af0717bd649190a35050565b6116246122ec565b61012d5460ff161561163a57611638612b98565b565b611638612beb565b606081518351146116a75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016106f5565b600083516001600160401b038111156116c2576116c26139c8565b6040519080825280602002602001820160405280156116eb578160200160208202803683370190505b50905060005b84518110156117635761173685828151811061170f5761170f614072565b602002602001015185838151811061172957611729614072565b602002602001015161068e565b82828151811061174857611748614072565b602090810291909101015261175c816143c3565b90506116f1565b509392505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036117b35760405162461bcd60e51b81526004016106f59061432b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166117fc6000805160206149ed833981519152546001600160a01b031690565b6001600160a01b0316146118225760405162461bcd60e51b81526004016106f590614377565b61182b82612a20565b6107bb82826001612a28565b60009081526101606020526040902060010154600160c81b900463ffffffff16151590565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146118fc5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016106f5565b506000805160206149ed8339815191525b90565b6119186122ec565b6116386000612c29565b600054610100900460ff16158080156119425750600054600160ff909116105b8061195c5750303b15801561195c575060005460ff166001145b6119bf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106f5565b6000805460ff1916600117905580156119e2576000805461ff0019166101001790555b6119ea612c7b565b8015611581576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b60006107846097546001600160a01b031690565b6107bb338383612caa565b8151845114611a7357604051636dac6a0960e01b815260040160405180910390fd5b60008381526101606020526040902060010154600160f01b900460ff168180611aa257506001600282901c1615155b8015611ab457506001600382901c1615155b8015611ada5750600084815261016060205260409020600101546001600160a01b031615155b15611b1e57600084815261016060205260409020600101546001600160a01b03163314611b195760405162461bcd60e51b81526004016106f5906142ab565b611b56565b6001600160a01b038616331480611b3a5750611b3a8633610620565b611b565760405162461bcd60e51b81526004016106f5906142e2565b60005b855181101561149c57611ba187878381518110611b7857611b78614072565b602002602001015187878581518110611b9357611b93614072565b602002602001015187612d8a565b611bef87878381518110611bb757611bb7614072565b602002602001015187878581518110611bd257611bd2614072565b602002602001015160405180602001604052806000815250612e99565b600101611b59565b600083815261016060205260409020600190810154600160f01b900460031c1615801590611c3f5750600083815261016060205260409020600101546001600160a01b031615155b15611c5d5760405163ea8e4eb560e01b815260040160405180910390fd5b6001600160a01b038516331480611c795750611c798533610620565b611c955760405162461bcd60e51b81526004016106f5906142e2565b611ca3858585856000612d8a565b611cb08585858585612e99565b5050505050565b611cbf612fd5565b8060200135600003611ce457604051636dac6a0960e01b815260040160405180910390fd5b6000611cf061015f5490565b6040516331d3055160e01b8152909150600090735fc8d32690cc91d4c39d9d3abcbd16989f875707906331d3055190611d31903390869088906004016145bb565b6020604051808303816000875af1158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906145e2565b90506000611d8860c0850160a08601613bbe565b6001600160a01b031614611dd757611da660c0840160a08501613bbe565b60008381526101606020526040902060010180546001600160a01b0319166001600160a01b03929092169190911790555b611de760a08401608085016145ff565b64ffffffffff1615611e3b57611e0360a08401608085016145ff565b600083815261016060205260409020600101805464ffffffffff92909216600160a01b0264ffffffffff60a01b199092169190911790555b6004611e4d60e0850160c0860161461a565b60ff16901c60ff16600014611e7557604051636dac6a0960e01b815260040160405180910390fd5b611e86610100840160e0850161461a565b60ff1615611f0a576004611ea1610100850160e0860161461a565b60ff16901c60ff16600014611ec957604051636dac6a0960e01b815260040160405180910390fd5b611eda610100840160e0850161461a565b600083815261016060205260409020600101805460ff92909216600160f01b0260ff60f01b199092169190911790555b60008281526101606020908152604080832080546001600160a01b0319166001600160a01b0386161790558051606081018252838152918201839052810182905260005b611f588680614635565b905081101561203357611f6b8680614635565b82818110611f7b57611f7b614072565b905060600201803603810190611f91919061467d565b80519092506001600160a01b03163b15611fb557611fb5848360000151600161301c565b611fde826000015186846020015163ffffffff166040518060200160405280600081525061235e565b81604001511561201b5760008581526101606020908152604080832085516001600160a01b031684526002019091529020805460ff191660011790555b602082015163ffffffff169290920191600101611f4e565b50600061204660c0870160a08801613bbe565b6001600160a01b0316148061207857506002612069610100870160e0880161461a565b60ff16901c60011660ff166000145b801561208f575081158061208f5750818560200135115b8061209d575063ffffffff82115b156120bb57604051636dac6a0960e01b815260040160405180910390fd5b811561214a576000848152610160602052604090819020600101805463ffffffff60c81b1916600160c81b63ffffffff86160217905551634e9270c360e11b8152600481018390526001600160a01b03841690639d24e18690602401600060405180830381600087803b15801561213157600080fd5b505af1158015612145573d6000803e3d6000fd5b505050505b61215961015f80546001019055565b600084846001600160a01b03167f1a745e1b60f6dec9004d9002b50154d758f015c01c2b80ca2f88458bee6980118860405161219591906146ec565b60405180910390a45050505050565b600083815261016060205260409020600190810154600160f01b900460031c16158015906121ec5750600083815261016060205260409020600101546001600160a01b031615155b1561223057600083815261016060205260409020600101546001600160a01b0316331461222b5760405162461bcd60e51b81526004016106f5906142ab565b612268565b6001600160a01b03851633148061224c575061224c8533610620565b6122685760405162461bcd60e51b81526004016106f5906142e2565b611ca3858585856001612d8a565b61227e6122ec565b6001600160a01b0381166122e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106f5565b61158181612c29565b336122f5611a32565b6001600160a01b0316146116385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106f5565b80516107bb9060fd90602084019061367a565b6001600160a01b0384166123be5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016106f5565b3360006123ca8561314f565b905060006123d78561314f565b90506123e88360008985858961319a565b600086815260fb602090815260408083206001600160a01b038b1684529091528120805487929061241a9084906146ff565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461149c836000898989896131bf565b6001600160a01b0383166124dc5760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016106f5565b3360006124e88461314f565b905060006124f58461314f565b90506125158387600085856040518060200160405280600081525061319a565b600085815260fb602090815260408083206001600160a01b038a168452909152902054848110156125945760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016106f5565b600086815260fb602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a460408051602081019091526000905261149c565b60008281526101606020526040902060010154600160a01b900464ffffffffff164210801561266457506000828152610160602090815260408083206001600160a01b038516845260020190915290205460ff16155b156107bb57604051630934355760e11b815260040160405180910390fd5b6001600160a01b0385163b151560005b8451811015612828578381815181106126ad576126ad614072565b60200260200101516000036126d557604051636dac6a0960e01b815260040160405180910390fd5b811561274b578481815181106126ed576126ed614072565b60200260200101516001600160a01b0316876001600160a01b031603612726576040516368ee781960e11b815260040160405180910390fd5b61274b85828151811061273b5761273b614072565b602002602001015188600161301c565b84818151811061275d5761275d614072565b60200260200101516001600160a01b031663b230074a89898661278c8d8c888151811061172957611729614072565b89878151811061279e5761279e614072565b60209081029190910101516040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015290151560448401526064830152608482015260a401600060405180830381600087803b15801561280557600080fd5b505af1158015612819573d6000803e3d6000fd5b50505050806001019050612692565b5050505050505050565b81518351146128945760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016106f5565b6001600160a01b0384166128ba5760405162461bcd60e51b81526004016106f590614717565b336128c981878787878761319a565b60005b84518110156129b25760008582815181106128e9576128e9614072565b60200260200101519050600085838151811061290757612907614072565b602090810291909101810151600084815260fb835260408082206001600160a01b038e1683529093529190912054909150818110156129585760405162461bcd60e51b81526004016106f59061475c565b600083815260fb602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906129979084906146ff565b92505081905550505050806129ab906143c3565b90506128cc565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612a029291906147a6565b60405180910390a4612a1881878787878761331a565b505050505050565b6115816122ec565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615612a6057612a5b836133d5565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015612aba575060408051601f3d908101601f19168201909252612ab7918101906147cb565b60015b612b1d5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016106f5565b6000805160206149ed8339815191528114612b8c5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016106f5565b50612a5b838383613471565b612ba061349c565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b612bf3612fd5565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612bce3390565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16612ca25760405162461bcd60e51b81526004016106f5906147e4565b6116386134e6565b816001600160a01b0316836001600160a01b031603612d1d5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016106f5565b6001600160a01b03838116600081815260fc6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b612d94838661260e565b60408051600180825281830190925260009160208083019080368337505060408051600180825281830190925292935060009291506020808301908036833750506040805160018082528183019092529293506000929150602080830190803683370190505090508583600081518110612e1057612e10614072565b6020908102919091018101919091526000878152610160909152604081205483516001600160a01b03909116918491612e4b57612e4b614072565b60200260200101906001600160a01b031690816001600160a01b0316815250508481600081518110612e7f57612e7f614072565b602002602001018181525050612828888885858589612682565b6001600160a01b038416612ebf5760405162461bcd60e51b81526004016106f590614717565b336000612ecb8561314f565b90506000612ed88561314f565b9050612ee883898985858961319a565b600086815260fb602090815260408083206001600160a01b038c16845290915290205485811015612f2b5760405162461bcd60e51b81526004016106f59061475c565b600087815260fb602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290612f6a9084906146ff565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612fca848a8a8a8a8a6131bf565b505050505050505050565b61012d5460ff16156116385760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106f5565b60408051600481526024810182526020810180516001600160e01b0316635d8dc38960e01b179052905160009182916001600160a01b0386169161305f9161482f565b600060405180830381855afa9150503d806000811461309a576040519150601f19603f3d011682016040523d82523d6000602084013e61309f565b606091505b50915091508115611cb0576000818060200190518101906130c091906147cb565b600081815261016060205260409020549091506001600160a01b03808716911603612a1857604051637669b10560e11b81526004810182905284151560248201526001600160a01b0387169063ecd3620a90604401600060405180830381600087803b15801561312f57600080fd5b505af1158015613143573d6000803e3d6000fd5b50505050505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061318957613189614072565b602090810291909101015292915050565b61012d5460ff1615612a1857604051631309a56360e01b815260040160405180910390fd5b6001600160a01b0384163b15612a185760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190613203908990899088908890889060040161484b565b6020604051808303816000875af192505050801561323e575060408051601f3d908101601f1916820190925261323b91810190614885565b60015b6132ea5761324a6148a2565b806308c379a003613283575061325e6148bd565b806132695750613285565b8060405162461bcd60e51b81526004016106f591906138cf565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016106f5565b6001600160e01b0319811663f23a6e6160e01b1461149c5760405162461bcd60e51b81526004016106f590614946565b6001600160a01b0384163b15612a185760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061335e908990899088908890889060040161498e565b6020604051808303816000875af1925050508015613399575060408051601f3d908101601f1916820190925261339691810190614885565b60015b6133a55761324a6148a2565b6001600160e01b0319811663bc197c8160e01b1461149c5760405162461bcd60e51b81526004016106f590614946565b6001600160a01b0381163b6134425760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016106f5565b6000805160206149ed83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61347a83613516565b6000825111806134875750805b15612a5b576134968383613556565b50505050565b61012d5460ff166116385760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106f5565b600054610100900460ff1661350d5760405162461bcd60e51b81526004016106f5906147e4565b61163833612c29565b61351f816133d5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6135be5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016106f5565b600080846001600160a01b0316846040516135d9919061482f565b600060405180830381855af49150503d8060008114613614576040519150601f19603f3d011682016040523d82523d6000602084013e613619565b606091505b50915091506136418282604051806060016040528060278152602001614a0d6027913961364a565b95945050505050565b60608315613659575081613663565b613663838361366a565b9392505050565b8151156132695781518083602001fd5b82805461368690614038565b90600052602060002090601f0160209004810192826136a857600085556136ee565b82601f106136c157805160ff19168380011785556136ee565b828001600101855582156136ee579182015b828111156136ee5782518255916020019190600101906136d3565b506136fa9291506136fe565b5090565b5b808211156136fa57600081556001016136ff565b6001600160a01b038116811461158157600080fd5b803561373381613713565b919050565b6000806040838503121561374b57600080fd5b823561375681613713565b946020939093013593505050565b6001600160e01b03198116811461158157600080fd5b60006020828403121561378c57600080fd5b813561366381613764565b600080602083850312156137aa57600080fd5b82356001600160401b03808211156137c157600080fd5b818501915085601f8301126137d557600080fd5b8135818111156137e457600080fd5b8660208285010111156137f657600080fd5b60209290920196919550909350505050565b801515811461158157600080fd5b6000806000806080858703121561382c57600080fd5b84359350602085013561383e81613808565b9250604085013561384e81613808565b9396929550929360600135925050565b60006020828403121561387057600080fd5b5035919050565b60005b8381101561389257818101518382015260200161387a565b838111156134965750506000910152565b600081518084526138bb816020860160208601613877565b601f01601f19169290920160200192915050565b60208152600061366360208301846138a3565b60008083601f8401126138f457600080fd5b5081356001600160401b0381111561390b57600080fd5b6020830191508360208260051b850101111561392657600080fd5b9250929050565b60008060008060006060868803121561394557600080fd5b8535945060208601356001600160401b038082111561396357600080fd5b61396f89838a016138e2565b9096509450604088013591508082111561398857600080fd5b50613995888289016138e2565b969995985093965092949392505050565b600080604083850312156139b957600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715613a0357613a036139c8565b6040525050565b60006001600160401b03821115613a2357613a236139c8565b5060051b60200190565b600082601f830112613a3e57600080fd5b81356020613a4b82613a0a565b604051613a5882826139de565b83815260059390931b8501820192828101915086841115613a7857600080fd5b8286015b84811015613a935780358352918301918301613a7c565b509695505050505050565b600082601f830112613aaf57600080fd5b81356001600160401b03811115613ac857613ac86139c8565b604051613adf601f8301601f1916602001826139de565b818152846020838601011115613af457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215613b2957600080fd5b8535613b3481613713565b94506020860135613b4481613713565b935060408601356001600160401b0380821115613b6057600080fd5b613b6c89838a01613a2d565b94506060880135915080821115613b8257600080fd5b613b8e89838a01613a2d565b93506080880135915080821115613ba457600080fd5b50613bb188828901613a9e565b9150509295509295909350565b600060208284031215613bd057600080fd5b813561366381613713565b60008060408385031215613bee57600080fd5b823591506020830135613c0081613713565b809150509250929050565b600082601f830112613c1c57600080fd5b81356020613c2982613a0a565b604051613c3682826139de565b83815260059390931b8501820192828101915086841115613c5657600080fd5b8286015b84811015613a93578035613c6d81613713565b8352918301918301613c5a565b60008060408385031215613c8d57600080fd5b82356001600160401b0380821115613ca457600080fd5b613cb086838701613c0b565b93506020850135915080821115613cc657600080fd5b50613cd385828601613a2d565b9150509250929050565b600081518084526020808501945080840160005b83811015613d0d57815187529582019590820190600101613cf1565b509495945050505050565b6020815260006136636020830184613cdd565b60008060408385031215613d3e57600080fd5b8235613d4981613713565b915060208301356001600160401b03811115613d6457600080fd5b613cd385828601613a9e565b60008060408385031215613d8357600080fd5b8235613d8e81613713565b91506020830135613c0081613808565b600080600080600060a08688031215613db657600080fd5b8535613dc181613713565b945060208601356001600160401b0380821115613ddd57600080fd5b613de989838a01613c0b565b9550604088013594506060880135915080821115613e0657600080fd5b50613e1388828901613a2d565b9250506080860135613e2481613808565b809150509295509295909350565b600080600080600060a08688031215613e4a57600080fd5b8535613e5581613713565b94506020860135613e6581613713565b9350604086013592506060860135915060808601356001600160401b03811115613e8e57600080fd5b613bb188828901613a9e565b600060208284031215613eac57600080fd5b81356001600160401b03811115613ec257600080fd5b8201610100818503121561366357600080fd5b60008060408385031215613ee857600080fd5b8235613ef381613713565b91506020830135613c0081613713565b81838237637b69647d60e01b9101908152600401919050565b600080600080600080600080610100898b031215613f3957600080fd5b885197506020808a0151975060408a0151613f5381613713565b60608b0151909750613f6481613808565b60808b0151909650613f7581613808565b60a08b0151909550613f8681613808565b60c08b0151909450613f9781613808565b60e08b01519093506001600160401b03811115613fb357600080fd5b8a01601f81018c13613fc457600080fd5b8051613fcf81613a0a565b604051613fdc82826139de565b82815260059290921b830184019184810191508e831115613ffc57600080fd5b928401925b8284101561402357835161401481613713565b82529284019290840190614001565b80955050505050509295985092959890939650565b600181811c9082168061404c57607f821691505b60208210810361406c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b8035600381900b811461373357600080fd5b6000602082840312156140ac57600080fd5b61366382614088565b634e487b7160e01b600052601160045260246000fd5b60008160030b637fffffff1981036140e5576140e56140b5565b60000392915050565b60008160030b8360030b6000821282637fffffff03821381151615614115576141156140b5565b82637fffffff1903821281161561412e5761412e6140b5565b50019392505050565b600063ffffffff808316818516808303821115614156576141566140b5565b01949350505050565b600063ffffffff8381169083168181101561417c5761417c6140b5565b039392505050565b8183526000602080850194508260005b85811015613d0d5781356141a781613713565b6001600160a01b031687529582019590820190600101614194565b8183526000602080850194508260005b85811015613d0d576141e382614088565b60030b875295820195908201906001016141d2565b60608152600061420c606083018789614184565b828103602084015261421f8186886141c2565b91505063ffffffff831660408301529695505050505050565b60408152600061424c604083018688614184565b828103602084015261425f8185876141c2565b979650505050505050565b6000816000190483118215151615614284576142846140b5565b500290565b6000826142a657634e487b7160e01b600052601260045260246000fd5b500490565b60208082526018908201527f43616c6c6572206973206e6f7420636f6e74726f6c6c65720000000000000000604082015260600190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6000600182016143d5576143d56140b5565b5060010190565b803563ffffffff8116811461373357600080fd5b8183526000602080850194508260005b85811015613d0d57813561441381613713565b6001600160a01b0316875263ffffffff61442e8385016143dc565b168388015260408083013561444281613808565b1515908801526060968701969190910190600101614400565b6000808335601e1984360301811261447257600080fd5b83016020810192503590506001600160401b0381111561449157600080fd5b8060051b360383131561392657600080fd5b803564ffffffffff8116811461373357600080fd5b803560ff8116811461373357600080fd5b60006101008235601e198436030181126144e257600080fd5b830180356001600160401b038111156144fa57600080fd5b60608102360385131561450c57600080fd5b82865261451f83870182602085016143f0565b925050506020830135602085015261453a604084018461445b565b858303604087015261454d838284614184565b9250505060608301356060850152614567608084016144a3565b64ffffffffff16608085015261457f60a08401613728565b6001600160a01b031660a085015261459960c084016144b8565b60ff1660c08501526145ad60e084016144b8565b60ff811660e0860152611763565b60018060a01b038416815282602082015260606040820152600061364160608301846144c9565b6000602082840312156145f457600080fd5b815161366381613713565b60006020828403121561461157600080fd5b613663826144a3565b60006020828403121561462c57600080fd5b613663826144b8565b6000808335601e1984360301811261464c57600080fd5b8301803591506001600160401b0382111561466657600080fd5b602001915060608102360382131561392657600080fd5b60006060828403121561468f57600080fd5b604051606081018181106001600160401b03821117156146b1576146b16139c8565b60405282356146bf81613713565b81526146cd602084016143dc565b602082015260408301356146e081613808565b60408201529392505050565b60208152600061366360208301846144c9565b60008219821115614712576147126140b5565b500190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6040815260006147b96040830185613cdd565b82810360208401526136418185613cdd565b6000602082840312156147dd57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251614841818460208701613877565b9190910192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061425f908301846138a3565b60006020828403121561489757600080fd5b815161366381613764565b600060033d111561190d5760046000803e5060005160e01c90565b600060443d10156148cb5790565b6040516003193d81016004833e81513d6001600160401b0381602484011181841117156148fa57505050505090565b82850191508151818111156149125750505050505090565b843d870101602082850101111561492c5750505050505090565b61493b602082860101876139de565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906149ba90830186613cdd565b82810360608401526149cc8186613cdd565b905082810360808401526149e081856138a3565b9897505050505050505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c61883987b64af19982dba40e83c4678c3defe6c705f39b0b84079818c13980764736f6c634300080d0033",
  deployedBytecode:
    "0x6080604052600436106101e25760003560e01c80634f1ef28611610102578063a468f1c711610095578063d0137a2c11610064578063d0137a2c146105e5578063e985e9c514610605578063f242432a1461064e578063f2fde38b1461066e57600080fd5b8063a468f1c71461052d578063a58fa7c414610567578063bd85b03914610587578063c3592b0c146105c557600080fd5b8063715018a6116100d1578063715018a6146104ce5780638129fc1c146104e35780638da5cb5b146104f8578063a22cb4651461050d57600080fd5b80634f1ef2861461046d5780634f558e791461048057806352d1902d146104a05780635c975abb146104b557600080fd5b806326b7fb481161017a5780633e5779ee116101495780633e5779ee146103e35780634038906114610403578063405b4c361461042b5780634e1273f41461044057600080fd5b806326b7fb48146103445780632a55205a146103645780632eb2c2d6146103a35780633659cfe6146103c357600080fd5b80630da9450a116101b65780630da9450a146102815780630e89341c146102a1578063175fa7ea146102ce57806322001c2b1461031d57600080fd5b8062fdd58e146101e757806301ffc9a71461021a578063047fc9aa1461024a578063059f424f1461025f575b600080fd5b3480156101f357600080fd5b50610207610202366004613738565b61068e565b6040519081526020015b60405180910390f35b34801561022657600080fd5b5061023a61023536600461377a565b610726565b6040519015158152602001610211565b34801561025657600080fd5b50610207610778565b34801561026b57600080fd5b5061027f61027a366004613797565b610789565b005b34801561028d57600080fd5b5061027f61029c366004613816565b6107bf565b3480156102ad57600080fd5b506102c16102bc36600461385e565b6109f3565b60405161021191906138cf565b3480156102da57600080fd5b506103056102e936600461385e565b600090815261016060205260409020546001600160a01b031690565b6040516001600160a01b039091168152602001610211565b34801561032957600080fd5b50610332600181565b60405160ff9091168152602001610211565b34801561035057600080fd5b5061027f61035f36600461392d565b610a87565b34801561037057600080fd5b5061038461037f3660046139a6565b6110fc565b604080516001600160a01b039093168352602083019190915201610211565b3480156103af57600080fd5b5061027f6103be366004613b11565b611278565b3480156103cf57600080fd5b5061027f6103de366004613bbe565b6114a5565b3480156103ef57600080fd5b5061027f6103fe366004613bdb565b611584565b34801561040f57600080fd5b50610305735fc8d32690cc91d4c39d9d3abcbd16989f87570781565b34801561043757600080fd5b5061027f61161c565b34801561044c57600080fd5b5061046061045b366004613c7a565b611642565b6040516102119190613d18565b61027f61047b366004613d2b565b61176b565b34801561048c57600080fd5b5061023a61049b36600461385e565b611837565b3480156104ac57600080fd5b5061020761185c565b3480156104c157600080fd5b5061012d5460ff1661023a565b3480156104da57600080fd5b5061027f611910565b3480156104ef57600080fd5b5061027f611922565b34801561050457600080fd5b50610305611a32565b34801561051957600080fd5b5061027f610528366004613d70565b611a46565b34801561053957600080fd5b5061030561054836600461385e565b600090815261016060205260409020600101546001600160a01b031690565b34801561057357600080fd5b5061027f610582366004613d9e565b611a51565b34801561059357600080fd5b506102076105a236600461385e565b60009081526101606020526040902060010154600160c81b900463ffffffff1690565b3480156105d157600080fd5b5061027f6105e0366004613e32565b611bf7565b3480156105f157600080fd5b5061027f610600366004613e9a565b611cb7565b34801561061157600080fd5b5061023a610620366004613ed5565b6001600160a01b03918216600090815260fc6020908152604080832093909416825291909152205460ff1690565b34801561065a57600080fd5b5061027f610669366004613e32565b6121a4565b34801561067a57600080fd5b5061027f610689366004613bbe565b612276565b60006001600160a01b0383166106fe5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201526930b634b21037bbb732b960b11b60648201526084015b60405180910390fd5b50600090815260fb602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061075757506001600160e01b031982166303a24d0760e21b145b8061077257506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061078461015f5490565b905090565b6107916122ec565b6107bb82826040516020016107a7929190613f03565b60405160208183030381529060405261234b565b5050565b6107c884611837565b15806107d45750606481115b156107f257604051636dac6a0960e01b815260040160405180910390fd5b600084815261016060205260409020600101546001600160a01b03161561085357600084815261016060205260409020600101546001600160a01b0316331461084e5760405163ea8e4eb560e01b815260040160405180910390fd5b61090c565b60008481526101606020526040808220548151634abf03db60e11b815291516001600160a01b039091169163957e07b691600480830192869291908290030181865afa1580156108a7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108cf9190810190613f1c565b505050505092505050806001600160a01b0316336001600160a01b03161461090a5760405163ea8e4eb560e01b815260040160405180910390fd5b505b600084815261016060205260409020600101805460ff60e81b1916600160e81b60ff841602179055811561096f576000848152610160602052604090206001908101805460ff60f01b198116600160f01b9182900460ff16909317029190911790555b82156109a757600084815261016060205260409020600101805460ff60f01b1981166002600160f01b9283900460ff16179091021790555b604080518415158152831515602082015290810182905284907f4fbf3dc0947ba89435d8dee95cfad6b2e458d3474fb5b840ce6d4a41f5e707c99060600160405180910390a250505050565b606060fd8054610a0290614038565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2e90614038565b8015610a7b5780601f10610a5057610100808354040283529160200191610a7b565b820191906000526020600020905b815481529060010190602001808311610a5e57829003601f168201915b50505050509050919050565b600085815261016060205260409020600190810154600160f01b900460021c161580610ace5750600085815261016060205260409020600101546001600160a01b03163314155b15610aec5760405163ea8e4eb560e01b815260040160405180910390fd5b828114610b0c57604051636dac6a0960e01b815260040160405180910390fd5b60008581526101606020526040808220548151634abf03db60e11b815291516001600160a01b039091169163957e07b691600480830192869291908290030181865afa158015610b60573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b889190810190613f1c565b97505050505050505060008060005b86811015610f6457610bcf888883818110610bb457610bb4614072565b9050602002016020810190610bc99190613bbe565b8a61068e565b60008a815261016060205260409020549092506001600160a01b031663d3c65754898984818110610c0257610c02614072565b9050602002016020810190610c179190613bbe565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526000602482015260448101859052606401600060405180830381600087803b158015610c6657600080fd5b505af1158015610c7a573d6000803e3d6000fd5b50505060008a815261016060205260409020546001600160a01b0316905063d3c65754898984818110610caf57610caf614072565b9050602002016020810190610cc49190613bbe565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201527356639db16ac50a89228026e42a316b30179a5376602482015260448101859052606401600060405180830381600087803b158015610d2657600080fd5b505af1158015610d3a573d6000803e3d6000fd5b5050505060005b8451811015610e1e5760008a815261016060205260409020546001600160a01b031663d3c657548a8a85818110610d7a57610d7a614072565b9050602002016020810190610d8f9190613bbe565b878481518110610da157610da1614072565b60209081029190910101516040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101869052606401600060405180830381600087803b158015610dfb57600080fd5b505af1158015610e0f573d6000803e3d6000fd5b50505050806001019050610d41565b506000868683818110610e3357610e33614072565b9050602002016020810190610e48919061409a565b60030b1315610ec357610ebe888883818110610e6657610e66614072565b9050602002016020810190610e7b9190613bbe565b8a888885818110610e8e57610e8e614072565b9050602002016020810190610ea3919061409a565b63ffffffff166040518060200160405280600081525061235e565b610f29565b610f29888883818110610ed857610ed8614072565b9050602002016020810190610eed9190613bbe565b8a888885818110610f0057610f00614072565b9050602002016020810190610f15919061409a565b610f1e906140cb565b63ffffffff1661247a565b858582818110610f3b57610f3b614072565b9050602002016020810190610f50919061409a565b610f5a90846140ee565b9250600101610b97565b5060008260030b1315610fc6576000888152610160602052604090206001018054839190601990610fa3908490600160c81b900463ffffffff16614137565b92506101000a81548163ffffffff021916908363ffffffff160217905550611029565b60008260030b121561102957610fdb826140cb565b600089815261016060205260409020600101805460199061100a908490600160c81b900463ffffffff1661415f565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b60008881526101606020526040908190208054600190910154915163e32cf85160e01b81526001600160a01b039091169163e32cf85191611082918b918b918b918b91600160c81b900463ffffffff16906004016141f8565b600060405180830381600087803b15801561109c57600080fd5b505af11580156110b0573d6000803e3d6000fd5b50505050877f50ab7f68b6b57e8f7634376d5e840c72b2b7f3e69bc52a6a12e3c777061b36b0888888886040516110ea9493929190614238565b60405180910390a25050505050505050565b60008061110884611837565b61112557604051636dac6a0960e01b815260040160405180910390fd5b600084815261016060205260408120600180820154919291600160f01b9004168103611152576032611162565b6001820154600160e81b900460ff165b60ff1690506103e8611174828761426a565b61117e9190614289565b600183810154919450600160f01b909104811c16156111b757600086815261016060205260409020546001600160a01b0316935061126f565b60008681526101606020526040808220548151634abf03db60e11b8152915183926001600160a01b039092169163957e07b691600480830192869291908290030181865afa15801561120d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112359190810190613f1c565b50505094505093505050801561126857600088815261016060205260409020600101546001600160a01b0316955061126c565b8195505b50505b50509250929050565b600083516001600160401b03811115611293576112936139c8565b6040519080825280602002602001820160405280156112bc578160200160208202803683370190505b50905060006001600160a01b0387163314806112dd57506112dd8733610620565b905060005b855181101561147f5761130e86828151811061130057611300614072565b60200260200101518961260e565b6000610160600088848151811061132757611327614072565b6020026020010151815260200190815260200160002060010160009054906101000a90046001600160a01b031690506003610160600089858151811061136f5761136f614072565b60200260200101518152602001908152602001600020600101601e9054906101000a900460ff1660ff16901c60011660ff166000141580156113b957506001600160a01b03811615155b156113eb576001600160a01b03811633146113e65760405162461bcd60e51b81526004016106f5906142ab565b611408565b826114085760405162461bcd60e51b81526004016106f5906142e2565b610160600088848151811061141f5761141f614072565b6020026020010151815260200190815260200160002060000160009054906101000a90046001600160a01b031684838151811061145e5761145e614072565b6001600160a01b0390921660209283029190910190910152506001016112e2565b5061148f87878785886001612682565b61149c8787878787612832565b50505050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036114ed5760405162461bcd60e51b81526004016106f59061432b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166115366000805160206149ed833981519152546001600160a01b031690565b6001600160a01b03161461155c5760405162461bcd60e51b81526004016106f590614377565b61156581612a20565b6040805160008082526020820190925261158191839190612a28565b50565b600082815261016060205260409020600101546001600160a01b031633146115bf5760405163ea8e4eb560e01b815260040160405180910390fd5b6000828152610160602052604080822060010180546001600160a01b0319166001600160a01b0385169081179091559051909184917f2f1bd54f0cb5e0788fcb50aa92b6c88987bd2459fee273daa38b57af0717bd649190a35050565b6116246122ec565b61012d5460ff161561163a57611638612b98565b565b611638612beb565b606081518351146116a75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016106f5565b600083516001600160401b038111156116c2576116c26139c8565b6040519080825280602002602001820160405280156116eb578160200160208202803683370190505b50905060005b84518110156117635761173685828151811061170f5761170f614072565b602002602001015185838151811061172957611729614072565b602002602001015161068e565b82828151811061174857611748614072565b602090810291909101015261175c816143c3565b90506116f1565b509392505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036117b35760405162461bcd60e51b81526004016106f59061432b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166117fc6000805160206149ed833981519152546001600160a01b031690565b6001600160a01b0316146118225760405162461bcd60e51b81526004016106f590614377565b61182b82612a20565b6107bb82826001612a28565b60009081526101606020526040902060010154600160c81b900463ffffffff16151590565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146118fc5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016106f5565b506000805160206149ed8339815191525b90565b6119186122ec565b6116386000612c29565b600054610100900460ff16158080156119425750600054600160ff909116105b8061195c5750303b15801561195c575060005460ff166001145b6119bf5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106f5565b6000805460ff1916600117905580156119e2576000805461ff0019166101001790555b6119ea612c7b565b8015611581576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b60006107846097546001600160a01b031690565b6107bb338383612caa565b8151845114611a7357604051636dac6a0960e01b815260040160405180910390fd5b60008381526101606020526040902060010154600160f01b900460ff168180611aa257506001600282901c1615155b8015611ab457506001600382901c1615155b8015611ada5750600084815261016060205260409020600101546001600160a01b031615155b15611b1e57600084815261016060205260409020600101546001600160a01b03163314611b195760405162461bcd60e51b81526004016106f5906142ab565b611b56565b6001600160a01b038616331480611b3a5750611b3a8633610620565b611b565760405162461bcd60e51b81526004016106f5906142e2565b60005b855181101561149c57611ba187878381518110611b7857611b78614072565b602002602001015187878581518110611b9357611b93614072565b602002602001015187612d8a565b611bef87878381518110611bb757611bb7614072565b602002602001015187878581518110611bd257611bd2614072565b602002602001015160405180602001604052806000815250612e99565b600101611b59565b600083815261016060205260409020600190810154600160f01b900460031c1615801590611c3f5750600083815261016060205260409020600101546001600160a01b031615155b15611c5d5760405163ea8e4eb560e01b815260040160405180910390fd5b6001600160a01b038516331480611c795750611c798533610620565b611c955760405162461bcd60e51b81526004016106f5906142e2565b611ca3858585856000612d8a565b611cb08585858585612e99565b5050505050565b611cbf612fd5565b8060200135600003611ce457604051636dac6a0960e01b815260040160405180910390fd5b6000611cf061015f5490565b6040516331d3055160e01b8152909150600090735fc8d32690cc91d4c39d9d3abcbd16989f875707906331d3055190611d31903390869088906004016145bb565b6020604051808303816000875af1158015611d50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d7491906145e2565b90506000611d8860c0850160a08601613bbe565b6001600160a01b031614611dd757611da660c0840160a08501613bbe565b60008381526101606020526040902060010180546001600160a01b0319166001600160a01b03929092169190911790555b611de760a08401608085016145ff565b64ffffffffff1615611e3b57611e0360a08401608085016145ff565b600083815261016060205260409020600101805464ffffffffff92909216600160a01b0264ffffffffff60a01b199092169190911790555b6004611e4d60e0850160c0860161461a565b60ff16901c60ff16600014611e7557604051636dac6a0960e01b815260040160405180910390fd5b611e86610100840160e0850161461a565b60ff1615611f0a576004611ea1610100850160e0860161461a565b60ff16901c60ff16600014611ec957604051636dac6a0960e01b815260040160405180910390fd5b611eda610100840160e0850161461a565b600083815261016060205260409020600101805460ff92909216600160f01b0260ff60f01b199092169190911790555b60008281526101606020908152604080832080546001600160a01b0319166001600160a01b0386161790558051606081018252838152918201839052810182905260005b611f588680614635565b905081101561203357611f6b8680614635565b82818110611f7b57611f7b614072565b905060600201803603810190611f91919061467d565b80519092506001600160a01b03163b15611fb557611fb5848360000151600161301c565b611fde826000015186846020015163ffffffff166040518060200160405280600081525061235e565b81604001511561201b5760008581526101606020908152604080832085516001600160a01b031684526002019091529020805460ff191660011790555b602082015163ffffffff169290920191600101611f4e565b50600061204660c0870160a08801613bbe565b6001600160a01b0316148061207857506002612069610100870160e0880161461a565b60ff16901c60011660ff166000145b801561208f575081158061208f5750818560200135115b8061209d575063ffffffff82115b156120bb57604051636dac6a0960e01b815260040160405180910390fd5b811561214a576000848152610160602052604090819020600101805463ffffffff60c81b1916600160c81b63ffffffff86160217905551634e9270c360e11b8152600481018390526001600160a01b03841690639d24e18690602401600060405180830381600087803b15801561213157600080fd5b505af1158015612145573d6000803e3d6000fd5b505050505b61215961015f80546001019055565b600084846001600160a01b03167f1a745e1b60f6dec9004d9002b50154d758f015c01c2b80ca2f88458bee6980118860405161219591906146ec565b60405180910390a45050505050565b600083815261016060205260409020600190810154600160f01b900460031c16158015906121ec5750600083815261016060205260409020600101546001600160a01b031615155b1561223057600083815261016060205260409020600101546001600160a01b0316331461222b5760405162461bcd60e51b81526004016106f5906142ab565b612268565b6001600160a01b03851633148061224c575061224c8533610620565b6122685760405162461bcd60e51b81526004016106f5906142e2565b611ca3858585856001612d8a565b61227e6122ec565b6001600160a01b0381166122e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106f5565b61158181612c29565b336122f5611a32565b6001600160a01b0316146116385760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106f5565b80516107bb9060fd90602084019061367a565b6001600160a01b0384166123be5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016106f5565b3360006123ca8561314f565b905060006123d78561314f565b90506123e88360008985858961319a565b600086815260fb602090815260408083206001600160a01b038b1684529091528120805487929061241a9084906146ff565b909155505060408051878152602081018790526001600160a01b03808a1692600092918716917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461149c836000898989896131bf565b6001600160a01b0383166124dc5760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016106f5565b3360006124e88461314f565b905060006124f58461314f565b90506125158387600085856040518060200160405280600081525061319a565b600085815260fb602090815260408083206001600160a01b038a168452909152902054848110156125945760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016106f5565b600086815260fb602090815260408083206001600160a01b038b81168086529184528285208a8703905582518b81529384018a90529092908816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a460408051602081019091526000905261149c565b60008281526101606020526040902060010154600160a01b900464ffffffffff164210801561266457506000828152610160602090815260408083206001600160a01b038516845260020190915290205460ff16155b156107bb57604051630934355760e11b815260040160405180910390fd5b6001600160a01b0385163b151560005b8451811015612828578381815181106126ad576126ad614072565b60200260200101516000036126d557604051636dac6a0960e01b815260040160405180910390fd5b811561274b578481815181106126ed576126ed614072565b60200260200101516001600160a01b0316876001600160a01b031603612726576040516368ee781960e11b815260040160405180910390fd5b61274b85828151811061273b5761273b614072565b602002602001015188600161301c565b84818151811061275d5761275d614072565b60200260200101516001600160a01b031663b230074a89898661278c8d8c888151811061172957611729614072565b89878151811061279e5761279e614072565b60209081029190910101516040516001600160e01b031960e088901b1681526001600160a01b03958616600482015294909316602485015290151560448401526064830152608482015260a401600060405180830381600087803b15801561280557600080fd5b505af1158015612819573d6000803e3d6000fd5b50505050806001019050612692565b5050505050505050565b81518351146128945760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016106f5565b6001600160a01b0384166128ba5760405162461bcd60e51b81526004016106f590614717565b336128c981878787878761319a565b60005b84518110156129b25760008582815181106128e9576128e9614072565b60200260200101519050600085838151811061290757612907614072565b602090810291909101810151600084815260fb835260408082206001600160a01b038e1683529093529190912054909150818110156129585760405162461bcd60e51b81526004016106f59061475c565b600083815260fb602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906129979084906146ff565b92505081905550505050806129ab906143c3565b90506128cc565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051612a029291906147a6565b60405180910390a4612a1881878787878761331a565b505050505050565b6115816122ec565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615612a6057612a5b836133d5565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015612aba575060408051601f3d908101601f19168201909252612ab7918101906147cb565b60015b612b1d5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016106f5565b6000805160206149ed8339815191528114612b8c5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016106f5565b50612a5b838383613471565b612ba061349c565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b612bf3612fd5565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612bce3390565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16612ca25760405162461bcd60e51b81526004016106f5906147e4565b6116386134e6565b816001600160a01b0316836001600160a01b031603612d1d5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016106f5565b6001600160a01b03838116600081815260fc6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b612d94838661260e565b60408051600180825281830190925260009160208083019080368337505060408051600180825281830190925292935060009291506020808301908036833750506040805160018082528183019092529293506000929150602080830190803683370190505090508583600081518110612e1057612e10614072565b6020908102919091018101919091526000878152610160909152604081205483516001600160a01b03909116918491612e4b57612e4b614072565b60200260200101906001600160a01b031690816001600160a01b0316815250508481600081518110612e7f57612e7f614072565b602002602001018181525050612828888885858589612682565b6001600160a01b038416612ebf5760405162461bcd60e51b81526004016106f590614717565b336000612ecb8561314f565b90506000612ed88561314f565b9050612ee883898985858961319a565b600086815260fb602090815260408083206001600160a01b038c16845290915290205485811015612f2b5760405162461bcd60e51b81526004016106f59061475c565b600087815260fb602090815260408083206001600160a01b038d8116855292528083208985039055908a16825281208054889290612f6a9084906146ff565b909155505060408051888152602081018890526001600160a01b03808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4612fca848a8a8a8a8a6131bf565b505050505050505050565b61012d5460ff16156116385760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016106f5565b60408051600481526024810182526020810180516001600160e01b0316635d8dc38960e01b179052905160009182916001600160a01b0386169161305f9161482f565b600060405180830381855afa9150503d806000811461309a576040519150601f19603f3d011682016040523d82523d6000602084013e61309f565b606091505b50915091508115611cb0576000818060200190518101906130c091906147cb565b600081815261016060205260409020549091506001600160a01b03808716911603612a1857604051637669b10560e11b81526004810182905284151560248201526001600160a01b0387169063ecd3620a90604401600060405180830381600087803b15801561312f57600080fd5b505af1158015613143573d6000803e3d6000fd5b50505050505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061318957613189614072565b602090810291909101015292915050565b61012d5460ff1615612a1857604051631309a56360e01b815260040160405180910390fd5b6001600160a01b0384163b15612a185760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190613203908990899088908890889060040161484b565b6020604051808303816000875af192505050801561323e575060408051601f3d908101601f1916820190925261323b91810190614885565b60015b6132ea5761324a6148a2565b806308c379a003613283575061325e6148bd565b806132695750613285565b8060405162461bcd60e51b81526004016106f591906138cf565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e2d455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016106f5565b6001600160e01b0319811663f23a6e6160e01b1461149c5760405162461bcd60e51b81526004016106f590614946565b6001600160a01b0384163b15612a185760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061335e908990899088908890889060040161498e565b6020604051808303816000875af1925050508015613399575060408051601f3d908101601f1916820190925261339691810190614885565b60015b6133a55761324a6148a2565b6001600160e01b0319811663bc197c8160e01b1461149c5760405162461bcd60e51b81526004016106f590614946565b6001600160a01b0381163b6134425760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016106f5565b6000805160206149ed83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b61347a83613516565b6000825111806134875750805b15612a5b576134968383613556565b50505050565b61012d5460ff166116385760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016106f5565b600054610100900460ff1661350d5760405162461bcd60e51b81526004016106f5906147e4565b61163833612c29565b61351f816133d5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6135be5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016106f5565b600080846001600160a01b0316846040516135d9919061482f565b600060405180830381855af49150503d8060008114613614576040519150601f19603f3d011682016040523d82523d6000602084013e613619565b606091505b50915091506136418282604051806060016040528060278152602001614a0d6027913961364a565b95945050505050565b60608315613659575081613663565b613663838361366a565b9392505050565b8151156132695781518083602001fd5b82805461368690614038565b90600052602060002090601f0160209004810192826136a857600085556136ee565b82601f106136c157805160ff19168380011785556136ee565b828001600101855582156136ee579182015b828111156136ee5782518255916020019190600101906136d3565b506136fa9291506136fe565b5090565b5b808211156136fa57600081556001016136ff565b6001600160a01b038116811461158157600080fd5b803561373381613713565b919050565b6000806040838503121561374b57600080fd5b823561375681613713565b946020939093013593505050565b6001600160e01b03198116811461158157600080fd5b60006020828403121561378c57600080fd5b813561366381613764565b600080602083850312156137aa57600080fd5b82356001600160401b03808211156137c157600080fd5b818501915085601f8301126137d557600080fd5b8135818111156137e457600080fd5b8660208285010111156137f657600080fd5b60209290920196919550909350505050565b801515811461158157600080fd5b6000806000806080858703121561382c57600080fd5b84359350602085013561383e81613808565b9250604085013561384e81613808565b9396929550929360600135925050565b60006020828403121561387057600080fd5b5035919050565b60005b8381101561389257818101518382015260200161387a565b838111156134965750506000910152565b600081518084526138bb816020860160208601613877565b601f01601f19169290920160200192915050565b60208152600061366360208301846138a3565b60008083601f8401126138f457600080fd5b5081356001600160401b0381111561390b57600080fd5b6020830191508360208260051b850101111561392657600080fd5b9250929050565b60008060008060006060868803121561394557600080fd5b8535945060208601356001600160401b038082111561396357600080fd5b61396f89838a016138e2565b9096509450604088013591508082111561398857600080fd5b50613995888289016138e2565b969995985093965092949392505050565b600080604083850312156139b957600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b0381118282101715613a0357613a036139c8565b6040525050565b60006001600160401b03821115613a2357613a236139c8565b5060051b60200190565b600082601f830112613a3e57600080fd5b81356020613a4b82613a0a565b604051613a5882826139de565b83815260059390931b8501820192828101915086841115613a7857600080fd5b8286015b84811015613a935780358352918301918301613a7c565b509695505050505050565b600082601f830112613aaf57600080fd5b81356001600160401b03811115613ac857613ac86139c8565b604051613adf601f8301601f1916602001826139de565b818152846020838601011115613af457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215613b2957600080fd5b8535613b3481613713565b94506020860135613b4481613713565b935060408601356001600160401b0380821115613b6057600080fd5b613b6c89838a01613a2d565b94506060880135915080821115613b8257600080fd5b613b8e89838a01613a2d565b93506080880135915080821115613ba457600080fd5b50613bb188828901613a9e565b9150509295509295909350565b600060208284031215613bd057600080fd5b813561366381613713565b60008060408385031215613bee57600080fd5b823591506020830135613c0081613713565b809150509250929050565b600082601f830112613c1c57600080fd5b81356020613c2982613a0a565b604051613c3682826139de565b83815260059390931b8501820192828101915086841115613c5657600080fd5b8286015b84811015613a93578035613c6d81613713565b8352918301918301613c5a565b60008060408385031215613c8d57600080fd5b82356001600160401b0380821115613ca457600080fd5b613cb086838701613c0b565b93506020850135915080821115613cc657600080fd5b50613cd385828601613a2d565b9150509250929050565b600081518084526020808501945080840160005b83811015613d0d57815187529582019590820190600101613cf1565b509495945050505050565b6020815260006136636020830184613cdd565b60008060408385031215613d3e57600080fd5b8235613d4981613713565b915060208301356001600160401b03811115613d6457600080fd5b613cd385828601613a9e565b60008060408385031215613d8357600080fd5b8235613d8e81613713565b91506020830135613c0081613808565b600080600080600060a08688031215613db657600080fd5b8535613dc181613713565b945060208601356001600160401b0380821115613ddd57600080fd5b613de989838a01613c0b565b9550604088013594506060880135915080821115613e0657600080fd5b50613e1388828901613a2d565b9250506080860135613e2481613808565b809150509295509295909350565b600080600080600060a08688031215613e4a57600080fd5b8535613e5581613713565b94506020860135613e6581613713565b9350604086013592506060860135915060808601356001600160401b03811115613e8e57600080fd5b613bb188828901613a9e565b600060208284031215613eac57600080fd5b81356001600160401b03811115613ec257600080fd5b8201610100818503121561366357600080fd5b60008060408385031215613ee857600080fd5b8235613ef381613713565b91506020830135613c0081613713565b81838237637b69647d60e01b9101908152600401919050565b600080600080600080600080610100898b031215613f3957600080fd5b885197506020808a0151975060408a0151613f5381613713565b60608b0151909750613f6481613808565b60808b0151909650613f7581613808565b60a08b0151909550613f8681613808565b60c08b0151909450613f9781613808565b60e08b01519093506001600160401b03811115613fb357600080fd5b8a01601f81018c13613fc457600080fd5b8051613fcf81613a0a565b604051613fdc82826139de565b82815260059290921b830184019184810191508e831115613ffc57600080fd5b928401925b8284101561402357835161401481613713565b82529284019290840190614001565b80955050505050509295985092959890939650565b600181811c9082168061404c57607f821691505b60208210810361406c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b8035600381900b811461373357600080fd5b6000602082840312156140ac57600080fd5b61366382614088565b634e487b7160e01b600052601160045260246000fd5b60008160030b637fffffff1981036140e5576140e56140b5565b60000392915050565b60008160030b8360030b6000821282637fffffff03821381151615614115576141156140b5565b82637fffffff1903821281161561412e5761412e6140b5565b50019392505050565b600063ffffffff808316818516808303821115614156576141566140b5565b01949350505050565b600063ffffffff8381169083168181101561417c5761417c6140b5565b039392505050565b8183526000602080850194508260005b85811015613d0d5781356141a781613713565b6001600160a01b031687529582019590820190600101614194565b8183526000602080850194508260005b85811015613d0d576141e382614088565b60030b875295820195908201906001016141d2565b60608152600061420c606083018789614184565b828103602084015261421f8186886141c2565b91505063ffffffff831660408301529695505050505050565b60408152600061424c604083018688614184565b828103602084015261425f8185876141c2565b979650505050505050565b6000816000190483118215151615614284576142846140b5565b500290565b6000826142a657634e487b7160e01b600052601260045260246000fd5b500490565b60208082526018908201527f43616c6c6572206973206e6f7420636f6e74726f6c6c65720000000000000000604082015260600190565b60208082526029908201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260408201526808185c1c1c9bdd995960ba1b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6000600182016143d5576143d56140b5565b5060010190565b803563ffffffff8116811461373357600080fd5b8183526000602080850194508260005b85811015613d0d57813561441381613713565b6001600160a01b0316875263ffffffff61442e8385016143dc565b168388015260408083013561444281613808565b1515908801526060968701969190910190600101614400565b6000808335601e1984360301811261447257600080fd5b83016020810192503590506001600160401b0381111561449157600080fd5b8060051b360383131561392657600080fd5b803564ffffffffff8116811461373357600080fd5b803560ff8116811461373357600080fd5b60006101008235601e198436030181126144e257600080fd5b830180356001600160401b038111156144fa57600080fd5b60608102360385131561450c57600080fd5b82865261451f83870182602085016143f0565b925050506020830135602085015261453a604084018461445b565b858303604087015261454d838284614184565b9250505060608301356060850152614567608084016144a3565b64ffffffffff16608085015261457f60a08401613728565b6001600160a01b031660a085015261459960c084016144b8565b60ff1660c08501526145ad60e084016144b8565b60ff811660e0860152611763565b60018060a01b038416815282602082015260606040820152600061364160608301846144c9565b6000602082840312156145f457600080fd5b815161366381613713565b60006020828403121561461157600080fd5b613663826144a3565b60006020828403121561462c57600080fd5b613663826144b8565b6000808335601e1984360301811261464c57600080fd5b8301803591506001600160401b0382111561466657600080fd5b602001915060608102360382131561392657600080fd5b60006060828403121561468f57600080fd5b604051606081018181106001600160401b03821117156146b1576146b16139c8565b60405282356146bf81613713565b81526146cd602084016143dc565b602082015260408301356146e081613808565b60408201529392505050565b60208152600061366360208301846144c9565b60008219821115614712576147126140b5565b500190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b6040815260006147b96040830185613cdd565b82810360208401526136418185613cdd565b6000602082840312156147dd57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008251614841818460208701613877565b9190910192915050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061425f908301846138a3565b60006020828403121561489757600080fd5b815161366381613764565b600060033d111561190d5760046000803e5060005160e01c90565b600060443d10156148cb5790565b6040516003193d81016004833e81513d6001600160401b0381602484011181841117156148fa57505050505090565b82850191508151818111156149125750505050505090565b843d870101602082850101111561492c5750505050505090565b61493b602082860101876139de565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b0386811682528516602082015260a0604082018190526000906149ba90830186613cdd565b82810360608401526149cc8186613cdd565b905082810360808401526149e081856138a3565b9897505050505050505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220c61883987b64af19982dba40e83c4678c3defe6c705f39b0b84079818c13980764736f6c634300080d0033",
  linkReferences: {},
  deployedLinkReferences: {}
}
