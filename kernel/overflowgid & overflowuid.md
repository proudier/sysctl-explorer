---
layout: sysctl
title: overflowgid & overflowuid
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/overflowgid & overflowuid
sysctl-variable: kernel.overflowgid & overflowuid
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

if your architecture did not always support 32-bit UIDs (i.e. arm,
i386, m68k, sh, and sparc32), a fixed UID and GID will be returned to
applications that use the old 16-bit UID/GID system calls, if the
actual UID or GID would exceed 65535.

These sysctls allow you to change the value of the fixed UID and GID.
The default is 65534.

