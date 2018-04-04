---
layout: sysctl
title: dmesg_restrict
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/dmesg_restrict
sysctl-variable: kernel.dmesg_restrict
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This toggle indicates whether unprivileged users are prevented
from using dmesg(8) to view messages from the kernel's log buffer.
When dmesg_restrict is set to (0) there are no restrictions. When
dmesg_restrict is set set to (1), users must have CAP_SYSLOG to use
dmesg(8).

The kernel config option CONFIG_SECURITY_DMESG_RESTRICT sets the
default value of dmesg_restrict.

