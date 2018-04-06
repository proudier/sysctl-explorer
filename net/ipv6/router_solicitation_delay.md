---
layout: sysctl
title: router_solicitation_delay
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/router_solicitation_delay
sysctl-variable: net.ipv6.conf.interface.router_solicitation_delay
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of seconds to wait after interface is brought up
before sending Router Solicitations.
Default: 1


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

