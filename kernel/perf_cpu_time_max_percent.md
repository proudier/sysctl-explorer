---
layout: sysctl
title: perf_cpu_time_max_percent
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/perf_cpu_time_max_percent
sysctl-variable: kernel.perf_cpu_time_max_percent
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Hints to the kernel how much CPU time it should be allowed to
use to handle perf sampling events.  If the perf subsystem
is informed that its samples are exceeding this limit, it
will drop its sampling frequency to attempt to reduce its CPU
usage.

Some perf sampling happens in NMIs.  If these samples
unexpectedly take too long to execute, the NMIs can become
stacked up next to each other so much that nothing else is
allowed to execute.

0: disable the mechanism.  Do not monitor or correct perf's
   sampling rate no matter how CPU time it takes.

1-100: attempt to throttle perf's sample rate to this
   percentage of CPU.  Note: the kernel calculates an
   "expected" length of each sample event.  100 here means
   100% of that expected length.  Even if this is set to
   100, you may still see sample throttling if this
   length is exceeded.  Set to 0 if you truly do not care
   how much CPU is consumed.

