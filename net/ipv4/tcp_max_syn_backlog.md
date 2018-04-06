---
layout: sysctl
title: tcp_max_syn_backlog
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_max_syn_backlog
sysctl-variable: net.ipv4.tcp_max_syn_backlog
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximal number of remembered connection requests, which have not
received an acknowledgment from connecting client.
The minimal value is 128 for low memory machines, and it will
increase in proportion to the memory of machine.
If server suffers from overload, try increasing this number.

