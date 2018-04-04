---
layout: sysctl
title: bootloader_version
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/bootloader_version
sysctl-variable: kernel.bootloader_version
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

x86 bootloader version

The complete bootloader version number.  In the example above, this
file will contain the value 564 = 0x234.

See the type_of_loader and ext_loader_ver fields in
Documentation/x86/boot.txt for additional information.

