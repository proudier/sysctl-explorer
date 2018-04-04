---
layout: sysctl
title: hung_task_panic
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/hung_task_panic
sysctl-variable: kernel.hung_task_panic
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls the kernel's behavior when a hung task is detected.
This file shows up if CONFIG_DETECT_HUNG_TASK is enabled.

0: continue operation. This is the default behavior.

1: panic immediately.

