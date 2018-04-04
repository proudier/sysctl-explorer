---
layout: sysctl
title: dirty_background_ratio
sysctl-category: vm
sysctl-file: /proc/sys/vm/dirty_background_ratio
sysctl-variable: vm.dirty_background_ratio
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Contains, as a percentage of total available memory that contains free pages
and reclaimable pages, the number of pages at which the background kernel
flusher threads will start writing out dirty data.

The total available memory is not equal to total system memory.

