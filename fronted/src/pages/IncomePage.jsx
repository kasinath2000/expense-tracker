import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TransactionCard from '../components/TransactionCard';
import AddTransactionModal from '../components/AddTransactionModal';

const IncomePage = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchIncome();
  }, []);

  const fetchIncome = async () => {
    try {
      const res = await api.get('/transactions');
      const income = res.data.filter((t) => t.type === 'income');
      setIncomeList(income);
      const sum = income.reduce((acc, t) => acc + t.amount, 0);
      setTotal(sum);
    } catch (err) {
      console.error('Failed to fetch income', err);
    }
  };

  const handleAdd = (txn) => {
    if (txn.type === 'income') {
      setIncomeList((prev) => [txn, ...prev]);
      setTotal((prev) => prev + txn.amount);
    }
  };

  const handleDelete = (id, amount, type) => {
    if (type === 'income') {
      setIncomeList((prev) => prev.filter((t) => t._id !== id));
      setTotal((prev) => prev - amount);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">Income</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Income
        </button>
      </div>

      <div className="mb-4 text-lg text-green-800 font-semibold">
        Total Income: ₹{total}
      </div>

      <div className="space-y-2">
        {incomeList.map((txn) => (
          <TransactionCard key={txn._id} txn={txn} onDelete={handleDelete} />
        ))}
      </div>

      <AddTransactionModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAdd} />
    </div>
  );
};

export default IncomePage;
