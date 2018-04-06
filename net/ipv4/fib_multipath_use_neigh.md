---
layout: sysctl
title: fib_multipath_use_neigh
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/fib_multipath_use_neigh
sysctl-variable: net.ipv4.fib_multipath_use_neigh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Use status of existing neighbor entry when determining nexthop for
multipath routes. If disabled, neighbor information is not used and
packets could be directed to a failed nexthop. Only valid for kernels
built with CONFIG_IP_ROUTE_MULTIPATH enabled.
Default: 0 (disabled)
Possible values:
0 - disabled
1 - enabled

