---
layout: sysctl
title: aionr & aiomaxnr
sysctl-category: fs
sysctl-file: /proc/sys/fs/aionr & aiomaxnr
sysctl-variable: fs.aionr & aiomaxnr
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

aio-nr is the running total of the number of events specified on the
io_setup system call for all currently active aio contexts.  If aio-nr
reaches aio-max-nr then io_setup will fail with EAGAIN.  Note that
raising aio-max-nr does not result in the pre-allocation or re-sizing
of any kernel data structures.

aio-nr shows the current system-wide number of asynchronous io
requests.  aio-max-nr allows you to change the maximum value
aio-nr can grow to.

