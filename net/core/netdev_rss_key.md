---
layout: sysctl
title: netdev_rss_key
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/netdev_rss_key
sysctl-variable: net.core.netdev_rss_key
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

RSS (Receive Side Scaling) enabled drivers use a 40 bytes host key that is
randomly generated.
Some user space might need to gather its content even if drivers do not
provide ethtool -x support yet.

myhost:~# cat /proc/sys/net/core/netdev_rss_key
84:50:f4:00:a8:15:d1:a7:e9:7f:1d:60:35:c7:47:25:42:97:74:ca:56:bb:b6:a1:d8: ... (52 bytes total)

File contains nul bytes if no driver ever called netdev_rss_key_fill() function.
Note:
/proc/sys/net/core/netdev_rss_key contains 52 bytes of key,
but most drivers only use 40 bytes of it.

myhost:~# ethtool -x eth0
RX flow hash indirection table for eth0 with 8 RX ring(s):
    0:    0     1     2     3     4     5     6     7
RSS hash key:
84:50:f4:00:a8:15:d1:a7:e9:7f:1d:60:35:c7:47:25:42:97:74:ca:56:bb:b6:a1:d8:43:e3:c9:0c:fd:17:55:c2:3a:4d:69:ed:f1:42:89

