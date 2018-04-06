---
layout: sysctl
title: use_tempaddr
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/use_tempaddr
sysctl-variable: net.ipv6.conf.interface.use_tempaddr
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Preference for Privacy Extensions (RFC3041).
  <= 0 : disable Privacy Extensions
  == 1 : enable Privacy Extensions, but prefer public
         addresses over temporary addresses.
  >  1 : enable Privacy Extensions and prefer temporary
         addresses over public addresses.
Default:  0 (for most devices)
	 -1 (for point-to-point devices and loopback devices)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

