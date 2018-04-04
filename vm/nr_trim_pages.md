---
layout: sysctl
title: nr_trim_pages
sysctl-category: vm
sysctl-file: /proc/sys/vm/nr_trim_pages
sysctl-variable: vm.nr_trim_pages
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This is available only on NOMMU kernels.

This value adjusts the excess page trimming behaviour of power-of-2 aligned
NOMMU mmap allocations.

A value of 0 disables trimming of allocations entirely, while a value of 1
trims excess pages aggressively. Any value >= 1 acts as the watermark where
trimming of allocations is initiated.

The default value is 1.

See Documentation/nommu-mmap.txt for more information.

