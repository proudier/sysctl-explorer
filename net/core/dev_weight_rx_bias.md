---
layout: sysctl
title: dev_weight_rx_bias
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/dev_weight_rx_bias
sysctl-variable: net.core.dev_weight_rx_bias
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

RPS (e.g. RFS, aRFS) processing is competing with the registered NAPI poll function
of the driver for the per softirq cycle netdev_budget. This parameter influences
the proportion of the configured netdev_budget that is spent on RPS based packet
processing during RX softirq cycles. It is further meant for making current
dev_weight adaptable for asymmetric CPU needs on RX/TX side of the network stack.
(see dev_weight_tx_bias) It is effective on a per CPU basis. Determination is based
on dev_weight and is calculated multiplicative (dev_weight * dev_weight_rx_bias).
Default: 1

