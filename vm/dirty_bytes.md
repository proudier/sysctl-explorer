---
layout: sysctl
title: dirty_bytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/dirty_bytes
sysctl-variable: vm.dirty_bytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Contains the amount of dirty memory at which a process generating disk writes
will itself start writeback.

Note: dirty_bytes is the counterpart of dirty_ratio. Only one of them may be
specified at a time. When one sysctl is written it is immediately taken into
account to evaluate the dirty memory limits and the other appears as 0 when
read.

Note: the minimum value allowed for dirty_bytes is two pages (in bytes); any
value lower than this limit will be ignored and the old configuration will be
retained.

