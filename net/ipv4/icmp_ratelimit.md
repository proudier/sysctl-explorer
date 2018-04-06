---
layout: sysctl
title: icmp_ratelimit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_ratelimit
sysctl-variable: net.ipv4.icmp_ratelimit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limit the maximal rates for sending ICMP packets whose type matches
icmp_ratemask (see below) to specific targets.
0 to disable any limiting,
otherwise the minimal space between responses in milliseconds.
Note that another sysctl, icmp_msgs_per_sec limits the number
of ICMP packets	sent on all targets.
Default: 1000

