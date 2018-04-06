---
layout: sysctl
title: accept_ra_mtu
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra_mtu
sysctl-variable: net.ipv6.conf.interface.accept_ra_mtu
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Apply the MTU value specified in RA option 5 (RFC4861). If
disabled, the MTU specified in the RA will be ignored.

Functional default: enabled if accept_ra is enabled.
		    disabled if accept_ra is disabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

