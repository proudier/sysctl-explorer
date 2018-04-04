---
layout: sysctl
title: oom_kill_allocating_task
sysctl-category: vm
sysctl-file: /proc/sys/vm/oom_kill_allocating_task
sysctl-variable: vm.oom_kill_allocating_task
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This enables or disables killing the OOM-triggering task in
out-of-memory situations.

If this is set to zero, the OOM killer will scan through the entire
tasklist and select a task based on heuristics to kill.  This normally
selects a rogue memory-hogging task that frees up a large amount of
memory when killed.

If this is set to non-zero, the OOM killer simply kills the task that
triggered the out-of-memory condition.  This avoids the expensive
tasklist scan.

If panic_on_oom is selected, it takes precedence over whatever value
is used in oom_kill_allocating_task.

The default value is 0.

