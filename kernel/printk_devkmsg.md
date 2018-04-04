---
layout: sysctl
title: printk_devkmsg
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/printk_devkmsg
sysctl-variable: kernel.printk_devkmsg
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Control the logging to /dev/kmsg from userspace:

ratelimit: default, ratelimited
on: unlimited logging to /dev/kmsg from userspace
off: logging to /dev/kmsg disabled

The kernel command line parameter printk.devkmsg= overrides this and is
a one-time setting until next reboot: once set, it cannot be changed by
this sysctl interface anymore.

