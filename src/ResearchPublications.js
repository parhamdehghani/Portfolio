import config from './config.js';
import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import styles from './Portfolio.module.css';

const LatexRenderer = ({ text }) => {
  const parts = text.split(/(\$.*?\$)/);
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const latex = part.slice(1, -1);
      return <InlineMath key={index} math={latex} className={styles.inlineMath} />;
    }
    return part;
  });
};

const ResearchPublications = () => {
  const [hoveredPublication, setHoveredPublication] = useState(null);
  const [hoveredInterest, setHoveredInterest] = useState(null);
    
  const publications = [
    {
      id: 1,
      title: "Collider imprint of vector-like leptons in light of anomalous magnetic moment and neutrino data",
      journal: "European Physical Journal C",
      year: "2024",
      recap: "This research explores an extension of the Standard Model by adding vector-like leptons (VLLs) to address discrepancies in particle physics, particularly the anomalous magnetic moments of electrons and muons, while also considering neutrino data. The study identifies a minimal configuration of VLLs that could explain these phenomena and predicts distinct collider signatures featuring six hard leptons with significant energy. Analysis of these signatures at future 100 TeV proton-proton colliders demonstrates that if VLLs are responsible for the observed discrepancies, they would produce unmistakable signals. The research focuses on two benchmark scenarios with VLL masses between 500-900 GeV. By connecting lepton magnetic moments, neutrino physics, and collider phenomenology, this study provides a framework for understanding potential new physics. It highlights the importance of indirect constraints in developing beyond-Standard Model theories and emphasizes the crucial role of next-generation colliders in exploring these possibilities.",
      imageUrl: config.basePath+"VLL.png",
      publicationUrl: "https://arxiv.org/abs/2403.11862"
    },
    {
      id: 2,
      title: "Reconciling collider signals, dark matter, and the muon anomalous magnetic moment in the supersymmetric U(1)_R × U(1)_{B−L} model",
      journal: "Journal of High Energy Physics",
      year: "2023",
      recap: "This research presents a comprehensive analysis of a supersymmetric model based on the SU(3)_C × SU(2)_L × U(1)_R × U(1)_{B−L} gauge group, a simplified version of the left-right supersymmetric model. The study explores both universal and non-universal boundary conditions, identifying viable scenarios that satisfy dark matter constraints and potentially yield observable signatures at the High-Luminosity Large Hadron Collider (HL-LHC). In universal scenarios, the lightest supersymmetric particle (LSP) is always a mixture of two binos, while non-universal scenarios allow for diverse LSP candidates, including higgsino-like states and sneutrinos. Several benchmarks were identified that satisfy all constraints and show promising collider signatures, with some potentially eliminating background entirely. Notably, one benchmark was found to address the muon g-2 anomaly while remaining consistent with other constraints. The research demonstrates that this model could be distinguished from other supersymmetric theories through a combination of dark matter experiments, collider signals, and Z′ phenomenology, making it a promising candidate for investigation at the HL-LHC.",
      imageUrl: config.basePath+"/susy.png",
      publicationUrl: "https://link.springer.com/article/10.1007/JHEP06(2023)001"
    },
    {
      id: 3,
      title: "Behavior of a Free Quantum Particle in the Poincaré Upper Half-Plane Geometry",
      journal: "Annals of Physics",
      year: "2020",
      recap: "This study explores the transition from quantum mechanics in Euclidean space to its extension in curved space, focusing on the Poincaré upper half-plane geometry. The research introduces metric-dependent terms into generalized equations to account for curvature effects. A key aspect of the study is the introduction of a modified momentum operator that incorporates curved space geometry while maintaining Hermiticity. This led to the derivation of a generalized Ehrenfest theorem, revealing the Hamiltonian's dependence on both the background curved space components and the particle's position. The researchers developed an invariant form of the Ehrenfest theorem using a new geometric position-dependent differential operator and an effective potential including tidal forces from the curved background. The study derived the wave function for a free particle in the Poincaré upper half-plane geometry, which surprisingly showed bounded behavior along the y-axis despite being free. An effective potential barrier increasing exponentially as x tends to infinity was observed, causing the probability density φ(x)^2 to approach zero at infinity. Near x = 0, the probability density exhibited fractal characteristics with increasing density as x tends to 0. The research also confirmed a minimal non-zero energy for a free quantum particle in this curved background.",
      imageUrl: config.basePath+"/geometry.png",
      publicationUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0003491620301688?via%3Dihub"
    },
    {
      id: 4,
      title: "IR-deformed thermodynamics of quantum bouncers and the issue of dimensional reduction",
      journal: "arXiv",
      year: "2020",
      recap: "This paper investigates quantum gravitational effects in low-energy systems, focusing on ultracold neutrons modeled as quantum bouncers. The research explores the infrared regime, complementing previous studies on the ultraviolet regime. The authors introduce an infrared-modified quantum mechanics with a minimal measurable momentum, applying it to the Nesvizhevsky et al. experiment. Using a modified Hamiltonian and WKB approximation, they derive energy spectra and bound states for a one-dimensional quantum bouncer. The results align with experimental observations, showing increased localization and slightly reduced spatial frequency in wave functions as the deformation parameter increases. A key finding is the observation of effective thermodynamic dimensional reduction in low-energy systems. The study reveals that three-dimensional quantum bouncers behave as a two-dimensional system (D = 3 to D = 2), contrasting with the typical high-energy reduction from D = 3 to D = 1. This marks the first observation of dimensional reduction in the infrared regime of a phenomenological quantum gravitational setup, potentially opening new avenues for probing quantum gravity at low energies.",
      imageUrl: config.basePath+"/reduction.png",
      publicationUrl: "https://doi.org/10.48550/arXiv.2002.10279"
    },
    {
      id: 5,
      title: "The role of an invariant IR cutoff in late time cosmological dynamics",
      journal: "Phys. Lett. B",
      year: "2019",
      recap: "This paper explores the implications of incorporating a minimal measurable momentum, or infra-red (IR) cutoff, into quantum mechanics and its effects on cosmological dynamics. The research bridges quantum mechanical considerations in curved spacetime with large-scale universe dynamics. The study begins by examining the thermodynamics of an AdS-Schwarzschild black hole's event horizon, incorporating the IR cutoff. This leads to a modified entropy-area relation with a leading logarithmic correction term, consistent with other quantum gravity approaches. Notably, the authors derive an exact geometric logarithmic prefactor related to the AdS/dS curvature radius and, consequently, to the cosmological constant. Extending this analysis to the universe's apparent horizon using Verlinde's entropic gravity conjecture, the researchers derive IR-deformed Friedmann and acceleration equations. These modifications effectively introduce a fluid with an equation of state that crosses the phantom divide line, potentially explaining the late-time cosmic acceleration. The IR cutoff's effects are interpreted as an effective fluid mimicking an observationally viable dark energy component at late times. The authors constrain the IR-deformed uncertainty relation parameter using PLANCK2018 observational data.In conclusion, the paper demonstrates that an IR cutoff, typically considered irrelevant to quantum mechanics, plays a crucial role in understanding the universe's large-scale dynamics at late times. This research provides a novel link between quantum mechanical effects and cosmological phenomena, offering new insights into the nature of dark energy and cosmic acceleration.",
      imageUrl: config.basePath+"/IR.png",
      publicationUrl: "https://doi.org/10.1016/j.physletb.2019.03.032"
    },
  ];
    const interests = [
        { id: 'astronomy', image: config.basePath+'/astronomy.webp', description: 'Exploring the cosmos' },
        { id: 'photography', image: config.basePath+'/photography.avif', description: 'Capturing nature\'s beauty' },
        { id: 'music', image: config.basePath+'/music.jpg', description: 'Enjoying classical compositions' },
      ];

      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'];


  return (
          <div className={styles.researchContainer}>
                <h1 className={styles.heading}>Research in Computational Particle Physics</h1>
                <div className={styles.bannerImageContainer}>
                  <img src = "Portfolio/research_banner.jpg" alt="Computational Particle Physics Research" className={styles.bannerImage} />
                </div>
                
          <p className={styles.recapSection} style={{ fontSize: "1.3em" }}>
          My research bridges theoretical particle physics with advanced computational methods, focusing on collider studies of Beyond the Standard Model (BSM) physics at both the Large Hadron Collider (LHC) and future linear colliders. Working at Concordia University in collaboration with Sorbonne University, I investigate BSM signals arising from theories with extended gauge groups and enriched Higgs sectors, exploring potential new physics signatures across different collider environments.</p>
          <p className={styles.recapSection} style={{ fontSize: "1.3em" }}>
          My current work centers on studying BSM signals in muon colliders, particularly investigating the Type-II Seesaw model through Vector Boson Fusion (VBF) processes. I specialize in implementing the VLC jet clustering algorithm for these novel collision environments and the development of SFS (Simple Fast Simulation) cards for muon colliders, providing essential detector simulation capabilities through detailed smearing functions, tagging and reconstruction efficiencies.</p>
          <p className={styles.recapSection} style={{ fontSize: "1.3em" }}>
          My expertise spans the implementation of complete collider simulation workflows using state-of-the-art software tools. I employ <b>FeynRules</b> and <b>SARAH</b> for model building and implementation of new BSM theories, followed by <b>SPheno</b> for spectrum generation and parameter scans over hyperdimensional spaces. For collider phenomenology, I utilize <b>MadGraph_aMC@NLO</b> for event generation, <b>Pythia</b> for parton showering, and <b>Delphes/SFS</b> for detector simulation, complemented by <b>FastJet</b> for jet clustering with different algorithms. I leverage <b>MadAnalysis</b> for event analysis and <b>micrOMEGAs</b> for dark matter phenomenology. This comprehensive toolchain enables me to conduct thorough investigations of BSM signals and their experimental signatures across different collider scenarios.</p>
          <p className={styles.recapSection} style={{ fontSize: "1.3em" }}>
          I excel in automation and high-performance computing, developing sophisticated Python and Bash scripts to orchestrate complex computational workflows. Using the <b>SLURM</b> workload manager on <b>Calcul Québec</b> clusters, I efficiently execute large-scale parameter space scans and parallel computations, processing vast amounts of collision data. This computational approach allows me to thoroughly explore the parameter space of BSM theories and identify promising regions where new physics signals might be detected at current and future colliders in high luminosity regime.
                </p>
                
                <div className={styles.publicationsGrid}>
        {publications.map((pub) => (
          <div key={pub.id} className={styles.publicationItem}>
            <h2 className={styles.recapHeading }> 
                <LatexRenderer text={pub.title} />
            </h2>
            <div className={styles.recapSection}>
              <p className={styles.publicationInfo}>{pub.journal}, {pub.year}</p>
              <p className={styles.paragraph}>
                <LatexRenderer text={pub.recap} />
              </p>
            </div>
            <div
              className={styles.imageSection}
              onMouseEnter={() => setHoveredPublication(pub.id)}
              onMouseLeave={() => setHoveredPublication(null)}
            >
              <a href={pub.publicationUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={pub.imageUrl}
                  alt={pub.title}
                  className={`${styles.publicationImage} ${hoveredPublication === pub.id ? styles.hovered : ''}`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
          <div className={styles.interestsSection}>
                <h2 className={styles.subheading}>Beyond Science: My Other Passions</h2>
          <p className={styles.recapSection} style={{ fontSize: "1.3em" }}>
                  While my professional life revolves around data science and particle physics, I find balance and inspiration in other areas. I'm an avid amateur astronomer, always eager to explore the night sky. Nature photography allows me to capture the beauty of our world, from grand landscapes to minute details. And in moments of reflection, I find solace in the timeless compositions of classical music.
                </p>
              </div>

              <div className={styles.interestsGrid}>
                {Array(3).fill().map((_, rowIndex) => (
                  <div key={rowIndex} className={styles.interestsRow}>
                    {Array(3).fill().map((_, colIndex) => {
                      const isDiagonal = rowIndex === colIndex;
                      const interest = isDiagonal ? interests[rowIndex] : null;
                      const colorIndex = (rowIndex * 3 + colIndex) % colors.length;

                      return (
                        <div
                          key={colIndex}
                          className={`${styles.interestCell} ${isDiagonal ? styles.interestImage : styles.colorSquare}`}
                          style={!isDiagonal ? { backgroundColor: colors[colorIndex] } : {}}
                          onMouseEnter={() => isDiagonal && setHoveredInterest(interest.id)}
                          onMouseLeave={() => setHoveredInterest(null)}
                        >
                          {isDiagonal && (
                            <>
                              <img src={interest.image} alt={interest.id} />
                              {hoveredInterest === interest.id && (
                                <div className={styles.interestOverlay}>
                                  <p>{interest.description}</p>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          );
        };

        export default ResearchPublications;
