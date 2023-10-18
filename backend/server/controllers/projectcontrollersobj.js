let projects = [
    // dummy data
    {
      id: 1,
      name: 'Project 1',
      description: 'Description 1',
      start_Date: '2023-10-15',
      end_Date: '2023-11-15',
      client: 'Client 1',
      status: 'Ongoing',
      team: ['Team member 1', 'Team member 2'],
      tags: ['Tag1', 'Tag2'],
      url: 'https://example.com'
    }
    // Add more dummy data as needed
  ];
  let lastProjectId = 1;
  const getProjects = (req, res) => {
    res.json(projects);
  };
  
  const getProjectById = (req, res) => {
    const { id } = req.params;
    const project = projects.find((project) => project.id === parseInt(id));
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  };
  
//   const createProject = (req, res) => {
//     const project = req.body;
//     project.id = ++lastProjectId;
//     projects.push(project);
//     res.status(201).json(project);
//   };
const createProject = (req, res) => {
    const project = {
      id: ++lastProjectId,  // Assign the ID first
      ...req.body,          // Populate the rest of the data from req.body
    };
  
    projects.push(project);
    res.status(201).json(project);
  };
  
  
//   const updateProject = (req, res) => {
//     const { id } = req.params;
//     const updatedProject = req.body;
//     projects = projects.map((project) =>
//       project.id === parseInt(id) ? { ...project, ...updatedProject } : project
//     );
//     res.json(projects.find((project) => project.id === parseInt(id)));
//   };
const updateProject = (req, res) => {
    const { id } = req.params;
    const updatedProject = req.body;
    
    // Find the index of the project with the given ID
    const projectIndex = projects.findIndex(project => project.id === parseInt(id));
  
    if (projectIndex === -1) {
      // If project doesn't exist, return a 404 Not Found response
      res.status(404).json({ error: 'Project not found' });
    } else {
      // Update the project if it exists
      projects[projectIndex] = { ...projects[projectIndex], ...updatedProject };
      res.json(projects[projectIndex]);
    }
  };
  // const deleteProject = (req, res) => {
  //   const { id } = req.params;
  
  //   // Find the index of the project with the given ID
  //   const projectIndex = projects.findIndex(project => project.id === parseInt(id));
  
  //   if (projectIndex === -1) {
  //     // If project doesn't exist, return a 404 Not Found response
  //     res.status(404).json({ error: 'Project not found' });
  //   } else {
  //     // Remove the project if it exists
  //     projects.splice(projectIndex, 1);
  //     res.status(204).json({message:'deleted successully...'}); // Respond with a 204 No Content status (indicating successful deletion)
  //   }
  // };
  const deleteProject = (req, res) => {
    const { id } = req.params;
  
    // Find the index of the project with the given ID
    const projectIndex = projects.findIndex(project => project.id === parseInt(id));
  
    if (projectIndex === -1) {
      // If project doesn't exist, return a 404 Not Found response
      res.status(404).json({ error: 'Project not found' });
    } else {
      // Remove the project if it exists
      projects.splice(projectIndex, 1);
      res.status(200).json({ message: 'Deleted successfully' }); // Respond with a 204 No Content status with a success message
    }
  };
  
  
  module.exports = {
    getProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
  };
  // Add similar controllers for other entities
  