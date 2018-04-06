---
layout: sysctl
title: proxy_arp
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/proxy_arp
sysctl-variable: net.ipv4.conf.interface.proxy_arp
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Do proxy arp.
proxy_arp for the interface will be enabled if at least one of
conf/{all,interface}/proxy_arp is set to TRUE,
it will be disabled otherwise


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

