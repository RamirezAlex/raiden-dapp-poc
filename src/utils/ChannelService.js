import Web3 from 'web3'
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './abi'

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
const channels = web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)

export default channels
