---
layout: sysctl
title: printk_ratelimit_burst
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/printk_ratelimit_burst
sysctl-variable: kernel.printk_ratelimit_burst
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

While long term we enforce one message per printk_ratelimit
seconds, we do allow a burst of messages to pass through.
printk_ratelimit_burst specifies the number of messages we can
send before ratelimiting kicks in.

