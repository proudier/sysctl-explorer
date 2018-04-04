---
layout: sysctl
title: pipeuserpagessoft
sysctl-category: fs
sysctl-file: /proc/sys/fs/pipeuserpagessoft
sysctl-variable: fs.pipeuserpagessoft
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

Maximum total number of pages a non-privileged user may allocate for pipes
before the pipe size gets limited to a single page. Once this limit is reached,
new pipes will be limited to a single page in size for this user in order to
limit total memory usage, and trying to increase them using fcntl() will be
denied until usage goes below the limit again. The default value allows to
allocate up to 1024 pipes at their default size. When set to 0, no limit is
applied.

