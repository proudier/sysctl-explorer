---
layout: sysctl
title: overcommit_kbytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/overcommit_kbytes
sysctl-variable: vm.overcommit_kbytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

When overcommit_memory is set to 2, the committed address space is not
permitted to exceed swap plus this amount of physical RAM. See below.

Note: overcommit_kbytes is the counterpart of overcommit_ratio. Only one
of them may be specified at a time. Setting one disables the other (which
then appears as 0 when read).

