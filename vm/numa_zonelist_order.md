---
layout: sysctl
title: numa_zonelist_order
sysctl-category: vm
sysctl-file: /proc/sys/vm/numa_zonelist_order
sysctl-variable: vm.numa_zonelist_order
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This sysctl is only for NUMA and it is deprecated. Anything but
Node order will fail!

'where the memory is allocated from' is controlled by zonelists.
(This documentation ignores ZONE_HIGHMEM/ZONE_DMA32 for simple explanation.
 you may be able to read ZONE_DMA as ZONE_DMA32...)

In non-NUMA case, a zonelist for GFP_KERNEL is ordered as following.
ZONE_NORMAL -> ZONE_DMA
This means that a memory allocation request for GFP_KERNEL will
get memory from ZONE_DMA only when ZONE_NORMAL is not available.

In NUMA case, you can think of following 2 types of order.
Assume 2 node NUMA and below is zonelist of Node(0)'s GFP_KERNEL

(A) Node(0) ZONE_NORMAL -> Node(0) ZONE_DMA -> Node(1) ZONE_NORMAL
(B) Node(0) ZONE_NORMAL -> Node(1) ZONE_NORMAL -> Node(0) ZONE_DMA.

Type(A) offers the best locality for processes on Node(0), but ZONE_DMA
will be used before ZONE_NORMAL exhaustion. This increases possibility of
out-of-memory(OOM) of ZONE_DMA because ZONE_DMA is tend to be small.

Type(B) cannot offer the best locality but is more robust against OOM of
the DMA zone.

Type(A) is called as "Node" order. Type (B) is "Zone" order.

"Node order" orders the zonelists by node, then by zone within each node.
Specify "[Nn]ode" for node order

"Zone Order" orders the zonelists by zone type, then by node within each
zone.  Specify "[Zz]one" for zone order.

Specify "[Dd]efault" to request automatic configuration.

On 32-bit, the Normal zone needs to be preserved for allocations accessible
by the kernel, so "zone" order will be selected.

On 64-bit, devices that require DMA32/DMA are relatively rare, so "node"
order will be selected.

Default order is recommended unless this is causing problems for your
system/application.

