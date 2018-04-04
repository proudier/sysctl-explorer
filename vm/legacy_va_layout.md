---
layout: sysctl
title: legacy_va_layout
sysctl-category: vm
sysctl-file: /proc/sys/vm/legacy_va_layout
sysctl-variable: vm.legacy_va_layout
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

If non-zero, this sysctl disables the new 32-bit mmap layout - the kernel
will use the legacy (2.4) layout for all processes.

