---
layout: sysctl
title: panic_on_warn
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/panic_on_warn
sysctl-variable: kernel.panic_on_warn
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Calls panic() in the WARN() path when set to 1.  This is useful to avoid
a kernel rebuild when attempting to kdump at the location of a WARN().

0: only WARN(), default behaviour.

1: call panic() after printing out WARN() location.

