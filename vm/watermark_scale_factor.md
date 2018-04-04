---
layout: sysctl
title: watermark_scale_factor
sysctl-category: vm
sysctl-file: /proc/sys/vm/watermark_scale_factor
sysctl-variable: vm.watermark_scale_factor
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This factor controls the aggressiveness of kswapd. It defines the
amount of memory left in a node/system before kswapd is woken up and
how much memory needs to be free before kswapd goes back to sleep.

The unit is in fractions of 10,000. The default value of 10 means the
distances between watermarks are 0.1% of the available memory in the
node/system. The maximum value is 1000, or 10% of memory.

A high rate of threads entering direct reclaim (allocstall) or kswapd
going to sleep prematurely (kswapd_low_wmark_hit_quickly) can indicate
that the number of free pages kswapd maintains for latency reasons is
too small for the allocation bursts occurring in the system. This knob
can then be used to tune kswapd aggressiveness accordingly.

