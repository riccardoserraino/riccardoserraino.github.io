---
title: sEMG-Based Robotic Hand Control via Muscle Synergy Extraction
short_title: Muscle Synergy Extraction
subtitle: Unsupervised learning to compress multi-channel forearm EMG into a few signals that can drive a robotic hand.
degree: bsc
order: 2
kind: Research internship
role: Research Intern, machine learning for human–robot interaction
period: Feb 2025 – Apr 2025
place: Laboratory of Automation and Robotics, University of Bologna
team: "Supervisors: Prof. R. Meattini, A. Bernardini"
cover: /assets/images/projects/synergy-extraction/synergy-network.png
cover_fit: contain
summary: Compared NMF, Sparse NMF, PCA and autoencoders for extracting muscle synergies from forearm EMG, with automatic tuning of the number of synergies and their sparsity.
tags: [Python, NMF, Sparse NMF, PCA, Autoencoders, Cross-validation]
links:
  - label: Report
    url: https://drive.google.com/file/d/1_Y5TupEP1J0GJu6uWnu5huAnkOlGUJwy/view?usp=sharing
    icon: fas fa-file-pdf
  - label: Repository
    url: https://github.com/riccardoserraino/muscle_synergy_extraction_analysis
    icon: fab fa-github
metrics:
  - value: "4"
    label: decomposition methods compared
  - value: "3"
    label: grasp types (power, pinch, ulnar)
  - value: VAF · RMSE
    label: and Frobenius norm as quality metrics
pipeline:
  - title: Load & normalise
    text: Pre-recorded forearm EMG for power, pinch and ulnar grasps.
  - title: NMF / Sparse NMF
    text: Linear, non-negative synergies scored on VAF and Frobenius norm.
  - title: Auto-tuning
    text: Cross-validation and multi-criteria scoring choose the synergy count and sparsity.
  - title: Autoencoders
    text: Non-linear latent spaces as richer synergy representations.
  - title: Benchmark
    text: PCA vs NMF vs Sparse NMF, RMSE against the number of synergies.
---

## Why synergies

Controlling a robotic hand finger by finger from raw multi-channel EMG is hard: the signals are noisy, high-dimensional and redundant. **Muscle synergies** compress them into a few coordinated patterns that are easier to interpret and can act directly as **control inputs**.

This internship, at the Laboratory of Automation and Robotics of the University of Bologna, explored which **unsupervised learning** methods give the best low-dimensional representation of forearm EMG during grasping.

{% include figure.html src="/assets/images/projects/synergy-extraction/synergy-network.png" caption="The idea: many EMG channels → a few hidden synergies → motion intent." %}

## Development phases

1. **Classical and Sparse NMF**: synergy extraction, evaluated with *Variance Accounted For* (VAF) and the Frobenius norm of the reconstruction error.
2. **Automatic optimisation**: a cross-validation framework with multi-criteria scoring that picks the **optimal number of synergies** and the **sparsity parameters** without manual tuning.
3. **Autoencoders**: non-linear dimensionality reduction for more expressive representations of muscle activity.
4. **Comparative study**: PCA vs classical NMF vs Sparse NMF, using RMSE across different numbers of synergies.

{% include figure.html src="/assets/images/projects/synergy-extraction/snmf-decomposition.png" caption="Sparse NMF decomposition: input EMG (top), synergy weights per channel (middle), synergy activations over time (bottom)." %}

## Software

The code is organised into **modules**: configuration (YAML), analysis classes (NMF, PCA, autoencoder, data loading, error metrics), helper utilities and a test layer. This makes experiments reproducible and easy to extend, and the same building blocks became the starting point of my [bachelor thesis](/projects/semg-motion-tracking/).
