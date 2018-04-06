---
layout: sysctl
title: idgen_delay
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/idgen_delay
sysctl-variable: net.ipv6.idgen_delay
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls the delay in seconds after which time to retry
privacy stable address generation if a DAD conflict is
detected.
Default: 1 (as specified in RFC7217)

