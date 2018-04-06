---
layout: sysctl
title: tcp_app_win
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_app_win
sysctl-variable: net.ipv4.tcp_app_win
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Reserve max(window/2^tcp_app_win, mss) of window for application
buffer. Value 0 is special, it means that nothing is reserved.
Default: 31

