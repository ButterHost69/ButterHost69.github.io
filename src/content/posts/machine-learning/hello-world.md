---
title: "Getting started with adapTrunc"
description: "Using class separability as a proxy to find optimal truncation depth in BERT-style models."
pubDate: 2025-04-01
tags: ["ML", "NLP", "research"]
---

This is a sample post — replace this with your own content.

## The core idea

We want to find the smallest prefix of transformer layers that still produces
linearly separable embeddings for binary classification. Rather than fine-tuning
at every depth, we use the **Class Separability Metric (CSM)** as a cheap proxy.

## Why truncation matters

Running all 22 layers of ModernBERT-base for every inference call is expensive.
If layers 12–22 add marginal separability for your specific task, you're paying
a compute cost for nothing.

> The interesting question is how well CSM correlates with fine-tuned accuracy
> across truncation depths.

## What's next

- Validate CSM–accuracy correlation on spam and CoLA datasets  
- Compare frozen vs. unfrozen layer-head weights at each depth  
- Write up results
