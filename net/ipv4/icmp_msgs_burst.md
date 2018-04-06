---
layout: sysctl
title: icmp_msgs_burst
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_msgs_burst
sysctl-variable: net.ipv4.icmp_msgs_burst
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
icmp_msgs_per_sec controls number of ICMP packets sent per second,
while icmp_msgs_burst controls the burst size of these packets.
Default: 50

