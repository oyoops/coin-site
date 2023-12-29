import React, { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletConnectButton = () => {
    const [balance, setBalance] = useState(null);
    const wallet = useWallet();

    const connectWallet = async () => {
        try {
            await wallet.connect();
            fetchBalance();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchBalance = async () => {
        try {
            const connection = new Connection("https://api.mainnet-beta.solana.com/");
            const tokenPublicKey = new PublicKey(`${process.env.REACT_APP_TOKEN_ADDRESS}`);
            const accountInfo = await connection.getParsedAccountInfo(tokenPublicKey);
            setBalance(accountInfo.value.data.parsed.info.tokenAmount.uiAmount);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>
                Connect to Phantom Wallet
            </button>
            {balance !== null && (
                <p>{`${process.env.REACT_APP_TOKEN_TICKER}`} Balance: {balance}</p>
            )}
        </div>
    );
};

export default WalletConnectButton;
