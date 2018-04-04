---
layout: sysctl
title: watchdog_cpumask
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/watchdog_cpumask
sysctl-variable: kernel.watchdog_cpumask
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value can be used to control on which cpus the watchdog may run.
The default cpumask is all possible cores, but if NO_HZ_FULL is
enabled in the kernel config, and cores are specified with the
nohz_full= boot argument, those cores are excluded by default.
Offline cores can be included in this mask, and if the core is later
brought online, the watchdog will be started based on the mask value.

Typically this value would only be touched in the nohz_full case
to re-enable cores that by default were not running the watchdog,
if a kernel lockup was suspected on those cores.

The argument value is the standard cpulist format for cpumasks,
so for example to enable the watchdog on cores 0, 2, 3, and 4 you
might say:

  echo 0,2-4 > /proc/sys/kernel/watchdog_cpumask

