---
layout: sysctl
title: tcp_pacing_ca_ratio
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_pacing_ca_ratio
sysctl-variable: net.ipv4.tcp_pacing_ca_ratio
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
sk->sk_pacing_rate is set by TCP stack using a ratio applied
to current rate. (current_rate = cwnd * mss / srtt)
If TCP is in congestion avoidance phase, tcp_pacing_ca_ratio
is applied to conservatively probe for bigger throughput.
Default: 120

