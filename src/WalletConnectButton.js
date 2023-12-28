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
            const tokenPublicKey = new PublicKey("5dPFGRmgA9PdD3YTYCDnkbfRu4MBEEUL5akev5E7PAJZ");
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
                <p>Tuna Balance: {balance}</p>
            )}
        </div>
    );
};

export default WalletConnectButton;
