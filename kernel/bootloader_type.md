---
layout: sysctl
title: bootloader_type
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/bootloader_type
sysctl-variable: kernel.bootloader_type
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

x86 bootloader identification

This gives the bootloader type number as indicated by the bootloader,
shifted left by 4, and OR'd with the low four bits of the bootloader
version.  The reason for this encoding is that this used to match the
type_of_loader field in the kernel header; the encoding is kept for
backwards compatibility.  That is, if the full bootloader type number
is 0x15 and the full version number is 0x234, this file will contain
the value 340 = 0x154.

See the type_of_loader and ext_loader_type fields in
Documentation/x86/boot.txt for additional information.

