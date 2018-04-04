---
layout: sysctl
title: swappiness
sysctl-category: vm
sysctl-file: /proc/sys/vm/swappiness
sysctl-variable: vm.swappiness
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This control is used to define how aggressive the kernel will swap
memory pages.  Higher values will increase aggressiveness, lower values
decrease the amount of swap.  A value of 0 instructs the kernel not to
initiate swap until the amount of free and file-backed pages is less
than the high water mark in a zone.

The default value is 60.

