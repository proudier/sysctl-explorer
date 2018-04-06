---
layout: sysctl
title: igmp_qrv
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/igmp_qrv
sysctl-variable: net.ipv4.igmp_qrv
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls the IGMP query robustness variable (see RFC2236 8.1).
Default: 2 (as specified by RFC2236 8.1)
Minimum: 1 (as specified by RFC6636 4.5)

