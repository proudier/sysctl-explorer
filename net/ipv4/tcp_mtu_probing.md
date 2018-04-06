---
layout: sysctl
title: tcp_mtu_probing
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_mtu_probing
sysctl-variable: net.ipv4.tcp_mtu_probing
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls TCP Packetization-Layer Path MTU Discovery.  Takes three
values:
  0 - Disabled
  1 - Disabled by default, enabled when an ICMP black hole detected
  2 - Always enabled, use initial MSS of tcp_base_mss.

