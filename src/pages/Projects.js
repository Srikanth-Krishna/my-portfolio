const projectsData = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio to showcase my projects and skills. Built with React and styled using modern CSS.',
    tech: ['React', 'CSS', 'Vite'],
    demoLink: 'https://your-portfolio-link.com',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'To-do List App',
    description:
      'A fully functional Todo application with local storage, filtering, and task management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://your-todo-app.com',
    codeLink: 'https://github.com/yourusername/todo-app',
  },
  {
    title: 'Quiz App',
    description:
      'A simple quiz app using timers, effects, questions and answers.',
    tech: ['React', 'HTML', 'CSS'],
    demoLink: 'https://weather-dash.com',
    codeLink: 'https://github.com/yourusername/weather-dashboard',
  },
  {
    title: 'Nearby explorer',
    description:
      'A functional project which uses API and geolocation to pull places from a dummy backend and determine and display sorted places according to current location',
    tech: ['React', 'API', 'Fetch'],
    demoLink: 'https://weather-dash.com',
    codeLink: 'https://github.com/yourusername/weather-dashboard',
  },
];

const Projects = () => {
  return (
    <section className='projects-section'>
      <h2 className='section-title'>Projects</h2>
      <div className='projects-container'>
        {projectsData.map((project, index) => (
          <div className='project-card' key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='tech-stack'>
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <div className='project-links'>
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
