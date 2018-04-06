---
layout: sysctl
title: forwarding
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/forwarding
sysctl-variable: net.ipv4.conf.interface.forwarding
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable IP forwarding on this interface.  This controls whether packets
received _on_ this interface can be forwarded.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

