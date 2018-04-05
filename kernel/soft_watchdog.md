---
layout: sysctl
title: soft_watchdog
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/soft_watchdog
sysctl-variable: kernel.soft_watchdog
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This parameter can be used to control the soft lockup detector.

-   0 - disable the soft lockup detector
-   1 - enable the soft lockup detector

The soft lockup detector monitors CPUs for threads that are hogging the CPUs
without rescheduling voluntarily, and thus prevent the 'watchdog/N' threads
from running. The mechanism depends on the CPUs ability to respond to timer
interrupts which are needed for the 'watchdog/N' threads to be woken up by
the watchdog timer function, otherwise the NMI watchdog - if enabled - can
detect a hard lockup condition.

