const LeaveRequest = require('../models/leaveModel');
// import leaveModel
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
// import apiFeatures
const AppError = require('../utils/appError');

exports.getAllLeaves = catchAsync(async (req, res, next) => {
  // EXECUTE QUERY
  const features = new APIFeatures(LeaveRequest.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const leaves = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: leaves.length,
    data: {
      leave: leaves,
    },
  });
});

exports.createLeave = catchAsync(async (req, res, next) => {
  const newLeave = await LeaveRequest.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      leave: newLeave,
    },
  });
});

exports.getLeave = catchAsync(async (req, res, next) => {
  const leave = await LeaveRequest.findById(req.params.id);

  if (!leave) {
    return next(new AppError('No leave found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      leave,
    },
  });
});
