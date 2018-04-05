---
layout: sysctl
title: watchdog
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/watchdog
sysctl-variable: kernel.watchdog
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This parameter can be used to disable or enable the soft lockup detector
_and_ the NMI watchdog (i.e. the hard lockup detector) at the same time.

   - 0 - disable both lockup detectors
   - 1 - enable both lockup detectors

The soft lockup detector and the NMI watchdog can also be disabled or
enabled individually, using the soft_watchdog and nmi_watchdog parameters.
If the watchdog parameter is read, for example by executing

   cat /proc/sys/kernel/watchdog

the output of this command (0 or 1) shows the logical OR of soft_watchdog
and nmi_watchdog.

