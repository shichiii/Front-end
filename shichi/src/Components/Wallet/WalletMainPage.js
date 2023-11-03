import React, { useState } from 'react';
import Image from '../../Static/original-wallet.png';

const WalletMainpage = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = () => {
    if (transactionAmount) {
      const amount = parseFloat(transactionAmount);
      const newBalance = balance + amount;
      setBalance(newBalance);
      setTransactions([...transactions, { amount, type: amount > 0 ? 'Income' : 'Expense' }]);
      setTransactionAmount('');
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set minimum height to fill the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
    justifyContent: 'flex-start', // Align content to the top of the container
    padding: '40px', // Increased padding to the content
  };

  // const transactionHistoryStyle = {
  //   background: 'rgba(255, 255, 255, 0.9)', // Adjust background color and opacity
  //   padding: '30px', // Increased padding for the transaction history
  //   borderRadius: '12px', // Increased border radius
  //   marginTop: '30px', // Increased margin top
  // };

  // const transactionHistoryStyle2 = {
  //   background: 'rgba(155, 255, 255, 0.9)', // Adjust background color and opacity
  //   padding: '30', // Increased padding for the transaction history
  //   borderRadius: '12', // Increased border radius
  //   marginTop: '30', // Increased margin top
  // };

  return (
    <div style={backgroundStyle}>
      <div className="bg-gray-400/[0.48] p-6 rounded-lg">
        <div className="flex flex-col items-center justify-center min-h-screen p-8">

          <h1 className="text-8xl font-semibold mb-6">My Wallet</h1> {/* Increased font size */}

            <div className="flex items-center justify-between mb-6">
              <p className="text-4xl text-gray-900">Balance: ${balance.toFixed(2)}</p>

          </div>

          <div className="mb-6">

            <label className="block text-3xl font-medium mb-2 text-gray-800">Add Funds:</label>
            <div className="flex items-center">
              <input
                type="number"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
                className="p-3 w-40 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                onClick={handleAddTransaction}
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded ml-4 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add Money
              </button>
            </div>
          </div>
          <hr className="mb-8 border-black w-full" />
          <div className="bg-gray-200 p-6 rounded-lg">
            <h2 className="text-5xl font-semibold mb-6">Transaction History</h2>
            <ul className="text-black">
              {transactions.map((transaction, index) => (
                <li key={index} className={`flex items-center justify-between mb-4 ${transaction.type === 'Income' ? 'text-green-500' : 'text-red-500'}`}>
                  <p className="text-xl">{transaction.type} : ${Math.abs(transaction.amount).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletMainpage;
