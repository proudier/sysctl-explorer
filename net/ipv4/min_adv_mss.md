---
layout: sysctl
title: min_adv_mss
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/min_adv_mss
sysctl-variable: net.ipv4.min_adv_mss
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The advertised MSS depends on the first hop route MTU, but will
never be lower than this setting.

