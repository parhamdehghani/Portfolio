import React from 'react';
import { Brain, Database, Cloud, Terminal, ChartBar, Code, GitBranch, BarChart, Globe } from 'lucide-react';
import styles from './Portfolio.module.css';

const SkillCategory = ({ title, icon, skills }) => (
  <div className={styles.skillCategory}>
    <h3 className={styles.skillCategoryTitle}>
      {icon}
      {title}
    </h3>
    <div className={styles.skillGrid}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          <img src={`/skill-icons/${skill.toLowerCase().replace(/\s+/g, '-')}.png`} alt={skill} className={styles.skillIcon} />
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: <Brain className={styles.categoryIcon} />,
      skills: ['Deep Learning', 'Transformers', 'Ensemble Methods', 'Model Deployment', 'Hugging Face']
    },
    {
      title: 'Data Engineering',
      icon: <Database className={styles.categoryIcon} />,
      skills: ['SQL', 'Data Manipulation', 'Apache Spark', 'Dask']
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className={styles.categoryIcon} />,
      skills: ['AWS SageMaker', 'AWS S3', 'AWS EC2', 'Docker', 'Kubernetes']
    },
    {
      title: 'Programming',
      icon: <Terminal className={styles.categoryIcon} />,
      skills: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Flask', 'PyTorch', 'Bash', 'HTML' , 'CSS' , 'C++']
    },
    {
      title: 'Data Processing & Analysis',
      icon: <ChartBar className={styles.categoryIcon} />,
      skills: ['Feature Engineering', 'Dimensional Reduction', 'EDA', 'Data Balancing', 'Data Scaling']
    },
    {
      title: 'Algorithms & Data Structures',
      icon: <Code className={styles.categoryIcon} />,
      skills: ['Dynamic Programming', 'Arrays', 'Stacks', 'Queues', 'Heaps']
    },
    {
      title: 'Version Control & Collaboration',
      icon: <GitBranch className={styles.categoryIcon} />,
      skills: ['Git', 'GitHub', 'GitLab']
    },
    {
      title: 'Data Visualization',
      icon: <BarChart className={styles.categoryIcon} />,
      skills: ['Matplotlib', 'Seaborn', 'Tableau']
    },
    {
      title: 'Languages',
      icon: <Globe className={styles.categoryIcon} />,
      skills: ['English', 'French']
    }
  ];

  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Technical Skills</h2>
      <div className={styles.skillsContainer}>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
