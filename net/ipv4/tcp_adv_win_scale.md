---
layout: sysctl
title: tcp_adv_win_scale
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_adv_win_scale
sysctl-variable: net.ipv4.tcp_adv_win_scale
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Count buffering overhead as bytes/2^tcp_adv_win_scale
(if tcp_adv_win_scale > 0) or bytes-bytes/2^(-tcp_adv_win_scale),
if it is <= 0.
Possible values are [-31, 31], inclusive.
Default: 1

tcp_allowed_congestion_control - STRING
Show/set the congestion control choices available to non-privileged
processes. The list is a subset of those listed in
tcp_available_congestion_control.
Default is "reno" and the default setting (tcp_congestion_control).

