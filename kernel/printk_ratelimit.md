---
layout: sysctl
title: printk_ratelimit
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/printk_ratelimit
sysctl-variable: kernel.printk_ratelimit
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Some warning messages are rate limited. printk_ratelimit specifies
the minimum length of time between these messages (in jiffies), by
default we allow one every 5 seconds.

A value of 0 will disable rate limiting.

