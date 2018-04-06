---
layout: sysctl
title: inet_peer_minttl
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/inet_peer_minttl
sysctl-variable: net.ipv4.inet_peer_minttl
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Minimum time-to-live of entries.  Should be enough to cover fragment
time-to-live on the reassembling side.  This minimum time-to-live  is
guaranteed if the pool size is less than inet_peer_threshold.
Measured in seconds.

