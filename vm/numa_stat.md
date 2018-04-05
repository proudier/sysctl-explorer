---
layout: sysctl
title: numa_stat
sysctl-category: vm
sysctl-file: /proc/sys/vm/numa_stat
sysctl-variable: vm.numa_stat
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This interface allows runtime configuration of numa statistics.

When page allocation performance becomes a bottleneck and you can tolerate
some possible tool breakage and decreased numa counter precision, you can
do:
	`echo 0 > /proc/sys/vm/numa_stat`

When page allocation performance is not a bottleneck and you want all
tooling to work, you can do:
	`echo 1 > /proc/sys/vm/numa_stat`

