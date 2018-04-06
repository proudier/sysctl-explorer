---
layout: sysctl
title: promote_secondaries
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/promote_secondaries
sysctl-variable: net.ipv4.conf.interface.promote_secondaries
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
When a primary IP address is removed from this interface
promote a corresponding secondary IP address instead of
removing all the corresponding secondary IP addresses.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

