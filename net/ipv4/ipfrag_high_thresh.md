---
layout: sysctl
title: ipfrag_high_thresh
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ipfrag_high_thresh
sysctl-variable: net.ipv4.ipfrag_high_thresh
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum memory used to reassemble IP fragments. When
ipfrag_high_thresh bytes of memory is allocated for this purpose,
the fragment handler will toss packets until ipfrag_low_thresh
is reached. This also serves as a maximum limit to namespaces
different from the initial one.

