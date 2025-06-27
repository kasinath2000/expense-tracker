import Transaction from '../models/Transaction.js';

// Create a new transaction (income or expense)
export const addTransaction = async (req, res) => {
  const { type, title, amount, category, description, date } = req.body;

  if (!type || !title || !amount) {
    return res.status(400).json({ message: 'Type, title, and amount are required' });
  }

  try {
    const transaction = await Transaction.create({
      user: req.user._id,
      type,
      title,
      amount,
      category,
      description,
      date: date || Date.now(),
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all transactions for logged-in user
export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id }).sort({ date: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete a transaction by ID
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

    if (transaction.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await transaction.remove();
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
