---
layout: sysctl
title: mcast_solicit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/mcast_solicit
sysctl-variable: net.ipv4.conf.interface.mcast_solicit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The maximum number of multicast probes in INCOMPLETE state,
when the associated hardware address is unknown.  Defaults
to 3.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

