---
layout: sysctl
title: ctrlaltdel
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/ctrlaltdel
sysctl-variable: kernel.ctrlaltdel
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

When the value in this file is 0, ctrl-alt-del is trapped and
sent to the init(1) program to handle a graceful restart.
When, however, the value is > 0, Linux's reaction to a Vulcan
Nerve Pinch (tm) will be an immediate reboot, without even
syncing its dirty buffers.

Note: when a program (like dosemu) has the keyboard in 'raw'
mode, the ctrl-alt-del is intercepted by the program before it
ever reaches the kernel tty layer, and it's up to the program
to decide what to do with it.

