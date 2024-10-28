import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './Portfolio.module.css';

const CertificateCard = ({ title, issuer, date, imageSrc, summary, details }) => {
    const renderDetails = (details) => {
        if (Array.isArray(details) && typeof details[0] === 'string') {
          // Simple format
          return (
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          );
        } else if (Array.isArray(details) && typeof details[0] === 'object') {
          // Complex format
          return details.map((section, index) => (
            <div key={index} className={styles.section}>
              <h3>{section.title}</h3>
              {section.items ? (
                section.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h4>{item.subtitle}</h4>
                    {item.points ? (
                      <ul>
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </div>
                ))
              ) : (
                <ul>
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ));
        }
        // Fallback for unexpected formats
        return <p>{JSON.stringify(details)}</p>;
      };
    const [showFullCertificate, setShowFullCertificate] = useState(false);
  const cardRef = useRef(null);

  const toggleFullCertificate = (e) => {
    e.stopPropagation();
    setShowFullCertificate(!showFullCertificate);
    if (!showFullCertificate) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = ''; // Restore background scrolling
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowFullCertificate(false);
        document.body.style.overflow = ''; // Restore background scrolling
      }
    };

    if (showFullCertificate) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = ''; // Ensure background scrolling is restored on unmount
    };
  }, [showFullCertificate]);

    return (
        <div
          ref={cardRef}
          className={`${styles.certificateCard} ${showFullCertificate ? styles.expanded : ''}`}
          onClick={toggleFullCertificate}
        >
          {!showFullCertificate ? (
            <>
              <img
                src={imageSrc}
                alt={title}
                className={styles.certificateThumbnail}
              />
              <h3 className={styles.certificateTitle}>{title}</h3>
              <p className={styles.certificateIssuer}>{issuer}</p>
              <p className={styles.certificateDate}>{date}</p>
              <p className={styles.certificateSummary}>{summary}</p>
            </>
          ) : (
            <div className={styles.fullCertificateContent} onClick={(e) => e.stopPropagation()}>
              <img src={imageSrc} alt={title} className={styles.fullCertificateImage} />
              <button
                className={styles.closeButton}
                onClick={toggleFullCertificate}
              >
                <X size={24} />
              </button>
              <h3 className={styles.certificateTitle}>{title}</h3>
              <p className={styles.certificateIssuer}>{issuer}</p>
              <p className={styles.certificateDate}>{date}</p>
              <p className={styles.certificateSummary}>{summary}</p>
               <div className={styles.certificateDetails}>
                       {renderDetails(details)}
                     </div>
            </div>
          )}
        </div>
      );
    };

