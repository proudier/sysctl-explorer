---
layout: sysctl
title: tcp_synack_retries
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_synack_retries
sysctl-variable: net.ipv4.tcp_synack_retries
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of times SYNACKs for a passive TCP connection attempt will
be retransmitted. Should not be higher than 255. Default value
is 5, which corresponds to 31seconds till the last retransmission
with the current initial RTO of 1second. With this the final timeout
for a passive TCP connection will happen after 63seconds.

