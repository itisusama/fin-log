import { Finance } from './model.js'

// @desc    Get all finances
// @route   GET /api/finances
// @access  Public
export const getFinances = async (req, res) => {
  try {
    const finances = await Finance.find();
    res.status(200).json({
      success: true,
      count: finances.length,
      data: finances
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single finance
// @route   GET /api/finances/:id
// @access  Public
export const getFinance = async (req, res) => {
  try {
    const finance = await Finance.findById(req.params.id);
    
    if (!finance) {
      return res.status(404).json({
        success: false,
        error: 'Finance not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: finance
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Create new finance
// @route   POST /api/finances
// @access  Public
export const createFinance = async (req, res) => {
  try {
    const finance = await Finance.create(req.body);
    
    res.status(201).json({
      success: true,
      data: finance
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update finance
// @route   PUT /api/finances/:id
// @access  Public
export const updateFinance = async (req, res) => {
  try {
    const finance = await Finance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!finance) {
      return res.status(404).json({
        success: false,
        error: 'Finance not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: finance
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete finance
// @route   DELETE /api/finances/:id
// @access  Public
export const deleteFinance = async (req, res) => {
  try {
    const finance = await Finance.findByIdAndDelete(req.params.id);
    
    if (!finance) {
      return res.status(404).json({
        success: false,
        error: 'Finance not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Finance deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};