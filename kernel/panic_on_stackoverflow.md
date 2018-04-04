---
layout: sysctl
title: panic_on_stackoverflow
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_stackoverflow
sysctl-variable: kernel.panic_on_stackoverflow
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls the kernel's behavior when detecting the overflows of
kernel, IRQ and exception stacks except a user stack.
This file shows up if CONFIG_DEBUG_STACKOVERFLOW is enabled.

0: try to continue operation.

1: panic immediately.

