---
layout: sysctl
title: oom_dump_tasks
sysctl-category: vm
sysctl-file: /proc/sys/vm/oom_dump_tasks
sysctl-variable: vm.oom_dump_tasks
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Enables a system-wide task dump (excluding kernel threads) to be produced
when the kernel performs an OOM-killing and includes such information as
pid, uid, tgid, vm size, rss, pgtables_bytes, swapents, oom_score_adj
score, and name.  This is helpful to determine why the OOM killer was
invoked, to identify the rogue task that caused it, and to determine why
the OOM killer chose the task it did to kill.

If this is set to zero, this information is suppressed.  On very
large systems with thousands of tasks it may not be feasible to dump
the memory state information for each one.  Such systems should not
be forced to incur a performance penalty in OOM conditions when the
information may not be desired.

If this is set to non-zero, this information is shown whenever the
OOM killer actually kills a memory-hogging task.

The default value is 1 (enabled).

