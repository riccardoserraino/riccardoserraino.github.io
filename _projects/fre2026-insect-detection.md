---
title: Insect Detection Stack for Agricultural Robotics
short_title: FRE2026 Insect Detection
subtitle: Real-time perception for an autonomous field robot, from dataset to on-device inference on a Luxonis OAK-D Pro.
degree: msc
order: 1
featured: true
kind: Competition project · AIRLab
role: Robotics Team Member, perception lead
period: Mar 2026 – Jun 2026
place: AIRLab, Politecnico di Milano · Field Robot Event 2026, Germany
team: with Giuliano Livi
cover: /assets/images/projects/fre2026-insect-detection/cover.svg
cover_fit: contain
cover_bg: "linear-gradient(180deg, #0d1b2a 0%, #14304a 44%, #1f4d2b 44%, #0f2a17 100%)"
summary: Trained and deployed a YOLO11 detector on an OAK-D Pro camera to spot bees, butterflies and ladybugs in the field, integrated into the robot through ROS 2 and Docker.
tags: [ROS 2, YOLO11, Luxonis OAK-D Pro, DepthAI, C++, Python, Docker, RViz, Foxglove]
links:
  - label: Project hub
    url: https://github.com/riccardoserraino/Insect_Classifier
    icon: fab fa-github
  - label: YOLO training
    url: https://github.com/riccardoserraino/Insect_Detection_YOLO
    icon: fas fa-brain
  - label: OAK-D / ROS 2 node
    url: https://github.com/riccardoserraino/OAK_Detection
    icon: fas fa-camera
  - label: FRE2026
    url: https://www.fieldrobotevent.eu/
    icon: fas fa-tractor
metrics:
  - value: "3"
    label: insect classes (bee, butterfly, ladybug)
  - value: "5"
    label: model iterations, CNN → YOLO11
  - value: On-device
    label: inference on the OAK-D Pro VPU
  - value: ROS 2
    label: nodes in C++ and Python
pipeline:
  - title: Dataset
    text: Custom labelled dataset in YOLO format (Roboflow), covering puppets, printed images and text labels.
  - title: Tune & train
    text: Automated hyperparameter search, then fine-tuning of YOLO11 with Ultralytics.
  - title: Export
    text: Model converted for the Luxonis VPU so inference runs on the camera itself.
  - title: DepthAI node
    text: C++ ROS 2 node running RGB + neural network + stereo depth in a single DepthAI pipeline.
  - title: Signal
    text: Detections streamed over ROS 2 and shown to the judges through an LED signal.
---

## The challenge

The [Field Robot Event](https://www.fieldrobotevent.eu/) is an international competition where autonomous robots drive through real crop rows. In the 2026 edition, insects appeared in the field as **puppets, printed images or text labels**, and the robot had to recognise them **in real time** from a camera mounted on board.

I competed with the [AIRLab team](https://airlab.deib.polimi.it/) of Politecnico di Milano and was responsible, together with Giuliano Livi, for the **perception subsystem**: the full chain from data collection to a detector running on embedded vision hardware and talking to the rest of the robot.

## Getting to the right model

The model choice was driven by what worked in the field, not only by benchmark accuracy. We went through five stages before the competition:

| Stage | Model | Why we moved on |
|---|---|---|
| Baseline | Simple CNN | Limited generalisation on real field data |
| Transfer learning | MobileNet | Better accuracy, unstable with occlusions and multiple objects |
| Detection prototype | YOLOv6 | Integration issues with ROS 2 and the embedded pipeline |
| Final prototype | YOLO11 + EasyOCR | Best balance of accuracy, speed and deployability on the OAK-D |
| Competition build | YOLO11 | Rules changed, text reading was no longer required |

YOLO11 (nano) won because it runs fast on edge devices, stays robust in cluttered scenes, integrates cleanly with DepthAI and ROS 2, and handles a mix of inputs (images, puppets, text).

## Running on the robot

The deployment layer runs inside a **Docker** container with a **ROS 2** workspace. A C++ node builds a **DepthAI pipeline** on the OAK-D Pro that combines the RGB stream, on-device YOLO11 inference and stereo depth, then publishes images and detections to ROS 2. Variants of the node support a **dual-camera** setup and an **OCR service** (C++ client → Python EasyOCR server through a custom `OcrReadService`) that crops text regions and maps them to an insect class.

When an insect is detected, the robot shows the judges which one it found through an **LED signal**. The system was debugged and validated with **RViz** and **Foxglove Studio**, through field tests and competition trials.

## What I take away

- Shipping a model to a robot is mostly a systems problem: latency, packaging and interfaces mattered as much as mAP.
- Iterating quickly through architectures, and dropping them as soon as field data showed their limits, saved the project.
- Containerising the whole stack made it reproducible across team laptops and the robot itself.
