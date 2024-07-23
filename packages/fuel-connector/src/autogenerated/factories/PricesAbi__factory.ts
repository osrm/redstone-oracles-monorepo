/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { PricesAbi, PricesAbiInterface } from "../PricesAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct RawVec",
      "components": [
        {
          "name": "ptr",
          "type": 3,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        2
      ]
    },
    {
      "typeId": 7,
      "type": "struct Vec",
      "components": [
        {
          "name": "buf",
          "type": 6,
          "typeArguments": [
            {
              "name": "",
              "type": 2,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "len",
          "type": 9,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        2
      ]
    },
    {
      "typeId": 8,
      "type": "u256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "feed_ids",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 8,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "payload",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "get_prices",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 8,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "signers",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 1,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "signer_count_threshold",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "init",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "feed_ids",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 8,
              "typeArguments": null
            }
          ]
        }
      ],
      "name": "read_prices",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 8,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "read_timestamp",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "feed_ids",
          "type": 7,
          "typeArguments": [
            {
              "name": "",
              "type": 8,
              "typeArguments": null
            }
          ]
        },
        {
          "name": "payload",
          "type": 4,
          "typeArguments": null
        }
      ],
      "name": "write_prices",
      "output": {
        "name": "",
        "type": 7,
        "typeArguments": [
          {
            "name": "",
            "type": 8,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "1515152261580153489",
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": null
      }
    },
    {
      "logId": "8961848586872524460",
      "loggedType": {
        "name": "",
        "type": 1,
        "typeArguments": null
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5e",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "60a0cdbce8a98b77f7787d61707e34e49f07e63db625fa49150884c367ce6fb5",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b1f36b0490303e8c214a62a62730609944f99bc5be24dc586b2361d992bd3853",
    "value": "0000000000000001000000000000000000000000000000000000000000000000"
  }
];

export const PricesAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): PricesAbiInterface {
    return new Interface(_abi) as unknown as PricesAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): PricesAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as PricesAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<PricesAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<PricesAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
