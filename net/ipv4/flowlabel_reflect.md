---
layout: sysctl
title: flowlabel_reflect
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/flowlabel_reflect
sysctl-variable: net.ipv6.flowlabel_reflect
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Automatically reflect the flow label. Needed for Path MTU
Discovery to work with Equal Cost Multipath Routing in anycast
environments. See RFC 7690 and:
https://tools.ietf.org/html/draft-wang-6man-flow-label-reflection-01
TRUE: enabled
FALSE: disabled
Default: FALSE

