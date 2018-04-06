---
layout: sysctl
title: dev_weight_tx_bias
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/dev_weight_tx_bias
sysctl-variable: net.core.dev_weight_tx_bias
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

Scales the maximum number of packets that can be processed during a TX softirq cycle.
Effective on a per CPU basis. Allows scaling of current dev_weight for asymmetric
net stack processing needs. Be careful to avoid making TX softirq processing a CPU hog.
Calculation is based on dev_weight (dev_weight * dev_weight_tx_bias).
Default: 1

