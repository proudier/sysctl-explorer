---
layout: sysctl
title: hop_limit
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/hop_limit
sysctl-variable: net.ipv6.conf.interface.hop_limit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Default Hop Limit to set.
Default: 64


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

