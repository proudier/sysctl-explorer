---
layout: sysctl
title: unknown_nmi_panic
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/unknown_nmi_panic
sysctl-variable: kernel.unknown_nmi_panic
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The value in this file affects behavior of handling NMI. When the
value is non-zero, unknown NMI is trapped and then panic occurs. At
that time, kernel debugging information is displayed on console.

NMI switch that most IA32 servers have fires unknown NMI up, for
example.  If a system hangs up, try pressing the NMI switch.

