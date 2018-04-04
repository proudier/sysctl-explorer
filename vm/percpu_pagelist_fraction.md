---
layout: sysctl
title: percpu_pagelist_fraction
sysctl-category: vm
sysctl-file: /proc/sys/vm/percpu_pagelist_fraction
sysctl-variable: vm.percpu_pagelist_fraction
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This is the fraction of pages at most (high mark pcp->high) in each zone that
are allocated for each per cpu page list.  The min value for this is 8.  It
means that we don't allow more than 1/8th of pages in each zone to be
allocated in any single per_cpu_pagelist.  This entry only changes the value
of hot per cpu pagelists.  User can specify a number like 100 to allocate
1/100th of each zone to each per cpu page list.

The batch value of each per cpu pagelist is also updated as a result.  It is
set to pcp->high/4.  The upper limit of batch is (PAGE_SHIFT * 8)

The initial value is zero.  Kernel does not use this value at boot time to set
the high water marks for each per cpu page list.  If the user writes '0' to this
sysctl, it will revert to this default behavior.

