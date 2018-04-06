---
layout: sysctl
title: bindv6only
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/bindv6only
sysctl-variable: net.ipv6.bindv6only
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Default value for IPV6_V6ONLY socket option,
which restricts use of the IPv6 socket to IPv6 communication
only.
	TRUE: disable IPv4-mapped address feature
	FALSE: enable IPv4-mapped address feature

Default: FALSE (as specified in RFC3493)

