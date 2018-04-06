---
layout: sysctl
title: tcp_syn_retries
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_syn_retries
sysctl-variable: net.ipv4.tcp_syn_retries
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Number of times initial SYNs for an active TCP connection attempt
will be retransmitted. Should not be higher than 127. Default value
is 6, which corresponds to 63seconds till the last retransmission
with the current initial RTO of 1second. With this the final timeout
for an active TCP connection attempt will happen after 127seconds.

