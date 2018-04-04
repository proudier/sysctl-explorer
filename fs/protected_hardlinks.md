---
layout: sysctl
title: protected_hardlinks
sysctl-category: fs
sysctl-file: /proc/sys/fs/protected_hardlinks
sysctl-variable: fs.protected_hardlinks
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

A long-standing class of security issues is the hardlink-based
time-of-check-time-of-use race, most commonly seen in world-writable
directories like /tmp. The common method of exploitation of this flaw
is to cross privilege boundaries when following a given hardlink (i.e. a
root process follows a hardlink created by another user). Additionally,
on systems without separated partitions, this stops unauthorized users
from "pinning" vulnerable setuid/setgid files against being upgraded by
the administrator, or linking to special files.

When set to "0", hardlink creation behavior is unrestricted.

When set to "1" hardlinks cannot be created by users if they do not
already own the source file, or do not have read/write access to it.

This protection is based on the restrictions in Openwall and grsecurity.

