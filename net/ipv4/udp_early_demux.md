---
layout: sysctl
title: udp_early_demux
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/udp_early_demux
sysctl-variable: net.ipv4.udp_early_demux
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable early demux for connected UDP sockets. Disable this if
your system could experience more unconnected load.
Default: 1

