---
layout: sysctl
title: hung_task_warnings
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/hung_task_warnings
sysctl-variable: kernel.hung_task_warnings
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The maximum number of warnings to report. During a check interval
if a hung task is detected, this value is decreased by 1.
When this value reaches 0, no more warnings will be reported.
This file shows up if CONFIG_DETECT_HUNG_TASK is enabled.

-1: report an infinite number of warnings.

