import config from './config';
import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, GraduationCap, Mail, FileText, Github, Linkedin, Brain, Phone, Award, TrendingUp, BookOpen, GitFork } from 'lucide-react';
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
          <video autoPlay loop playsInline muted className={styles.video}>
          <source src={`${config.basePath}${videoSrc}`} type="video/mp4" />
        </video>
        
        <div className={`${styles.content} ${styles.textFrame} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          {activeSection === 'home' && (
            <>
            <div className={styles.profileImageContainer}>
                 <img
                   src="/Portfolio/Profile/image.png"
                   alt="Parham Dehghani"
                   className={styles.profileImage}
                 />
               </div>
              <h1 className={styles.heading}>
                Hi, I'm <span style={{color: '#10B981'}}>Parham Dehghani</span>
              </h1>
              <h2 className={styles.subheading1}>Particle Physics Ph.D. | Data Scientist </h2>
              <h3 className={styles.subheading1}>Bridging Advanced Physics and Machine Learning for Complex Problem-Solving</h3>
              <p className={styles.paragraph}>
                                        I'm a data scientist who bridges the worlds of machine learning and particle physics. My path started with exploring the universe's tiniest building blocks as a particle physicist, which taught me how to find meaningful patterns in complex data. Now, I apply that same curiosity and analytical mindset to developing machine learning solutions that can scale. Working with data feels like solving an intricate puzzle—whether I'm uncovering hidden insights or contributing to end-to-end ML systems, I approach each challenge with the same attention to detail that drew me to the intricate world of collider physics in the first place.
              </p>
            <h3 className={styles.subheading1}>Bridging the Gap Between Theory and Application</h3>
            <p className={styles.paragraph}>
                                        My years in computational particle physics gave me a strong foundation in solving complex problems, computing, statistics, and theoretical hypotheses. I worked with leading researchers to study physics beyond the Standard Model of particle physics through a data-driven approach. The work involved creating complex simulations of particle collisions and developing machine learning algorithms that could pick out rare signals from noisy data in BSM hypotheses. This experience taught me how to tackle messy, real-world problems—whether I'm analyzing particle collisions or business data, the core challenge remains the same: finding meaningful patterns in complex data and translating hypotheses into practical solutions.
            </p>
            <h3 className={styles.subheading1}>Applied Data Science Excellence in Multi-Modal AI</h3>
            <p className={styles.paragraph}>
                                        During my time at Scale AI, I am involved in quality assurance and training initiatives for both SFT and reward models in the data science and math domains, working within the SFT/RLHF pipeline for fine-tuning cutting-edge multimodal LLMS (including Google Gemini). I evaluate reward models through expert human feedback and perform comprehensive quality audits across diverse projects, including audio-to-text (ATT), image reasoning (ITT and MM), video-to-text (VTT), and point-of-view understanding (POV).
            </p>
                                        <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                        I'm seeking opportunities to apply my unique blend of theoretical knowledge and practical ML to solve complex data challenges in research and development. Let's connect to discuss how my background in collider physics and experience with large-scale ML systems can benefit your organization.</p>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <h1 className={styles.heading}>About Me</h1>
            
                                             <p className={styles.paragraph}>
                                         I started my career as a physicist, earning my Ph.D. in particle physics before moving into data science. My background gives me an interesting perspective on data and machine learning problems. I've always been curious about how things work at their most basic level—that's what drew me to particle physics in the first place. During my Ph.D., I worked with other researchers to study hypotheses beyond the Standard Model of particle physics to address the shortcomings of accepted model of fundamental physics employing data and sophisticated computations. My expertise involved simulating particle collisions at different types of colliders (hadron and lepton colliders) and using advanced machine learning algorithms to identify meaningful insights from the simulated data considering experimental traces at LHC.
                                             </p>
                                             <h2 className={styles.subheading1}>From Particle Physics to Data Science</h2>
                                             <p className={styles.paragraph}>
                                         My particle physics background has really shaped how I think about data science problems. I learned a lot of useful skills along the way–from working with complex datasets to analyzing statistics and building predictive models and hypotheses. I enjoyed taking simulation data and finding meaningful insights that can be evaluated against BSM hypotheses.
                                             </p>
                                             <h2 className={styles.subheading1}>Passion for Problem Solving</h2>
                                             <p className={styles.paragraph}>
                                         I really enjoy solving complex problems and always seek learning new skills and dig new understanding about how things work in fundamental level. I work well with different teams to find practical solutions that make a real impact. My experience in both academia and industry has taught me to think carefully about problems, explain technical concepts clearly, and adapt to new challenges as they come up.
                                             </p>
                                             <h2 className={styles.subheading1}>Continuous Learning and Growth</h2>
                                             <p className={styles.paragraph}>
                                         Data science and ML evolve very quickly, so I make it a point to keep learning through reading advance books and articles, participating in conferences, and personal real-world projects. This keeps me current with new tools and methods, allowing me to bring fresh ideas to each new challenge.
                                             </p>
                                             <h2 className={styles.subheading1}>Beyond the Data</h2>
                                             <p className={styles.paragraph}>
                                         Outside of work, I enjoy nature photography and spending time outdoors with my camera. Music is also a big part of my life–I often listen to classical pieces while working or relaxing. I am also interested in astronomy and dark sky, in addition to my interest in foundations of particle physics.
                                             </p>
                                             <p className={styles.paragraph}>
                                         These interests help me stay balanced and often inspire thinking about problems in my data science work. Having a happy life outside of work keeps me creative and energized.
                                             </p>
                                         <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                         Feel free to browse my portfolio to learn more about my work, or get in touch if you'd like to connect. I'm always interested in discussing new opportunities in the prospect.
                                             </p>
            </>
          )}
           {activeSection === 'experience' && (
  <>
    <h1 className={styles.heading}>Professional Experiences</h1>

<div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Specialist</h2>
      <h3 className={styles.companyName}>Scale AI</h3>
      <p className={styles.duration}>2023 - Present</p>
      
      <ul className={styles.experienceList}>
        <li>Conduct quality assessment and evaluation of cutting-edge LLMs (such as Google Gemini), performing rigorous assessment of fine-tuning effectiveness across four modalities (text, image, video, voice), focusing on math and data science domains.

        </li>
        <li> Implemented production assessment for fine-tuning (SFT/RLHF) in math and data science domains, authored 200+ technical ML/DS prompts.

        </li>
       <li>Collaborated with 10+ team members in ML pipeline production, ensuring consistency and accuracy in model evaluation processes.

       </li>
       <li> Developed LaTeX automated validation pipeline for math and data science domains, integrating defined rules and relevant quality control checks in a 20+ member production team.

       </li>
      </ul>
    </div>

<div className={styles.experienceCard}>
  <h2 className={styles.subheading1}>AI Rater</h2>
  <h3 className={styles.companyName}>TELUS International AI Data Solutions</h3>
  <p className={styles.duration}>2022 - Present</p>
  
  <ul className={styles.experienceList}>
    <li>Analyze and rate web search results to enhance algorithm relevance and improve user experience.
    </li>
    <li> Assess content quality, accuracy, and cultural suitability based on detailed evaluation guidelines.</li>
    <li>Provide structured feedback on language use, tone, and local context to support AI training.
    </li>
    <li> Deliver consistent data evaluations under strict deadlines while upholding accuracy standards. </li>
  </ul>
</div>

	<div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Ph.D. Researcher in Computational Particle Physics</h2>
    
      <h3 className={styles.companyName}>Concordia University</h3>
      <p className={styles.duration}>2020 - 2025</p>
      <ul className={styles.experienceList}>
        <li>Developed and analyzed beyond Standard Model (BSM) hypotheses using sophisticated simulation tools, publishing research in high-impact journals (JHEP, EPJC, and PRD).

        </li>
        <li> Conducted statistical analysis of large-scale simulation data from ATLAS, CMS, and future lepton colliders on computation clusters, testing theoretical hypotheses against empirical observations.        </li>
        <li>Developed predictive models for jet tagging, anomaly detection, and statistical classification of rare physics events to improve BSM sensitivity and signal vs. background classification metrics in collider simulations, with emphasis on discovery potential of collider simulations.

        </li>
        <li>Automated parameter space exploration for theoretical hypotheses using Slurm, Python, and Bash, enabling large-scale statistical analysis on computing clusters.

        </li>
      </ul>
    </div>


    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Engineer</h2>
      <h3 className={styles.companyName}>PYR System</h3>
      <p className={styles.duration}>2019 - 2022</p>
      <ul className={styles.experienceList}>
        <li>Analyzed data classification patterns and conducted exploratory data analysis (EDA) to identify underrepresented classes, improving model performance through targeted data insights.

        </li>

        <li>Implemented automated data transfer pipeline integrating four existing services: extractor, validator, document indexer, and indexer.  


        </li>

		<li>Generated actionable insights from news content analysis for authenticity verification.

    </li>

		<li>Developed comprehensive Airflow monitoring and alert system, improving team response times for DAG failures and issues.

    </li>
      </ul>
    </div>

    
  </>
)}
         {activeSection === 'education' && (
  <div className={styles.educationSection}>
    <h1 className={styles.heading}>Educational Journey</h1>
    
    <div className={styles.timelineItem}>
      <div className={styles.timelineContent}>
        <h2 className={styles.institutionName}>Concordia University</h2>
        <h3 className={styles.programName}>Particle Physics PhD</h3>
        <div className={styles.programDetails}>
          <p>PhD program focused on BSM phenomenology, including:</p>
          <ul className={styles.courseList}>
            <li>Theoretical model building</li>
            <li>Use of particle physics software packages</li>
            <li>Collider phenomenology (hadronic and leptonic)</li>
            <li>Application of advanced machine learning algorithms to inspect relevant phenomenology</li>
          </ul>
        </div>
      </div>
    </div>
                    
                                            
    <div className={styles.timeline}>
      <div className={styles.timelineItem}>
        <div className={styles.timelineContent}>
          <h2 className={styles.institutionName}>Oxford Mathematics</h2>
          <h3 className={styles.programName}>Summer School, ML Representation Learning and Generative AI</h3>
          
          <div className={styles.programDetails}>
            <p>A comprehensive summer school covering advanced topics in machine learning:</p>
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
          <h2 className={styles.institutionName}>Udacity</h2>
          <h3 className={styles.programName}>Data Scientist Nanodegree Program, Artificial Intelligence</h3>
          
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
          <h3 className={styles.programName}>Inter-university graduate, Particle Physics PhD</h3>
       
          <div className={styles.programDetails}>
            <p>Completed PhD courses including:</p>
            <ul className={styles.courseList}>
              <li>Advanced Quantum Field Theory I&II</li>
              <li>Advanced Standard Model</li>
		<li>Computational Particle Physics</li>
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
          <NavItem section="education" icon={GraduationCap} />
          <NavItem section="certificates" icon={Award} />
          <NavItem section="skills" icon={Brain} />
          <NavItem section="projects" icon={GitFork} />
          <NavItem section="research" icon={BookOpen} />
        <NavItem section="contact" icon={Mail} />
      </nav>
    </div>
  );
};

export default Portfolio;
