---
layout: sysctl
title: ns_last_pid
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/ns_last_pid
sysctl-variable: kernel.ns_last_pid
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The last pid allocated in the current (the one task using this sysctl
lives in) pid namespace. When selecting a pid for a next task on fork
kernel tries to allocate a number starting from this one.

