---
layout: sysctl
title: stat_refresh
sysctl-category: vm
sysctl-file: /proc/sys/vm/stat_refresh
sysctl-variable: vm.stat_refresh
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Any read or write (by root only) flushes all the per-cpu vm statistics
into their global totals, for more accurate reports when testing
e.g. cat /proc/sys/vm/stat_refresh /proc/meminfo

As a side-effect, it also checks for negative totals (elsewhere reported
as 0) and "fails" with EINVAL if any are found, with a warning in dmesg.
(At time of writing, a few stats are known sometimes to be found negative,
with no ill effects: errors and warnings on these stats are suppressed.)

