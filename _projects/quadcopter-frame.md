---
title: Quadcopter Frame
short_title: Quadcopter Frame
subtitle: Parametric CAD design of a lightweight quadcopter frame, built around stiffness-to-weight and manufacturability.
degree: msc
order: 3
kind: Course project · CAD
role: Designer
period: MSc coursework, 2025 – 2026
place: Politecnico di Milano
cover: /assets/images/projects/quadcopter-frame/cad.png
cover_fit: contain
summary: Constraint-driven Fusion 360 model of a quadcopter frame, tuned for symmetry, balanced mass and stiffness-to-weight, with clean routing for standard components.
tags: [Fusion 360, Parametric CAD, DFM, Technical drawings]
links:
  - label: Download model
    url: https://drive.google.com/file/d/1tWVB5hPg3WMRdmAUrZLJ5Mw5jjcwYnOI/view?usp=sharing
    icon: fas fa-cube
metrics:
  - value: 100%
    label: parametric, constraint-driven
  - value: 4-fold
    label: symmetric layout for balanced mass
  - value: DFM
    label: designed for CNC manufacturing
pipeline:
  - title: Constraints
    text: Component envelope, motor spacing and assembly limits fixed as parameters.
  - title: Parametric model
    text: Sketches and features driven by those parameters for fast iterations.
  - title: Optimise
    text: Lightening cut-outs and ribs for stiffness-to-weight and symmetry.
  - title: Drawings
    text: Technical drawings and a manufacturing-ready model.
---

## Design intent

The frame was modelled in **Autodesk Fusion 360** with a fully **parametric, constraint-driven** approach: key dimensions such as motor spacing and component mounts are parameters, so every design iteration stays consistent.

The geometry was tuned for **symmetry**, **balanced mass distribution** and a good **stiffness-to-weight ratio**. It stays compatible with standard drone components and leaves clean paths for **cable routing**.

{% include figure.html src="/assets/images/projects/quadcopter-frame/cad.png" caption="Final frame: lattice cut-outs reduce mass while ribs keep the central plate and arms stiff." %}

## Manufacturability

The model was built with **design for manufacturability** in mind, so it can go to CNC machining without rework. This project didn't include the CAM step itself, but I have previous experience with CAM workflows: defining toolpaths and preparing manufacturing-ready models for CNC.
