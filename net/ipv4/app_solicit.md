---
layout: sysctl
title: app_solicit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/app_solicit
sysctl-variable: net.ipv4.conf.interface.app_solicit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The maximum number of probes to send to the user space ARP daemon
via netlink before dropping back to multicast probes (see
mcast_resolicit).  Defaults to 0.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

