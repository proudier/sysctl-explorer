---
layout: sysctl
title: optimistic_dad
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/optimistic_dad
sysctl-variable: net.ipv6.conf.interface.optimistic_dad
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Whether to perform Optimistic Duplicate Address Detection (RFC 4429).
0: disabled (default)
1: enabled

Optimistic Duplicate Address Detection for the interface will be enabled
if at least one of conf/{all,interface}/optimistic_dad is set to 1,
it will be disabled otherwise.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

