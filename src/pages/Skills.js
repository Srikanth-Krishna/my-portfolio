import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Git & GitHub', icon: <FaGitAlt /> },
  { name: 'NPM', icon: <FaNpm /> },
];

export default function SkillsPage() {
  return (
    <section className='skills-dark-section'>
      <h2 className='skills-dark-title'>Skills</h2>
      <div className='skills-dark-grid'>
        {skills.map((skill, index) => (
          <div className='skill-dark-card' key={index}>
            <div className='skill-icon'>{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
