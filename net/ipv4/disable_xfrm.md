---
layout: sysctl
title: disable_xfrm
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/disable_xfrm
sysctl-variable: net.ipv4.conf.interface.disable_xfrm
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Disable IPSEC encryption on this interface, whatever the policy


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

