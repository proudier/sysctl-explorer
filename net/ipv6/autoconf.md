---
layout: sysctl
title: autoconf
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/autoconf
sysctl-variable: net.ipv6.conf.interface.autoconf
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Autoconfigure addresses using Prefix Information in Router
Advertisements.

Functional default: enabled if accept_ra_pinfo is enabled.
		    disabled if accept_ra_pinfo is disabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

