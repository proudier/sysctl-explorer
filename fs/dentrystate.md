---
layout: sysctl
title: dentrystate
sysctl-category: fs
sysctl-file: /proc/sys/fs/dentrystate
sysctl-variable: fs.dentrystate
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

From linux/fs/dentry.c:

```
struct {
        int nr_dentry;
        int nr_unused;
        int age_limit;         /* age in seconds */
        int want_pages;        /* pages requested by system */
        int dummy[2];
} dentry_stat = {0, 0, 45, 0,};
```

Dentries are dynamically allocated and deallocated, and
nr_dentry seems to be 0 all the time. Hence it's safe to
assume that only nr_unused, age_limit and want_pages are
used. Nr_unused seems to be exactly what its name says.
Age_limit is the age in seconds after which dcache entries
can be reclaimed when memory is short and want_pages is
nonzero when shrink_dcache_pages() has been called and the
dcache isn't pruned yet.

