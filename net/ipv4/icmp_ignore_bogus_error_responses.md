---
layout: sysctl
title: icmp_ignore_bogus_error_responses
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_ignore_bogus_error_responses
sysctl-variable: net.ipv4.icmp_ignore_bogus_error_responses
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Some routers violate RFC1122 by sending bogus responses to broadcast
frames.  Such violations are normally logged via a kernel warning.
If this is set to TRUE, the kernel will not give such warnings, which
will avoid log file clutter.
Default: 1

