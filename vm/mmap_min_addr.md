---
layout: sysctl
title: mmap_min_addr
sysctl-category: vm
sysctl-file: /proc/sys/vm/mmap_min_addr
sysctl-variable: vm.mmap_min_addr
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This file indicates the amount of address space  which a user process will
be restricted from mmapping.  Since kernel null dereference bugs could
accidentally operate based on the information in the first couple of pages
of memory userspace processes should not be allowed to write to them.  By
default this value is set to 0 and no protections will be enforced by the
security module.  Setting this value to something like 64k will allow the
vast majority of applications to work correctly and provide defense in depth
against future potential kernel bugs.

