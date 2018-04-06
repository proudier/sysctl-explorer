---
layout: sysctl
title: accept_dad
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_dad
sysctl-variable: net.ipv6.conf.interface.accept_dad
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Whether to accept DAD (Duplicate Address Detection).
0: Disable DAD
1: Enable DAD (default)
2: Enable DAD, and disable IPv6 operation if MAC-based duplicate
   link-local address has been found.

DAD operation and mode on a given interface will be selected according
to the maximum value of conf/{all,interface}/accept_dad.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

