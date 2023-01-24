const mongoose = require('mongoose'); // import mongoose

const LeaveSchema = new mongoose.Schema({
  empID: {
    type: String,
  },
  leaveDate: {
    type: [Date],
    required: [true, 'Leave Dates are Required'],
  },
  leaveType: {
    type: String,
    required: [true, 'Please Select Leave Type'],
    enum: {
      values: [
        'Annual Leave',
        'Sick Leave',
        'Maternity Leave',
        'Paternity Leave',
        'Unpaid Leave',
      ],
      message: 'Please Select Leave Type From the List',
    },
  },
  reason: {
    type: String,
  },
  requestedOn: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  leaveStatus: {
    type: String,
    enum: {
      values: ['Pending', 'Approved', 'Rejected'],
    },
    default: 'Pending',
  },
});

const Leave = mongoose.model('Leave-Request', LeaveSchema);
// create a model from the schema

module.exports = Leave; // export the model
