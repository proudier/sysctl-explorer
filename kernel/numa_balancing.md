---
layout: sysctl
title: numa_balancing
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/numa_balancing
sysctl-variable: kernel.numa_balancing
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Enables/disables automatic page fault based NUMA memory
balancing. Memory is moved automatically to nodes
that access it often.

Enables/disables automatic NUMA memory balancing. On NUMA machines, there
is a performance penalty if remote memory is accessed by a CPU. When this
feature is enabled the kernel samples what task thread is accessing memory
by periodically unmapping pages and later trapping a page fault. At the
time of the page fault, it is determined if the data being accessed should
be migrated to a local memory node.

The unmapping of pages and trapping faults incur additional overhead that
ideally is offset by improved memory locality but there is no universal
guarantee. If the target workload is already bound to NUMA nodes then this
feature should be disabled. Otherwise, if the system overhead from the
feature is too high then the rate the kernel samples for NUMA hinting
faults may be controlled by the numa_balancing_scan_period_min_ms,
numa_balancing_scan_delay_ms, numa_balancing_scan_period_max_ms,
numa_balancing_scan_size_mb, and numa_balancing_settle_count sysctls.

