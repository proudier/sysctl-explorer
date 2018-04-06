---
layout: sysctl
title: tcp_timestamps
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_timestamps
sysctl-variable: net.ipv4.tcp_timestamps
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable timestamps as defined in RFC1323.
0: Disabled.
1: Enable timestamps as defined in RFC1323 and use random offset for
each connection rather than only using the current time.
2: Like 1, but without random offsets.
Default: 1

