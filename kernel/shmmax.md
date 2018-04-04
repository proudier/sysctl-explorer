---
layout: sysctl
title: shmmax
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/shmmax
sysctl-variable: kernel.shmmax
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value can be used to query and set the run time limit
on the maximum shared memory segment size that can be created.
Shared memory segments up to 1Gb are now supported in the
kernel.  This value defaults to SHMMAX.

