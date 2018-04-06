---
layout: sysctl
title: ndisc_tclass
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/ndisc_tclass
sysctl-variable: net.ipv6.conf.interface.ndisc_tclass
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The IPv6 Traffic Class to use by default when sending IPv6 Neighbor
Discovery (Router Solicitation, Router Advertisement, Neighbor
Solicitation, Neighbor Advertisement, Redirect) messages.
These 8 bits can be interpreted as 6 high order bits holding the DSCP
value and 2 low order bits representing ECN (which you probably want
to leave cleared).
0 - (default)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

