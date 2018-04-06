---
layout: sysctl
title: default_qdisc
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/default_qdisc
sysctl-variable: net.core.default_qdisc
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

The default queuing discipline to use for network devices. This allows
overriding the default of pfifo_fast with an alternative. Since the default
queuing discipline is created without additional parameters so is best suited
to queuing disciplines that work well without configuration like stochastic
fair queue (sfq), CoDel (codel) or fair queue CoDel (fq_codel). Don't use
queuing disciplines like Hierarchical Token Bucket or Deficit Round Robin
which require setting up classes and bandwidths. Note that physical multiqueue
interfaces still use mq as root qdisc, which in turn uses this default for its
leaves. Virtual devices (like e.g. lo or veth) ignore this setting and instead
default to noqueue.
Default: pfifo_fast

