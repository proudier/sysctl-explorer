---
layout: sysctl
title: icmp_msgs_per_sec
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_msgs_per_sec
sysctl-variable: net.ipv4.icmp_msgs_per_sec
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limit maximal number of ICMP packets sent per second from this host.
Only messages whose type matches icmp_ratemask (see below) are
controlled by this limit.
Default: 1000

