---
layout: sysctl
title: dirty_writeback_centisecs
sysctl-category: vm
sysctl-file: /proc/sys/vm/dirty_writeback_centisecs
sysctl-variable: vm.dirty_writeback_centisecs
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

The kernel flusher threads will periodically wake up and write `old' data
out to disk.  This tunable expresses the interval between those wakeups, in
100'ths of a second.

Setting this to zero disables periodic writeback altogether.

