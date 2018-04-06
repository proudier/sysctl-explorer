---
layout: sysctl
title: tcp_thin_linear_timeouts
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_thin_linear_timeouts
sysctl-variable: net.ipv4.tcp_thin_linear_timeouts
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable dynamic triggering of linear timeouts for thin streams.
If set, a check is performed upon retransmission by timeout to
determine if the stream is thin (less than 4 packets in flight).
As long as the stream is found to be thin, up to 6 linear
timeouts may be performed before exponential backoff mode is
initiated. This improves retransmission latency for
non-aggressive thin streams, often found to be time-dependent.
For more information on thin streams, see
Documentation/networking/tcp-thin.txt
Default: 0

