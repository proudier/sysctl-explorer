---
layout: sysctl
title: pid_max
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/pid_max
sysctl-variable: kernel.pid_max
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

PID allocation wrap value.  When the kernel's next PID value
reaches this value, it wraps back to a minimum PID value.
PIDs of value pid_max or larger are not allocated.

