---
title: RISC-V HDMI Character Display System
short_title: RISC-V HDMI Display
subtitle: A custom Verilog IP on a RISC-V SoC that turns characters received over UART into a 640×480 HDMI image.
degree: bsc
order: 5
kind: Course project · FPGA / SoC
role: Designer
period: Exchange year, 2023 – 2024
place: Tongji University, Shanghai
cover: /assets/images/projects/riscv-hdmi/waveform.png
cover_fit: contain
summary: HDMI display peripheral on the ICB bus of a Hummingbird E203 RISC-V core. ASCII characters received over UART are turned into bitmaps in dual-port RAM and streamed at 640×480 at 60 Hz.
tags: [Verilog, FPGA, RISC-V E203, ICB bus, UART, HDMI, GTKWave]
links:
  - label: Report
    url: https://drive.google.com/file/d/1w2TtdcQ2QrlF73KoMJBM5KisJqT4Dvpf/view?usp=sharing
    icon: fas fa-file-pdf
  - label: Repository
    url: https://github.com/riccardoserraino/HDMI-Interface-design-on-Verilog
    icon: fab fa-github
metrics:
  - value: 640×480
    label: resolution at 60 Hz
  - value: ICB
    label: bus peripheral on the E203 core
  - value: UART → HDMI
    label: end-to-end character path
pipeline:
  - title: UART in
    text: ASCII characters arrive from the host over UART.
  - title: RISC-V firmware
    text: The E203 core writes characters to the custom IP through the ICB bus.
  - title: Glyph → bitmap
    text: Characters are converted to pixel bitmaps.
  - title: DPRAM
    text: The frame buffer lives in dual-port RAM.
  - title: HDMI driver
    text: Sync and RGB signals generated for 640×480 at 60 Hz.
---

## Overview

This project combines **digital design**, **memory management** and **video signal generation**. A custom hardware module written in **Verilog** is attached to the **ICB bus** of a **Hummingbird E203 RISC-V core** on FPGA, and displays the ASCII characters it receives over **UART** on an HDMI screen.

## System design

The design is a modular pipeline:

- an **ICB bus interface** that maps the peripheral into the processor's address space;
- **dual-port RAM (DPRAM)** holding the pixel data;
- a character-to-**bitmap** converter;
- an **HDMI driver** that generates the synchronisation and **RGB** signals at **640×480 at 60 Hz**.

At start-up a **colour-bar test mode** checks the timing and signal integrity before switching to character rendering.

{% include figure.html src="/assets/images/projects/riscv-hdmi/waveform.png" caption="GTKWave trace: bus writes into the frame buffer, followed by the HDMI sync and RGB activity." %}

## Debugging

The ICB transactions, memory writes and video timing were all checked through **waveform analysis in GTKWave** before moving to hardware.
