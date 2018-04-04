---
layout: sysctl
title: core_pipe_limit
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/core_pipe_limit
sysctl-variable: kernel.core_pipe_limit
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This sysctl is only applicable when core_pattern is configured to pipe
core files to a user space helper (when the first character of
core_pattern is a '|', see above).  When collecting cores via a pipe
to an application, it is occasionally useful for the collecting
application to gather data about the crashing process from its
/proc/pid directory.  In order to do this safely, the kernel must wait
for the collecting process to exit, so as not to remove the crashing
processes proc files prematurely.  This in turn creates the
possibility that a misbehaving userspace collecting process can block
the reaping of a crashed process simply by never exiting.  This sysctl
defends against that.  It defines how many concurrent crashing
processes may be piped to user space applications in parallel.  If
this value is exceeded, then those crashing processes above that value
are noted via the kernel log and their cores are skipped.  0 is a
special value, indicating that unlimited processes may be captured in
parallel, but that no waiting will take place (i.e. the collecting
process is not guaranteed access to /proc/<crashing pid>/).  This
value defaults to 0.

