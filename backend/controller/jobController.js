import Job from '../models/jobSchema.js';

// CREATE a new job application
export const createJob = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;

    const newJob = new Job({
      company,
      role,
      status,
      date,
      link
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job', error });
  }
};

// READ all job applications (with optional filtering)
export const getAllJobs = async (req, res) => {
  try {
    const { status, sortByDate } = req.query;

    let query = {};
    if (status) {
      query.status = status;
    }

    let jobsQuery = Job.find(query);

    if (sortByDate === 'asc') {
      jobsQuery = jobsQuery.sort({ date: 1 });
    } else if (sortByDate === 'desc') {
      jobsQuery = jobsQuery.sort({ date: -1 });
    }

    const jobs = await jobsQuery.exec();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs', error });
  }
};

export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job', error });
  }
};


// UPDATE job status
export const updateJobStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job status', error });
  }
};

// DELETE a job application
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job', error });
  }
};
