import { FaTrash } from 'react-icons/fa';
import api from '../services/api';

const TransactionCard = ({ txn, onDelete }) => {
  const handleDelete = async () => {
    try {
      await api.delete(`/transactions/${txn._id}`);
      onDelete(txn._id, txn.amount, txn.type);
    } catch (err) {
      alert('Failed to delete');
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100">
      <div>
        <p className="font-semibold">{txn.title}</p>
        <p className="text-xs text-gray-500">
          {txn.category} • {new Date(txn.date).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className={txn.type === 'income' ? 'text-green-600' : 'text-red-600'}>
          {txn.type === 'income' ? '+' : '-'} ₹{txn.amount}
        </p>
        <FaTrash className="cursor-pointer text-gray-400 hover:text-red-500" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default TransactionCard;
