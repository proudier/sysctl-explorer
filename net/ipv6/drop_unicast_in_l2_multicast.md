---
layout: sysctl
title: drop_unicast_in_l2_multicast
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/drop_unicast_in_l2_multicast
sysctl-variable: net.ipv6.conf.interface.drop_unicast_in_l2_multicast
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Drop any unicast IPv6 packets that are received in link-layer
multicast (or broadcast) frames.

By default this is turned off.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

