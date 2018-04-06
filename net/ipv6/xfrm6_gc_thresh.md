---
layout: sysctl
title: xfrm6_gc_thresh
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/icmp/xfrm6_gc_thresh
sysctl-variable: net.ipv6.icmp.xfrm6_gc_thresh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The threshold at which we will start garbage collecting for IPv6
destination cache entries.  At twice this value the system will
refuse new allocations.
