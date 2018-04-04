---
layout: sysctl
title: extfrag_threshold
sysctl-category: vm
sysctl-file: /proc/sys/vm/extfrag_threshold
sysctl-variable: vm.extfrag_threshold
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This parameter affects whether the kernel will compact memory or direct
reclaim to satisfy a high-order allocation. The extfrag/extfrag_index file in
debugfs shows what the fragmentation index for each order is in each zone in
the system. Values tending towards 0 imply allocations would fail due to lack
of memory, values towards 1000 imply failures are due to fragmentation and -1
implies that the allocation will succeed as long as watermarks are met.

The kernel will not compact memory in a zone if the
fragmentation index is <= extfrag_threshold. The default value is 500.

