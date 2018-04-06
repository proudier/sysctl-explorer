---
layout: sysctl
title: route_localnet
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/route_localnet
sysctl-variable: net.ipv4.conf.interface.route_localnet
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Do not consider loopback addresses as martian source or destination
while routing. This enables the use of 127/8 for local routing purposes.
default FALSE


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

