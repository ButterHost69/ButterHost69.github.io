---
title: "Architecture"
description: "System design and component overview"
---

## High-Level Design

adapTrunc consists of three main components:

1. **Embedding Extractor** — hooks into each transformer layer to pull hidden states
2. **CSM Calculator** — computes class separability metric per layer
3. **Truncation Selector** — picks the shallowest depth where CSM > threshold

## Data Flow

```
Input Text → Tokenizer → Transformer (layer by layer)
                                   ↓
                              Hidden States
                                   ↓
                            CSM Calculator
                                   ↓
                         Optimal Depth ←── Threshold
```

## Decisions

We chose to freeze all layer weights rather than fine-tune per depth. This keeps
the search space O(n) in layers rather than O(n × tasks).