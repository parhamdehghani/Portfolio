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
              <h2 className={styles.subheading1}>Particle Physics Ph.D. | Data Scientist & ML Engineer</h2>
              <h3 className={styles.subheading1}>Bridging Advanced Physics and Machine Learning for Complex Problem-Solving</h3>
              <p className={styles.paragraph}>
                                        I'm a data scientist who bridges the worlds of machine learning and particle physics. My path started with exploring the universe's tiniest building blocks as a particle physicist, which taught me how to find meaningful patterns in complex data. Now I apply that same curiosity and analytical mindset to developing machine learning solutions that can scale. Working with data feels like solving an intricate puzzle – whether I'm uncovering hidden insights or building end-to-end ML systems, I approach each challenge with the same attention to detail that drew me to physics in the first place.
              </p>
            <h3 className={styles.subheading1}>Bridging the Gap Between Theory and Application</h3>
            <p className={styles.paragraph}>
                                        My years in computational particle physics gave me a strong foundation in problem-solving, computing, statistics, and theoretical modeling. I worked with leading researchers to study physics beyond the Standard Model, including supersymmetry. The work involved creating complex simulations of particle collisions and developing machine learning algorithms that could pick out rare signals from noisy data. This experience taught me how to tackle messy, real-world problems – whether I'm analyzing particle collisions or business data, the core challenge remains the same: finding meaningful patterns in complex information and translating theoretical ideas into practical solutions.
            </p>
            <h3 className={styles.subheading1}>Applied Data Science Excellence in Multi-Modal AI</h3>
            <p className={styles.paragraph}>
                                        During my time at Scale AI, I drove quality assurance and training initiatives for reward models in the data science domain, working within the SFT/RLHF pipeline for fine-tuning Google Gemini multi-modal models. I optimized reward models through expert human feedback and performed comprehensive quality audits across diverse projects, including audio-to-text (ATT), image reasoning (ITT and MM), video-to-text (VTT), and point-of-view understanding (POV).
            </p>
                                        <p style={{color: '#10B981', fontSize: '20px', fontWeight: 'bold'}}>
                                        I'm seeking opportunities to apply my unique blend of theoretical physics and practical ML engineering to solve complex data challenges. Let's connect to discuss how my background in particle physics and experience with large-scale ML systems can benefit your organization.</p>
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
                                         My particle physics background has really shaped how I think about data science problems. I learned a lot of useful skills along the way – from working with complex computations to analyzing statistics and building models. I enjoy taking raw data and finding practical insights that can be put to use in the real world.
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
      <h2 className={styles.subheading1}>SFT/RLHF ML Specialist</h2>
      <h3 className={styles.companyName}>Scale AI</h3>
      <p className={styles.duration}>August 2023 - January 2025 | Montreal, Quebec, Canada</p>
      
      <ul className={styles.experienceList}>
        <li>Led quality assessment of Google Gemini's SFT/RLHF pipeline across 5 modalities (text, image, video, voice, POV), achieving 18% performance improvement in data science domain by implementing systematic evaluation protocols, developing modality-specific benchmarks, and establishing comprehensive quality metrics to measure model understanding and generation capabilities across different types of content.</li>
        <li> Led quality assessment of Google Gemini's SFT/RLHF pipeline across 5 modalities (text, image, video, voice, POV), achieving 18% performance improvement in data science domain by implementing systematic evaluation protocols, developing modality-specific benchmarks, and establishing comprehensive quality metrics to measure model understanding and generation capabilities across different types of content.</li>
       <li>Led quality assessment of Google Gemini's SFT/RLHF pipeline across 5 modalities (text, image, video, voice, POV), achieving 18% performance improvement in data science domain by implementing systematic evaluation protocols, developing modality-specific benchmarks, and establishing comprehensive quality metrics to measure model understanding and generation capabilities across different types of content.</li>
       <li>Led quality assessment of Google Gemini's SFT/RLHF pipeline across 5 modalities (text, image, video, voice, POV), achieving 18% performance improvement in data science domain by implementing systematic evaluation protocols, developing modality-specific benchmarks, and establishing comprehensive quality metrics to measure model understanding and generation capabilities across different types of content.</li>
      </ul>
    </div>

	<div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>ML Research Associate</h2>
    
      <h3 className={styles.companyName}>CIPS</h3>
      <p className={styles.duration}>September 2020 - January 2025 | Montreal, Canada</p>
      <ul className={styles.experienceList}>
        <li>Developed and deployed classification models (XGBoost, DNN) to identify dark matter candidates in BLRSM SUSY model, leveraging Beluga cluster for processing 500K+ collision events, optimizing model hyperparameters through grid search for feature importance analysis, implementing automated data preprocessing pipelines for efficient parameter space exploration across 15+ dimensions, and achieving 82% accuracy in dark matter candidate classification while reducing false positive rate to under 5%.</li>
        <li> Implemented diffusion-based generative models as a replacement for Pythia event generator, achieving 90% reduction in hadronization simulation time for BSM phenomenology by designing custom neural architectures with physics-informed loss functions, optimizing the diffusion process through advanced scheduling techniques, and validating generated particle distributions against theoretical predictions with 95% correlation accuracy. Processed over 1M training samples to ensure robust model performance across different physics scenarios.  </li>
        <li>Collider Simulations: Simulate collider traces for BSM signals, utilizing specialized software like MadGraph_aMC for process simulation, SPheno for benchmark generation given the model file, SARAH for building the SUSY and BSM model, and micrOMEGAs for calculating the relic density to recognize the DM candidate. Scientific computations on the Beluga cluster for large-scale scans of the hyper-dimensional parameter space of the theorized SUSY and BSM models.</li>
        <li>Engineered ML solutions employing boosted decision trees to improve dilepton resonance detection via massive Majorana neutrinos in collaboration with ATLAS and Sorbonne University, achieving 23% lower upper limits on muon-neutrino mixing coefficient compared to existing limits through sophisticated feature engineering of 20+ collision parameters, implementing ensemble methods with cross-validation, and developing custom evaluation metrics aligned with physics significance criteria. Coordinated with international team of 15+ physicists to validate results and prepare documentation for publication.</li>
        <li>Coding Expertise: Develop and optimize Python and Bash scripts to automate complex data processing tasks, hyper-dimensional parameter space scans, enhancing efficiency in large-scale collider simulations at the collider level, and data analysis.</li>
      </ul>
    </div>

    

    <div className={styles.experienceCard}>
      <h2 className={styles.subheading1}>Machine Learning Quality Analyst</h2>
      <h3 className={styles.companyName}>TELUS Digital AI Data Solutions</h3>
      <p className={styles.duration}>April 2022 - Present | San Francisco, California, USA (Freelance)</p>
      <ul className={styles.experienceList}>
        <li>Contributing to Google's search engine optimization by systematically evaluating and analyzing search results quality across different aspects of the platform. This involved working with comprehensive assessment frameworks and methodologies to measure result accuracy and relevance.</li>

        <li>Leading quality assessment of machine learning model performance, providing structured feedback to improve search algorithm accuracy and user experience across multiple data types.</li>

		<li>Analyzing complex query-result relationships and assessing AI-driven content quality, developing strong analytical skills in ML system behavior while working within established evaluation frameworks.</li>

		<li>Conducting detailed evaluations of machine learning model performance across multiple modalities, providing structured and actionable feedback to engineering teams to improve search algorithm accuracy and enhance overall user experience.</li>
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
          <h3 className={styles.programName}>Inter-university program, Particle Physics PhD</h3>
       
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
