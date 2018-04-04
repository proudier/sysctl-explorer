---
layout: sysctl
title: overcommit_ratio
sysctl-category: vm
sysctl-file: /proc/sys/vm/overcommit_ratio
sysctl-variable: vm.overcommit_ratio
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

When overcommit_memory is set to 2, the committed address
space is not permitted to exceed swap plus this percentage
of physical RAM.  See above.

