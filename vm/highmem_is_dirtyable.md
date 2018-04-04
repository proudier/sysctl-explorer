---
layout: sysctl
title: highmem_is_dirtyable
sysctl-category: vm
sysctl-file: /proc/sys/vm/highmem_is_dirtyable
sysctl-variable: vm.highmem_is_dirtyable
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Available only for systems with CONFIG_HIGHMEM enabled (32b systems).

This parameter controls whether the high memory is considered for dirty
writers throttling.  This is not the case by default which means that
only the amount of memory directly visible/usable by the kernel can
be dirtied. As a result, on systems with a large amount of memory and
lowmem basically depleted writers might be throttled too early and
streaming writes can get very slow.

Changing the value to non zero would allow more memory to be dirtied
and thus allow writers to write more data which can be flushed to the
storage more effectively. Note this also comes with a risk of pre-mature
OOM killer because some writers (e.g. direct block device writes) can
only use the low memory and they can fill it up with dirty data without
any throttling.

