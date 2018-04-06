---
layout: sysctl
title: forwarding
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/forwarding
sysctl-variable: net.ipv6.conf.interface.forwarding
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable global IPv6 forwarding between all interfaces.

IPv4 and IPv6 work differently here; e.g. netfilter must be used
to control which interfaces may forward packets and which not.

This also sets all interfaces' Host/Router setting
'forwarding' to the specified value.  See below for details.

This referred to as global forwarding.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

---
layout: sysctl
title: forwarding
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/forwarding
sysctl-variable: net.ipv6.conf.interface.forwarding
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Configure interface-specific Host/Router behaviour.

Note: It is recommended to have the same setting on all
interfaces; mixed router/host scenarios are rather uncommon.

Possible values are:
	0 Forwarding disabled
	1 Forwarding enabled

FALSE (0):

By default, Host behaviour is assumed.  This means:

1. IsRouter flag is not set in Neighbour Advertisements.
2. If accept_ra is TRUE (default), transmit Router
   Solicitations.
3. If accept_ra is TRUE (default), accept Router
   Advertisements (and do autoconfiguration).
4. If accept_redirects is TRUE (default), accept Redirects.

TRUE (1):

If local forwarding is enabled, Router behaviour is assumed.
This means exactly the reverse from the above:

1. IsRouter flag is set in Neighbour Advertisements.
2. Router Solicitations are not sent unless accept_ra is 2.
3. Router Advertisements are ignored unless accept_ra is 2.
4. Redirects are ignored.

Default: 0 (disabled) if global forwarding is disabled (default),
	 otherwise 1 (enabled).


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

