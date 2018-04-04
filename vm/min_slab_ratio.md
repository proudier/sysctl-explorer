---
layout: sysctl
title: min_slab_ratio
sysctl-category: vm
sysctl-file: /proc/sys/vm/min_slab_ratio
sysctl-variable: vm.min_slab_ratio
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This is available only on NUMA kernels.

A percentage of the total pages in each zone.  On Zone reclaim
(fallback from the local zone occurs) slabs will be reclaimed if more
than this percentage of pages in a zone are reclaimable slab pages.
This insures that the slab growth stays under control even in NUMA
systems that rarely perform global reclaim.

The default is 5 percent.

Note that slab reclaim is triggered in a per zone / node fashion.
The process of reclaiming slab memory is currently not node specific
and may not be fast.

