---
layout: sysctl
title: dad_transmits
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/dad_transmits
sysctl-variable: net.ipv6.conf.interface.dad_transmits
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The amount of Duplicate Address Detection probes to send.
Default: 1


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

