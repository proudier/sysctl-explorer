---
layout: sysctl
title: sysctl_writes_strict
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/sysctl_writes_strict
sysctl-variable: kernel.sysctl_writes_strict
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Control how file position affects the behavior of updating sysctl values
via the /proc/sys interface:

  -1 - Legacy per-write sysctl value handling, with no printk warnings.
       Each write syscall must fully contain the sysctl value to be
       written, and multiple writes on the same sysctl file descriptor
       will rewrite the sysctl value, regardless of file position.
   0 - Same behavior as above, but warn about processes that perform writes
       to a sysctl file descriptor when the file position is not 0.
   1 - (default) Respect file position when writing sysctl strings. Multiple
       writes will append to the sysctl value buffer. Anything past the max
       length of the sysctl value buffer will be ignored. Writes to numeric
       sysctl entries must always be at file position 0 and the value must
       be fully contained in the buffer sent in the write syscall.

