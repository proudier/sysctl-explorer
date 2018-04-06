---
layout: sysctl
title: ip_early_demux
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_early_demux
sysctl-variable: net.ipv4.ip_early_demux
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Optimize input packet processing down to one demux for
certain kinds of local sockets.  Currently we only do this
for established TCP and connected UDP sockets.

It may add an additional cost for pure routing workloads that
reduces overall throughput, in such case you should disable it.
Default: 1

