---
layout: sysctl
title: idgen_retries
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/idgen_retries
sysctl-variable: net.ipv6.idgen_retries
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls the number of retries to generate a stable privacy
address if a DAD conflict is detected.
Default: 3 (as specified in RFC7217)

