import { Character } from './model.js'

// @desc    Get all characters
// @route   GET /api/characters
// @access  Public
export const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.status(200).json({
      success: true,
      count: characters.length,
      data: characters
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single character
// @route   GET /api/characters/:id
// @access  Public
export const getCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    
    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Character not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: character
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Create new character
// @route   POST /api/characters
// @access  Public
export const createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    
    res.status(201).json({
      success: true,
      data: character
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update character
// @route   PUT /api/characters/:id
// @access  Public
export const updateCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Character not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: character
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete character
// @route   DELETE /api/characters/:id
// @access  Public
export const deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findByIdAndDelete(req.params.id);
    
    if (!character) {
      return res.status(404).json({
        success: false,
        error: 'Character not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: "deleted succesful"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};