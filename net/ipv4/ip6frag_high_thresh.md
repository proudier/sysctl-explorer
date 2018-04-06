---
layout: sysctl
title: ip6frag_high_thresh
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/ip6frag_high_thresh
sysctl-variable: net.ipv6.ip6frag_high_thresh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum memory used to reassemble IPv6 fragments. When
ip6frag_high_thresh bytes of memory is allocated for this purpose,
the fragment handler will toss packets until ip6frag_low_thresh
is reached.

