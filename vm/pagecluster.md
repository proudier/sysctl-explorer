---
layout: sysctl
title: pagecluster
sysctl-category: vm
sysctl-file: /proc/sys/vm/pagecluster
sysctl-variable: vm.pagecluster
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

page-cluster controls the number of pages up to which consecutive pages
are read in from swap in a single attempt. This is the swap counterpart
to page cache readahead.
The mentioned consecutivity is not in terms of virtual/physical addresses,
but consecutive on swap space - that means they were swapped out together.

It is a logarithmic value - setting it to zero means "1 page", setting
it to 1 means "2 pages", setting it to 2 means "4 pages", etc.
Zero disables swap readahead completely.

The default value is three (eight pages at a time).  There may be some
small benefits in tuning this to a different value if your workload is
swap-intensive.

Lower values mean lower latencies for initial faults, but at the same time
extra faults and I/O delays for following faults if they would have been part of
that consecutive pages readahead would have brought in.

