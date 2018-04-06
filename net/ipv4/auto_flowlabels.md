---
layout: sysctl
title: auto_flowlabels
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/auto_flowlabels
sysctl-variable: net.ipv6.auto_flowlabels
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Automatically generate flow labels based on a flow hash of the
packet. This allows intermediate devices, such as routers, to
identify packet flows for mechanisms like Equal Cost Multipath
Routing (see RFC 6438).
0: automatic flow labels are completely disabled
1: automatic flow labels are enabled by default, they can be
   disabled on a per socket basis using the IPV6_AUTOFLOWLABEL
   socket option
2: automatic flow labels are allowed, they may be enabled on a
   per socket basis using the IPV6_AUTOFLOWLABEL socket option
3: automatic flow labels are enabled and enforced, they cannot
   be disabled by the socket option
Default: 1

