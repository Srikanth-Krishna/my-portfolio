const projectsData = [
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio to showcase my projects and skills. Built with React and styled using modern CSS.',
    tech: ['React', 'CSS', 'Vite'],
    demoLink: 'https://sk-portfolioo.netlify.app/',
    codeLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'To-do List App',
    description:
      'A fully functional Todo application with local storage, filtering, and task management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://todo-c49daa.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/todo-list',
  },
  {
    title: 'Quiz App',
    description:
      'A simple quiz app using timers, effects, questions and answers.',
    tech: ['React', 'HTML', 'CSS'],
    demoLink: 'https://react-quiz-13052025.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/react-quiz',
  },
  {
    title: 'Nearby explorer',
    description:
      'A functional project which uses API and geolocation using a backend.',
    tech: ['React', 'API', 'Fetch'],
    demoLink: 'https://nearby-explorer.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/nearby-explorer',
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
