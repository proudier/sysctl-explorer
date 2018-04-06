---
layout: sysctl
title: arp_notify
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/arp_notify
sysctl-variable: net.ipv4.conf.interface.arp_notify
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Define mode for notification of address and device changes.
0 - (default): do nothing
1 - Generate gratuitous arp requests when device is brought up
    or hardware address changes.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

