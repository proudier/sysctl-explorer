---
layout: sysctl
title: bootp_relay
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/bootp_relay
sysctl-variable: net.ipv4.conf.interface.bootp_relay
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept packets with source address 0.b.c.d destined
not to this host as local ones. It is supposed, that
BOOTP relay daemon will catch and forward such packets.
conf/all/bootp_relay must also be set to TRUE to enable BOOTP relay
for the interface
default FALSE
Not Implemented Yet.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

