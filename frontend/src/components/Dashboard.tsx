import React from 'react';
import { Box, Typography, Paper, Avatar, Divider, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const getRoleIcon = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminPanelSettingsIcon sx={{ fontSize: 40, color: 'error.main' }} />;
      case 'operator':
        return <SupervisorAccountIcon sx={{ fontSize: 40, color: 'warning.main' }} />;
      default:
        return <AccountCircleIcon sx={{ fontSize: 40, color: 'info.main' }} />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 4,
        background: (theme) => theme.palette.background.default,
        p: 3,
        borderRadius: 2,
        boxShadow: 1
      }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            bgcolor: 'primary.main',
            mr: 3
          }}
        >
          <PersonIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Box>
          <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
            Welcome back,
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 'medium' }}>
            {user?.username}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 3,
      }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            {getRoleIcon()}
            <Typography variant="h6" color="primary">
              Role
            </Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            {user?.role}
          </Typography>
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <BusinessIcon sx={{ fontSize: 40, color: 'success.main' }} />
            <Typography variant="h6" color="primary">
              Company
            </Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5">
            {user?.company || 'Not specified'}
          </Typography>
        </Paper>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3,
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: 4
            }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <PhoneIcon sx={{ fontSize: 40, color: 'info.main' }} />
            <Typography variant="h6" color="primary">
              Contact
            </Typography>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5">
            {user?.phone_number || 'Not specified'}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
