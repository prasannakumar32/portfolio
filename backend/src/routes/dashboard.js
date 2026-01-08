const express = require('express');

const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const stats = {
      totalUsers: 1250,
      activeUsers: 890,
      totalRevenue: 45678,
      monthlyGrowth: 12.5,
      recentActivity: [
        { id: 1, user: 'John Doe', action: 'Created new project', time: '2 hours ago' },
        { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '3 hours ago' },
        { id: 3, user: 'Bob Johnson', action: 'Deleted item', time: '5 hours ago' },
      ],
      chartData: [
        { month: 'Jan', revenue: 4000, users: 240 },
        { month: 'Feb', revenue: 3000, users: 139 },
        { month: 'Mar', revenue: 2000, users: 380 },
        { month: 'Apr', revenue: 2780, users: 390 },
        { month: 'May', revenue: 1890, users: 480 },
        { month: 'Jun', revenue: 2390, users: 380 },
      ]
    };
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
