---
layout: sysctl
title: dirty_background_bytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/dirty_background_bytes
sysctl-variable: vm.dirty_background_bytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Contains the amount of dirty memory at which the background kernel
flusher threads will start writeback.

Note: dirty_background_bytes is the counterpart of dirty_background_ratio. Only
one of them may be specified at a time. When one sysctl is written it is
immediately taken into account to evaluate the dirty memory limits and the
other appears as 0 when read.

