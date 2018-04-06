---
layout: sysctl
title: accept_ra
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra
sysctl-variable: net.ipv6.conf.interface.accept_ra
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept Router Advertisements; autoconfigure using them.

It also determines whether or not to transmit Router
Solicitations. If and only if the functional setting is to
accept Router Advertisements, Router Solicitations will be
transmitted.

Possible values are:
	0 Do not accept Router Advertisements.
	1 Accept Router Advertisements if forwarding is disabled.
	2 Overrule forwarding behaviour. Accept Router Advertisements
	  even if forwarding is enabled.

Functional default: enabled if local forwarding is disabled.
		    disabled if local forwarding is enabled.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

