---
layout: sysctl
title: watchdog_thresh
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/watchdog_thresh
sysctl-variable: kernel.watchdog_thresh
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value can be used to control the frequency of hrtimer and NMI
events and the soft and hard lockup thresholds. The default threshold
is 10 seconds.

The softlockup threshold is (2 * watchdog_thresh). Setting this
tunable to zero will disable lockup detection altogether.

