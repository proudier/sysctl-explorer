---
layout: sysctl
title: flowlabel_state_ranges
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/flowlabel_state_ranges
sysctl-variable: net.ipv6.flowlabel_state_ranges
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Split the flow label number space into two ranges. 0-0x7FFFF is
reserved for the IPv6 flow manager facility, 0x80000-0xFFFFF
is reserved for stateless flow labels as described in RFC6437.
TRUE: enabled
FALSE: disabled
Default: true

