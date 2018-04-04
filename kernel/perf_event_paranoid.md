---
layout: sysctl
title: perf_event_paranoid
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/perf_event_paranoid
sysctl-variable: kernel.perf_event_paranoid
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls use of the performance events system by unprivileged
users (without CAP_SYS_ADMIN).  The default value is 2.

 -1: Allow use of (almost) all events by all users
     Ignore mlock limit after perf_event_mlock_kb without CAP_IPC_LOCK
>=0: Disallow ftrace function tracepoint by users without CAP_SYS_ADMIN
     Disallow raw tracepoint access by users without CAP_SYS_ADMIN
>=1: Disallow CPU event access by users without CAP_SYS_ADMIN
>=2: Disallow kernel profiling by users without CAP_SYS_ADMIN

