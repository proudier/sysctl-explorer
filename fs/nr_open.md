---
layout: sysctl
title: nr_open
sysctl-category: fs
sysctl-file: /proc/sys/fs/nr_open
sysctl-variable: fs.nr_open
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

This denotes the maximum number of file-handles a process can
allocate. Default value is 1024*1024 (1048576) which should be
enough for most machines. Actual limit depends on RLIMIT_NOFILE
resource limit.

