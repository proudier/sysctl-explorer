---
layout: sysctl
title: panic_on_io_nmi
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_io_nmi
sysctl-variable: kernel.panic_on_io_nmi
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Controls the kernel's behavior when a CPU receives an NMI caused by
an IO error.

0: try to continue operation (default)

1: panic immediately. The IO error triggered an NMI. This indicates a
   serious system condition which could result in IO data corruption.
   Rather than continuing, panicking might be a better choice. Some
   servers issue this sort of NMI when the dump button is pushed,
   and you can use this option to take a crash dump.

