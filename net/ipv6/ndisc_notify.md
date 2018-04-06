---
layout: sysctl
title: ndisc_notify
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/ndisc_notify
sysctl-variable: net.ipv6.conf.interface.ndisc_notify
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Define mode for notification of address and device changes.
0 - (default): do nothing
1 - Generate unsolicited neighbour advertisements when device is brought
    up or hardware address changes.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

