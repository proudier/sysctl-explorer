---
layout: sysctl
title: zone_reclaim_mode
sysctl-category: vm
sysctl-file: /proc/sys/vm/zone_reclaim_mode
sysctl-variable: vm.zone_reclaim_mode
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Zone_reclaim_mode allows someone to set more or less aggressive approaches to
reclaim memory when a zone runs out of memory. If it is set to zero then no
zone reclaim occurs. Allocations will be satisfied from other zones / nodes
in the system.

This is value ORed together of

- 1	= Zone reclaim on
- 2	= Zone reclaim writes dirty pages out
- 4	= Zone reclaim swaps pages

zone_reclaim_mode is disabled by default.  For file servers or workloads
that benefit from having their data cached, zone_reclaim_mode should be
left disabled as the caching effect is likely to be more important than
data locality.

zone_reclaim may be enabled if it's known that the workload is partitioned
such that each partition fits within a NUMA node and that accessing remote
memory would cause a measurable performance reduction.  The page allocator
will then reclaim easily reusable pages (those page cache pages that are
currently not used) before allocating off node pages.

Allowing zone reclaim to write out pages stops processes that are
writing large amounts of data from dirtying pages on other nodes. Zone
reclaim will write out dirty pages if a zone fills up and so effectively
throttle the process. This may decrease the performance of a single process
since it cannot use all of system memory to buffer the outgoing writes
anymore but it preserve the memory on other nodes so that the performance
of other processes running on other nodes will not be affected.

Allowing regular swap effectively restricts allocations to the local
node unless explicitly overridden by memory policies or cpuset
configurations.

