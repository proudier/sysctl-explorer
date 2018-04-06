---
layout: sysctl
title: netdev_tstamp_prequeue
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/netdev_tstamp_prequeue
sysctl-variable: net.core.netdev_tstamp_prequeue
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

If set to 0, RX packet timestamps can be sampled after RPS processing, when
the target CPU processes packets. It might give some delay on timestamps, but
permit to distribute the load on several cpus.

If set to 1 (default), timestamps are sampled as soon as possible, before
queueing.

