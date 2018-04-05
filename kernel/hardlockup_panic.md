---
layout: sysctl
title: hardlockup_panic
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/hardlockup_panic
sysctl-variable: kernel.hardlockup_panic
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This parameter can be used to control whether the kernel panics
when a hard lockup is detected.

-   0 - don't panic on hard lockup
-   1 - panic on hard lockup

See Documentation/lockup-watchdogs.txt for more information.  This can
also be set using the nmi_watchdog kernel parameter.

