---
layout: sysctl
title: tcp_min_rtt_wlen
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_min_rtt_wlen
sysctl-variable: net.ipv4.tcp_min_rtt_wlen
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The window length of the windowed min filter to track the minimum RTT.
A shorter window lets a flow more quickly pick up new (higher)
minimum RTT when it is moved to a longer path (e.g., due to traffic
engineering). A longer window makes the filter more resistant to RTT
inflations such as transient congestion. The unit is seconds.
Default: 300

