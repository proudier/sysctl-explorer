---
layout: sysctl
title: dev_weight
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/dev_weight
sysctl-variable: net.core.dev_weight
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

The maximum number of packets that kernel can handle on a NAPI interrupt,
it's a Per-CPU variable. For drivers that support LRO or GRO_HW, a hardware
aggregated packet is counted as one packet in this context.

Default: 64

