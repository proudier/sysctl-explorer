---
layout: sysctl
title: tcp_min_tso_segs
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_min_tso_segs
sysctl-variable: net.ipv4.tcp_min_tso_segs
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Minimal number of segments per TSO frame.
Since linux-3.12, TCP does an automatic sizing of TSO frames,
depending on flow rate, instead of filling 64Kbytes packets.
For specific usages, it's possible to force TCP to build big
TSO frames. Note that TCP stack might split too big TSO packets
if available window is too small.
Default: 2

