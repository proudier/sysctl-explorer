---
layout: sysctl
title: shm_rmid_forced
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/shm_rmid_forced
sysctl-variable: kernel.shm_rmid_forced
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Linux lets you set resource limits, including how much memory one
process can consume, via setrlimit(2).  Unfortunately, shared memory
segments are allowed to exist without association with any process, and
thus might not be counted against any resource limits.  If enabled,
shared memory segments are automatically destroyed when their attach
count becomes zero after a detach or a process termination.  It will
also destroy segments that were created, but never attached to, on exit
from the process.  The only use left for IPC_RMID is to immediately
destroy an unattached segment.  Of course, this breaks the way things are
defined, so some applications might stop working.  Note that this
feature will do you no good unless you also configure your resource
limits (in particular, RLIMIT_AS and RLIMIT_NPROC).  Most systems don't
need this.

Note that if you change this from 0 to 1, already created segments
without users and with a dead originative process will be destroyed.

