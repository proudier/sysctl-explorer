---
layout: sysctl
title: memory_failure_recovery
sysctl-category: vm
sysctl-file: /proc/sys/vm/memory_failure_recovery
sysctl-variable: vm.memory_failure_recovery
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Enable memory failure recovery (when supported by the platform)

1: Attempt recovery.

0: Always panic on a memory failure.

