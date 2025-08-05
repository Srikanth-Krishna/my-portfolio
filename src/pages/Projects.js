const projectsData = [
  {
    title: 'Developer Insight',
    description:
      'A simple Developer Dashboard app with functionalities such as Github stats, Pomodoro timer and task manager.',
    tech: ['React', 'MUI', 'API', 'React Context API'],
    demoLink: 'https://sk-devinsight.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/devinsight',
  },
  {
    title: 'Dashboard',
    description: 'Responsive Dashboard for eCommerce website and much more.',
    tech: ['React', 'API', 'Ant Design', 'React Router'],
    demoLink: 'https://sk-dashboardd.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/dashboard',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio to showcase my projects and skills. Built with React and styled using modern CSS.',
    tech: ['React', 'CSS', 'Vite'],
    demoLink: 'https://sk-portfolioo.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/my-portfolio',
  },
  {
    title: 'To-do List App',
    description:
      'A fully functional Todo application with local storage, filtering, and task management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://todo-c49daa.netlify.app/',
    codeLink: 'https://github.com/Srikanth-Krishna/todo-list',
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
