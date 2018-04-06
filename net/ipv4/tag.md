---
layout: sysctl
title: tag
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/tag
sysctl-variable: net.ipv4.conf.interface.tag
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Allows you to write a number, which can be used as required.
Default value is 0.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

