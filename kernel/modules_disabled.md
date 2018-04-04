---
layout: sysctl
title: modules_disabled
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/modules_disabled
sysctl-variable: kernel.modules_disabled
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

A toggle value indicating if modules are allowed to be loaded
in an otherwise modular kernel.  This toggle defaults to off
(0), but can be set true (1).  Once true, modules can be
neither loaded nor unloaded, and the toggle cannot be set back
to false.  Generally used with the "kexec_load_disabled" toggle.

