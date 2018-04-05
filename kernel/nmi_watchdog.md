---
layout: sysctl
title: nmi_watchdog
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/nmi_watchdog
sysctl-variable: kernel.nmi_watchdog
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This parameter can be used to control the NMI watchdog
(i.e. the hard lockup detector) on x86 systems.

-   0 - disable the hard lockup detector
-   1 - enable the hard lockup detector

The hard lockup detector monitors each CPU for its ability to respond to
timer interrupts. The mechanism utilizes CPU performance counter registers
that are programmed to generate Non-Maskable Interrupts (NMIs) periodically
while a CPU is busy. Hence, the alternative name 'NMI watchdog'.

The NMI watchdog is disabled by default if the kernel is running as a guest
in a KVM virtual machine. This default can be overridden by adding

   nmi_watchdog=1

to the guest kernel command line (see Documentation/admin-guide/kernel-parameters.rst).

