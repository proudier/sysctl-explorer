---
layout: sysctl
title: use_oif_addrs_only
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/use_oif_addrs_only
sysctl-variable: net.ipv6.conf.interface.use_oif_addrs_only
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
When enabled, the candidate source addresses for destinations
routed via this interface are restricted to the set of addresses
configured on this interface (vis. RFC 6724, section 4).

Default: false


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

