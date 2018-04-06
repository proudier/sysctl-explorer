---
layout: sysctl
title: regen_max_retry
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/regen_max_retry
sysctl-variable: net.ipv6.conf.interface.regen_max_retry
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of attempts before give up attempting to generate
valid temporary addresses.
Default: 5


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

