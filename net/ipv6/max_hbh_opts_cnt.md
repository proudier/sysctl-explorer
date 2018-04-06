---
layout: sysctl
title: max_hbh_opts_cnt
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/max_hbh_opts_cnt
sysctl-variable: net.ipv6.max_hbh_opts_cnt
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum number of non-padding TLVs allowed in a Hop-by-Hop
options extension header. If this value is less than zero
then unknown options are disallowed and the number of known
TLVs allowed is the absolute value of this number.
Default: 8

