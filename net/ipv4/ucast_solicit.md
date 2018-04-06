---
layout: sysctl
title: ucast_solicit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/ucast_solicit
sysctl-variable: net.ipv4.conf.interface.ucast_solicit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The maximum number of unicast probes in PROBE state, when
the hardware address is being reconfirmed.  Defaults to 3.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

