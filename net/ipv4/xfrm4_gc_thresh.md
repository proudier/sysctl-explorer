---
layout: sysctl
title: xfrm4_gc_thresh
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/xfrm4_gc_thresh
sysctl-variable: net.ipv4.conf.interface.xfrm4_gc_thresh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The threshold at which we will start garbage collecting for IPv4
destination cache entries.  At twice this value the system will
refuse new allocations.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

