
// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import ChartCard from '../components/ChartCard';
// import AddTransactionModal from '../components/AddTransactionModal';
// import RecentTransactions from '../components/RecentTransactions'; // ⬅️ NEW

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [incomeTotal, setIncomeTotal] = useState(0);
//   const [expenseTotal, setExpenseTotal] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const res = await api.get('/transactions');
//       const data = res.data;

//       setTransactions(data);

//       const income = data
//         .filter((t) => t.type === 'income')
//         .reduce((acc, t) => acc + t.amount, 0);
//       const expense = data
//         .filter((t) => t.type === 'expense')
//         .reduce((acc, t) => acc + t.amount, 0);

//       setIncomeTotal(income);
//       setExpenseTotal(expense);
//     } catch (err) {
//       console.error('Failed to fetch transactions', err);
//     }
//   };

//   const handleAdd = (newTxn) => {
//     setTransactions((prev) => [newTxn, ...prev]);
//     if (newTxn.type === 'income') {
//       setIncomeTotal((prev) => prev + newTxn.amount);
//     } else {
//       setExpenseTotal((prev) => prev + newTxn.amount);
//     }
//   };

//   const handleDelete = (id, amount, type) => {
//     setTransactions((prev) => prev.filter((t) => t._id !== id));
//     if (type === 'income') {
//       setIncomeTotal((prev) => prev - amount);
//     } else {
//       setExpenseTotal((prev) => prev - amount);
//     }
//   };

//   return (
//     <div className="p-4 space-y-6 relative bg-gray-50 min-h-screen">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-xl p-4 shadow text-center">
//           <h2 className="text-gray-600">Total Balance</h2>
//           <p className="text-2xl font-bold text-blue-600">
//             {incomeTotal - expenseTotal} ₹
//           </p>
//         </div>
//         <div className="bg-green-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-green-700">Income</h2>
//           <p className="text-xl font-bold">{incomeTotal} ₹</p>
//         </div>
//         <div className="bg-red-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-red-700">Expense</h2>
//           <p className="text-xl font-bold">{expenseTotal} ₹</p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <ChartCard
//           title="Income vs Expense"
//           type="bar"
//           income={incomeTotal}
//           expense={expenseTotal}
//         />
//         <ChartCard
//           title="Expense Distribution"
//           type="pie"
//           data={transactions}
//         />
//       </div>

//       {/* Recent Transactions */}
//       <RecentTransactions transactions={transactions} onDelete={handleDelete} />

//       {/* Add Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer"
//         >
//           + Add
//         </button>
//       </div>

//       {/* Add Modal */}
//       <AddTransactionModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onAdd={handleAdd}
//       />
//     </div>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import ChartCard from '../components/ChartCard';
// import AddTransactionModal from '../components/AddTransactionModal';
// import RecentTransactions from '../components/RecentTransactions';

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [incomeTotal, setIncomeTotal] = useState(0);
//   const [expenseTotal, setExpenseTotal] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const res = await api.get('/transactions');
//       const data = res.data;

//       setTransactions(data);

//       const income = data
//         .filter((t) => t.type === 'income')
//         .reduce((acc, t) => acc + t.amount, 0);
//       const expense = data
//         .filter((t) => t.type === 'expense')
//         .reduce((acc, t) => acc + t.amount, 0);

//       setIncomeTotal(income);
//       setExpenseTotal(expense);
//     } catch (err) {
//       console.error('Failed to fetch transactions', err);
//     }
//   };

//   const handleAdd = (newTxn) => {
//     setTransactions((prev) => [newTxn, ...prev]);
//     if (newTxn.type === 'income') {
//       setIncomeTotal((prev) => prev + newTxn.amount);
//     } else {
//       setExpenseTotal((prev) => prev + newTxn.amount);
//     }
//   };

//   const handleDelete = (id, amount, type) => {
//     setTransactions((prev) => prev.filter((t) => t._id !== id));
//     if (type === 'income') {
//       setIncomeTotal((prev) => prev - amount);
//     } else {
//       setExpenseTotal((prev) => prev - amount);
//     }
//   };

//   return (
//     <div className="p-4 space-y-4 bg-gray-50 h-screen overflow-hidden">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-xl p-4 shadow text-center">
//           <h2 className="text-gray-600">Total Balance</h2>
//           <p className="text-2xl font-bold text-blue-600">
//             {incomeTotal - expenseTotal} ₹
//           </p>
//         </div>
//         <div className="bg-green-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-green-700">Income</h2>
//           <p className="text-xl font-bold">{incomeTotal} ₹</p>
//         </div>
//         <div className="bg-red-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-red-700">Expense</h2>
//           <p className="text-xl font-bold">{expenseTotal} ₹</p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <ChartCard
//           title="Income vs Expense"
//           type="bar"
//           income={incomeTotal}
//           expense={expenseTotal}
//         />
//         <ChartCard
//           title="Expense Distribution"
//           type="pie"
//           data={transactions}
//         />
//       </div>

//       {/* Recent Transactions */}
//       <RecentTransactions transactions={transactions.slice(0, 3)} onDelete={handleDelete} />

//       {/* Add Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//         >
//           + Add
//         </button>
//       </div>

//       {/* Add Modal */}
//       <AddTransactionModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onAdd={handleAdd}
//       />
//     </div>
//   );
// };

// // export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import api from '../services/api';
// import ChartCard from '../components/ChartCard';
// import AddTransactionModal from '../components/AddTransactionModal';
// import RecentTransactions from '../components/RecentTransactions';

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [incomeTotal, setIncomeTotal] = useState(0);
//   const [expenseTotal, setExpenseTotal] = useState(0);
//   const [modalOpen, setModalOpen] = useState(false);

