---
layout: sysctl
title: accept_source_route
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_source_route
sysctl-variable: net.ipv6.conf.interface.accept_source_route
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept source routing (routing extension header).

>= 0: Accept only routing header type 2.
< 0: Do not accept routing header.

Default: 0


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

