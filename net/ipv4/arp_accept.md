---
layout: sysctl
title: arp_accept
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/arp_accept
sysctl-variable: net.ipv4.conf.interface.arp_accept
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Define behavior for gratuitous ARP frames who's IP is not
already present in the ARP table:
0 - don't create new entries in the ARP table
1 - create new entries in the ARP table

Both replies and requests type gratuitous arp will trigger the
ARP table to be updated, if this setting is on.

If the ARP table already contains the IP address of the
gratuitous arp frame, the arp table will be updated regardless
if this setting is on or off.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

