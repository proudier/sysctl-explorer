---
layout: sysctl
title: tcp_tso_win_divisor
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_tso_win_divisor
sysctl-variable: net.ipv4.tcp_tso_win_divisor
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
This allows control over what percentage of the congestion window
can be consumed by a single TSO frame.
The setting of this parameter is a choice between burstiness and
building larger TSO frames.
Default: 3

