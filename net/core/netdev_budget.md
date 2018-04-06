---
layout: sysctl
title: netdev_budget
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/netdev_budget
sysctl-variable: net.core.netdev_budget
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

Maximum number of packets taken from all interfaces in one polling cycle (NAPI
poll). In one polling cycle interfaces which are registered to polling are
probed in a round-robin manner. Also, a polling cycle may not exceed
netdev_budget_usecs microseconds, even if netdev_budget has not been
exhausted.

