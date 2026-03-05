import Joi from 'joi';

/**
 * Validate chat message
 */
export const validateChatMessage = (req, res, next) => {
  const schema = Joi.object({
    message: Joi.string().required().min(1).max(2000),
    sessionId: Joi.string().uuid().optional(),
    userId: Joi.string().uuid().optional().allow(null)
  });
  
  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      error: 'Validation error',
      details: error.details[0].message
    });
  }
  
  next();
};

/**
 * Validate symptoms analysis request
 */
export const validateSymptomsAnalysis = (req, res, next) => {
  const schema = Joi.object({
    symptoms: Joi.array().items(Joi.string()).required().min(1),
    duration: Joi.number().optional().min(0),
    riskProfile: Joi.object().optional()
  });
  
  const { error } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      success: false,
      error: 'Validation error',
      details: error.details[0].message
    });
  }
  
  next();
};
