// // src/components/RecentTransactions.jsx
// import React from 'react';
// import TransactionCard from './TransactionCard';

// const RecentTransactions = ({ transactions, onDelete }) => {
//   const recent = transactions.slice(0, 3); // Show latest 6

//   return (
//     <div>
//       <h3 className="text-lg font-semibold mb-2 text-gray-800">Recent Transactions</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {recent.map((txn) => (
//           <TransactionCard key={txn._id} txn={txn} onDelete={onDelete} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentTransactions;



import React from 'react';
import TransactionCard from './TransactionCard';

const RecentTransactions = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">Recent Transactions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {transactions.map((txn) => (
          <TransactionCard key={txn._id} txn={txn} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
