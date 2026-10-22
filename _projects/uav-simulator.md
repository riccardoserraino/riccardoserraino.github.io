---
title: UAV Dynamics Simulator
short_title: UAV Simulator
subtitle: A lightweight Python simulator of a quadrotor and a fully-actuated hexacopter, built from the rigid-body equations.
degree: msc
order: 3
kind: Project · Aerial robotics
role: Developer
period: 2026
cover: /assets/images/projects/uav-simulator/cover.svg
cover_fit: contain
summary: Quadrotor and hexacopter dynamic models in Python with quaternion attitude, RK4 integration and test scenarios for hover, climb, lateral motion and yaw.
tags: [Python, NumPy, Rigid-body dynamics, Quaternions, RK4, Matplotlib]
links:
  - label: Repository
    url: https://github.com/riccardoserraino/UAV_Models
    icon: github
metrics:
  - value: "2"
    label: vehicle models (4 and 6 rotors)
  - value: "13"
    label: states (position, quaternion, velocities)
  - value: RK4
    label: integration at 1 kHz
pipeline:
  - title: Rotor thrusts
    text: Input is the thrust command of each rotor.
  - title: Wrench
    text: Rotor positions, spin directions and drag give total force and torque.
  - title: Dynamics
    text: Newton–Euler equations with quaternion attitude.
  - title: Integrate & plot
    text: RK4 step, then state and 3D trajectory plots.
---

## What it does

A small, readable simulator for multirotor drones, written from scratch in **Python**. It contains two models:

- a **quadrotor** (4 rotors), the classic under-actuated drone;
- a **hexacopter** with 6 fixed rotors in a **fully-actuated** layout, so it can produce force and torque in every direction (6-DOF wrench).

Each model stores the **state** (position, attitude quaternion, linear and angular velocity), takes **per-rotor thrust** as input, and is integrated with **Runge-Kutta 4**.

## Test scenarios

Short scripts run each model through simple manoeuvres (**hover, climb, lateral motion, yaw**) and plot the states and the 3D trajectory. They are a quick sanity check that the dynamics behave as expected.

{% include figure-pair.html a="/assets/images/projects/uav-simulator/quad-states-up.webp" a_caption="Quadrotor climbing: position, velocity and acceleration" b="/assets/images/projects/uav-simulator/quad-states-yaw.webp" b_caption="Quadrotor yaw manoeuvre: attitude and angular velocity" %}
