---
layout: sysctl
title: optmem_max
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/optmem_max
sysctl-variable: net.core.optmem_max
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

Maximum ancillary buffer size allowed per socket. Ancillary data is a sequence
of struct cmsghdr structures with appended data.
