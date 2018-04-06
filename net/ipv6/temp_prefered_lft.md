---
layout: sysctl
title: temp_prefered_lft
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/temp_prefered_lft
sysctl-variable: net.ipv6.conf.interface.temp_prefered_lft
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Preferred lifetime (in seconds) for temporary addresses.
Default: 86400 (1 day)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

