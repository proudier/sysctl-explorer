---
layout: sysctl
title: flowlabel_consistency
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/flowlabel_consistency
sysctl-variable: net.ipv6.flowlabel_consistency
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Protect the consistency (and unicity) of flow label.
You have to disable it to use IPV6_FL_F_REFLECT flag on the
flow label manager.
TRUE: enabled
FALSE: disabled
Default: TRUE

