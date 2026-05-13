---
title: "Layer Pruning"
description: "Implementation details of the truncation logic"
---

## Hook-Based Extraction

We use PyTorch forward hooks to capture hidden states without modifying the
model graph:

```python
from transformers import AutoModel

model = AutoModel.from_pretrained("answerdotai/ModernBERT-base")
activations = {}

def make_hook(name):
    def hook(module, input, output):
        activations[name] = output.detach()
    return hook

for i, layer in enumerate(model.encoder.layer):
    layer.register_forward_hook(make_hook(f"layer_{i}"))
```

## CSM Computation

The Class Separability Metric is defined as the ratio of between-class variance
to within-class variance in the embedding space at a given layer depth.