import express from 'express';
import {
  createJob,
  getAllJobs,
  updateJobStatus,
  deleteJob
} from "../controller/jobController.js";

const router = express.Router();

// Add a new job
router.post('/', createJob);

// Get all jobs (with optional filters)
router.get('/', getAllJobs);

// Update job status
router.patch('/:id', updateJobStatus);

// Delete a job
router.delete('/:id', deleteJob);

export default router;
