---
layout: sysctl
title: dquotmax & dquotnr
sysctl-category: fs
sysctl-file: /proc/sys/fs/dquotmax & dquotnr
sysctl-variable: fs.dquotmax & dquotnr
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

The file dquot-max shows the maximum number of cached disk
quota entries.

The file dquot-nr shows the number of allocated disk quota
entries and the number of free disk quota entries.

If the number of free cached disk quotas is very low and
you have some awesome number of simultaneous system users,
you might want to raise the limit.

