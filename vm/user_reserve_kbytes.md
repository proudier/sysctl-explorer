---
layout: sysctl
title: user_reserve_kbytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/user_reserve_kbytes
sysctl-variable: vm.user_reserve_kbytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

When overcommit_memory is set to 2, "never overcommit" mode, reserve
min(3% of current process size, user_reserve_kbytes) of free memory.
This is intended to prevent a user from starting a single memory hogging
process, such that they cannot recover (kill the hog).

user_reserve_kbytes defaults to min(3% of the current process size, 128MB).

If this is reduced to zero, then the user will be allowed to allocate
all free memory with a single process, minus admin_reserve_kbytes.
Any subsequent attempts to execute a command will result in
"fork: Cannot allocate memory".

Changing this takes effect whenever an application requests memory.

