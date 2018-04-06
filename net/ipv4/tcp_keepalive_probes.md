---
layout: sysctl
title: tcp_keepalive_probes
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_keepalive_probes
sysctl-variable: net.ipv4.tcp_keepalive_probes
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
How many keepalive probes TCP sends out, until it decides that the
connection is broken. Default value: 9.

