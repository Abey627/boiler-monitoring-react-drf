import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Button,
  Tooltip,
  Card,
  CardContent,
  Alert,
  Stack,
  TextField,
  InputAdornment,
  CircularProgress,
  Fade,
  Avatar,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ApiService } from '../services/api';
import { User } from '../types/auth';
import { useAuth } from '../contexts/AuthContext';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { user: currentUser } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError('');
        const response = await ApiService.getCurrentUser();
        setUsers([response]); // For now, just showing the current user
      } catch (error) {
        console.error('Failed to fetch users:', error);
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (currentUser?.role !== 'admin') {
    return (
      <Box sx={{ mt: 4, p: 3 }}>
        <Alert severity="error" sx={{ maxWidth: 500, mx: 'auto' }}>
          <Typography variant="h6">
            Access Denied
          </Typography>
          <Typography>
            You need administrator privileges to access this page.
          </Typography>
        </Alert>
      </Box>
    );
  }

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin':
        return {
          bg: 'error.main',
          text: 'white'
        };
      case 'operator':
        return {
          bg: 'warning.main',
          text: 'white'
        };
      default:
        return {
          bg: 'grey.100',
          text: 'text.primary'
        };
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0} sx={{ mb: 4, bgcolor: 'background.default' }}>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
            <Box>
              <Typography variant="h4" gutterBottom color="primary">
                User Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage user accounts and their permissions
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              sx={{ px: 3, py: 1 }}
            >
              Add New User
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Paper sx={{ mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          sx={{ p: 2 }}
        />
      </Paper>

      <TableContainer 
        component={Paper} 
        sx={{ 
          position: 'relative',
          minHeight: '200px'
        }}
      >
        <Fade in={loading}>
          <Box
            sx={{
              display: loading ? 'flex' : 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </Box>
        </Fade>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                  <Typography variant="body1" color="text.secondary">
                    No users found
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredUsers.map((user) => (
                <TableRow 
                  key={user.id}
                  sx={{ 
                    '&:hover': { 
                      bgcolor: 'action.hover',
                      '& .actions': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                        {user.username.charAt(0).toUpperCase()}
                      </Avatar>
                      {user.username}
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.role}
                      sx={{
                        bgcolor: getRoleColor(user.role).bg,
                        color: getRoleColor(user.role).text,
                        fontWeight: 500,
                        textTransform: 'capitalize'
                      }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{user.company || '—'}</TableCell>
                  <TableCell>{user.phone_number || '—'}</TableCell>
                  <TableCell align="right">
                    <Box 
                      className="actions" 
                      sx={{ 
                        opacity: { xs: 1, sm: 0 },
                        transition: 'opacity 0.2s'
                      }}
                    >
                      <Tooltip title="Edit user">
                        <IconButton size="small" sx={{ mr: 1 }}>
                          <EditIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete user">
                        <IconButton size="small" color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
