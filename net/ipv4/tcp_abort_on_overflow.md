---
layout: sysctl
title: tcp_abort_on_overflow
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_abort_on_overflow
sysctl-variable: net.ipv4.tcp_abort_on_overflow
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If listening service is too slow to accept new connections,
reset them. Default state is FALSE. It means that if overflow
occurred due to a burst, connection will recover. Enable this
option _only_ if you are really sure that listening daemon
cannot be tuned to accept connections faster. Enabling this
option can harm clients of your server.

