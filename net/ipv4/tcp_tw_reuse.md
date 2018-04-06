---
layout: sysctl
title: tcp_tw_reuse
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_tw_reuse
sysctl-variable: net.ipv4.tcp_tw_reuse
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Allow to reuse TIME-WAIT sockets for new connections when it is
safe from protocol viewpoint. Default value is 0.
It should not be changed without advice/request of technical
experts.

