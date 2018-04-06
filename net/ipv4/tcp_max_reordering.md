---
layout: sysctl
title: tcp_max_reordering
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_max_reordering
sysctl-variable: net.ipv4.tcp_max_reordering
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximal reordering level of packets in a TCP stream.
300 is a fairly conservative value, but you might increase it
if paths are using per packet load balancing (like bonding rr mode)
Default: 300

