---
layout: sysctl
title: lowmem_reserve_ratio
sysctl-category: vm
sysctl-file: /proc/sys/vm/lowmem_reserve_ratio
sysctl-variable: vm.lowmem_reserve_ratio
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

For some specialised workloads on highmem machines it is dangerous for
the kernel to allow process memory to be allocated from the "lowmem"
zone.  This is because that memory could then be pinned via the mlock()
system call, or by unavailability of swapspace.

And on large highmem machines this lack of reclaimable lowmem memory
can be fatal.

So the Linux page allocator has a mechanism which prevents allocations
which _could_ use highmem from using too much lowmem.  This means that
a certain amount of lowmem is defended from the possibility of being
captured into pinned user memory.

(The same argument applies to the old 16 megabyte ISA DMA region.  This
mechanism will also defend that region from allocations which could use
highmem or lowmem).

The `lowmem_reserve_ratio' tunable determines how aggressive the kernel is
in defending these lower zones.

If you have a machine which uses highmem or ISA DMA and your
applications are using mlock(), or if you are running with no swap then
you probably should change the lowmem_reserve_ratio setting.

The lowmem_reserve_ratio is an array. You can see them by reading this file.
```
% cat /proc/sys/vm/lowmem_reserve_ratio
256     256     32
```
Note: # of this elements is one fewer than number of zones. Because the highest
      zone's value is not necessary for following calculation.

But, these values are not used directly. The kernel calculates # of protection
pages for each zones from them. These are shown as array of protection pages
in /proc/zoneinfo like followings. (This is an example of x86-64 box).
Each zone has an array of protection pages like this.

```
Node 0, zone      DMA
  pages free     1355
        min      3
        low      3
        high     4
	:
	:
    numa_other   0
        protection: (0, 2004, 2004, 2004)
	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  pagesets
    cpu: 0 pcp: 0
        :
```
These protections are added to score to judge whether this zone should be used
for page allocation or should be reclaimed.

In this example, if normal pages (index=2) are required to this DMA zone and
watermark[WMARK_HIGH] is used for watermark, the kernel judges this zone should
not be used because pages_free(1355) is smaller than watermark + protection[2]
(4 + 2004 = 2008). If this protection value is 0, this zone would be used for
normal page requirement. If requirement is DMA zone(index=0), protection[0]
(=0) is used.

zone[i]'s protection[j] is calculated by following expression.
```
(i < j):
  zone[i]->protection[j]
  = (total sums of managed_pages from zone[i+1] to zone[j] on the node)
    / lowmem_reserve_ratio[i];
(i = j):
   (should not be protected. = 0;
(i > j):
   (not necessary, but looks 0)
```
The default values of lowmem_reserve_ratio[i] are
    256 (if zone[i] means DMA or DMA32 zone)
    32  (others).
As above expression, they are reciprocal number of ratio.
256 means 1/256. # of protection pages becomes about "0.39%" of total managed
pages of higher zones on the node.

If you would like to protect more pages, smaller values are effective.
The minimum value is 1 (1/1 -> 100%).

