---
layout: sysctl
title: panic_on_rcu_stall
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_rcu_stall
sysctl-variable: kernel.panic_on_rcu_stall
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

When set to 1, calls panic() after RCU stall detection messages. This
is useful to define the root cause of RCU stalls using a vmcore.

0: do not panic() when RCU stall takes place, default behavior.

1: panic() after printing RCU stall messages.

