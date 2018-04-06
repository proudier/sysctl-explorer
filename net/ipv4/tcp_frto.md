---
layout: sysctl
title: tcp_frto
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_frto
sysctl-variable: net.ipv4.tcp_frto
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enables Forward RTO-Recovery (F-RTO) defined in RFC5682.
F-RTO is an enhanced recovery algorithm for TCP retransmission
timeouts.  It is particularly beneficial in networks where the
RTT fluctuates (e.g., wireless). F-RTO is sender-side only
modification. It does not require any support from the peer.

By default it's enabled with a non-zero value. 0 disables F-RTO.

