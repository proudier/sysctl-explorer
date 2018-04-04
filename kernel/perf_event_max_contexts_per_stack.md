---
layout: sysctl
title: perf_event_max_contexts_per_stack
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/perf_event_max_contexts_per_stack
sysctl-variable: kernel.perf_event_max_contexts_per_stack
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls maximum number of stack frame context entries for
(attr.sample_type & PERF_SAMPLE_CALLCHAIN) configured events, for
instance, when using 'perf record -g' or 'perf trace --call-graph fp'.

This can only be done when no events are in use that have callchains
enabled, otherwise writing to this file will return -EBUSY.

The default value is 8.

