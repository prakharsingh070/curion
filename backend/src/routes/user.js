import express from 'express';
import { userService } from '../services/userService.js';

const router = express.Router();

/**
 * POST /api/user/profile
 * Create or update user profile and risk factors
 */
router.post('/profile', async (req, res) => {
  try {
    const { userId, riskProfile } = req.body;
    
    console.log('👤 Updating user profile:', userId);
    
    const profile = await userService.saveProfile({
      userId,
      riskProfile
    });
    
    res.json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('❌ Error saving profile:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to save profile'
    });
  }
});

/**
 * GET /api/user/profile/:userId
 * Get user profile
 */
router.get('/profile/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const profile = await userService.getProfile(userId);
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        error: 'Profile not found'
      });
    }
    
    res.json({
      success: true,
      data: profile
    });
  } catch (error) {
    console.error('❌ Error getting profile:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get profile'
    });
  }
});

/**
 * GET /api/user/sessions/:userId
 * Get user's chat sessions history
 */
router.get('/sessions/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    const sessions = await userService.getUserSessions(userId);
    
    res.json({
      success: true,
      data: sessions
    });
  } catch (error) {
    console.error('❌ Error getting user sessions:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get user sessions'
    });
  }
});

/**
 * DELETE /api/user/session/:sessionId
 * Delete a specific session
 */
router.delete('/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    await userService.deleteSession(sessionId);
    
    res.json({
      success: true,
      message: 'Session deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting session:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to delete session'
    });
  }
});

export default router;
