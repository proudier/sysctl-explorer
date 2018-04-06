---
layout: sysctl
title: disable_policy
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/disable_policy
sysctl-variable: net.ipv4.conf.interface.disable_policy
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Disable IPSEC policy (SPD) for this interface


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

