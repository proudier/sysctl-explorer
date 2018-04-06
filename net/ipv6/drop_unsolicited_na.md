---
layout: sysctl
title: drop_unsolicited_na
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/drop_unsolicited_na
sysctl-variable: net.ipv6.conf.interface.drop_unsolicited_na
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Drop all unsolicited neighbor advertisements, for example if there's
a known good NA proxy on the network and such frames need not be used
(or in the case of 802.11, must not be used to prevent attacks.)

By default this is turned off.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

