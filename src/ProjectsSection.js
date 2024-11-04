import config from './config.js';
import React, { useState } from 'react';
import { Github, ExternalLink, Code, ChevronDown, ChevronUp, Brain, Database, LineChart } from 'lucide-react';
import styles from './Portfolio.module.css';

const projectsData = [
    {
       title: "Language Model Detoxification with Reinforcement Learning",
       image: "`${config.basePath}`/Projects/detoxification_rl.png",
       description: "Implemented an end-to-end Reinforcement Learning pipeline to reduce toxicity in language model outputs while maintaining text generation quality. The project uses Proximal Policy Optimization (PPO) with Meta AI's hate speech classifier as a reward model to fine-tune FLAN-T5. The solution achieved a 17.41% reduction in toxicity scores while preserving semantic meaning through Parameter-Efficient Fine-Tuning (PEFT/LoRA). The project demonstrates advanced techniques in natural language processing, combining reinforcement learning with transformer models, and showcases practical applications in content moderation and safe AI deployment. The architecture combines multiple components including FLAN-T5 base model augmented with PEFT/LoRA for efficient fine-tuning, PPO trainer implementing reinforcement learning optimization, reward model based on hate speech classification, and comprehensive evaluation suite for toxicity measurement. The project is structured modularly with separate components for data handling, model setup, training, and evaluation, making it easily extensible and maintainable. It achieved significant toxicity reduction while preserving the model's ability to generate coherent and meaningful text, demonstrating the effectiveness of reinforcement learning in language model alignment.",
       technologies: [
           "Python",
           "PyTorch",
           "Transformers",
           "PPO",
           "PEFT/LoRA",
           "Reinforcement Learning",
           "Hugging Face",
           "Natural Language Processing",
           "Deep Learning",
           "TRL Library"
       ],
       github: "https://github.com/parhamdehghani/detoxification-rl",
       medium: "https://medium.com/@yourusername/rlhf-pipeline",
       codeSnippet: `def train_ppo(ppo_trainer, dataset, sentiment_pipe, max_steps=10):
       """
       Train the model using PPO with toxicity reward signal
       
       Args:
           ppo_trainer (PPOTrainer): Initialized PPO trainer
           dataset (Dataset): Training dataset
           sentiment_pipe (pipeline): Reward model pipeline
           max_steps (int): Maximum training steps
       """
       generation_kwargs = {
           "min_length": 5,
           "top_k": 0.0,
           "top_p": 1.0,
           "do_sample": True
       }
       
       reward_kwargs = {
           "top_k": None,
           "function_to_apply": "none",
           "batch_size": 16
       }
       
       for step, batch in enumerate(ppo_trainer.dataloader):
           if step >= max_steps:
               break
               
           # Generate responses from current policy
           prompt_tensors = batch["input_ids"]
           summary_tensors = []
           
           for prompt_tensor in prompt_tensors:
               summary = ppo_trainer.generate(
                   prompt_tensor,
                   **generation_kwargs
               )
               summary_tensors.append(summary)
               
           # Calculate rewards using hate speech classifier
           rewards = sentiment_pipe(
               [q + r for q, r in zip(batch["query"], batch["response"])],
               **reward_kwargs
           )
           
           # Optimize policy with PPO
           stats = ppo_trainer.step(prompt_tensors, summary_tensors, rewards)
           ppo_trainer.log_stats(stats, batch, rewards)`
    },
  {
    title: "Disaster Response Pipeline",
    image: "`${config.basePath}`/Projects/disaster_pipeline.png", // Add your image path
    description: "The Disaster Response Pipeline is an intelligent system that helps classify emergency messages during disasters. Built by Parham Dehghani, this project combines Natural Language Processing (NLP) with machine learning to automatically categorize emergency communications. At its core, it uses a Random Forest classifier with TF-IDF text transformation to understand and sort incoming messages. The system processes raw text through an ETL (Extract, Transform, Load) pipeline, transforms it into usable features, and then makes predictions about the type of emergency being reported. What makes this project particularly valuable is its practical application - it can help emergency responders and officials quickly understand and react to disasters by automatically sorting through social media messages and other communications. The system is implemented as a web application using Flask, where users can input emergency messages and receive immediate classifications. It's designed to be scalable and can be deployed on cloud platforms like AWS, with the ability to integrate with APIs for continuous improvement of its classification accuracy as new data becomes available. The project demonstrates a complete end-to-end machine learning solution, from data processing to user interface, with real-world applications in disaster response and emergency management.",
    technologies: [
        "Flask",
        "NLP",
        "TF-IDF",
        "Random Forest",
        "SQLite",
        "ETL",
        "HTML",
        "REST API",
        "Git",
        "GitHub",
        "AWS"
    ],
    github: "https://github.com/parhamdehghani/WebApp_DisasterResponse",
    medium: "https://medium.com/@yourusername/rlhf-pipeline",
    codeSnippet: `def build_model():
    '''
    Builds the pipeline including text processing, feature transformation
    and grid search hyper-parameters for the used model.

    Input:
        No input required
        
    Output:
        model -> returns the whole pipeline ready for the training step
    '''
    # Instantiating the multi-class predictor for the last step of pipeline
    mlpc = MultiOutputClassifier(estimator=RandomForestClassifier())
    
    # Define the pipeline for ML workflow
    pipeline = Pipeline([
        ('combining_feature', FeatureUnion([
            ('initial_transformer', Pipeline([
                ('bag_of_words', CountVectorizer(tokenizer=tokenize)),
                ('tfidf_transformer', TfidfTransformer())
            ]))
        ])),
        ('multi_classifier_building', mlpc)
    ])
    
    # Parameters to be evaluated in the defined pipeline
    parameters = {
        'multi_classifier_building__estimator__criterion': ['entropy'],
        'multi_classifier_building__estimator__n_estimators': [20],
        'combining_feature__initial_transformer__tfidf_transformer__sublinear_tf': [True]
    }
    
    # Build the pipeline based on specified params
    model = GridSearchCV(pipeline, param_grid=parameters)
    
    return model`
  },
    {
      title: "Portuguese Real Estate Exploratory Data Analysis",
      image: "`${config.basePath}`/Projects/portugal_real_estate.png",
      description: "This project explores a dataset of over 100,000 real estate listings in Portugal. The goal was to uncover insights on property prices, types, and geographical factors influencing the market. I conducted an Exploratory Data Analysis (EDA) using Python and Jupyter Notebooks, analyzing factors like price distribution, property type breakdowns, price vs. area relationships, district-wise price variations, and the correlation between features. The project utilized libraries like Pandas, NumPy, Matplotlib, and Seaborn for data manipulation and visualization. It provides valuable insights for potential investors, property hunters, and market analysts seeking to understand trends in the Portuguese real estate market.",
      technologies: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Data Analysis",
        "Data Visualization",
      ],
      github: "https://github.com/parhamdehghani/portuguese-real-estate-eda",
      medium: "https://medium.com/@yourusername/rlhf-pipeline",
    codeSnippet: `def clean_data(df):
    # Handle missing values
    df = df.dropna(subset=['Price', 'District', 'Type'])
    df['PublishDate'] = pd.to_datetime(df['PublishDate'], errors='coerce')
    area_columns = ['GrossPrivateArea', 'UsableArea', 'LivingArea', 'LotSize', 'BuiltArea']
    df[area_columns] = df[area_columns].apply(pd.to_numeric, errors='coerce')
    df['EnergyCertificate'] = df['EnergyCertificate'].fillna('Unknown')
    return df
`
      
    },
  {
      title: "Arvato Financial Services Customer Segmentation",
      image: "/Projects/arvato_segmentation.png",
      description: "A comprehensive machine learning project that analyzes German customer demographics data from Bertelsmann Arvato Analytics, focusing on understanding and predicting customer behavior for a mail-order sales company. The project combines unsupervised and supervised learning techniques in a two-part solution. The first part implements customer segmentation by analyzing demographics data of the company's existing customers against the general population of Germany. This involves extensive data preprocessing, dimensionality reduction using Principal Component Analysis (PCA), and K-means clustering to identify distinct customer segments and their unique characteristics. The second part builds upon these insights to develop a predictive model for identifying potential customers in marketing campaigns, effectively translating customer segmentation insights into actionable marketing strategies. Throughout the project, various data science challenges are addressed, including handling missing values, feature engineering, and model evaluation. The solution demonstrates significant data preprocessing capabilities, advanced dimensionality reduction techniques, and practical application of machine learning in real-world business scenarios. What makes this project particularly valuable is its end-to-end approach to solving a real business problem: from data preprocessing and exploratory analysis to customer segmentation and predictive modeling, all while working with real-world data provided by Bertelsmann Arvato Analytics.",
      technologies: [
          "NumPy",
          "Pandas",
          "Matplotlib",
          "Seaborn",
          "Scikit-learn",
          "PCA",
          "K-means Clustering",
          "Dask"
      ],
      github: "https://github.com/parhamdehghani/Arvato-Segmentation",
  medium: "https://medium.com/@p.dehghani88/customer-segmentation-report-for-arvato-financial-services-5dacc0d8166b",
      codeSnippet: `def reduce_dimensions(azdias, customers, n_components):
    '''
    Perform PCA dimensionality reduction on both general population
    and customer datasets.
    
    Input:
        azdias - DataFrame of general population demographics
        customers - DataFrame of customer demographics
        n_components - Number of PCA components to keep
        
    Output:
        azdias_reduced - Reduced general population data
        customers_reduced - Reduced customer data
    '''
    # General population (Azdias) dimensional reduction
    pca_azdias = PCA(n_components=n_components)
    df_reduced1 = pca_azdias.fit_transform(azdias.iloc[:, 1:])
    azdias_reduced = pd.concat([
        azdias.iloc[:, 0],
        pd.DataFrame(df_reduced1)
    ], axis=1)

    # Customer data dimensional reduction
    pca_customers = PCA(n_components=n_components)
    df_reduced2 = pca_customers.fit_transform(customers.iloc[:, 1:])
    customers_reduced = pd.concat([
        customers.iloc[:, 0],
        pd.DataFrame(df_reduced2)
    ], axis=1)

    # Save reduced datasets
    azdias_reduced.to_csv('./Data/azdias_reduced.csv', index=False)
    customers_reduced.to_csv('./Data/customers_reduced.csv', index=False)
    
    return azdias_reduced, customers_reduced`
  },
  {
     title: "Seattle Airbnb Price Analysis",
     image: "`${config.basePath}`/Projects/airbnb_analysis.png",
     description: "A comprehensive data analysis project that explores the Seattle Airbnb dataset to uncover patterns and insights in reservation pricing. The project analyzes three key aspects: price distribution across Seattle listings, seasonal price variations throughout the year, and the correlation between various factors (bedrooms, bathrooms, amenities) and listing prices. Using statistical analysis and data visualization techniques, the project reveals important insights such as price ranges in different areas, peak pricing during summer months, and how specific amenities influence pricing. The analysis provides valuable information for both Airbnb hosts looking to optimize their pricing strategies and guests seeking to understand price variations. The project demonstrates practical application of data analysis in the real estate and hospitality sector, using Python's data science stack for data manipulation, statistical analysis, and visualization. The findings are published in a detailed Medium article, making complex data insights accessible to a broader audience.",
     technologies: [
         "Pandas",
         "Matplotlib",
         "Seaborn",
         "Statistical Analysis",
         "Data Visualization",
         "Exploratory Data Analysis"
     ],
     github: "https://github.com/parhamdehghani/SeattleAirbnbInsight",
     medium: "https://medium.com/@p.dehghani88/unlocking-the-insights-of-airbnb-reservation-prices-in-seattle-d7ef366aac83",
     codeSnippet: `# Select numerical columns for correlation analysis
cols = ['accommodates', 'bathrooms', 'bedrooms', 'beds',
'extra_people_fee', 'review_scores_rating', 'price']

# Calculate correlation matrix
corrs = df[cols].corr()

# Set color palette for the heatmap
cmap = sns.color_palette("coolwarm")

# Plot the correlation heatmap
plt.figure(figsize=(7, 7))
sns.heatmap(corrs, cbar=True, annot=True, square=True, fmt='.2f',
            yticklabels=cols, xticklabels=cols, cmap=cmap)
plt.title('Correlation Heatmap')

# Save the plot as an image
plt.savefig('correlations.png')

# Display the plot
plt.show()`
  },
  {
     title: "IBM Article Recommendation Engine",
     image: "`${config.basePath}`/Projects/recommendation_engine.png",
     description: "A sophisticated recommendation system developed using IBM Watson Studio platform data, implementing three different recommendation strategies to suggest articles to users. The project tackles the recommendation problem through multiple approaches: First, a rank-based recommendation system that identifies and suggests the most popular articles based on user interaction frequency, particularly useful for new users. Second, a user-user based collaborative filtering system that finds similar users based on their article interaction patterns and makes recommendations accordingly, enabling more personalized suggestions. Finally, the project implements matrix factorization, an advanced machine learning approach that decomposes the user-item interaction matrix to predict potential future interactions and provide more accurate recommendations. This comprehensive approach demonstrates the evolution from simple popularity-based recommendations to more sophisticated, personalized suggestion systems. The project showcases practical implementation of recommendation systems in a real-world context using IBM's platform data, addressing both cold-start problems for new users and providing personalized recommendations for existing users.",
     technologies: [
         "Pandas",
         "NumPy",
         "Scikit-learn",
         "Matrix Factorization",
         "Collaborative Filtering",
         "Recommendation Systems"
     ],
     github: "https://github.com/parhamdehghani/Recommendation_Engine",
     medium: "https://medium.com/@yourusername/rlhf-pipeline",
     codeSnippet: `def make_recommendations(user_id, n_rec, df, user_item_mat):
     """
     Build recommendation engine using different approaches
     
     Input:
         user_id - (int) user ID
         n_rec - (int) number of recommendations
         df - (pd.DataFrame) user-article interactions
         user_item_mat - (np.array) user-item matrix
         
     Output:
         rank_recs - (list) rank-based recommendations
         collab_recs - (list) collaborative filtering recommendations
         svd_recs - (list) matrix factorization recommendations
     """
     # Rank-based recommendations
     rank_recs = get_top_articles(n_rec, df)
     
     # User-User Collaborative Filtering
     similar_users = find_similar_users(user_id, user_item_mat)
     collab_recs = get_user_articles(similar_users, df)[:n_rec]
     
     # Matrix Factorization using SVD
     U, sigma, Vt = np.linalg.svd(user_item_mat)
     svd_recs = predict_articles(U, sigma, Vt, user_id)[:n_rec]
     
     return rank_recs, collab_recs, svd_recs`
  },
  {
      title: "COVID-19 X-Ray Detection System",
      image: "`${config.basePath}`/Projects/covid_detection.png",
      description: "A deep learning-based medical imaging system that detects COVID-19 from chest X-ray images with high accuracy. Built using PyTorch and transfer learning with DenseNet201 architecture, the system can classify X-rays into four categories: COVID-19, Lung Opacity, Normal, and Viral Pneumonia. The project implements sophisticated data augmentation techniques and achieves 82.4% accuracy on the test set. The model is designed with a conservative approach for COVID-19 detection, requiring >30% probability for positive classification to minimize false positives. The system includes a complete pipeline from data preprocessing to model deployment, with real-time prediction capabilities and probability scoring for each category. This project demonstrates practical application of deep learning in medical diagnosis, combining transfer learning techniques with custom model architecture for optimal performance.",
      technologies: [
          "PyTorch",
          "Deep Learning",
          "Transfer Learning",
          "DenseNet201",
          "Medical Imaging",
          "Data Augmentation",
          "Computer Vision",
          "PIL",
          "NumPy"
      ],
      github: "https://github.com/parhamdehghani/CovidDetectionXRay",
      medium: "https://medium.com/@yourusername/rlhf-pipeline",
      codeSnippet: `def predict2(image_path, model, topk=4):
      '''
      Predict the class of an X-ray image using trained deep learning model
      Returns probabilities for each class
      '''
      # Process the image
      img = Image.open(image_path)
      img = process_image(img)
      img = np.expand_dims(img, 0)
      img = torch.from_numpy(img)
      
      # Make prediction
      model.eval()
      inputs = Variable(img).to(device)
      logits = model.forward(inputs)
      
      # Calculate probabilities
      ps = F.softmax(logits, dim=1)
      topk = ps.cpu().topk(topk)
      
      return (e.data.numpy().squeeze().tolist() for e in topk)

  # Example usage for COVID detection
  probs, classes = predict2(img_path, model.to(device))
  if probs[0] > 0.3 and classes[0] == 'COVID':
      print("High probability of COVID-19 detected")`
  },
  {
      title: "BSM Parameter Space Scanner",
      image: "`${config.basePath}`/Projects/bsm_scanner.png",
      description: "A sophisticated tool for scanning parameter spaces in Beyond Standard Model (BSM) physics, specifically designed for supersymmetric models with inverse seesaw mechanisms. The project implements a comprehensive framework that interfaces with major physics tools like SPheno and MicrOMEGAs to generate and analyze physics models. It performs automatic parameter space exploration with built-in constraint checking for various physics observables including relic density, dark matter direct detection, and LHC constraints. The scanner employs adaptive sampling techniques, focusing on regions that satisfy experimental constraints, and includes functionality for mass spectrum calculation, flavor physics checks, and dark matter properties computation. The tool generates detailed output files containing parameter points, physical observables, and analysis results, making it valuable for phenomenological studies in particle physics.",
      technologies: [
          "BASH",
          "NumPy",
          "Pandas",
          "SLHA Interface",
          "SPheno",
          "MicrOMEGAs",
          "High Energy Physics",
          "Scientific Computing",
          "Parameter Scanning",
          "Data Analysis"
      ],
      github: "https://github.com/parhamdehghani/BLRSSM-Benchmark-Scanning",
      medium: "https://medium.com/@yourusername/rlhf-pipeline",
      codeSnippet: `def scan_parameter_space(max_solutions=500):
      '''
      Scans the parameter space of BSM physics model with constraints.
      
      Parameters:
          max_solutions: Maximum number of valid solutions to find
          
      Returns:
          DataFrame containing valid parameter points and observables
      '''
      # Initialize parameter ranges
      param_ranges = {
          'm0': (0., 3000.),          # Scalar mass parameter
          'm12': (0., 3000.),         # Gaugino mass parameter
          'TanBeta': (0., 60.),       # Ratio of Higgs VEVs
          'A0': lambda m0: (-3*m0, 3*m0),  # Trilinear coupling
          'VR': (6500, 20000)         # Right-handed scale
      }
      
      solutions = []
      while len(solutions) < max_solutions:
          # Generate random point in parameter space
          params = generate_random_point(param_ranges)
          
          # Check physics constraints
          if check_constraints(params):
              # Calculate observables
              relic_density = calculate_relic_density(params)
              dm_properties = calculate_dm_properties(params)
              
              if 0.09 <= relic_density <= 0.14:
                  solutions.append({
                      'parameters': params,
                      'observables': {
                          'relic_density': relic_density,
                          'dm_properties': dm_properties
                      }
                  })
      
      return pd.DataFrame(solutions)`
  }
];

const ProjectCard = ({ project }) => {
  const [showCode, setShowCode] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const Icon = project.icon;

  return (
    <div className={styles.projectCard}>
    
        <h3 className={styles.projectTitle}>{project.title}</h3>
      

      {/* Image Section */}
      <div
        className={styles.projectImageContainer}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`${styles.projectImage} ${isImageHovered ? styles.projectImageHovered : ''}`}
        />
        {isImageHovered && (
          <div className={styles.imageOverlay}>
            <div className={styles.overlayLinks}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
              )}
              {project.medium && (
                <a href={project.medium} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={24} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={styles.projectContent}>
        <p className={styles.projectDescription}>{project.description}</p>
        
        {project.codeSnippet && (
          <div className={styles.codeSection}>
            <button
              onClick={() => setShowCode(!showCode)}
              className={styles.codeToggle}
            >
              <Code size={20} />
              <span>{showCode ? 'Hide Code' : 'Show Code'}</span>
              {showCode ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showCode && (
              <div className={styles.codeSnippet}>
                <pre>
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        )}

        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className={styles.projectsSection}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
