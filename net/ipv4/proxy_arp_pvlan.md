---
layout: sysctl
title: proxy_arp_pvlan
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/proxy_arp_pvlan
sysctl-variable: net.ipv4.conf.interface.proxy_arp_pvlan
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Private VLAN proxy arp.
Basically allow proxy arp replies back to the same interface
(from which the ARP request/solicitation was received).

This is done to support (ethernet) switch features, like RFC
3069, where the individual ports are NOT allowed to
communicate with each other, but they are allowed to talk to
the upstream router.  As described in RFC 3069, it is possible
to allow these hosts to communicate through the upstream
router by proxy_arp'ing. Don't need to be used together with
proxy_arp.

This technology is known by different names:
  In RFC 3069 it is called VLAN Aggregation.
  Cisco and Allied Telesyn call it Private VLAN.
  Hewlett-Packard call it Source-Port filtering or port-isolation.
  Ericsson call it MAC-Forced Forwarding (RFC Draft).


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

