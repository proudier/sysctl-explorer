---
layout: sysctl
title: tcp_base_mss
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_base_mss
sysctl-variable: net.ipv4.tcp_base_mss
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The initial value of search_low to be used by the packetization layer
Path MTU discovery (MTU probing).  If MTU probing is enabled,
this is the initial MSS used by the connection.

tcp_congestion_control - STRING
Set the congestion control algorithm to be used for new
connections. The algorithm "reno" is always available, but
additional choices may be available based on kernel configuration.
Default is set as part of kernel configuration.
For passive connections, the listener congestion control choice
is inherited.
[see setsockopt(listenfd, SOL_TCP, TCP_CONGESTION, "name" ...) ]

