import { supabase } from '../config/supabase.js';

class SymptomsService {
  /**
   * Analyze symptoms and return possible conditions
   */
  async analyzeSymptoms({ symptoms, duration, riskProfile }) {
    try {
      console.log('🔍 Analyzing:', { symptoms, duration, riskProfile });
      
      // Phase 4 will implement the actual probability calculation
      // For now, return demo analysis
      
      const conditions = this.getDemoConditions(symptoms);
      const severity = this.calculateSeverity(symptoms, duration, riskProfile);
      const emergency = this.checkEmergencySymptoms(symptoms);
      
      return {
        conditions,
        severity,
        emergency,
        confidence: 0.65,
        recommendDoctor: severity.level === 'yellow' || severity.level === 'red',
        disclaimer: 'This assessment is informational and not a medical diagnosis. Please consult a qualified healthcare professional.'
      };
    } catch (error) {
      console.error('Error analyzing symptoms:', error);
      throw error;
    }
  }
  
  /**
   * Get demo conditions based on symptoms
   */
  getDemoConditions(symptoms) {
    const hasFever = symptoms.some(s => s.toLowerCase().includes('fever'));
    const hasCough = symptoms.some(s => s.toLowerCase().includes('cough'));
    const hasHeadache = symptoms.some(s => s.toLowerCase().includes('headache'));
    
    const conditions = [];
    
    if (hasFever && hasCough) {
      conditions.push({
        name: 'Viral Fever',
        probability: 0.65,
        reasoning: 'Fever and cough together commonly indicate a viral infection'
      });
      conditions.push({
        name: 'Seasonal Flu',
        probability: 0.25,
        reasoning: 'Similar symptom pattern to flu'
      });
    } else if (hasFever) {
      conditions.push({
        name: 'Viral Infection',
        probability: 0.60,
        reasoning: 'Fever is a common sign of viral infection'
      });
    } else if (hasHeadache) {
      conditions.push({
        name: 'Tension Headache',
        probability: 0.55,
        reasoning: 'Common type of headache'
      });
      conditions.push({
        name: 'Migraine',
        probability: 0.30,
        reasoning: 'Possible if headache is severe'
      });
    }
    
    if (conditions.length === 0) {
      conditions.push({
        name: 'Need more information',
        probability: 0.0,
        reasoning: 'Please provide more details about your symptoms'
      });
    }
    
    return conditions;
  }
  
  /**
   * Calculate severity level
   */
  calculateSeverity(symptoms, duration, riskProfile) {
    let score = 0;
    
    // Base symptom scoring
    symptoms.forEach(symptom => {
      const lower = symptom.toLowerCase();
      if (lower.includes('severe') || lower.includes('intense')) score += 3;
      else if (lower.includes('fever')) score += 1;
      else if (lower.includes('cough')) score += 1;
      else if (lower.includes('pain')) score += 2;
    });
    
    // Duration factor
    if (duration > 3) score += 2;
    
    // Risk profile factor
    if (riskProfile?.isHighRisk) score += 2;
    
    // Determine level
    let level = 'green';
    if (score >= 7) level = 'red';
    else if (score >= 4) level = 'yellow';
    
    return {
      level,
      score,
      description: level === 'green' ? 'Mild' : level === 'yellow' ? 'Moderate' : 'Urgent'
    };
  }
  
  /**
   * Check for emergency symptoms
   */
  checkEmergencySymptoms(symptoms) {
    const redFlags = [
      'chest pain',
      'difficulty breathing',
      'breathing difficulty',
      'can\'t breathe',
      'loss of consciousness',
      'unconscious',
      'severe headache',
      'worst headache',
      'blood in vomit',
      'blood in stool',
      'confusion',
      'very high fever'
    ];
    
    const symptomsText = symptoms.join(' ').toLowerCase();
    
    for (const flag of redFlags) {
      if (symptomsText.includes(flag)) {
        return {
          isEmergency: true,
          message: 'This could be serious. Please seek immediate medical attention or call emergency services.',
          triggerSymptom: flag
        };
      }
    }
    
    return {
      isEmergency: false,
      message: null
    };
  }
  
  /**
   * Check if symptoms indicate an emergency
   */
  async checkEmergency({ symptoms, message }) {
    const combinedText = [...symptoms, message].join(' ');
    return this.checkEmergencySymptoms([combinedText]);
  }
  
  /**
   * Get list of diseases from database
   */
  async getDiseases() {
    if (!supabase) {
      return {
        count: 0,
        diseases: [],
        note: 'Database not configured. Disease data will be available after Supabase setup.'
      };
    }
    
    try {
      const { data, error } = await supabase
        .from('diseases')
        .select('*');
      
      if (error) throw error;
      
      return {
        count: data?.length || 0,
        diseases: data || []
      };
    } catch (error) {
      console.error('Error getting diseases:', error);
      return {
        count: 0,
        diseases: [],
        error: error.message
      };
    }
  }
}

export const symptomsService = new SymptomsService();
