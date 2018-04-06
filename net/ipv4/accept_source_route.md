---
layout: sysctl
title: accept_source_route
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/accept_source_route
sysctl-variable: net.ipv4.conf.interface.accept_source_route
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept packets with SRR option.
conf/all/accept_source_route must also be set to TRUE to accept packets
with SRR option on the interface
default TRUE (router)
	FALSE (host)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

