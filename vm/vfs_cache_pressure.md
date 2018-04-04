---
layout: sysctl
title: vfs_cache_pressure
sysctl-category: vm
sysctl-file: /proc/sys/vm/vfs_cache_pressure
sysctl-variable: vm.vfs_cache_pressure
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---
------------------

This percentage value controls the tendency of the kernel to reclaim
the memory which is used for caching of directory and inode objects.

At the default value of vfs_cache_pressure=100 the kernel will attempt to
reclaim dentries and inodes at a "fair" rate with respect to pagecache and
swapcache reclaim.  Decreasing vfs_cache_pressure causes the kernel to prefer
to retain dentry and inode caches. When vfs_cache_pressure=0, the kernel will
never reclaim dentries and inodes due to memory pressure and this can easily
lead to out-of-memory conditions. Increasing vfs_cache_pressure beyond 100
causes the kernel to prefer to reclaim dentries and inodes.

Increasing vfs_cache_pressure significantly beyond 100 may have negative
performance impact. Reclaim code needs to take various locks to find freeable
directory and inode objects. With vfs_cache_pressure=1000, it will look for
ten times more freeable objects than there are.

