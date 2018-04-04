---
layout: sysctl
title: hung_task_timeout_secs
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/hung_task_timeout_secs
sysctl-variable: kernel.hung_task_timeout_secs
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Check interval. When a task in D state did not get scheduled
for more than this value report a warning.
This file shows up if CONFIG_DETECT_HUNG_TASK is enabled.

0: means infinite timeout - no checking done.
Possible values to set are in range {0..LONG_MAX/HZ}.

