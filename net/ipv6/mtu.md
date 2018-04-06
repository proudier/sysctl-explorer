---
layout: sysctl
title: mtu
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/mtu
sysctl-variable: net.ipv6.conf.interface.mtu
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Default Maximum Transfer Unit
Default: 1280 (IPv6 required minimum)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

