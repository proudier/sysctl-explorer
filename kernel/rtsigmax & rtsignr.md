---
layout: sysctl
title: rtsigmax & rtsignr
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/rtsigmax & rtsignr
sysctl-variable: kernel.rtsigmax & rtsignr
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The file rtsig-max can be used to tune the maximum number
of POSIX realtime (queued) signals that can be outstanding
in the system.

rtsig-nr shows the number of RT signals currently queued.

