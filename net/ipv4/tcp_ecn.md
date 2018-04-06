---
layout: sysctl
title: tcp_ecn
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_ecn
sysctl-variable: net.ipv4.tcp_ecn
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Control use of Explicit Congestion Notification (ECN) by TCP.
ECN is used only when both ends of the TCP connection indicate
support for it.  This feature is useful in avoiding losses due
to congestion by allowing supporting routers to signal
congestion before having to drop packets.
Possible values are:
	0 Disable ECN.  Neither initiate nor accept ECN.
	1 Enable ECN when requested by incoming connections and
	  also request ECN on outgoing connection attempts.
	2 Enable ECN when requested by incoming connections
	  but do not request ECN on outgoing connections.
Default: 2

