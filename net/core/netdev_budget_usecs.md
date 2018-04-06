---
layout: sysctl
title: netdev_budget_usecs
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/netdev_budget_usecs
sysctl-variable: net.core.netdev_budget_usecs
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

Maximum number of microseconds in one NAPI polling cycle. Polling
will exit when either netdev_budget_usecs have elapsed during the
poll cycle or the number of packets processed reaches netdev_budget.

