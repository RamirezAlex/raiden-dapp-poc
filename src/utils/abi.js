export const CONTRACT_ADDRESS = '0xe82ae5475589b828D3644e1B56546F93cD27d1a4'

export const CONTRACT_ABI = [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'partner',
        'type': 'address'
      },
      {
        'name': 'merkle_tree_leaves',
        'type': 'bytes'
      }
    ],
    'name': 'unlock',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'participant1',
        'type': 'address'
      },
      {
        'name': 'participant2',
        'type': 'address'
      },
      {
        'name': 'settle_timeout',
        'type': 'uint256'
      }
    ],
    'name': 'openChannel',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [],
    'name': 'deprecate',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'settlement_timeout_max',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'deprecation_executor',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'secret_registry',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'chain_id',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'token_network_deposit_limit',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'name': 'participants_hash_to_channel_identifier',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'channel_participant_deposit_limit',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'total_deposit',
        'type': 'uint256'
      },
      {
        'name': 'partner',
        'type': 'address'
      }
    ],
    'name': 'setTotalDeposit',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'channel_counter',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'MAX_SAFE_UINT256',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'contract_address',
        'type': 'address'
      }
    ],
    'name': 'contractExists',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'partner',
        'type': 'address'
      }
    ],
    'name': 'getParticipantsHash',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant1',
        'type': 'address'
      },
      {
        'name': 'participant2',
        'type': 'address'
      }
    ],
    'name': 'getChannelInfo',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'signature_prefix',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'partner',
        'type': 'address'
      }
    ],
    'name': 'getChannelIdentifier',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant1',
        'type': 'address'
      },
      {
        'name': 'participant1_transferred_amount',
        'type': 'uint256'
      },
      {
        'name': 'participant1_locked_amount',
        'type': 'uint256'
      },
      {
        'name': 'participant1_locksroot',
        'type': 'bytes32'
      },
      {
        'name': 'participant2',
        'type': 'address'
      },
      {
        'name': 'participant2_transferred_amount',
        'type': 'uint256'
      },
      {
        'name': 'participant2_locked_amount',
        'type': 'uint256'
      },
      {
        'name': 'participant2_locksroot',
        'type': 'bytes32'
      }
    ],
    'name': 'settleChannel',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'contract_version',
    'outputs': [
      {
        'name': '',
        'type': 'string'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'safety_deprecation_switch',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'settlement_timeout_min',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'partner',
        'type': 'address'
      },
      {
        'name': 'balance_hash',
        'type': 'bytes32'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'additional_hash',
        'type': 'bytes32'
      },
      {
        'name': 'signature',
        'type': 'bytes'
      }
    ],
    'name': 'closeChannel',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'channels',
    'outputs': [
      {
        'name': 'settle_block_number',
        'type': 'uint256'
      },
      {
        'name': 'state',
        'type': 'uint8'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'partner',
        'type': 'address'
      }
    ],
    'name': 'getChannelParticipantInfo',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'bool'
      },
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'uint256'
      },
      {
        'name': '',
        'type': 'bytes32'
      },
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'closing_participant',
        'type': 'address'
      },
      {
        'name': 'non_closing_participant',
        'type': 'address'
      },
      {
        'name': 'balance_hash',
        'type': 'bytes32'
      },
      {
        'name': 'nonce',
        'type': 'uint256'
      },
      {
        'name': 'additional_hash',
        'type': 'bytes32'
      },
      {
        'name': 'closing_signature',
        'type': 'bytes'
      },
      {
        'name': 'non_closing_signature',
        'type': 'bytes'
      }
    ],
    'name': 'updateNonClosingBalanceProof',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'token',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'name': 'participant',
        'type': 'address'
      },
      {
        'name': 'partner',
        'type': 'address'
      }
    ],
    'name': 'getUnlockIdentifier',
    'outputs': [
      {
        'name': '',
        'type': 'bytes32'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': '_token_address',
        'type': 'address'
      },
      {
        'name': '_secret_registry',
        'type': 'address'
      },
      {
        'name': '_chain_id',
        'type': 'uint256'
      },
      {
        'name': '_settlement_timeout_min',
        'type': 'uint256'
      },
      {
        'name': '_settlement_timeout_max',
        'type': 'uint256'
      },
      {
        'name': '_deprecation_executor',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'name': 'participant1',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'participant2',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'settle_timeout',
        'type': 'uint256'
      }
    ],
    'name': 'ChannelOpened',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'name': 'participant',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'total_deposit',
        'type': 'uint256'
      }
    ],
    'name': 'ChannelNewDeposit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'name': 'closing_participant',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'nonce',
        'type': 'uint256'
      }
    ],
    'name': 'ChannelClosed',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'name': 'participant',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'partner',
        'type': 'address'
      },
      {
        'indexed': false,
        'name': 'locksroot',
        'type': 'bytes32'
      },
      {
        'indexed': false,
        'name': 'unlocked_amount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'returned_tokens',
        'type': 'uint256'
      }
    ],
    'name': 'ChannelUnlocked',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'name': 'closing_participant',
        'type': 'address'
      },
      {
        'indexed': true,
        'name': 'nonce',
        'type': 'uint256'
      }
    ],
    'name': 'NonClosingBalanceProofUpdated',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': 'channel_identifier',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'participant1_amount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': 'participant2_amount',
        'type': 'uint256'
      }
    ],
    'name': 'ChannelSettled',
    'type': 'event'
  }
]
