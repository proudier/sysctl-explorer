---
layout: sysctl
title: router_solicitations
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/router_solicitations
sysctl-variable: net.ipv6.conf.interface.router_solicitations
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of Router Solicitations to send until assuming no
routers are present.
Default: 3


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

