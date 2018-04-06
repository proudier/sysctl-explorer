---
layout: sysctl
title: fib_multipath_hash_policy
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/fib_multipath_hash_policy
sysctl-variable: net.ipv4.fib_multipath_hash_policy
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls which hash policy to use for multipath routes. Only valid
for kernels built with CONFIG_IP_ROUTE_MULTIPATH enabled.
Default: 0 (Layer 3)
Possible values:
0 - Layer 3
1 - Layer 4

