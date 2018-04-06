---
layout: sysctl
title: tcp_recovery
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_recovery
sysctl-variable: net.ipv4.tcp_recovery
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
This value is a bitmap to enable various experimental loss recovery
features.

RACK: 0x1 enables the RACK loss detection for fast detection of lost
      retransmissions and tail drops.
RACK: 0x2 makes RACK's reordering window static (min_rtt/4).

Default: 0x1

