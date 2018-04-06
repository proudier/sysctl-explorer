---
layout: sysctl
title: accept_ra_defrtr
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra_defrtr
sysctl-variable: net.ipv6.conf.interface.accept_ra_defrtr
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Learn default router in Router Advertisement.

Functional default: enabled if accept_ra is enabled.
		    disabled if accept_ra is disabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

