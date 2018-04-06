---
layout: sysctl
title: mc_forwarding
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/mc_forwarding
sysctl-variable: net.ipv4.conf.interface.mc_forwarding
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Do multicast routing. The kernel needs to be compiled with CONFIG_MROUTE
and a multicast routing daemon is required.
conf/all/mc_forwarding must also be set to TRUE to enable multicast
routing	for the interface


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

