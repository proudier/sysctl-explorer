---
layout: sysctl
title: overcommit_memory
sysctl-category: vm
sysctl-file: /proc/sys/vm/overcommit_memory
sysctl-variable: vm.overcommit_memory
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This value contains a flag that enables memory overcommitment.

When this flag is 0, the kernel attempts to estimate the amount
of free memory left when userspace requests more memory.

When this flag is 1, the kernel pretends there is always enough
memory until it actually runs out.

When this flag is 2, the kernel uses a "never overcommit"
policy that attempts to prevent any overcommit of memory.
Note that user_reserve_kbytes affects this policy.

This feature can be very useful because there are a lot of
programs that malloc() huge amounts of memory "just-in-case"
and don't use much of it.

The default value is 0.

See Documentation/vm/overcommit-accounting and
mm/mmap.c::__vm_enough_memory() for more information.

