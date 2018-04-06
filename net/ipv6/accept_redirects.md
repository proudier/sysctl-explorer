---
layout: sysctl
title: accept_redirects
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_redirects
sysctl-variable: net.ipv6.conf.interface.accept_redirects
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept Redirects.

Functional default: enabled if local forwarding is disabled.
		    disabled if local forwarding is enabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

