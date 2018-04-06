---
layout: sysctl
title: tcp_stdurg
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_stdurg
sysctl-variable: net.ipv4.tcp_stdurg
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Use the Host requirements interpretation of the TCP urgent pointer field.
Most hosts use the older BSD interpretation, so if you turn this on
Linux might not communicate correctly with them.
Default: FALSE

