---
layout: sysctl
title: drop_caches
sysctl-category: vm
sysctl-file: /proc/sys/vm/drop_caches
sysctl-variable: vm.drop_caches
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Writing to this will cause the kernel to drop clean caches, as well as
reclaimable slab objects like dentries and inodes.  Once dropped, their
memory becomes free.

To free pagecache:
	`echo 1 > /proc/sys/vm/drop_caches`

To free reclaimable slab objects (includes dentries and inodes):
	`echo 2 > /proc/sys/vm/drop_caches`

To free slab objects and pagecache:
	`echo 3 > /proc/sys/vm/drop_caches`

This is a non-destructive operation and will not free any dirty objects.
To increase the number of objects freed by this operation, the user may run
`sync' prior to writing to /proc/sys/vm/drop_caches.  This will minimize the
number of dirty objects on the system and create more candidates to be
dropped.

This file is not a means to control the growth of the various kernel caches
(inodes, dentries, pagecache, etc...)  These objects are automatically
reclaimed by the kernel when memory is needed elsewhere on the system.

Use of this file can cause performance problems.  Since it discards cached
objects, it may cost a significant amount of I/O and CPU to recreate the
dropped objects, especially if they were under heavy use.  Because of this,
use outside of a testing or debugging environment is not recommended.

You may see informational messages in your kernel log when this file is
used:

	cat (1234): drop_caches: 3

These are informational only.  They do not mean that anything is wrong
with your system.  To disable them, echo 4 (bit 3) into drop_caches.

