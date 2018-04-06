---
layout: sysctl
title: accept_ra_min_hop_limit
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra_min_hop_limit
sysctl-variable: net.ipv6.conf.interface.accept_ra_min_hop_limit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Minimum hop limit Information in Router Advertisement.

Hop limit Information in Router Advertisement less than this
variable shall be ignored.

Default: 1


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

