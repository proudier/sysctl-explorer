---
layout: sysctl
title: filemax & filenr
sysctl-category: fs
sysctl-file: /proc/sys/fs/filemax & filenr
sysctl-variable: fs.filemax & filenr
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

The value in file-max denotes the maximum number of file-
handles that the Linux kernel will allocate. When you get lots
of error messages about running out of file handles, you might
want to increase this limit.

Historically,the kernel was able to allocate file handles
dynamically, but not to free them again. The three values in
file-nr denote the number of allocated file handles, the number
of allocated but unused file handles, and the maximum number of
file handles. Linux 2.6 always reports 0 as the number of free
file handles -- this is not an error, it just means that the
number of allocated file handles exactly matches the number of
used file handles.

Attempts to allocate more file descriptors than file-max are
reported with printk, look for "VFS: file-max limit <number>
reached".
