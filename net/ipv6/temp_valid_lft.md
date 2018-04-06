---
layout: sysctl
title: temp_valid_lft
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/temp_valid_lft
sysctl-variable: net.ipv6.conf.interface.temp_valid_lft
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
valid lifetime (in seconds) for temporary addresses.
Default: 604800 (7 days)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

