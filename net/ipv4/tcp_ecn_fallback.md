---
layout: sysctl
title: tcp_ecn_fallback
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_ecn_fallback
sysctl-variable: net.ipv4.tcp_ecn_fallback
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If the kernel detects that ECN connection misbehaves, enable fall
back to non-ECN. Currently, this knob implements the fallback
from RFC3168, section 6.1.1.1., but we reserve that in future,
additional detection mechanisms could be implemented under this
knob. The value	is not used, if tcp_ecn or per route (or congestion
control) ECN settings are disabled.
Default: 1 (fallback enabled)

