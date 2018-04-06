---
layout: sysctl
title: enhanced_dad
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/enhanced_dad
sysctl-variable: net.ipv6.conf.interface.enhanced_dad
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Include a nonce option in the IPv6 neighbor solicitation messages used for
duplicate address detection per RFC7527. A received DAD NS will only signal
a duplicate address if the nonce is different. This avoids any false
detection of duplicates due to loopback of the NS messages that we send.
The nonce option will be sent on an interface unless both of
conf/{all,interface}/enhanced_dad are set to FALSE.
Default: TRUE

Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