const CertificatesSection = () => {
  const certificates = [
      {
        title: "Representation Learning & Generative AI Summer School",
        issuer: "Oxford University", // Adjust if needed
        date: "July 2024", // Adjust the date as needed
        imageSrc: "/cert_img/representation_learning_generative_ai.png", // Adjust the path as needed
        summary: "Participated in an intensive summer school program focused on advanced topics in machine learning, specifically representation learning and generative AI. The program consisted of 22 hours of lectures and practical sessions led by experts in the field.",
        details: [
          "Large language models and agents",
          "Deep learning techniques and architectures",
          "Neural and behavioral comparisons between humans and machines",
          "Uncertainty quantification in machine learning models",
          "Applications of deep learning in financial markets",
          "Representation learning and generative AI techniques in computer vision"
        ]
      },
      {
      title: "Introduction to Databases for Back-End Development",
      issuer: "Meta",
      date: "November 2023",
      imageSrc: "/cert_img/backend.png",
      summary: "Earned a certificate demonstrating strong foundational knowledge of databases and their use in storing, managing, and analyzing data.",
      details: [
        "Understanding of core database concepts, principles, and underlying technologies",
        "Familiarity with different database management systems, with focus on relational databases",
        "Hands-on experience writing basic SQL statements to select, manipulate, and analyze data",
        "Ability to design simple relational database schemas",
        "Awareness of SQL alternatives and their use cases"
      ]
    },
      {
        title: "Generative AI with Large Language Models (LLMs)",
        issuer: "Amazon Web Services",
        date: "October 2023",
        imageSrc: "/cert_img/aws_generative_ai_llm.png", // Adjust the path as needed
        summary: "Completed an in-depth course on Generative AI with Large Language Models (LLMs), taught by AWS technical staff and leveraging AWS infrastructure. This course provides a comprehensive understanding of how generative AI works and how to deploy it in real-world applications.",
        details: [
          {
            title: "Key Topics and Skills",
            items: [
              {
                subtitle: "Generative AI Lifecycle",
                description: "Gained a deep understanding of the key steps in a typical LLM-based generative AI lifecycle, from data gathering and model selection to performance evaluation and deployment."
              },
              {
                subtitle: "Transformer Architecture",
                description: "Learned the details of the transformer architecture that powers LLMs, including how they are trained and how fine-tuning enables adaptation to specific use cases."
              },
              {
                subtitle: "Empirical Scaling Laws",
                description: "Learned to use empirical scaling laws to optimize the model's objective function across dataset size, compute budget, and inference requirements."
              },
              {
                subtitle: "State-of-the-Art Techniques",
                description: "Applied cutting-edge training, tuning, inference, tools, and deployment methods to maximize model performance within project-specific constraints."
              },
              {
                subtitle: "Industry Insights",
                description: "Discussed the challenges and opportunities that generative AI creates for businesses, drawing from stories shared by industry researchers and practitioners."
              }
            ]
          },
          {
            title: "Hands-on Labs and Projects",
            description: "The course included several hands-on labs and projects, leveraging AWS infrastructure, that allowed me to apply the concepts learned:",
            items: [
              {
                subtitle: "Dialogue Summarization",
                description: "Used generative AI to summarize dialogue, gaining practical experience with a common LLM use case."
              },
              {
                subtitle: "Fine-tuning for Dialogue Summarization",
                description: "Fine-tuned a generative AI model for dialogue summarization, learning how to adapt LLMs to specific tasks."
              },
              {
                subtitle: "Reinforcement Learning for Summary Generation",
                description: "Applied reinforcement learning techniques to fine-tune a FLAN-T5 model to generate more positive summaries, exploring advanced methods for aligning LLMs with desired behaviors."
              }
            ]
          }
        ]
      },
    {
      title: "Version Control with Git",
      issuer: "Meta",
      date: "October 2023",
      imageSrc: "/cert_img/version_control.png",
      summary: "Earned a certificate demonstrating proficiency in version control systems and command line operations, essential skills for effective software development and collaboration.",
      details: [
        "Understanding of version control systems and their role in enabling effective collaboration on software projects",
        "Familiarity with Git, the most widely used version control system",
        "Hands-on experience using Git to create repositories, make commits, and push changes to remote repositories",
        "Proficiency in using the Linux command line to efficiently navigate file systems and automate workflows",
        "Ability to leverage command line piping and redirection to create powerful, time-saving automation"
      ]
    },
    {
      title: "Introduction to Backend Development",
      issuer: "Meta",
      date: "August 2023",
      imageSrc: "/cert_img/backend_dev.png",
      summary: "Completed a comprehensive introduction to backend development, covering fundamental web technologies and their applications in creating responsive and functional web interfaces.",
      details: [
        "Understanding of the roles and responsibilities of different types of web developers",
        "Familiarity with the core web technologies of HTML, CSS, and JavaScript",
        "Hands-on experience constructing web pages with HTML and styling them with CSS",
        "Ability to create responsive web interfaces using the Bootstrap UI framework",
        "Appreciation for how the internet works and the technologies that underpin it"
      ]
    },
      {
        title: "Data Scientist Nanodegree",
        issuer: "Udacity in collaboration with IBM",
        date: "June 2023",
        imageSrc: "/cert_img/udacity_data_science_nanodegree.png", // Adjust the path as needed
        summary: "Earned an advanced Data Scientist Nanodegree from Udacity, developed in collaboration with IBM, a global leader in data science and analytics. This rigorous program is designed to prepare students for real-world data science roles and incorporates cutting-edge tools and methodologies used in the industry. Throughout the program, I completed several high-level projects that showcase my ability to apply advanced data science concepts to real-world problems.",
        details: [
          {
            title: "Program Highlights",
            items: [
              {
                subtitle: "The Data Science Process",
                points: [
                  "Learned about the CRISP-DM methodology and its application to various data science problems",
                  "Developed skills in communicating findings to stakeholders through blog posts and GitHub repositories"
                ]
              },
              {
                subtitle: "Software Engineering Practices",
                points: [
                  "Gained proficiency in clean and modular code, code efficiency, refactoring, and documentation",
                  "Mastered version control, testing, logging, and code review practices",
                  "Learned object-oriented programming and developed a Python package uploaded to PyPI"
                ]
              },
              {
                subtitle: "Data Engineering",
                points: [
                  "Acquired skills in building ETL pipelines, natural language processing pipelines, and machine learning pipelines",
                  "Learned to use Scikit-Learn to create end-to-end machine learning pipelines"
                ]
              },
              {
                subtitle: "Experimental Design and Recommendation Engines",
                points: [
                  "Studied principles of experiment design and application of statistical concepts",
                  "Gained hands-on experience with A/B testing",
                  "Created recommendation engines using matrix factorization"
                ]
              }
            ]
          },
          {
            title: "Advanced Projects",
            items: [
              {
                subtitle: "Writing a Data Scientist Blog Post",
                description: "Created a blog post and GitHub repository to showcase data science skills and build a professional portfolio."
              },
              {
                subtitle: "Disaster Response Pipeline",
                description: "Built an advanced machine learning pipeline to categorize emergency messages based on the needs communicated by the sender, demonstrating proficiency in data engineering and natural language processing."
              },
              {
                subtitle: "Recommendation Engines",
                description: "Developed a sophisticated recommendation engine for IBM Watson Studio's data platform, applying skills in machine learning and matrix factorization."
              },
              {
                subtitle: "Starbucks Portfolio Exercise",
                description: "Analyzed real data used in Starbucks' data scientist screening interviews, showcasing ability to tackle industry-relevant challenges."
              },
              {
                subtitle: "Data Scientist Capstone - Customer Segmentation",
                description: "Conducted an in-depth customer segmentation project for Arvato Financial Services, using advanced techniques such as data preprocessing, dimensionality reduction, clustering analysis, and predictive modeling on large datasets in the cloud. Identified valuable customer segments to help improve marketing strategies and customer targeting."
              }
            ]
          },
          {
            title: "Key Takeaways",
            points: [
              "Comprehensive skill set in data science, from foundational concepts to advanced techniques",
              "Hands-on experience with industry-relevant tools and methodologies",
              "Preparation for tackling complex, real-world data science challenges",
              "Ability to deliver actionable insights from data analysis",
              "Strong foundation for excelling in a data science career"
            ]
          }
        ]
      },
    {
      title: "Massive Data Analysis with Spark",
      issuer: "Calcul Quebec",
      date: "November 2022",
      imageSrc: "/cert_img/spark_analysis.png",
      summary: "Completed an advanced course on big data analysis using Apache Spark, demonstrating proficiency in distributed computing and large-scale data processing techniques.",
      details: [
        "Understanding of Spark's distributed computing architecture and its advantages for big data workloads",
        "Hands-on experience using Spark's core APIs (RDDs, DataFrames, Datasets) to process and analyze massive datasets",
        "Ability to write efficient Spark jobs in Python or Scala to transform, filter, and aggregate data at scale",
        "Familiarity with Spark SQL for querying structured data and Spark Streaming for real-time data processing",
        "Knowledge of best practices for optimizing Spark performance and troubleshooting common issues"
      ]
    },
    {
      title: "Build, Train, and Deploy ML Pipelines using BERT",
      issuer: "Amazon Web Services", // Adjust if the issuer is different
      date: "July 2022", // Adjust the date as needed
      imageSrc: "/cert_img/bert_ml_pipeline.png", // Adjust the path as needed
      summary: "Earned a certificate demonstrating expertise in building end-to-end machine learning pipelines using BERT, a state-of-the-art natural language processing model.",
      details: [
        "Proficiency in feature engineering techniques for transforming raw text data into machine learning-ready features",
        "Hands-on experience using Amazon SageMaker Processing Jobs for scalable feature engineering",
        "Familiarity with feature stores and their role in managing and serving machine learning features",
        "Ability to fine-tune pre-trained BERT models for custom NLP tasks",
        "Knowledge of model debugging and profiling techniques using Amazon SageMaker Debugger",
        "Understanding of MLOps principles and practices for automating and orchestrating machine learning workflows",
        "Hands-on experience building end-to-end ML pipelines with Amazon SageMaker Pipelines",
        "Familiarity with tools for tracking model lineage and artifacts, such as Amazon SageMaker Projects"
      ]
    },
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "June 2022",
      imageSrc: "/cert_img/aws_cloud_essentials.png", // Adjust the path as needed
      summary: "Earned a certificate providing a comprehensive introduction to Amazon Web Services (AWS) cloud computing platform.",
      details: [
        "Understanding of cloud computing fundamentals and the value proposition of the cloud",
        "Familiarity with the AWS global infrastructure, including Regions and Availability Zones",
        "Ability to create and manage AWS accounts and interact with AWS services through various interfaces",
        "Knowledge of AWS Identity and Access Management (IAM) best practices for secure access control",
        "Understanding of AWS compute services, including Amazon EC2 instances, containers, and serverless technologies",
        "Familiarity with basic networking concepts and features of Amazon Virtual Private Cloud (VPC)",
        "Knowledge of AWS storage services, such as Amazon S3 for object storage and Amazon EBS for block storage",
        "Understanding of database options on AWS, including relational, NoSQL, and data warehousing solutions",
        "Familiarity with monitoring and optimization techniques on AWS, including the use of Elastic Load Balancing"
      ]
    },
    {
      title: "Analyze Datasets and Train ML Models using AutoML",
      issuer: "Amazon Web Services", // Assuming it's from AWS, adjust if needed
      date: "June 2022", // Adjust the date as needed
      imageSrc: "/cert_img/automl_certificate.png", // Adjust the path as needed
      summary: "Earned a certificate demonstrating proficiency in using automated machine learning (AutoML) techniques to analyze datasets and train machine learning models.",
      details: [
        "Ability to ingest, explore, and visualize datasets to gain insights and prepare for machine learning",
        "Understanding of statistical bias in datasets and techniques for detecting and measuring bias",
        "Familiarity with feature importance methods like SHAP for identifying the most predictive features",
        "Hands-on experience using Amazon SageMaker Clarify to detect statistical bias in datasets",
        "Knowledge of AutoML workflows and their role in automating the machine learning process",
        "Proficiency in using Amazon SageMaker Autopilot to automatically train and tune machine learning models",
        "Ability to evaluate and compare models generated by AutoML to select the best performing model",
        "Experience deploying trained models as real-time inference endpoints to serve predictions",
        "Familiarity with built-in algorithms in Amazon SageMaker for specific tasks like text classification"
      ]
    },
    {
      title: "Machine Learning A-Z",
      issuer: "Udemy", // Adjust if needed
      date: "June 2022", // Adjust the date as needed
      imageSrc: "/cert_img/machine_learning_az.png", // Adjust the path as needed
      summary: "Completed a comprehensive course covering a wide range of machine learning algorithms and techniques implemented in Python, including supervised and unsupervised learning, reinforcement learning, natural language processing, deep learning, and dimensionality reduction.",
      details: [
        "Data Preprocessing: Importing datasets, handling missing data, encoding categorical variables, data splitting, and feature scaling",
        "Regression: Simple and Multiple Linear Regression, Polynomial Regression, SVR, Decision Tree and Random Forest Regression",
        "Classification: Logistic Regression, K-NN, SVM, Naive Bayes, Decision Tree and Random Forest Classification",
        "Clustering: K-Means and Hierarchical Clustering",
        "Association Rule Learning: Apriori and Eclat algorithms",
        "Reinforcement Learning: Upper Confidence Bound (UCB) and Thompson Sampling",
        "Natural Language Processing: Bag-of-Words model and NLP pipeline in Python",
        "Deep Learning: Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN)",
        "Dimensionality Reduction: PCA, LDA, and Kernel PCA",
        "Model Selection & Boosting: k-Fold Cross Validation, Grid Search, and XGBoost",
        "Practical implementation of all algorithms in Python",
        "Evaluation metrics and techniques for various types of machine learning models"
      ]
    },
    {
      title: "Vectorization and Optimization",
      issuer: "Calcul Quebec",
      date: "May 2022",
      imageSrc: "/cert_img/vectorization_optimization.png",
      summary: "Earned a certificate focused on advanced techniques for optimizing Python code performance, especially in the context of numerical and scientific computing.",
      details: [
        "Understanding of vectorization concept and its importance in optimizing numerical computations",
        "Proficiency in using NumPy library to vectorize computations and avoid slow Python loops",
        "Hands-on experience benchmarking Python code to identify performance bottlenecks",
        "Familiarity with various optimization techniques including using built-in optimized Python functions and libraries",
        "Experience with Cython for compiling Python-like code to C for speed",
        "Knowledge of Numba for just-in-time (JIT) compilation of Python functions",
        "Skills in parallel processing with multiprocessing and joblib libraries",
        "Knowledge of memory optimization techniques and trade-offs",
        "Understanding of algorithmic complexity and Big O notation"
      ]
    },
    {
      title: "C++ Programming",
      issuer: "Udemy", // Adjust if needed
      date: "April 2022", // Adjust the date as needed
      imageSrc: "/cert_img/cpp_programming.png", // Adjust the path as needed
      summary: "Earned a comprehensive certificate in Modern C++ programming, covering topics from basic syntax to advanced concepts, focusing on Modern C++ standards and best practices.",
      details: [
        "Mastery of C++ syntax and semantics, including looping constructs, functions, and pointers",
        "Object-Oriented Programming (OOP) principles in C++, including classes, objects, constructors, destructors, and inheritance",
        "Understanding of Modern C++ features such as move semantics, smart pointers, and lambda expressions",
        "Familiarity with the C++ Standard Template Library (STL) and its containers like Vector",
        "Ability to overload operators and create class hierarchies with polymorphic functions and dynamic binding",
        "Knowledge of stream I/O and exception handling in C++",
        "Hands-on experience with the C++ debugger and tools like Visual Studio Code",
        "Robust foundation in C++ programming, covering a wide range of topics from basic concepts to advanced features",
        "Skills that are in high demand in the industry, focusing on Modern C++ standards and best practices"
      ]
    },
    {
      title: "Introduction to GPU Programming with Python",
      issuer: "Calcul Quebec", // Adjust if needed
      date: "February 2022",
      imageSrc: "/cert_img/gpu_programming.png", // Adjust the path as needed
      summary: "Earned a certificate providing a foundation in leveraging GPU computing to accelerate Python code, with a focus on applications in data science and machine learning.",
      details: [
        "Understanding of GPU architecture and the parallel computing paradigm",
        "Familiarity with CUDA programming model for NVIDIA GPUs",
        "Hands-on experience with CUDA Python libraries like numba.cuda, cuPy, and cuDF",
        "Knowledge of techniques for optimizing data transfer between CPU and GPU memory",
        "Proficiency in identifying and parallelizing computationally intensive portions of Python code for GPU execution",
        "Understanding of GPU performance considerations and debugging techniques",
        "Exposure to real-world case studies of GPU acceleration in machine learning and data science workflows"
      ]
    },{
    title: "Python for Data Science Essential Training",
    issuer: "LinkedIn",
    date: "October 2021",
    imageSrc: "/cert_img/python_data_science.png", // Adjust the path as needed
    summary: "Completed a comprehensive hands-on course on using Python for data science tasks, including a real-world project involving web scraping and data analysis.",
    details: [
      "Understanding the advantages of using Python for data science",
      "Filtering, selecting, concatenating, and transforming data using Python",
      "Applying data visualization best practices and creating informative statistical graphics",
      "Performing basic math, linear algebra, correlation analysis, and multivariate analysis with Python",
      "Sourcing data through web scraping techniques",
      "Introduction to natural language processing (NLP) concepts and techniques",
      "Creating interactive visualizations and enabling collaborative analytics using the Plotly library",
      "Gained practical experience by working on a real-world data science project",
      "Developed skills in data manipulation, analysis, and visualization using Python libraries"
    ]
  },
   
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Deep Learning. AI", // Adjust if needed
      date: "August 2021", // Adjust the date as needed
      imageSrc: "/cert_img/neural_networks_deep_learning.png", // Adjust the path as needed
      summary: "Earned a certificate providing a deep dive into the foundations of deep learning and neural networks, covering both theoretical concepts and practical implementations.",
      details: [
        "Understanding of the major trends driving the rise of deep learning and its applications",
        "Familiarity with the key concepts of supervised learning with neural networks",
        "Setting up machine learning problems with a neural network mindset",
        "Implementing vectorization to speed up models",
        "Understanding of the fundamentals of neural networks: logistic regression and its cost function, gradient descent and backpropagation, activation functions and their derivatives",
        "Building and training deep neural networks with one hidden layer",
        "Analyzing and implementing the key computations underlying deep learning",
        "Building and training deep neural networks for computer vision tasks",
        "Solid foundation in both theoretical concepts and practical implementations of neural networks and deep learning"
      ]
    },
  ];

  return (
    <div className={styles.certificatesSection}>
      <h2 className={styles.sectionHeading}>My Certificates</h2>
      <p className={styles.sectionDescription}>
        I have completed various courses and certifications to enhance my skills in data science,
        machine learning, and cloud technologies. Here are some of my key achievements:
      </p>
      <div className={styles.certificatesGrid}>
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
