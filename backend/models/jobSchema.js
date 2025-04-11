// models/Job.js

import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied',
  },
  date: {
    type: Date,
    required: true,
  },
  link: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model('Job', jobSchema);
