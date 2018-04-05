---
layout: sysctl
title: shmall
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/shmall
sysctl-variable: kernel.shmall
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This parameter sets the total amount of shared memory pages that
can be used system wide. Hence, SHMALL should always be at least
ceil(shmmax/PAGE_SIZE).

If you are not sure what the default PAGE_SIZE is on your Linux
system, you can run the following command:
```
# getconf PAGE_SIZE
```
