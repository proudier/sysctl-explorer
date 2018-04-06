---
layout: sysctl
title: busy_read
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/busy_read
sysctl-variable: net.core.busy_read
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---
Low latency busy poll timeout for socket reads. (needs CONFIG_NET_RX_BUSY_POLL)
Approximate time in us to busy loop waiting for packets on the device queue.
This sets the default value of the SO_BUSY_POLL socket option.
Can be set or overridden per socket by setting socket option SO_BUSY_POLL,
which is the preferred method of enabling. If you need to enable the feature
globally via sysctl, a value of 50 is recommended.
Will increase power usage.
Default: 0 (off)

