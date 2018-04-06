---
layout: sysctl
title: tcp_fastopen_blackhole_timeout_sec
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_fastopen_blackhole_timeout_sec
sysctl-variable: net.ipv4.tcp_fastopen_blackhole_timeout_sec
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Initial time period in second to disable Fastopen on active TCP sockets
when a TFO firewall blackhole issue happens.
This time period will grow exponentially when more blackhole issues
get detected right after Fastopen is re-enabled and will reset to
initial value when the blackhole issue goes away.
0 to disable the blackhole detection.
By default, it is set to 1hr.

