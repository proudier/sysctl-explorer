---
layout: sysctl
title: max_desync_factor
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/max_desync_factor
sysctl-variable: net.ipv6.conf.interface.max_desync_factor
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum value for DESYNC_FACTOR, which is a random value
that ensures that clients don't synchronize with each
other and generate new addresses at exactly the same time.
value is in seconds.
Default: 600


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

