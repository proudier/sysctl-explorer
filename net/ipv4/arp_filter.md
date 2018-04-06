---
layout: sysctl
title: arp_filter
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/arp_filter
sysctl-variable: net.ipv4.conf.interface.arp_filter
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
1 - Allows you to have multiple network interfaces on the same
subnet, and have the ARPs for each interface be answered
based on whether or not the kernel would route a packet from
the ARP'd IP out that interface (therefore you must use source
based routing for this to work). In other words it allows control
of which cards (usually 1) will respond to an arp request.

0 - (default) The kernel can respond to arp requests with addresses
from other interfaces. This may seem wrong but it usually makes
sense, because it increases the chance of successful communication.
IP addresses are owned by the complete host on Linux, not by
particular interfaces. Only for more complex setups like load-
balancing, does this behaviour cause problems.

arp_filter for the interface will be enabled if at least one of
conf/{all,interface}/arp_filter is set to TRUE,
it will be disabled otherwise


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

