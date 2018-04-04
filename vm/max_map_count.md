---
layout: sysctl
title: max_map_count
sysctl-category: vm
sysctl-file: /proc/sys/vm/max_map_count
sysctl-variable: vm.max_map_count
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This file contains the maximum number of memory map areas a process
may have. Memory map areas are used as a side-effect of calling
malloc, directly by mmap, mprotect, and madvise, and also when loading
shared libraries.

While most applications need less than a thousand maps, certain
programs, particularly malloc debuggers, may consume lots of them,
e.g., up to one or two maps per allocation.

The default value is 65536.

