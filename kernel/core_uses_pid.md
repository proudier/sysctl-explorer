---
layout: sysctl
title: core_uses_pid
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/core_uses_pid
sysctl-variable: kernel.core_uses_pid
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The default coredump filename is "core".  By setting
core_uses_pid to 1, the coredump filename becomes core.PID.
If core_pattern does not include "%p" (default does not)
and core_uses_pid is set, then .PID will be appended to
the filename.

