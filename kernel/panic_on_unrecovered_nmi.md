---
layout: sysctl
title: panic_on_unrecovered_nmi
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_unrecovered_nmi
sysctl-variable: kernel.panic_on_unrecovered_nmi
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The default Linux behaviour on an NMI of either memory or unknown is
to continue operation. For many environments such as scientific
computing it is preferable that the box is taken out and the error
dealt with than an uncorrected parity/ECC error get propagated.

A small number of systems do generate NMI's for bizarre random reasons
such as power management so the default is off. That sysctl works like
the existing panic controls already in that directory.

