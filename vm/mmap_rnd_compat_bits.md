---
layout: sysctl
title: mmap_rnd_compat_bits
sysctl-category: vm
sysctl-file: /proc/sys/vm/mmap_rnd_compat_bits
sysctl-variable: vm.mmap_rnd_compat_bits
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This value can be used to select the number of bits to use to
determine the random offset to the base address of vma regions
resulting from mmap allocations for applications run in
compatibility mode on architectures which support tuning address
space randomization.  This value will be bounded by the
architecture's minimum and maximum supported values.

This value can be changed after boot using the
/proc/sys/vm/mmap_rnd_compat_bits tunable

