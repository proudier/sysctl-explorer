---
layout: sysctl
title: somaxconn
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/somaxconn
sysctl-variable: net.ipv4.somaxconn
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limit of socket listen() backlog, known in userspace as SOMAXCONN.
Defaults to 128.  See also tcp_max_syn_backlog for additional tuning
for TCP sockets.

