---
layout: sysctl
title: tcp_early_retrans
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_early_retrans
sysctl-variable: net.ipv4.tcp_early_retrans
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Tail loss probe (TLP) converts RTOs occurring due to tail
losses into fast recovery (draft-ietf-tcpm-rack). Note that
TLP requires RACK to function properly (see tcp_recovery below)
Possible values:
	0 disables TLP
	3 or 4 enables TLP
Default: 3

