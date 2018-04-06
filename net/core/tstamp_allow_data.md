---
layout: sysctl
title: tstamp_allow_data
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/tstamp_allow_data
sysctl-variable: net.core.tstamp_allow_data
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---
Allow processes to receive tx timestamps looped together with the original
packet contents. If disabled, transmit timestamp requests from unprivileged
processes are dropped unless socket option SOF_TIMESTAMPING_OPT_TSONLY is set.
Default: 1 (on)


