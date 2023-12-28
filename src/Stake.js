import './css/styles.css';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import Currency from "./images/currency.svg";

const ERC20_contract_address = '0xBCb3b42D9A8Ec2EA47982418a3506231A6B67Af9';

export function ConnectMeta() {
    const { activateBrowserWallet, deactivate, account } = useEthers()
    const etherBalance = useEtherBalance(account)
    const tokenBalance = useTokenBalance(ERC20_contract_address, account)
    return (
      <div className="ConnectWallet card_dapp">
        <div>
        
          {/* 'CONNECT' Wallet Button */}
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => activateBrowserWallet()}>
            Connect
          </button>
        
          <span className="vertical-line" />

          {/* 'DISCONNECT' Wallet Button */}
          <button className="btn btn--accent2 text--small text--medium btn-top-connect" onClick={() => deactivate()}>
            Disconnect
          </button>
        
        </div>

        {/* (account) */}
        {
          account && 
            <p className="text-dapp">
              <p className="badge text--small text-dapp-header">
                Account:
                </p>
                   {account}
                </p>
        }

        {/* (balance) */}
        {
          etherBalance &&
            <p className="text-dapp">
              <p className="badge text--small text-dapp-header">
                Balance:
                </p>
                   {formatEther(tokenBalance)} TUNA
                </p>
        }

        {/* Staking Section */}        
        
        {/* 'Stake' Amount Input */}        
        <p className='text title'>
          Amount to Stake:
        </p>
        <input type='text'></input>
        
        <span className='vertical-line' />

        {/* 'Stake' Button */}        
        <button className="btn btn--accent2 text--small text--medium btn-top-burn btn-dapp-use" onClick={() => deactivate()}>
          <img src={Currency} className="burn-img" alt="fire svg" />
          Stake
        </button>
      </div>
    )
}