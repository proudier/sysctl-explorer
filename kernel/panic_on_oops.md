---
layout: sysctl
title: panic_on_oops
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_oops
sysctl-variable: kernel.panic_on_oops
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls the kernel's behaviour when an oops or BUG is encountered.

0: try to continue operation

1: panic immediately.  If the `panic' sysctl is also non-zero then the
   machine will be rebooted.

