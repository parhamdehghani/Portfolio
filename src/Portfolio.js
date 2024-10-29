import config from './config';
import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Mail, FileText, Github, Linkedin, Brain, Phone, Award, TrendingUp, BookOpen, Code } from 'lucide-react';
import styles from './Portfolio.module.css';
import SkillsSection from './SkillsSection';
import CertificatesSection from './CertificatesSection';
import ResearchPublications from './ResearchPublications';
import ProjectsSection from './ProjectsSection';

const Portfolio = ({ videoSrc, resumeLink }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(false);
    setTimeout(() => setFadeIn(true), 50);
  }, [activeSection]);

  const NavItem = ({ section, icon: Icon }) => (
    <button
      className={`${styles.navItem} ${activeSection === section ? styles.activeNavItem : ''}`}
      onClick={() => setActiveSection(section)}
    >
      <Icon size={24} />
    </button>
  );

  const ProjectCard = ({ title, description, skills }) => (
    <div className={styles.projectCard}>
      <h3 className={styles.subheading}>{title}</h3>
      <p className={styles.paragraph}>{description}</p>
      <div>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillBadge}>{skill}</span>
        ))}
      </div>
    </div>
  );

  const CertificateCard = ({ title, issuer, date, icon }) => (
    <div className={styles.certificateCard}>
      <div className={styles.certificateIcon}>{icon}</div>
      <div className={styles.certificateInfo}>
        <h3>{title}</h3>
        <p>{issuer}</p>
        <p>{date}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.contentSection}>
          <video autoPlay loop muted className={styles.video}>
          <source src={`${config.basePath}${videoSrc}`} type="video/mp4" />
        </video>
        
        <div className={`${styles.content} ${styles.textFrame} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          {activeSection === 'home' && (
            <>
              <h1 className={styles.heading}>
                Hi, I'm <span style={{color: '#10B981'}}>Parham Dehghani</span>
              </h1>
              <h2 className={styles.subheading1}>Particle Physics Ph.D. - Data Scientist & ML Engineer</h2>
              <h3 className={styles.subheading1}>Unraveling Complexity, Empowering Insights</h3>
              <p className={styles.paragraph}>
                                        As a passionate data scientist with a strong background in machine learning engineering and particle physics, I specialize in extracting valuable insights from complex datasets and developing scalable, end-to-end ML solutions. My journey from exploring the fundamental building blocks of the universe to harnessing the power of data has equipped me with a keen eye for detail, a drive for problem-solving, and a commitment to pushing the boundaries of what's possible in the world of data science.
              </p>
            <h3 className={styles.subheading1}>Bridging the Gap Between Theory and Application</h3>
            <p className={styles.paragraph}>
                                        My experience in theoretical particle physics has laid a solid foundation in scientific computing, statistical analysis, and model building. Collaborating with renowned experts, I have developed and analyzed extended SUSY and BSM models, simulated collider traces, and applied advanced ML algorithms for signal identification and background suppression. This unique background has honed my skills in transforming raw data into actionable intelligence and bridging the gap between theoretical concepts and real-world applications – a key asset in tackling complex data science challenges.
            </p>
            <h3 className={styles.subheading1}>Driving Innovation in Data Science at Scale AI</h3>
            <p className={styles.paragraph}>
                                        At Scale AI, I am part of the Quality Analysis and training teams for the reward model in the data science domain, working within the RLHF pipeline for fine-tuning the Google Gemini. My role focuses on optimizing the reward model by providing expert human feedback and performing final quality audits on a diverse range of projects, including audio-to-text (ATT), video-to-text (VTT), image-based reasoning (MM), and point-of-view understanding (POV). By ensuring the AI learns from the highest-quality data, I help drive innovation and push the boundaries of what's possible in data science.
            </p>
                                        <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                        If you're seeking a dedicated data scientist who can bring a unique blend of skills, experience, and passion to your organization, let's connect. Together, we can unravel complexity, empower insights, and drive data-driven innovation to new heights.</p>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <h1 className={styles.heading}>About Me</h1>
            
                                             <p className={styles.paragraph}>
                                               As a data scientist with a Ph.D. in particle physics, I bring a unique perspective and skill set to the world of data science and machine learning. My journey began with a deep fascination for understanding the fundamental building blocks of the universe, which led me to pursue a career in theoretical particle physics. During my doctoral research, I collaborated with renowned experts to develop and analyze extended SUSY and BSM models, simulated collider traces, and applied advanced ML algorithms for signal identification and background suppression.
                                             </p>
                                             <h2 className={styles.subheading1}>From Particle Physics to Data Science</h2>
                                             <p className={styles.paragraph}>
                                               My experience in particle physics has been instrumental in shaping my approach to data science. The skills I acquired, such as scientific computing, statistical analysis, and model building, have proven invaluable in tackling complex data science challenges. I excel at transforming raw data into actionable insights and bridging the gap between theoretical concepts and real-world applications.
                                             </p>
                                             <h2 className={styles.subheading1}>Passion for Problem Solving</h2>
                                             <p className={styles.paragraph}>
                                               What drives me is a genuine passion for problem-solving and a constant desire to learn and grow. I thrive in dynamic environments where I can collaborate with cross-functional teams to develop innovative solutions that drive business value. My ability to think critically, communicate effectively, and adapt quickly to new challenges has been key to my success in both academic and professional settings.
                                             </p>
                                             <h2 className={styles.subheading1}>Continuous Learning and Growth</h2>
                                             <p className={styles.paragraph}>
                                               I believe that the field of data science is constantly evolving, and staying ahead of the curve requires a commitment to continuous learning. I actively seek out opportunities to expand my knowledge and skills, whether through online courses, attending conferences, or engaging in side projects. By staying up-to-date with the latest techniques and technologies, I can deliver cutting-edge solutions that help organizations stay competitive in today's data-driven world.
                                             </p>
                                             <h2 className={styles.subheading1}>Beyond the Data</h2>
                                             <p className={styles.paragraph}>
                                               When I'm not immersed in data, you can find me pursuing my passion for photography in nature, capturing the beauty of the world around us. I also find great joy in listening to classical music and beautiful music pieces for hours each day, as it helps me to relax, focus, and find inspiration. My love for astronomy and quantum gravity, where gravitational effects cannot be ignored in the quantum world, fuels my curiosity and drives me to explore the mysteries of the universe.
                                             </p>
                                             <p className={styles.paragraph}>
                                               These diverse interests and experiences not only enrich my personal life but also contribute to my ability to think creatively and approach problems from unique angles. They help me maintain a healthy work-life balance, foster innovation, and bring fresh perspectives to my work as a data scientist.
                                             </p>
                                         <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                               If you'd like to learn more about my background, skills, and experience, please feel free to explore my portfolio or reach out to me directly. I'm always eager to connect with like-minded professionals and discuss potential collaborations or opportunities.
                                             </p>
            </>
          )}
           {activeSection === 'experience' && (
  <>
    <h1 className={styles.heading}>Professional Experiences</h1>
    
    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Specialist</h2>
      <h3 className={styles.companyName}>Scale AI</h3>
      <p className={styles.duration}>August 2023 - Present | Montreal, Canada</p>
      <h4 className={styles.roleTitle}>Current Role: RLHF Pipeline Quality Analysis</h4>
      <ul className={styles.experienceList}>
        <li>Lead quality audits for data integration into the Gemini RLHF pipeline, focusing on reward model optimization through human feedback loops.</li>
        <li>Specialize in data science domain model optimization within the RL pipeline, covering projects such as ATT, VTT, IR-Only, SFT, MM, POV, and text-based reasoning.</li>
        <li>Consistently maintain high internal audit scores, averaging 4.2/5.0 for technical audits.</li>
      </ul>
      <h4 className={styles.roleTitle}>Past Role: RLHF Pipeline Production</h4>
      <ul className={styles.experienceList}>
        <li>Fine-tuned Google Gemini models in math and data science using RLHF, improving model accuracy and user alignment.</li>
        <li>Evaluated and refined Gemini's technical responses, ensuring alignment with system instructions and human feedback.</li>
        <li>Contributed to multi-modal projects, enhancing Gemini's understanding of visual and text inputs across various competencies.</li>
      </ul>
    </div>

    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Agent</h2>
      <h3 className={styles.companyName}>TELUS International AI Data Solutions</h3>
      <p className={styles.duration}>April 2022 - August 2023 | Montreal, Canada</p>
      <ul className={styles.experienceList}>
        <li>Performed NLP data annotation across various competencies, consistently exceeding quality benchmarks.</li>
        <li>Maintained a satisfaction threshold of 80% or higher through continuous evaluations and improvements.</li>
      </ul>
    </div>

    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Ph.D. Researcher in Computational Particle Physics</h2>
      <h3 className={styles.companyName}>Concordia University</h3>
      <p className={styles.duration}>September 2020 - July 2024 | Montreal, Canada</p>
      <ul className={styles.experienceList}>
        <li>Developed and analyzed BSM and SUSY models, resulting in two published research papers (IF>4).</li>
        <li>Collaborated with experts from Concordia University and Sorbonne University on low-energy BSM phenomenology.</li>
        <li>Simulated collider traces using specialized software (MadGraph_aMC, SPheno, SARAH, micrOMEGAs) and conducted large-scale computations on the Beluga cluster.</li>
        <li>Applied advanced ML algorithms for jet tagging, anomaly detection, and background suppression in LHC data.</li>
        <li>Conducted big data analysis and visualization using Matplotlib and other data science tools.</li>
        <li>Automated complex data processing tasks with Python and Bash scripting, optimizing parameter space scans.</li>
      </ul>
    </div>
  </>
)}
         {activeSection === 'education' && (
  <div className={styles.educationSection}>
    <h1 className={styles.heading}>Educational Journey</h1>
    
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2 className={styles.institutionName}>Oxford Mathematics</h2>
          <h3 className={styles.programName}>Summer School, ML Representation Learning and Generative AI</h3>
          <p className={styles.duration}>July 2024</p>
          <div className={styles.programDetails}>
            <p>A comprehensive 22-hour course covering advanced topics in machine learning:</p>
            <ul className={styles.courseList}>
              <li>Large language models and agents</li>
              <li>Deep learning techniques</li>
              <li>Neural and behavioral comparisons between humans and machines</li>
              <li>Uncertainty quantification</li>
              <li>Deep learning in financial markets</li>
              <li>Representation learning and generative AI in vision</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2 className={styles.institutionName}>Concordia University</h2>
          <h3 className={styles.programName}>Particle Physics PhD</h3>
          <p className={styles.duration}>September 2020 - September 2024</p>
          <div className={styles.programDetails}>
            <p>PhD program focused on BSM phenomenology, including:</p>
            <ul className={styles.courseList}>
              <li>Theoretical model building</li>
              <li>Use of particle physics software packages</li>
              <li>Application of advanced machine learning algorithms to inspect relevant phenomenology</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2 className={styles.institutionName}>Udacity</h2>
          <h3 className={styles.programName}>Data Scientist Nanodegree Program, Artificial Intelligence</h3>
          <p className={styles.duration}>September 2022 - May 2023</p>
          <div className={styles.programDetails}>
            <p>Advanced program covering:</p>
            <ul className={styles.courseList}>
              <li>Solving data science problems (including a data visualization project)</li>
              <li>Software engineering for data scientists (Python package development on PyPI)</li>
              <li>Data engineering (Disaster Response Pipeline project with Figure Eight Company)</li>
              <li>Experiment design and recommendations (Design Recommendation Engine with IBM)</li>
              <li>Data science capstone project (Customer Segmentation Report with Arvato Financial Services)</li>
            </ul>
            <p>Required competencies: Programming, Probability and statistics, Mathematics, Data wrangling, Data visualization with matplotlib, Machine learning</p>
          </div>
        </div>
      </div>

      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2 className={styles.institutionName}>McGill University</h2>
          <h3 className={styles.programName}>Inter-university program, Particle Physics PhD</h3>
          <p className={styles.duration}>September 2020 - June 2021</p>
          <div className={styles.programDetails}>
            <p>Completed PhD courses including:</p>
            <ul className={styles.courseList}>
              <li>Advanced quantum field theory</li>
              <li>Standard model</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'certificates' && (
            <CertificatesSection />
          )}
        
          {activeSection === 'projects' && <ProjectsSection />}
          {activeSection === 'research' && <ResearchPublications />}
          {activeSection === 'contact' && (
            <>
              <h2 className={styles.subheading}>Contact Me</h2>
              <p className={styles.paragraph}>Feel free to reach out for collaborations or just a friendly hello!</p>
              <p className={styles.paragraph}>
                <Mail size={24} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />
                <a href="mailto:parham.dehghani88@gmail.com" style={{color: '#10B981'}}>parham.dehghani88@gmail.com</a>
              </p>
              <p className={styles.paragraph}>
                <Phone size={24} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />
                <a href="tel:+14382294014" style={{color: '#10B981'}}>+1 (438) 229-4014</a>
              </p>
              <p className={styles.paragraph}>
                <Linkedin size={24} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />
                <a href="https://www.linkedin.com/in/parhamdehghani" style={{color: '#10B981'}} target="_blank" rel="noopener noreferrer">linkedin.com/in/parhamdehghani</a>
              </p>
              <p className={styles.paragraph}>
                <Github size={24} style={{marginRight: '0.5rem', verticalAlign: 'middle'}} />
                <a href="https://github.com/parhamdehghani" style={{color: '#10B981'}} target="_blank" rel="noopener noreferrer">github.com/parhamdehghani</a>
              </p>
            </>
          )}
        </div>
      </div>
      <nav className={styles.horizontalNav}>
        <NavItem section="home" icon={Home} />
        <NavItem section="about" icon={User} />
        <NavItem section="experience" icon={Briefcase} />
        <NavItem section="projects" icon={Brain} />
          <NavItem section="research" icon={BookOpen} />
        <NavItem section="education" icon={GraduationCap} />
        <NavItem section="skills" icon={Code} />
        <NavItem section="certificates" icon={Award} />
        <NavItem section="contact" icon={Mail} />
      </nav>
    </div>
  );
};

export default Portfolio;
