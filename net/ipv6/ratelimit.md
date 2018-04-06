---
layout: sysctl
title: ratelimit
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/icmp/ratelimit
sysctl-variable: net.ipv6.icmp.ratelimit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limit the maximal rates for sending ICMPv6 packets.
0 to disable any limiting,
otherwise the minimal space between responses in milliseconds.
Default: 1000

