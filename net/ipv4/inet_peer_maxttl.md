---
layout: sysctl
title: inet_peer_maxttl
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/inet_peer_maxttl
sysctl-variable: net.ipv4.inet_peer_maxttl
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum time-to-live of entries.  Unused entries will expire after
this period of time if there is no memory pressure on the pool (i.e.
when the number of entries in the pool is very small).
Measured in seconds.

