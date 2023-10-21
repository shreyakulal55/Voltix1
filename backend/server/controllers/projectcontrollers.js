const Project = require('../models/project');
const db = require('../db');

const getProjects = async (req, res) => {
    try {
      const projects = await Project.find({});
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  const getProjectById = async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.status(200).json(project);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// const createProject = (req, res) => {
//     const project = new Project(req.body);
//     project.save()
//       .then((savedProject) => {
//         res.status(201).json({statusCode:"200",message :'Project created successfully',savedProject});
//       })
//       .catch((err) => {
//         res.status(500).json({statusCode:"500", error: err.message });
//       });
//   };
const createProject = (req, res) => {
  // Create a new project with the userId included
  const projectData = {
    ...req.body,
    created_by: req.userId, // Include the userId from the token
  };
  const project = new Project(projectData);
  // console.log(project)
  project.save()
    .then((savedProject) => {
      res.status(201).json({ statusCode: "200", message: 'Project created successfully', savedProject});
    })
    .catch((err) => {
      res.status(500).json({ statusCode: "500", error: err.message });
    });
};


const updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({statusCode:"200",message:'updated successfuly...',updatedProject,userId: req.userId});
  } catch (err) {
    return res.status(500).json({statusCode:"500", error: err.message });
  }
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndRemove(id);
    if (!project) {
      return res.status(404).json({statusCode:"404", error: 'Project not found' });
    }
    return res.status(200).json({statusCode:"200",message:'deleted successfuly...',userId:req.userId}); // Successful deletion, no content to return
  } catch (err) {
    return res.status(500).json({statusCode:"404", error: err.message });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
