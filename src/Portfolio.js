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
              <h2 className={styles.subheading1}>Particle Physics Ph.D. - Data Scientist & ML Engineer</h2>
              <h3 className={styles.subheading1}>Empowering Insights and Exploring Complexity</h3>
              <p className={styles.paragraph}>
                                        I'm a data scientist who bridges the worlds of machine learning and physics. My path started with exploring the universe's tiniest building blocks as a particle physicist, which taught me how to find meaningful patterns in complex data. Now I apply that same curiosity and analytical mindset to developing machine learning solutions that can scale. Working with data feels like solving an intricate puzzle – whether I'm uncovering hidden insights or building end-to-end ML systems, I approach each challenge with the same attention to detail that drew me to physics in the first place.
              </p>
            <h3 className={styles.subheading1}>Bridging the Gap Between Theory and Application</h3>
            <p className={styles.paragraph}>
                                        My years in theoretical particle physics gave me a strong foundation in computing, statistics, and modeling. I worked with leading researchers to study physics beyond the Standard Model, including supersymmetry. The work involved creating complex simulations of particle collisions and developing machine learning algorithms that could pick out rare signals from noisy data. This experience taught me how to tackle messy, real-world problems – whether I'm analyzing particle collisions or business data, the core challenge remains the same: finding meaningful patterns in complex information and translating theoretical ideas into practical solutions.
            </p>
            <h3 className={styles.subheading1}>Driving Innovation in Data Science at Scale AI</h3>
            <p className={styles.paragraph}>
                                        At Scale AI, I am part of the Quality Analysis and training teams for the reward model in the data science domain, working within the SFT/RLHF pipeline for fine-tuning the Google Gemini multi-modal models. My role focuses on optimizing the reward model by providing expert human feedback and performing final quality audits on a diverse range of projects, including audio-to-text (ATT), image reasoning (ITT and MM), video-to-text (VTT), and point-of-view understanding (POV).
            </p>
                                        <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                        If you're seeking a dedicated data scientist/ML engineer who can bring a unique blend of skills, experience, and passion to your organization, let's connect.</p>
            </>
          )}
          {activeSection === 'about' && (
            <>
              <h1 className={styles.heading}>About Me</h1>
            
                                             <p className={styles.paragraph}>
                                         I started my career as a physicist, earning my Ph.D. in particle physics before moving into data science. My background gives me an interesting perspective on data and machine learning problems. I've always been curious about how things work at their most basic level – that's what drew me to physics in the first place. During my Ph.D., I worked with other researchers to study theoretical models beyond the Standard Model, both BSM and SUSY, to address the shortcommings of standard model phenomenologically and employing sophisticated computations. My work involved simulating particle collisions at different types of colliders (hadron and muon colliders) and using machine learning algorithms (supervised/unsupervised and generative) to identify meaningful signals from background noise.
                                             </p>
                                             <h2 className={styles.subheading1}>From Particle Physics to Data Science</h2>
                                             <p className={styles.paragraph}>
                                         My physics background has really shaped how I think about data science problems. I learned a lot of useful skills along the way – from working with complex computations to analyzing statistics and building models. I enjoy taking raw data and finding practical insights that can be put to use in the real world.
                                             </p>
                                             <h2 className={styles.subheading1}>Passion for Problem Solving</h2>
                                             <p className={styles.paragraph}>
                                         I really enjoy solving complex problems and am always looking to learn new things. I work well with different teams to find practical solutions that make a real impact. My experience in both academia and industry has taught me to think carefully about problems, explain technical concepts clearly, and adapt to new challenges as they come up.
                                             </p>
                                             <h2 className={styles.subheading1}>Continuous Learning and Growth</h2>
                                             <p className={styles.paragraph}>
                                         Data science changes quickly, so I make it a point to keep learning through online courses, conferences, and personal projects. This keeps me current with new tools and methods, allowing me to bring fresh ideas to each new challenge.
                                             </p>
                                             <h2 className={styles.subheading1}>Beyond the Data</h2>
                                             <p className={styles.paragraph}>
                                         Outside of work, I enjoy nature photography and spending time outdoors with my camera. Music is also a big part of my life – I often listen to classical pieces while working or relaxing. I am also interested in astronomy and quantum gravity, in addition to my ongoing research in particle physics.
                                             </p>
                                             <p className={styles.paragraph}>
                                         These interests help me stay balanced and often inspire new ways of thinking about problems in my data science work. Having a rich life outside of work keeps me creative and energized.
                                             </p>
                                         <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                         Feel free to browse my portfolio to learn more about my work, or get in touch if you'd like to connect. I'm always interested in discussing new projects and collaborations.
                                             </p>
            </>
          )}
           {activeSection === 'experience' && (
  <>
    <h1 className={styles.heading}>Professional Experiences</h1>
    
    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Data Science Specialist</h2>
      <h3 className={styles.companyName}>Scale AI</h3>
      <p className={styles.duration}>August 2023 - Present | Montreal, Canada</p>
      <h4 className={styles.roleTitle}>Current Role: LLM Optimization Specialist</h4>
      <ul className={styles.experienceList}>
        <li>Perform quality assessment for Google Gemini's reward model training and supervised fine-tuning (SFT) within the RLHF pipeline, ensuring optimal training data quality – data science domain.</li>
        <li>Conduct final quality audits for data integration into reward model, specializing in evaluating complex technical content for fine-tuning processes – data science domain.</li>
       <li>Support Google Gemini's model optimization by evaluating SFT and reward model outputs across multiple modalities (audio-text, video-text, image generation) – data science domain.</li>
       <li>Work at the intersection of reward modeling and fine-tuning, providing systematic feedback that enhances training data quality – data science domain.</li>
       <li> Drive quality improvements in RLHF pipeline through comprehensive evaluation of technical content in data science and math domains.</li>
      </ul>
      <h4 className={styles.roleTitle}>Past Role: Technical Content Development</h4>
      <ul className={styles.experienceList}>
        <li>Specialized in developing and evaluating sophisticated technical content for Google Gemini in the data science domain. My core responsibility involved creating in-depth technical prompts that tested understanding of advanced data science concepts, including statistical analysis, machine learning methodologies, computational and cloud approaches, and algorithms/data structures. I crafted detailed completions demonstrating proper technical reasoning and analytical thinking, ensuring responses accurately reflected complex mathematical and statistical principles. This work involved systematic assessment of conceptual validity and technical accuracy, contributing to the development of high-quality training data for the RLHF pipeline.</li>
      </ul>
    </div>

    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Quality Analyst</h2>
      <h3 className={styles.companyName}>TELUS Digital AI Data Solutions</h3>
      <p className={styles.duration}>April 2022 - August 2023 | Montreal, Canada</p>
      <ul className={styles.experienceList}>
        <li>Contributed to Google's search engine optimization through systematic evaluation and analysis of search results quality. Applied analytical methodology to assess relevance and utility of various ML system outputs, including web search results, map data, image recognition, and natural language processing. Conducted detailed evaluations of machine learning model performance across multiple modalities, providing structured feedback to improve search algorithm accuracy and user experience.</li>
        <li>Key responsibilities involved analyzing complex query-result relationships, evaluating contextual relevance, and assessing AI-driven content quality across different data types. This role developed strong analytical skills in understanding ML system behavior and output quality assessment, while working with established evaluation frameworks to ensure consistent and reliable feedback for model improvement.</li>
      </ul>
    </div>

    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Ph.D. Researcher in Computational Particle Physics</h2>
      <h3 className={styles.companyName}>Concordia University</h3>
      <p className={styles.duration}>September 2020 - July 2024 | Montreal, Canada</p>
      <ul className={styles.experienceList}>
        <li>Collaborated with Experts: Worked closely with Dr. Mariana Frank from Concordia University and Dr. Benjamin Fuks from Sorbonne University on low-energy BSM phenomenology, focusing on supersymmetric and BSM models and their real-world applicability using advanced computational techniques. This collaboration culminated in publishing two research papers in prestigious particle physics journals with an impact factor (IF) > 4.</li>
        <li>Theoretical Model Building: Developed and analyzed extended SUSY and BSM models (vector-like leptons) by modifying the SM gauge group to explore new Higgs content and potential dark matter candidates. </li>
        <li>Collider Simulations: Simulated collider traces for BSM signals, utilizing specialized software like MadGraph_aMC for process simulation, SPheno for benchmark generation given the model file, SARAH for building the SUSY and BSM model, and micrOMEGAs for calculating the relic density to recognize the DM candidate. Conducted scientific computations on the Beluga cluster for large-scale scans of the hyper-dimensional parameter space of the theorized SUSY and BSM models.</li>
        <li>Advanced ML Algorithms: Applied sophisticated ML classifiers for jet tagging, anomaly detection, and background suppression in LHC data, significantly improving signal identification and distinguishing important events from noise. These ML applications enhanced the precision and efficiency of collider simulations, enabling the identification of new physics signals amidst large datasets.</li>
        <li>Big Data Analysis & Visualization: Conducted extensive statistical analysis and visualized results using Matplotlib to distinguish discoveries from noise and finalize the analyses results.</li>
        <li>Coding Expertise: Developed and optimized Python and Bash scripts to automate complex data processing tasks, hyper-dimensional parameter space scans, enhancing efficiency in large-scale collider simulations at the collider level, and data analysis.</li>
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
