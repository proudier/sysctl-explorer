---
layout: sysctl
title: protected_symlinks
sysctl-category: fs
sysctl-file: /proc/sys/fs/protected_symlinks
sysctl-variable: fs.protected_symlinks
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

A long-standing class of security issues is the symlink-based
time-of-check-time-of-use race, most commonly seen in world-writable
directories like /tmp. The common method of exploitation of this flaw
is to cross privilege boundaries when following a given symlink (i.e. a
root process follows a symlink belonging to another user). For a likely
incomplete list of hundreds of examples across the years, please see:
http://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=/tmp

When set to "0", symlink following behavior is unrestricted.

When set to "1" symlinks are permitted to be followed only when outside
a sticky world-writable directory, or when the uid of the symlink and
follower match, or when the directory owner matches the symlink's owner.

This protection is based on the restrictions in Openwall and grsecurity.

