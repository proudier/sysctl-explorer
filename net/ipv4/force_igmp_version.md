---
layout: sysctl
title: force_igmp_version
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/force_igmp_version
sysctl-variable: net.ipv4.force_igmp_version
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
0 - (default) No enforcement of a IGMP version, IGMPv1/v2 fallback
    allowed. Will back to IGMPv3 mode again if all IGMPv1/v2 Querier
    Present timer expires.
1 - Enforce to use IGMP version 1. Will also reply IGMPv1 report if
    receive IGMPv2/v3 query.
2 - Enforce to use IGMP version 2. Will fallback to IGMPv1 if receive
    IGMPv1 query message. Will reply report if receive IGMPv3 query.
3 - Enforce to use IGMP version 3. The same react with default 0.

Note: this is not the same with force_mld_version because IGMPv3 RFC3376
Security Considerations does not have clear description that we could
ignore other version messages completely as MLDv2 RFC3810. So make
this value as default 0 is recommended.
