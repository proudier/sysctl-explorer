---
layout: sysctl
title: ip_forward_use_pmtu
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_forward_use_pmtu
sysctl-variable: net.ipv4.ip_forward_use_pmtu
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
By default we don't trust protocol path MTUs while forwarding
because they could be easily forged and can lead to unwanted
fragmentation by the router.
You only need to enable this if you have user-space software
which tries to discover path mtus by itself and depends on the
kernel honoring this information. This is normally not the
case.
Default: 0 (disabled)
Possible values:
0 - disabled
1 - enabled

