---
layout: sysctl
title: igmp_max_memberships
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/igmp_max_memberships
sysctl-variable: net.ipv4.igmp_max_memberships
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Change the maximum number of multicast groups we can subscribe to.
Default: 20

Theoretical maximum value is bounded by having to send a membership
report in a single datagram (i.e. the report can't span multiple
datagrams, or risk confusing the switch and leaving groups you don't
intend to).

The number of supported groups 'M' is bounded by the number of group
report entries you can fit into a single datagram of 65535 bytes.

M = 65536-sizeof (ip header)/(sizeof(Group record))

Group records are variable length, with a minimum of 12 bytes.
So net.ipv4.igmp_max_memberships should not be set higher than:

(65536-24) / 12 = 5459

The value 5459 assumes no IP header options, so in practice
this number may be lower.

