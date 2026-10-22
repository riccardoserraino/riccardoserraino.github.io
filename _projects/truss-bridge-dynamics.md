---
title: Truss Bridge Dynamic Analysis
short_title: Truss Bridge Dynamics
subtitle: Finite element model of a single-span steel truss bridge under seismic and moving train loads, with a redesign that cuts vibration.
degree: msc
order: 2
kind: Course project · Dynamics of Mechanical Systems
role: Author
period: MSc coursework, 2025 – 2026
place: Politecnico di Milano
cover: /assets/images/projects/truss-bridge-dynamics/mode1.png
cover_fit: contain
summary: FEM modal and frequency-response study of a steel truss bridge, finding the train speeds that cause resonance and redesigning members for >20% less vertical acceleration.
tags: [MATLAB, FEM, Modal analysis, FRF, Seismic response, Structural optimisation]
links:
  - label: Repository
    url: https://github.com/riccardoserraino/Truss_Brigde_Stability_Analysis
    icon: fab fa-github
  - label: Report
    url: https://drive.google.com/file/d/1ILzm5E_JZh8a6ovyjlHR7cFHjC-hCF4H/view?usp=sharing
    icon: fas fa-file-pdf
metrics:
  - value: 0–30 Hz
    label: validated model bandwidth
  - value: "5"
    label: natural modes below 30 Hz
  - value: ">20%"
    label: lower vertical acceleration at point B
  - value: "≤5%"
    label: added structural mass
pipeline:
  - title: FEM model
    text: Planar truss with geometry, material properties and hinge–roller constraints.
  - title: Modal analysis
    text: Natural frequencies and mode shapes of the structure.
  - title: FRFs
    text: Displacement and acceleration frequency responses at critical nodes.
  - title: Seismic & moving load
    text: Ground-motion response and resonance under train passage.
  - title: Redesign
    text: Member changes to reduce vibration under a strict mass budget.
---

## Goal

Characterise how a single-span metallic truss bridge vibrates, find the loading conditions that put it in resonance, and change the structure to reduce vibration without making it noticeably heavier. The bridge is modelled as a **planar truss** using the **Finite Element Method**, built and solved in MATLAB with the `dmb_fem_2` toolbox.

{% include figure.html src="/assets/images/projects/truss-bridge-dynamics/configuration.png" caption="Simplified bridge configuration (left) and the reference structure (right)." %}

## Modal behaviour

The model was refined until it was accurate up to **30 Hz**. Below that limit the bridge has five natural modes, at **2.32, 8.31, 12.73, 17.66 and 26.46 Hz**. The first mode is a global vertical bending of the deck. Higher modes add antisymmetric and local truss deformations.

{% include figure-pair.html a="/assets/images/projects/truss-bridge-dynamics/mode1.png" a_caption="Mode 1 · 2.32 Hz" b="/assets/images/projects/truss-bridge-dynamics/mode3.png" b_caption="Mode 3 · 12.73 Hz" %}

## Forced response

Frequency response functions (displacement and acceleration) were computed at the critical nodes. The bridge was then excited by a **seismic ground motion** and by a **train crossing**. For the moving load, each natural frequency corresponds to a **critical train speed**: from about 35 km/h for the first mode up to about 394 km/h for the fifth.

{% include figure-pair.html a="/assets/images/projects/truss-bridge-dynamics/seismic.png" a_caption="Vertical displacement of points A and B under seismic excitation" b="/assets/images/projects/truss-bridge-dynamics/critical-speed.png" b_caption="Critical train speeds and natural frequencies" %}

## Redesign

The final step was a **constrained structural modification**: members were reinforced to lower the vertical acceleration at point B. The result was **more than 20% lower acceleration**, with the structural mass growing by **5% or less**.

{% include figure-pair.html a="/assets/images/projects/truss-bridge-dynamics/modified-structure.png" a_caption="Modified structure" b="/assets/images/projects/truss-bridge-dynamics/frf-comparison.png" b_caption="Acceleration FRF at point B, original vs modified" %}
