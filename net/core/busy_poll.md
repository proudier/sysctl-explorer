---
layout: sysctl
title: busy_poll
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/busy_poll
sysctl-variable: net.core.busy_poll
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---
Low latency busy poll timeout for poll and select. (needs CONFIG_NET_RX_BUSY_POLL)
Approximate time in us to busy loop waiting for events.
Recommended value depends on the number of sockets you poll on.
For several sockets 50, for several hundreds 100.
For more than that you probably want to use epoll.
Note that only sockets with SO_BUSY_POLL set will be busy polled,
so you want to either selectively set SO_BUSY_POLL on those sockets or set
sysctl.net.busy_read globally.
Will increase power usage.
Default: 0 (off)

