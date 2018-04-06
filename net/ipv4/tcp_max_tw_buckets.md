---
layout: sysctl
title: tcp_max_tw_buckets
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_max_tw_buckets
sysctl-variable: net.ipv4.tcp_max_tw_buckets
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximal number of timewait sockets held by system simultaneously.
If this number is exceeded time-wait socket is immediately destroyed
and warning is printed. This limit exists only to prevent
simple DoS attacks, you _must_ not lower the limit artificially,
but rather increase it (probably, after increasing installed memory),
if network conditions require more than default value.

tcp_mem - vector of 3 INTEGERs: min, pressure, max
min: below this number of pages TCP is not bothered about its
memory appetite.

pressure: when amount of memory allocated by TCP exceeds this number
of pages, TCP moderates its memory consumption and enters memory
pressure mode, which is exited when memory consumption falls
under "min".

max: number of pages allowed for queueing by all TCP sockets.

Defaults are calculated at boot time from amount of available
memory.

