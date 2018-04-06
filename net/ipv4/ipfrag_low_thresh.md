---
layout: sysctl
title: ipfrag_low_thresh
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ipfrag_low_thresh
sysctl-variable: net.ipv4.ipfrag_low_thresh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum memory used to reassemble IP fragments before the kernel
begins to remove incomplete fragment queues to free up resources.
The kernel still accepts new fragments for defragmentation.

