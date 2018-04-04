---
layout: sysctl
title: supermax & supernr
sysctl-category: fs
sysctl-file: /proc/sys/fs/supermax & supernr
sysctl-variable: fs.supermax & supernr
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

These numbers control the maximum number of superblocks, and
thus the maximum number of mounted filesystems the kernel
can have. You only need to increase super-max if you need to
mount more filesystems than the current value in super-max
allows you to.

