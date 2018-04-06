---
layout: sysctl
title: ip_default_ttl
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_default_ttl
sysctl-variable: net.ipv4.ip_default_ttl
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Default value of TTL field (Time To Live) for outgoing (but not
forwarded) IP packets. Should be between 1 and 255 inclusive.
Default: 64 (as recommended by RFC1700)

