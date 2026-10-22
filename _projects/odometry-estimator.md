---
title: Wheel Odometry for a Skid-Steering Robot
short_title: Odometry Estimator
subtitle: A ROS 2 node that estimates the pose of a tracked robot from its motor speeds, checked live against ground truth.
degree: msc
order: 2
kind: Course project · Robotics
role: Developer
period: Apr 2026
place: Politecnico di Milano
team: with Giuliano Livi
cover: /assets/images/projects/odometry-estimator/cover.svg
cover_fit: cover
summary: C++ ROS 2 odometry for the Agile-X Bunker Pro tracked robot, switching between exact and Runge-Kutta integration, plus a node that measures the error against ground truth.
tags: [ROS 2, C++, Odometry, Kinematics, TF2, RViz, rosbag]
links:
  - label: Repository
    url: https://github.com/riccardoserraino/Odometry_Estimator
    icon: github
metrics:
  - value: "2"
    label: ROS 2 nodes (odometer + error check)
  - value: Adaptive
    label: exact / RK2 integration
  - value: "6"
    label: recorded bags to test on
pipeline:
  - title: Motor RPM
    text: Read left and right track speeds from the robot status topic.
  - title: v and ω
    text: Gear ratio and wheel radius give track speeds, then linear and angular velocity.
  - title: Integrate
    text: Exact arc formula when turning, Runge-Kutta 2 when going almost straight.
  - title: Publish
    text: Odometry message plus an odom → base_link2 transform, resettable through a service.
---

## What it does

The **Agile-X Bunker Pro** is a tracked robot. It has no steering wheels, so it turns by driving its left and right tracks at different speeds (**skid steering**). This project estimates where the robot is, **(x, y, θ)**, from the motor speeds alone, inside **ROS 2**.

## How

From the two track speeds the `odometer` node computes the forward speed **v** (their average) and the turning rate **ω** (their difference divided by the track width). It then integrates them at every step:

- when the robot is **turning** (|ω| above a small threshold), it uses the **exact arc formula**;
- when it is going **almost straight**, it switches to **Runge-Kutta 2** (midpoint), which avoids dividing by a tiny ω.

The pose is published as an odometry message and a TF transform, and a `reset` service sets it back to zero.

## Checking the result

A second node, `tf_error`, compares the estimated transform with the **ground-truth** transform recorded in the bag. It publishes the distance between the two, the elapsed time and the distance travelled. Both frames are shown side by side in a pre-configured **RViz** view.
