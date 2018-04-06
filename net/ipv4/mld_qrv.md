---
layout: sysctl
title: mld_qrv
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/mld_qrv
sysctl-variable: net.ipv6.mld_qrv
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls the MLD query robustness variable (see RFC3810 9.1).
Default: 2 (as specified by RFC3810 9.1)
Minimum: 1 (as specified by RFC6636 4.5)

