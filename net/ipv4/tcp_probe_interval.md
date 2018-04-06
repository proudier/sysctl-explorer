---
layout: sysctl
title: tcp_probe_interval
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_probe_interval
sysctl-variable: net.ipv4.tcp_probe_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls how often to start TCP Packetization-Layer Path MTU
Discovery reprobe. The default is reprobing every 10 minutes as
per RFC4821.

