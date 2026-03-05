import express from 'express';
import { symptomsService } from '../services/symptomsService.js';

const router = express.Router();

/**
 * POST /api/symptoms/analyze
 * Analyze symptoms and return possible conditions
 */
router.post('/analyze', async (req, res) => {
  try {
    const { symptoms, duration, riskProfile } = req.body;
    
    console.log('🔍 Analyzing symptoms:', symptoms);
    
    const analysis = await symptomsService.analyzeSymptoms({
      symptoms,
      duration,
      riskProfile
    });
    
    res.json({
      success: true,
      data: analysis
    });
  } catch (error) {
    console.error('❌ Error analyzing symptoms:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to analyze symptoms'
    });
  }
});

/**
 * POST /api/symptoms/emergency-check
 * Check if symptoms indicate an emergency
 */
router.post('/emergency-check', async (req, res) => {
  try {
    const { symptoms, message } = req.body;
    
    const emergencyCheck = await symptomsService.checkEmergency({
      symptoms,
      message
    });
    
    res.json({
      success: true,
      data: emergencyCheck
    });
  } catch (error) {
    console.error('❌ Error checking emergency:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to check emergency status'
    });
  }
});

/**
 * GET /api/symptoms/diseases
 * Get list of all diseases in database
 */
router.get('/diseases', async (req, res) => {
  try {
    const diseases = await symptomsService.getDiseases();
    
    res.json({
      success: true,
      data: diseases
    });
  } catch (error) {
    console.error('❌ Error getting diseases:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to get diseases'
    });
  }
});

export default router;
