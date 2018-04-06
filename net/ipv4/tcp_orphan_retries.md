---
layout: sysctl
title: tcp_orphan_retries
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_orphan_retries
sysctl-variable: net.ipv4.tcp_orphan_retries
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
This value influences the timeout of a locally closed TCP connection,
when RTO retransmissions remain unacknowledged.
See tcp_retries2 for more details.

The default value is 8.
If your machine is a loaded WEB server,
you should think about lowering this value, such sockets
may consume significant resources. Cf. tcp_max_orphans.

