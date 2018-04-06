---
layout: sysctl
title: tcp_probe_threshold
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_probe_threshold
sysctl-variable: net.ipv4.tcp_probe_threshold
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls when TCP Packetization-Layer Path MTU Discovery probing
will stop in respect to the width of search range in bytes. Default
is 8 bytes.

