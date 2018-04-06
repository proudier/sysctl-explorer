---
layout: sysctl
title: tcp_max_orphans
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_max_orphans
sysctl-variable: net.ipv4.tcp_max_orphans
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximal number of TCP sockets not attached to any user file handle,
held by system.	If this number is exceeded orphaned connections are
reset immediately and warning is printed. This limit exists
only to prevent simple DoS attacks, you _must_ not rely on this
or lower the limit artificially, but rather increase it
(probably, after increasing installed memory),
if network conditions require more than default value,
and tune network services to linger and kill such states
more aggressively. Let me to remind again: each orphan eats
up to ~64K of unswappable memory.

