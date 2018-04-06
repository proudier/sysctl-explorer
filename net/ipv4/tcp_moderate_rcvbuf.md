---
layout: sysctl
title: tcp_moderate_rcvbuf
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_moderate_rcvbuf
sysctl-variable: net.ipv4.tcp_moderate_rcvbuf
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set, TCP performs receive buffer auto-tuning, attempting to
automatically size the buffer (no greater than tcp_rmem[2]) to
match the size required by the path for full throughput.  Enabled by
default.

