---
layout: sysctl
title: tcp_limit_output_bytes
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_limit_output_bytes
sysctl-variable: net.ipv4.tcp_limit_output_bytes
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls TCP Small Queue limit per tcp socket.
TCP bulk sender tends to increase packets in flight until it
gets losses notifications. With SNDBUF autotuning, this can
result in a large amount of packets queued in qdisc/device
on the local machine, hurting latency of other flows, for
typical pfifo_fast qdiscs.
tcp_limit_output_bytes limits the number of bytes on qdisc
or device to reduce artificial RTT/cwnd and reduce bufferbloat.
Default: 262144

