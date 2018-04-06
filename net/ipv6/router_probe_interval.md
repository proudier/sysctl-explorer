---
layout: sysctl
title: router_probe_interval
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/router_probe_interval
sysctl-variable: net.ipv6.conf.interface.router_probe_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Minimum interval (in seconds) between Router Probing described
in RFC4191.

Default: 60


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

