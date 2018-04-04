---
layout: sysctl
title: panic_on_oom
sysctl-category: vm
sysctl-file: /proc/sys/vm/panic_on_oom
sysctl-variable: vm.panic_on_oom
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This enables or disables panic on out-of-memory feature.

If this is set to 0, the kernel will kill some rogue process,
called oom_killer.  Usually, oom_killer can kill rogue processes and
system will survive.

If this is set to 1, the kernel panics when out-of-memory happens.
However, if a process limits using nodes by mempolicy/cpusets,
and those nodes become memory exhaustion status, one process
may be killed by oom-killer. No panic occurs in this case.
Because other nodes' memory may be free. This means system total status
may be not fatal yet.

If this is set to 2, the kernel panics compulsorily even on the
above-mentioned. Even oom happens under memory cgroup, the whole
system panics.

The default value is 0.
1 and 2 are for failover of clustering. Please select either
according to your policy of failover.
panic_on_oom=2+kdump gives you very strong tool to investigate
why oom happens. You can get snapshot.