//   useEffect(() => {
//     fetchTransactions();
//   }, []);

//   const fetchTransactions = async () => {
//     try {
//       const res = await api.get('/transactions');
//       const data = res.data;

//       setTransactions(data);

//       const income = data
//         .filter((t) => t.type === 'income')
//         .reduce((acc, t) => acc + t.amount, 0);
//       const expense = data
//         .filter((t) => t.type === 'expense')
//         .reduce((acc, t) => acc + t.amount, 0);

//       setIncomeTotal(income);
//       setExpenseTotal(expense);
//     } catch (err) {
//       console.error('Failed to fetch transactions', err);
//     }
//   };

//   const handleAdd = (newTxn) => {
//     setTransactions((prev) => [newTxn, ...prev]);
//     if (newTxn.type === 'income') {
//       setIncomeTotal((prev) => prev + newTxn.amount);
//     } else {
//       setExpenseTotal((prev) => prev + newTxn.amount);
//     }
//   };

//   const handleDelete = (id, amount, type) => {
//     setTransactions((prev) => prev.filter((t) => t._id !== id));
//     if (type === 'income') {
//       setIncomeTotal((prev) => prev - amount);
//     } else {
//       setExpenseTotal((prev) => prev - amount);
//     }
//   };

//   return (
//     <div className="p-4 space-y-6 bg-[#bed4d9] h-screen overflow-hidden">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-xl p-4 shadow text-center">
//           <h2 className="text-gray-600">Total Balance</h2>
//           <p className="text-2xl font-bold text-blue-600">
//             {incomeTotal - expenseTotal} ₹
//           </p>
//         </div>
//         <div className="bg-green-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-green-700">Income</h2>
//           <p className="text-xl font-bold">{incomeTotal} ₹</p>
//         </div>
//         <div className="bg-red-100 rounded-xl p-4 shadow text-center">
//           <h2 className="text-red-700">Expense</h2>
//           <p className="text-xl font-bold">{expenseTotal} ₹</p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <ChartCard
//           title="Income vs Expense"
//           type="bar"
//           income={incomeTotal}
//           expense={expenseTotal}
//         />
//         <ChartCard
//           title="Expense Distribution"
//           type="pie"
//           data={transactions}
//         />
//       </div>

//       {/* Recent Transactions (limit 3) */}
//       <RecentTransactions transactions={transactions.slice(0, 6)} onDelete={handleDelete} />

//       {/* Add Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//         >
//           + Add
//         </button>
//       </div>

//       {/* Add Modal */}
//       <AddTransactionModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         onAdd={handleAdd}
//       />
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ChartCard from '../components/ChartCard';
import AddTransactionModal from '../components/AddTransactionModal';
import RecentTransactions from '../components/RecentTransactions';

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await api.get('/transactions');
      const data = res.data;

      setTransactions(data);

      const income = data
        .filter((t) => t.type === 'income')
        .reduce((acc, t) => acc + t.amount, 0);
      const expense = data
        .filter((t) => t.type === 'expense')
        .reduce((acc, t) => acc + t.amount, 0);

      setIncomeTotal(income);
      setExpenseTotal(expense);
    } catch (err) {
      console.error('Failed to fetch transactions', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (newTxn) => {
    setTransactions((prev) => [newTxn, ...prev]);
    if (newTxn.type === 'income') {
      setIncomeTotal((prev) => prev + newTxn.amount);
    } else {
      setExpenseTotal((prev) => prev + newTxn.amount);
    }
  };

  const handleDelete = (id, amount, type) => {
    setTransactions((prev) => prev.filter((t) => t._id !== id));
    if (type === 'income') {
      setIncomeTotal((prev) => prev - amount);
    } else {
      setExpenseTotal((prev) => prev - amount);
    }
  };

  return (
    <div className="p-4 space-y-6 bg-[#bed4d9] h-screen overflow-hidden">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <h2 className="text-gray-600">Total Balance</h2>
          {loading ? (
            <Skeleton className="h-8 w-24 mx-auto" />
          ) : (
            <p className="text-2xl font-bold text-blue-600">
              {incomeTotal - expenseTotal} ₹
            </p>
          )}
        </div>
        <div className="bg-green-100 rounded-xl p-4 shadow text-center">
          <h2 className="text-green-700">Income</h2>
          {loading ? (
            <Skeleton className="h-6 w-20 mx-auto" />
          ) : (
            <p className="text-xl font-bold">{incomeTotal} ₹</p>
          )}
        </div>
        <div className="bg-red-100 rounded-xl p-4 shadow text-center">
          <h2 className="text-red-700">Expense</h2>
          {loading ? (
            <Skeleton className="h-6 w-20 mx-auto" />
          ) : (
            <p className="text-xl font-bold">{expenseTotal} ₹</p>
          )}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loading ? (
          <>
            <Skeleton className="h-48 w-full rounded" />
            <Skeleton className="h-48 w-full rounded" />
          </>
        ) : (
          <>
            <ChartCard
              title="Income vs Expense"
              type="bar"
              income={incomeTotal}
              expense={expenseTotal}
            />
            <ChartCard title="Expense Distribution" type="pie" data={transactions} />
          </>
        )}
      </div>

      {/* Recent Transactions */}
      <div className="space-y-2">
        {loading ? (
          Array(3)
            .fill(0)
            .map((_, i) => <Skeleton key={i} className="h-12 w-full rounded" />)
        ) : (
          <RecentTransactions transactions={transactions.slice(0, 6)} onDelete={handleDelete} />
        )}
      </div>

      {/* Add Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          + Add
        </button>
      </div>

      {/* Add Modal */}
      <AddTransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default Dashboard;
