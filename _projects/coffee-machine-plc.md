---
title: Automatic Coffee Machine Control System
short_title: Coffee Machine PLC
subtitle: An industrial-style control system in CODESYS, with sequential logic, a live HMI and multi-level alarm handling.
degree: bsc
order: 3
kind: Course project · Industrial automation
role: Control designer
period: BSc coursework
place: University of Bologna
cover: /assets/images/projects/coffee-machine-plc/hmi.webp
cover_fit: contain
summary: PLC control of an automatic coffee machine in CODESYS (SFC + ST) with a supervisor that coordinates generalised actuators, an interactive HMI and fault-safe alarm logic.
tags: [CODESYS V3.5, IEC 61131-3, SFC, Structured Text, HMI, Alarm management]
links:
  - label: Report
    url: https://drive.google.com/file/d/1RlMFnOefR9BGjMiyVZKrw9emmvjuI0VZ/view?usp=sharing
    icon: file-text
metrics:
  - value: "4"
    label: beverages
  - value: "3"
    label: coffee strengths
  - value: SFC + ST
    label: IEC 61131-3 languages
pipeline:
  - title: Select
    text: The user picks a beverage and a coffee strength on the HMI.
  - title: Supervise
    text: The supervisor sequences the actuator groups and enforces ordering constraints.
  - title: Actuate
    text: Generalised actuators for coffee, water, milk and serving.
  - title: Monitor
    text: Live levels, temperatures and process state on the HMI.
  - title: Protect
    text: Multi-level alarms with acknowledgement and safe reset.
---

## Overview

The project models a realistic beverage process with **industrial automation** principles. A **CODESYS** application controls an automatic coffee machine with **four beverages** and **three coffee strengths**, combining sequential control, a Human-Machine Interface and fault management.

{% include figure.html src="/assets/images/projects/coffee-machine-plc/process-schematic.webp" caption="Process schematic: tanks, dispensers, brewing unit, valves and sensors." %}

## Control architecture

The control follows a **supervisor** pattern that coordinates several **Generalised Actuators (GA)**: coffee, water, milk and serving. Sequences are written in **Sequential Function Chart (SFC)** and the logic in **Structured Text (ST)**. The supervisor handles beverage selection, strength levels and the constraints on which step can run when.

## HMI and safety

An interactive **HMI** shows ingredient levels, temperatures and the current process state in real time. A **multi-level alarm system** detects faults (piston up/down errors, water and milk faults) and puts the machine in a safe state. The operator then has to **acknowledge** the alarm and run a **reset** procedure before operation can resume.

{% include figure.html src="/assets/images/projects/coffee-machine-plc/hmi.webp" caption="Operator HMI: beverage and strength selection, machine information, alarm list and fault injection buttons." narrow=true %}
