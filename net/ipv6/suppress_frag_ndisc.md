---
layout: sysctl
title: suppress_frag_ndisc
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/suppress_frag_ndisc
sysctl-variable: net.ipv6.conf.interface.suppress_frag_ndisc
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Control RFC 6980 (Security Implications of IPv6 Fragmentation
with IPv6 Neighbor Discovery) behavior:
1 - (default) discard fragmented neighbor discovery packets
0 - allow fragmented neighbor discovery packets


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

