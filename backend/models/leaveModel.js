const mongoose = require('mongoose'); // import mongoose
//const slugify = require('slugify'); // import slugify

const LeaveSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  empID: {
    type: String,
    required: [true, 'A leave must have an employee ID'],
  },
  slug: String,
  startDate: {
    type: Date,
    required: [true, 'A leave must have a start date'],
  },
  endDate: {
    type: Date,
    required: [true, 'A leave must have an end date'],
  },
  leaveType: {
    type: String,
    required: [true, 'A leave must have a leave type'],
    enum: {
      values: [
        'Annual Leave',
        'Sick Leave',
        'Maternity Leave',
        'Paternity Leave',
        'Study Leave',
        'Unpaid Leave',
      ],
      message:
        'Leave type is either: Annual Leave, Sick Leave, Maternity Leave, Paternity Leave, Study Leave, Unpaid Leave',
    },
  },
  reason: {
    type: String,
    unqiue: true,
  },
  requestedOn: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Leave = mongoose.model('Leave-Request', LeaveSchema);
// create a model from the schema

module.exports = Leave; // export the model
