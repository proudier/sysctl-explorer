---
layout: sysctl
title: tcp_pacing_ss_ratio
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_pacing_ss_ratio
sysctl-variable: net.ipv4.tcp_pacing_ss_ratio
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
sk->sk_pacing_rate is set by TCP stack using a ratio applied
to current rate. (current_rate = cwnd * mss / srtt)
If TCP is in slow start, tcp_pacing_ss_ratio is applied
to let TCP probe for bigger speeds, assuming cwnd can be
doubled every other RTT.
Default: 200

