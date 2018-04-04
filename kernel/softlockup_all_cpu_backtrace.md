---
layout: sysctl
title: softlockup_all_cpu_backtrace
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/softlockup_all_cpu_backtrace
sysctl-variable: kernel.softlockup_all_cpu_backtrace
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value controls the soft lockup detector thread's behavior
when a soft lockup condition is detected as to whether or not
to gather further debug information. If enabled, each cpu will
be issued an NMI and instructed to capture stack trace.

This feature is only applicable for architectures which support
NMI.

0: do nothing. This is the default behavior.

1: on detection capture more debug information.

