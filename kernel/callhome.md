---
layout: sysctl
title: callhome
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/callhome
sysctl-variable: kernel.callhome
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls the kernel's callhome behavior in case of a kernel panic.

The s390 hardware allows an operating system to send a notification
to a service organization (callhome) in case of an operating system panic.

When the value in this file is 0 (which is the default behavior)
nothing happens in case of a kernel panic. If this value is set to "1"
the complete kernel oops message is send to the IBM customer service
organization in case the mainframe the Linux operating system is running
on has a service contract with IBM.

