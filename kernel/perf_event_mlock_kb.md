---
layout: sysctl
title: perf_event_mlock_kb
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/perf_event_mlock_kb
sysctl-variable: kernel.perf_event_mlock_kb
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Control size of per-cpu ring buffer not counted agains mlock limit.

The default value is 512 + 1 page

