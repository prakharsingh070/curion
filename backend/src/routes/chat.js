import express from 'express';
import { chatService } from '../services/chatService.js';
import { validateChatMessage } from '../middleware/validation.js';

const router = express.Router();

/**
 * POST /api/chat/message
 * Send a message and get AI response
 */
router.post('/message', validateChatMessage, async (req, res) => {
  try {
    const { message, sessionId, userId } = req.body;
    
    console.log('📨 Received chat message:', { message: message.substring(0, 50), sessionId, userId });
    
    const response = await chatService.processMessage({
      message,
      sessionId,
      userId
    });
    
    res.json({
      success: true,
      data: response
    });
  } catch (error) {
    console.error('❌ Error in chat endpoint:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to process message'
    });
  }
});

/**
 * POST /api/chat/start
 * Start a new chat session
 */
router.post('/start', async (req, res) => {
  try {
    const { userId } = req.body;
    
    const session = await chatService.createSession(userId);
    
    res.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('❌ Error starting chat:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to start chat session'
    });
  }
});

/**
 * GET /api/chat/history/:sessionId
 * Get chat history for a session
 */
router.get('/history/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    const history = await chatService.getHistory(sessionId);
    
    res.json({
      success: true,
      data: history
    });
  } catch (error) {
    console.error('❌ Error getting chat history:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get chat history'
    });
  }
});

/**
 * POST /api/chat/feedback
 * Submit feedback for a chat session
 */
router.post('/feedback', async (req, res) => {
  try {
    const { sessionId, helpful, rating, comment } = req.body;
    
    const result = await chatService.submitFeedback({
      sessionId,
      helpful,
      rating,
      comment
    });
    
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error('❌ Error submitting feedback:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to submit feedback'
    });
  }
});

export default router;
