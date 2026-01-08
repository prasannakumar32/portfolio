import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard/stats');
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return React.createElement(Typography, null, 'Loading...');
  }

  if (!stats) {
    return React.createElement(Typography, null, 'Error loading dashboard');
  }

  return React.createElement(
    Box,
    { sx: { flexGrow: 1, p: 3 } },
    React.createElement(
      Typography,
      { variant: 'h4', gutterBottom: true },
      'Dashboard'
    ),
    React.createElement(
      Grid,
      { container: true, spacing: 3 },
      React.createElement(
        Grid,
        { item: true, xs: 12, sm: 6, md: 3 },
        React.createElement(
          Card,
          null,
          React.createElement(
            CardContent,
            null,
            React.createElement(
              Typography,
              { color: 'textSecondary', gutterBottom: true },
              'Total Users'
            ),
            React.createElement(
              Typography,
              { variant: 'h5' },
              stats.totalUsers.toLocaleString()
            )
          )
        )
      ),
      React.createElement(
        Grid,
        { item: true, xs: 12, sm: 6, md: 3 },
        React.createElement(
          Card,
          null,
          React.createElement(
            CardContent,
            null,
            React.createElement(
              Typography,
              { color: 'textSecondary', gutterBottom: true },
              'Active Users'
            ),
            React.createElement(
              Typography,
              { variant: 'h5' },
              stats.activeUsers.toLocaleString()
            )
          )
        )
      ),
      React.createElement(
        Grid,
        { item: true, xs: 12, sm: 6, md: 3 },
        React.createElement(
          Card,
          null,
          React.createElement(
            CardContent,
            null,
            React.createElement(
              Typography,
              { color: 'textSecondary', gutterBottom: true },
              'Total Revenue'
            ),
            React.createElement(
              Typography,
              { variant: 'h5' },
              `$${stats.totalRevenue.toLocaleString()}`
            )
          )
        )
      ),
      React.createElement(
        Grid,
        { item: true, xs: 12, sm: 6, md: 3 },
        React.createElement(
          Card,
          null,
          React.createElement(
            CardContent,
            null,
            React.createElement(
              Typography,
              { color: 'textSecondary', gutterBottom: true },
              'Monthly Growth'
            ),
            React.createElement(
              Typography,
              { variant: 'h5' },
              `${stats.monthlyGrowth}%`
            )
          )
        )
      ),
      React.createElement(
        Grid,
        { item: true, xs: 12, md: 8 },
        React.createElement(
          Paper,
          { sx: { p: 2 } },
          React.createElement(
            Typography,
            { variant: 'h6', gutterBottom: true },
            'Revenue & Users Overview'
          ),
          React.createElement(
            ResponsiveContainer,
            { width: '100%', height: 300 },
            React.createElement(
              LineChart,
              { data: stats.chartData },
              React.createElement(CartesianGrid, { strokeDasharray: '3 3' }),
              React.createElement(XAxis, { dataKey: 'month' }),
              React.createElement(YAxis, { yAxisId: 'left' }),
              React.createElement(YAxis, { yAxisId: 'right', orientation: 'right' }),
              React.createElement(Tooltip, null),
              React.createElement(Legend, null),
              React.createElement(Line, {
                yAxisId: 'left',
                type: 'monotone',
                dataKey: 'revenue',
                stroke: '#8884d8',
                name: 'Revenue'
              }),
              React.createElement(Line, {
                yAxisId: 'right',
                type: 'monotone',
                dataKey: 'users',
                stroke: '#82ca9d',
                name: 'Users'
              })
            )
          )
        )
      ),
      React.createElement(
        Grid,
        { item: true, xs: 12, md: 4 },
        React.createElement(
          Paper,
          { sx: { p: 2 } },
          React.createElement(
            Typography,
            { variant: 'h6', gutterBottom: true },
            'Recent Activity'
          ),
          React.createElement(
            List,
            null,
            stats.recentActivity.map((activity) =>
              React.createElement(
                ListItem,
                { key: activity.id, divider: true },
                React.createElement(ListItemText, {
                  primary: activity.user,
                  secondary: `${activity.action} - ${activity.time}`
                })
              )
            )
          )
        )
      )
    )
  );
};

export default Dashboard;
