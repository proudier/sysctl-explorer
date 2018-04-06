---
layout: sysctl
title: tcp_reordering
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_reordering
sysctl-variable: net.ipv4.tcp_reordering
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Initial reordering level of packets in a TCP stream.
TCP stack can then dynamically adjust flow reordering level
between this initial value and tcp_max_reordering
Default: 3

