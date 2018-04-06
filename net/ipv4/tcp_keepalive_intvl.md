---
layout: sysctl
title: tcp_keepalive_intvl
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_keepalive_intvl
sysctl-variable: net.ipv4.tcp_keepalive_intvl
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
How frequently the probes are send out. Multiplied by
tcp_keepalive_probes it is time to kill not responding connection,
after probes started. Default value: 75sec i.e. connection
will be aborted after ~11 minutes of retries.

