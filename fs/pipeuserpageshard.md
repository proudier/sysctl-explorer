---
layout: sysctl
title: pipeuserpageshard
sysctl-category: fs
sysctl-file: /proc/sys/fs/pipeuserpageshard
sysctl-variable: fs.pipeuserpageshard
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

Maximum total number of pages a non-privileged user may allocate for pipes.
Once this limit is reached, no new pipes may be allocated until usage goes
below the limit again. When set to 0, no limit is applied, which is the default
setting.

