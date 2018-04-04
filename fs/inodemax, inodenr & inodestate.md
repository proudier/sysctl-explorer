---
layout: sysctl
title: inodemax, inodenr & inodestate
sysctl-category: fs
sysctl-file: /proc/sys/fs/inodemax, inodenr & inodestate
sysctl-variable: fs.inodemax, inodenr & inodestate
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

As with file handles, the kernel allocates the inode structures
dynamically, but can't free them yet.

The value in inode-max denotes the maximum number of inode
handlers. This value should be 3-4 times larger than the value
in file-max, since stdin, stdout and network sockets also
need an inode struct to handle them. When you regularly run
out of inodes, you need to increase this value.

The file inode-nr contains the first two items from
inode-state, so we'll skip to that file...

Inode-state contains three actual numbers and four dummies.
The actual numbers are, in order of appearance, nr_inodes,
nr_free_inodes and preshrink.

Nr_inodes stands for the number of inodes the system has
allocated, this can be slightly more than inode-max because
Linux allocates them one pageful at a time.

Nr_free_inodes represents the number of free inodes (?) and
preshrink is nonzero when the nr_inodes > inode-max and the
system needs to prune the inode list instead of allocating
more.

