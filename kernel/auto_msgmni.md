---
layout: sysctl
title: auto_msgmni
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/auto_msgmni
sysctl-variable: kernel.auto_msgmni
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This variable has no effect and may be removed in future kernel
releases. Reading it always returns 0.
Up to Linux 3.17, it enabled/disabled automatic recomputing of msgmni
upon memory add/remove or upon ipc namespace creation/removal.
Echoing "1" into this file enabled msgmni automatic recomputing.
Echoing "0" turned it off. auto_msgmni default value was 1.


