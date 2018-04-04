---
layout: sysctl
title: threadsmax
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/threadsmax
sysctl-variable: kernel.threadsmax
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This value controls the maximum number of threads that can be created
using fork().

During initialization the kernel sets this value such that even if the
maximum number of threads is created, the thread structures occupy only
a part (1/8th) of the available RAM pages.

The minimum value that can be written to threads-max is 20.
The maximum value that can be written to threads-max is given by the
constant FUTEX_TID_MASK (0x3fffffff).
If a value outside of this range is written to threads-max an error
EINVAL occurs.

The value written is checked against the available RAM pages. If the
thread structures would occupy too much (more than 1/8th) of the
available RAM pages threads-max is reduced accordingly.

