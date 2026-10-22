---
title: Muscle Synergy-Based Analysis of Hand Motion using sEMG and Optical Tracking
short_title: BSc Thesis · sEMG & Motion Tracking
subtitle: Estimating how closed a hand is from muscle activity alone, validated against Vicon motion capture.
degree: bsc
order: 1
featured: true
kind: Bachelor thesis
role: Undergraduate Thesis Researcher, human motion analysis
period: Apr 2025 – Jul 2025
place: Laboratory of Automation and Robotics, University of Bologna
team: "Contributor: Giuliano Livi · Supervisors: Prof. R. Meattini, A. Bernardini, M. Orlandi, Prof. S. Benatti"
cover: /assets/images/projects/bsc-thesis-semg-tracking/setup-annotated.webp
cover_fit: contain
summary: Dual-sensor framework fusing a 16-channel sEMG armband with Vicon motion capture. Sparse NMF muscle synergies estimate hand closure and are scored against kinematic ground truth.
tags: [Python, ROS1, Docker, Sparse NMF, Vicon, Inverse kinematics, Signal processing]
links:
  - label: Request the thesis
    url: "mailto:ricc.serraino@gmail.com?subject=Request%3A%20BSc%20thesis%20(sEMG%20%26%20Motion%20Tracking)&body=Hi%20Riccardo%2C%0A%0AI%20would%20like%20to%20read%20your%20bachelor%20thesis.%0A%0AName%3A%0AOrganisation%3A%0AReason%3A%0A%0AThanks!"
    icon: mail
    note: The full thesis is shared on request. Send me an email and I'll reply with a download link.
  - label: Slides
    url: https://docs.google.com/presentation/d/1xnjj_YqmfuwMnQDb104f-VHUoS_RU7xX/edit?usp=sharing&ouid=103037998880995221201&rtpof=true&sd=true
    icon: presentation
  - label: Repository
    url: https://github.com/riccardoserraino/sEMG_Motion_Tracking
    icon: github
metrics:
  - value: 4/4
    label: thesis grade
  - value: "16"
    label: sEMG channels (BioGAP armband)
  - value: "15"
    label: gestures and grasps recorded
  - value: 2
    label: sensing modalities, synchronised in ROS
pipeline:
  - title: Acquire
    text: 16-channel sEMG armband and Vicon markers on a custom glove, recorded together in ROS.
  - title: Filter
    text: 4th-order Butterworth band-pass (20–500 Hz), 50 Hz notch, moving-window RMS.
  - title: Extract synergies
    text: Sparse NMF splits EMG into synergy weights and their activations over time.
  - title: Kinematic truth
    text: Hungarian matching, palm frame, 3-DOF finger IK, then a normalised closure index.
  - title: Compare
    text: EMG-based closure against motion-capture closure, gesture by gesture.
---

## Research question

Can **muscle synergies**, the coordinated activation patterns the nervous system uses to drive groups of muscles, tell us **how closed the hand is** during a grasp? If they can, a forearm EMG armband becomes an intuitive input for **prosthetic hands, teleoperation and human–machine interfaces**.

To answer this, I built a **dual-sensor experimental framework** that records muscle activity and hand kinematics at the same time, so the EMG estimate can be checked against an independent ground truth.

{% include figure.html src="/assets/images/projects/bsc-thesis-semg-tracking/testing.webp" caption="Recording session: EMG armband on the forearm, reflective-marker glove and the Vicon cameras around the workspace." %}

## Experimental setup

- **sEMG**: a 16-channel BioGAP armband on the forearm.
- **Motion capture**: a Vicon system tracking reflective markers on a custom glove, with markers on the fingertips and a rigid triangle on the back of the hand.
- **Synchronisation**: both streams recorded inside a **ROS** environment while subjects performed **15 gestures**: single-finger flexions plus power, pinch, ulnar and object grasps (bottle, pen, phone, tablet…).

{% include figure-pair.html a="/assets/images/projects/bsc-thesis-semg-tracking/biogap-armband.webp" a_caption="16-channel BioGAP sEMG armband" b="/assets/images/projects/bsc-thesis-semg-tracking/glove.webp" b_caption="Marker glove for optical tracking" %}

{% include figure.html src="/assets/images/projects/bsc-thesis-semg-tracking/pipeline.webp" caption="Overall framework: two parallel pipelines (sEMG and kinematics) meet in the hand-closure comparison." %}

## Kinematic ground truth

Raw Vicon markers come **unlabelled** and sometimes drop out. I used the **Hungarian algorithm** to keep a consistent finger identity from frame to frame. Positions were then moved from the Vicon world frame into a **local palm frame** with homogeneous transformations, which isolates finger motion from arm motion.

Each finger was modelled as a **3-DOF planar manipulator** with Denavit–Hartenberg parameters, and its joint angles were recovered through **inverse kinematics**. Averaging the normalised joint angles of all fingers gives a continuous **closure index**, the benchmark for the EMG estimate.

{% include figure-pair.html a="/assets/images/projects/bsc-thesis-semg-tracking/hand-model-grasp.webp" a_caption="Reconstructed hand model during a grasp" b="/assets/images/projects/bsc-thesis-semg-tracking/theta-angle.webp" b_caption="Finger flexion angle between knuckle axis and fingertip" %}

## Synergy-based estimation

The EMG channels are band-pass filtered (**Butterworth, 4th order, 20–500 Hz**), notch-filtered at **50 Hz** to remove powerline noise, and smoothed with a **moving-window RMS**. **Sparse NMF** then factorises the signal into synergy weight patterns and their activations over time.

The closure estimate comes from the **difference between flexion-related and extension-related synergy activations**, normalised with a reference value computed on training data.

{% include figure-pair.html a="/assets/images/projects/bsc-thesis-semg-tracking/bandpass-bode.webp" a_caption="Bode diagram of the band-pass filter" b="/assets/images/projects/bsc-thesis-semg-tracking/snmf-decomposition.webp" b_caption="Sparse NMF decomposition of a power-grasp recording" %}

## Results

The EMG-based closure index was compared with the motion-capture closure for each gesture, and the estimation error was measured over single trials and repeated grasps. Synergies turned out to be an **interpretable representation of movement intent** that **follows the dynamics of hand closure**, which makes them a good basis for future work on human–machine interfaces, robotic teleoperation and prosthetic hand control.

{% include figure.html src="/assets/images/projects/bsc-thesis-semg-tracking/closure-repetitions.webp" caption="Repeated power grasps: Vicon closure (top), synergy-based EMG closure (middle) and their absolute difference (bottom)." %}
