import { supabase } from '../config/supabase.js';

class UserService {
  /**
   * Save or update user profile
   */
  async saveProfile({ userId, riskProfile }) {
    if (!supabase) {
      return {
        userId,
        riskProfile,
        note: 'Profile saved locally (demo mode)'
      };
    }
    
    try {
      const { data, error } = await supabase
        .from('users')
        .upsert({
          user_uuid: userId,
          risk_profile: riskProfile,
          updated_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      
      return data;
    } catch (error) {
      console.error('Error saving profile:', error);
      throw error;
    }
  }
  
  /**
   * Get user profile
   */
  async getProfile(userId) {
    if (!supabase) {
      return null;
    }
    
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('user_uuid', userId)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      
      return data;
    } catch (error) {
      console.error('Error getting profile:', error);
      return null;
    }
  }
  
  /**
   * Get user's chat sessions
   */
  async getUserSessions(userId) {
    if (!supabase) {
      return [];
    }
    
    try {
      const { data, error } = await supabase
        .from('sessions')
        .select('*')
        .eq('user_id', userId)
        .order('started_at', { ascending: false });
      
      if (error) throw error;
      
      return data || [];
    } catch (error) {
      console.error('Error getting user sessions:', error);
      return [];
    }
  }
  
  /**
   * Delete a session
   */
  async deleteSession(sessionId) {
    if (!supabase) {
      return { success: true, message: 'Session deleted (demo mode)' };
    }
    
    try {
      const { error } = await supabase
        .from('sessions')
        .delete()
        .eq('session_uuid', sessionId);
      
      if (error) throw error;
      
      return { success: true, message: 'Session deleted' };
    } catch (error) {
      console.error('Error deleting session:', error);
      throw error;
    }
  }
}

export const userService = new UserService();
