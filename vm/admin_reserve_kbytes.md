---
layout: sysctl
title: admin_reserve_kbytes
sysctl-category: vm
sysctl-file: /proc/sys/vm/admin_reserve_kbytes
sysctl-variable: vm.admin_reserve_kbytes
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

The amount of free memory in the system that should be reserved for users
with the capability cap_sys_admin.

admin_reserve_kbytes defaults to min(3% of free pages, 8MB)

That should provide enough for the admin to log in and kill a process,
if necessary, under the default overcommit 'guess' mode.

Systems running under overcommit 'never' should increase this to account
for the full Virtual Memory Size of programs used to recover. Otherwise,
root may not be able to log in to recover the system.

How do you calculate a minimum useful reserve?

sshd or login + bash (or some other shell) + top (or ps, kill, etc.)

For overcommit 'guess', we can sum resident set sizes (RSS).
On x86_64 this is about 8MB.

For overcommit 'never', we can take the max of their virtual sizes (VSZ)
and add the sum of their RSS.
On x86_64 this is about 128MB.

Changing this takes effect whenever an application requests memory.

