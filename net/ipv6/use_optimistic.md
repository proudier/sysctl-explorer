---
layout: sysctl
title: use_optimistic
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/use_optimistic
sysctl-variable: net.ipv6.conf.interface.use_optimistic
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If enabled, do not classify optimistic addresses as deprecated during
source address selection.  Preferred addresses will still be chosen
before optimistic addresses, subject to other ranking in the source
address selection algorithm.
0: disabled (default)
1: enabled

This will be enabled if at least one of
conf/{all,interface}/use_optimistic is set to 1, disabled otherwise.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

