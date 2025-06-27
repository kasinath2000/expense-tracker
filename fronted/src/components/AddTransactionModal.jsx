import React, { useState } from 'react';
import { Modal, Box, TextField, Button, MenuItem } from '@mui/material';
import api from '../services/api';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350, bgcolor: 'background.paper',
  boxShadow: 24, p: 4, borderRadius: 2
};

const AddTransactionModal = ({ open, onClose, onAdd }) => {
  const [form, setForm] = useState({
    title: '', amount: '', category: '', type: 'income'
  });

  const handleSubmit = async () => {
    try {
      const res = await api.post('/transactions', form);
      onAdd(res.data);
      setForm({ title: '', amount: '', category: '', type: 'income' });
      onClose();
    } catch (err) {
      alert('Error adding transaction');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <h2>Add Transaction</h2>
        <TextField
          fullWidth margin="dense" label="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <TextField
          fullWidth margin="dense" label="Amount" type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: +e.target.value })}
        />
        <TextField
          fullWidth margin="dense" label="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <TextField
          fullWidth margin="dense" select label="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <MenuItem value="income">Income</MenuItem>
          <MenuItem value="expense">Expense</MenuItem>
        </TextField>

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit} sx={{ mt: 2 }}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddTransactionModal;
