---
layout: sysctl
title: hardlockup_all_cpu_backtrace
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/hardlockup_all_cpu_backtrace
sysctl-variable: kernel.hardlockup_all_cpu_backtrace
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value controls the hard lockup detector behavior when a hard
lockup condition is detected as to whether or not to gather further
debug information. If enabled, arch-specific all-CPU stack dumping
will be initiated.

0: do nothing. This is the default behavior.

1: on detection capture more debug information.
