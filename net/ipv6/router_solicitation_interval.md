---
layout: sysctl
title: router_solicitation_interval
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/router_solicitation_interval
sysctl-variable: net.ipv6.conf.interface.router_solicitation_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of seconds to wait between Router Solicitations.
Default: 4


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

