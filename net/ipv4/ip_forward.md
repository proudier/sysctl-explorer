---
layout: sysctl
title: ip_forward
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_forward
sysctl-variable: net.ipv4.ip_forward
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
0 - disabled (default)
not 0 - enabled

Forward Packets between interfaces.

This variable is special, its change resets all configuration
parameters to their default state (RFC1122 for hosts, RFC1812
for routers)

