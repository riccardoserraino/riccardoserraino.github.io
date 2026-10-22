---
title: RISC-V Single-Cycle CPU Design
short_title: RISC-V Single-Cycle CPU
subtitle: A 32-bit RV32I processor in Verilog, from datapath to control unit, verified through simulation.
degree: bsc
order: 4
kind: Course project · Digital design
role: Designer
period: Exchange year, 2023 – 2024
place: Tongji University, Shanghai
cover: /assets/images/projects/riscv-cpu/architecture.webp
cover_fit: contain
summary: Single-cycle RV32I CPU in Verilog with PC, ALU, register file, memories and a two-level decoder, verified instruction by instruction in simulation.
tags: [Verilog, RISC-V, RV32I, GTKWave, Digital design]
links:
  - label: Report
    url: https://drive.google.com/file/d/1Zgx8-IQiTUCd5IgYAtTKtxsAx3KvLRBM/view?usp=sharing
    icon: file-text
  - label: Repository
    url: https://github.com/riccardoserraino/RISCV-Single-Cycle-CPU-Core-on-Verilog
    icon: github
metrics:
  - value: 32-bit
    label: RISC-V core
  - value: "1"
    label: clock cycle per instruction
  - value: RV32I
    label: base integer instruction set
pipeline:
  - title: Fetch
    text: The program counter addresses instruction memory.
  - title: Decode
    text: Main decoder and instruction decoder generate the control signals.
  - title: Execute
    text: The ALU runs arithmetic, logic and branch comparisons.
  - title: Memory
    text: Load and store through the data memory.
  - title: Write-back
    text: Results go back to the register file in the same cycle.
---

## Overview

The goal was a fully working processor for the **RV32I** base instruction set, written in **Verilog**, with datapath and control designed together so that every instruction executes correctly within its timing.

{% include figure.html src="/assets/images/projects/riscv-cpu/architecture.webp" caption="Single-cycle datapath and control overview." %}

## Architecture

In a **single-cycle** design every instruction completes in one clock cycle. The core includes the **Program Counter**, **ALU**, **Register File**, **Instruction and Data Memory**, an **immediate extender**, and a control unit split into a **main decoder** and an **instruction (ALU) decoder**. The control signals configure the datapath for arithmetic, memory and branch operations.

## Verification

A top-level testbench drives the core, and the results were checked with **waveform analysis in GTKWave** across all instruction types, confirming correct execution.

This core was also the foundation for the [HDMI character display](/projects/riscv-hdmi/) built on a full RISC-V SoC.
