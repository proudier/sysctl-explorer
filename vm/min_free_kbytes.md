---
layout: sysctl
title: min_free_kbytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/min_free_kbytes
sysctl-variable: vm.min_free_kbytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This is used to force the Linux VM to keep a minimum number
of kilobytes free.  The VM uses this number to compute a
watermark[WMARK_MIN] value for each lowmem zone in the system.
Each lowmem zone gets a number of reserved free pages based
proportionally on its size.

Some minimal amount of memory is needed to satisfy PF_MEMALLOC
allocations; if you set this to lower than 1024KB, your system will
become subtly broken, and prone to deadlock under high loads.

Setting this too high will OOM your machine instantly.

