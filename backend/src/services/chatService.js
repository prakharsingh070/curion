import { supabase } from '../config/supabase.js';
import { v4 as uuidv4 } from 'uuid';

class ChatService {
  /**
   * Process a chat message
   */
  async processMessage({ message, sessionId, userId = null }) {
    try {
      // Create session if not exists
      let currentSessionId = sessionId;
      if (!currentSessionId) {
        const newSession = await this.createSession(userId);
        currentSessionId = newSession.sessionId;
      }
      
      // For now, return a demo response
      // Phase 4 will integrate with OpenAI/LLM
      const aiResponse = this.generateDemoResponse(message);
      
      // Store messages in database if Supabase is configured
      if (supabase) {
        await this.saveMessage(currentSessionId, 'user', message);
        await this.saveMessage(currentSessionId, 'assistant', aiResponse);
      }
      
      return {
        sessionId: currentSessionId,
        message: aiResponse,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error in processMessage:', error);
      throw error;
    }
  }
  
  /**
   * Generate a demo response (placeholder until Phase 4)
   */
  generateDemoResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerMessage.includes('fever') || lowerMessage.includes('temperature')) {
      return "I understand you're experiencing fever. Let me ask a few questions:\n\n1. How many days have you had the fever?\n2. What is your temperature (if you've measured it)?\n3. Are you experiencing any other symptoms like cough, body pain, or headache?\n\n*Note: This is a demo response. Full AI integration coming in Phase 4.*";
    }
    
    if (lowerMessage.includes('cough')) {
      return "I see you have a cough. To help assess this better:\n\n1. Is it a dry cough or are you bringing up phlegm?\n2. How long have you had this cough?\n3. Any breathing difficulty or chest pain?\n\n*Note: This is a demo response. Full AI integration coming in Phase 4.*";
    }
    
    if (lowerMessage.includes('headache') || lowerMessage.includes('head pain')) {
      return "I'm sorry you're experiencing a headache. Let me understand better:\n\n1. Where exactly is the pain located?\n2. How severe is the pain on a scale of 1-10?\n3. Is it sudden or gradual? Any visual disturbances?\n\n*Note: This is a demo response. Full AI integration coming in Phase 4.*";
    }
    
    // Default greeting response
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm Curion, your health assistant. 👋\n\nHow are you feeling today? Please describe any symptoms you're experiencing, and I'll help you understand what might be going on.\n\n**Important:** I'm not a doctor and cannot diagnose conditions. Always consult a healthcare professional for medical advice.\n\n*Currently running in demo mode. Full AI capabilities coming in Phase 4.*";
    }
    
    // Default response
    return "Thank you for sharing that. To provide better guidance, I need to understand your symptoms better.\n\nCould you please describe:\n- What symptoms are you experiencing?\n- How long have you had them?\n- What is the severity?\n\n*Note: This is a demo response. Full AI integration with adaptive questioning will be available in Phase 4.*\n\n**Disclaimer:** This is for informational purposes only and not a medical diagnosis. Please consult a qualified healthcare professional.";
  }
  
  /**
   * Create a new chat session
   */
  async createSession(userId = null) {
    const sessionId = uuidv4();
    
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('sessions')
          .insert({
            session_uuid: sessionId,
            user_id: userId,
            started_at: new Date().toISOString(),
            symptoms_reported: [],
            questions_asked: 0,
            severity_level: 'green',
            severity_score: 0,
            emergency_detected: false,
            doctor_recommended: false
          })
          .select()
          .single();
        
        if (error) throw error;
        
        console.log('✅ Session created in database:', sessionId);
      } catch (error) {
        console.error('Error creating session in database:', error);
        // Continue anyway - session can work without database
      }
    }
    
    return {
      sessionId,
      createdAt: new Date().toISOString()
    };
  }
  
  /**
   * Save a message to the database
   */
  async saveMessage(sessionId, role, content) {
    if (!supabase) return;
    
    try {
      // In a real implementation, you'd have a messages table
      // For now, we'll just log it
      console.log(`💬 Message saved: ${role} - ${content.substring(0, 50)}...`);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  }
  
  /**
   * Get chat history for a session
   */
  async getHistory(sessionId) {
    // Placeholder - will be implemented when messages table is created
    return {
      sessionId,
      messages: [],
      note: 'History feature will be implemented with database setup'
    };
  }
  
  /**
   * Submit feedback for a session
   */
  async submitFeedback({ sessionId, helpful, rating, comment }) {
    if (!supabase) {
      return { success: true, message: 'Feedback received (demo mode)' };
    }
    
    try {
      const { error } = await supabase
        .from('sessions')
        .update({
          user_feedback: { helpful, rating, comment }
        })
        .eq('session_uuid', sessionId);
      
      if (error) throw error;
      
      return { success: true, message: 'Feedback submitted' };
    } catch (error) {
      console.error('Error submitting feedback:', error);
      throw error;
    }
  }
}

export const chatService = new ChatService();
