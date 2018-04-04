---
layout: sysctl
title: panic
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic
sysctl-variable: kernel.panic
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The value in this file represents the number of seconds the kernel
waits before rebooting on a panic. When you use the software watchdog,
the recommended setting is 60.

