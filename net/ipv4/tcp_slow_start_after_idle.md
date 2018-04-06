---
layout: sysctl
title: tcp_slow_start_after_idle
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_slow_start_after_idle
sysctl-variable: net.ipv4.tcp_slow_start_after_idle
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set, provide RFC2861 behavior and time out the congestion
window after an idle period.  An idle period is defined at
the current RTO.  If unset, the congestion window will not
be timed out after an idle period.
Default: 1

