const Attendance = require('../models/attendance');

// Create new fingerprint data
exports.createAttendance = async (req, res) => {
  try {
    const { buffer } = req.file;
    const attendance = await Attendance.create({ attendance: buffer });
    res.status(201).json({ success: true, data: attendance });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Retrieve Attendance data by ID
exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const attendance = await Attendance.findByPk(id);
    if (!attendance) {
      res.status(404).json({ success: false, error: 'attendance not found' });
    } else {
      res.json({ success: true, data: attendance });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }

};
 