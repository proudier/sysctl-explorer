---
layout: sysctl
title: tcp_challenge_ack_limit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_challenge_ack_limit
sysctl-variable: net.ipv4.tcp_challenge_ack_limit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limits number of Challenge ACK sent per second, as recommended
in RFC 5961 (Improving TCP's Robustness to Blind In-Window Attacks)
Default: 100

