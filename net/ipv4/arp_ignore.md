---
layout: sysctl
title: arp_ignore
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/arp_ignore
sysctl-variable: net.ipv4.conf.interface.arp_ignore
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Define different modes for sending replies in response to
received ARP requests that resolve local target IP addresses:
0 - (default): reply for any local target IP address, configured
on any interface
1 - reply only if the target IP address is local address
configured on the incoming interface
2 - reply only if the target IP address is local address
configured on the incoming interface and both with the
sender's IP address are part from same subnet on this interface
3 - do not reply for local addresses configured with scope host,
only resolutions for global and link addresses are replied
4-7 - reserved
8 - do not reply for all local addresses

The max value from conf/{all,interface}/arp_ignore is used
when ARP request is received on the {interface}


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

