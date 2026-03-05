import express from 'express';
import { supabase } from '../config/supabase.js';

const router = express.Router();

/**
 * GET /api/health/status
 * Health check endpoint
 */
router.get('/status', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

/**
 * GET /api/health/database
 * Check database connection
 */
router.get('/database', async (req, res) => {
  try {
    if (!supabase) {
      return res.json({
        status: 'not_configured',
        message: 'Supabase is not configured. Running in demo mode.'
      });
    }
    
    // Try a simple query to check connection
    const { error } = await supabase
      .from('sessions')
      .select('count')
      .limit(1);
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = table doesn't exist (not an error)
      throw error;
    }
    
    res.json({
      status: 'connected',
      message: 'Database connection is healthy'
    });
  } catch (error) {
    console.error('❌ Database health check failed:', error);
    res.status(503).json({
      status: 'error',
      message: error.message || 'Database connection failed'
    });
  }
});

export default router;
