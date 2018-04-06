---
layout: sysctl
title: icmp_echo_ignore_broadcasts
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts
sysctl-variable: net.ipv4.icmp_echo_ignore_broadcasts
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set non-zero, then the kernel will ignore all ICMP ECHO and
TIMESTAMP requests sent to it via broadcast/multicast.
Default: 1

