import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { ApiService } from '../services/api';

const UserProfile: React.FC = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    phone_number: user?.phone_number || '',
    company: user?.company || '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        phone_number: user.phone_number || '',
        company: user.company || '',
      });
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ApiService.getCurrentUser(); // This will update the profile
      setMessage('Profile updated successfully');
    } catch (error) {
      setMessage('Failed to update profile');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!user) return null;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Username"
            value={user.username}
            disabled
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            value={user.email}
            disabled
          />
          <TextField
            fullWidth
            margin="normal"
            label="Role"
            value={user.role}
            disabled
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          {message && (
            <Typography
              color={message.includes('success') ? 'success' : 'error'}
              sx={{ mt: 2 }}
            >
              {message}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Update Profile
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default UserProfile;
