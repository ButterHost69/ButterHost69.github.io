---
title: "adapTrunc"
description: "Using class separability as a proxy to find optimal truncation depth in BERT-style models."
cardDescription: "Adaptive truncation for transformer models via class separability metrics."
tags: ["Python", "PyTorch", "NLP", "ML"]
links:
  - label: "Paper"
    url: "https://example.com/paper"
github: "ButterHost69/adaptrunc"
showGitHubMetrics: true
featured: true
thumbnail: "/projects/adaptrunc/screenshot.png"
---

## Overview

**adapTrunc** explores whether we can use class separability as a proxy to find
the optimal truncation depth in BERT-style models — the goal being faster
inference without fine-tuning every layer.

## Key Results

- CSM correlates strongly with fine-tuned accuracy on spam detection
- 40% speedup at only 2% accuracy loss when truncating at layer 14

## Related Writing

- [TCP Handshake Deep Dive](/blogs/tcp-handshake-deep-dive) — networking fundamentals that informed the distributed evaluation pipeline