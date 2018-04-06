---
layout: sysctl
title: drop_gratuitous_arp
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/drop_gratuitous_arp
sysctl-variable: net.ipv4.conf.interface.drop_gratuitous_arp
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Drop all gratuitous ARP frames, for example if there's a known
good ARP proxy on the network and such frames need not be used
(or in the case of 802.11, must not be used to prevent attacks.)
Default: off (0)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

