---
layout: sysctl
title: sgbigbuff
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/sgbigbuff
sysctl-variable: kernel.sgbigbuff
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This file shows the size of the generic SCSI (sg) buffer.
You can't tune it just yet, but you could change it on
compile time by editing include/scsi/sg.h and changing
the value of SG_BIG_BUFF.

There shouldn't be any reason to change this value. If
you can come up with one, you probably know what you
are doing anyway :)

