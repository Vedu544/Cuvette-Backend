import express from 'express';
import {
  createJob,
  getAllJobs,
  updateJobStatus,
  getJobById,
  deleteJob
} from "../controller/jobController.js";

const router = express.Router();

// Add a new job
router.post('/', createJob);

// Get all jobs (with optional filters)
router.get('/', getAllJobs);

router.get('/job/:id', getJobById)

// Update job status
router.patch('/:id', updateJobStatus);

// Delete a job
router.delete('/:id', deleteJob);

export default router;
