---
layout: sysctl
title: accept_ra_rt_info_min_plen
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra_rt_info_min_plen
sysctl-variable: net.ipv6.conf.interface.accept_ra_rt_info_min_plen
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Minimum prefix length of Route Information in RA.

Route Information w/ prefix smaller than this variable shall
be ignored.

Functional default: 0 if accept_ra_rtr_pref is enabled.
		    -1 if accept_ra_rtr_pref is disabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

