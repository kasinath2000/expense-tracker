import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TransactionCard from '../components/TransactionCard';
import AddTransactionModal from '../components/AddTransactionModal';

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
);

const ExpensePage = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const res = await api.get('/transactions');
      const expense = res.data.filter((t) => t.type === 'expense');
      setExpenseList(expense);
      const sum = expense.reduce((acc, t) => acc + t.amount, 0);
      setTotal(sum);
    } catch (err) {
      console.error('Failed to fetch expenses', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (txn) => {
    if (txn.type === 'expense') {
      setExpenseList((prev) => [txn, ...prev]);
      setTotal((prev) => prev + txn.amount);
    }
  };

  const handleDelete = (id, amount, type) => {
    if (type === 'expense') {
      setExpenseList((prev) => prev.filter((t) => t._id !== id));
      setTotal((prev) => prev - amount);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-red-700">Expenses</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          + Add Expense
        </button>
      </div>

      <div className="mb-4 text-lg text-red-800 font-semibold">
        {loading ? (
          <Skeleton className="h-6 w-40" />
        ) : (
          <>Total Expense: ₹{total}</>
        )}
      </div>

      <div className="space-y-2">
        {loading
          ? Array(5)
              .fill(0)
              .map((_, i) => <Skeleton key={i} className="h-12 w-full" />)
          : expenseList.map((txn) => (
              <TransactionCard key={txn._id} txn={txn} onDelete={handleDelete} />
            ))}
      </div>

      <AddTransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
};

export default ExpensePage;
