---
layout: sysctl
title: mcast_resolicit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/mcast_resolicit
sysctl-variable: net.ipv4.conf.interface.mcast_resolicit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The maximum number of multicast probes after unicast and
app probes in PROBE state.  Defaults to 0.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

