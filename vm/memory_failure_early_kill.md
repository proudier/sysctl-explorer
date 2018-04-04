---
layout: sysctl
title: memory_failure_early_kill
sysctl-category: vm
sysctl-file: /proc/sys/vm/memory_failure_early_kill
sysctl-variable: vm.memory_failure_early_kill
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Control how to kill processes when uncorrected memory error (typically
a 2bit error in a memory module) is detected in the background by hardware
that cannot be handled by the kernel. In some cases (like the page
still having a valid copy on disk) the kernel will handle the failure
transparently without affecting any applications. But if there is
no other uptodate copy of the data it will kill to prevent any data
corruptions from propagating.

1: Kill all processes that have the corrupted and not reloadable page mapped
as soon as the corruption is detected.  Note this is not supported
for a few types of pages, like kernel internally allocated data or
the swap cache, but works for the majority of user pages.

0: Only unmap the corrupted page from all processes and only kill a process
who tries to access it.

The kill is done using a catchable SIGBUS with BUS_MCEERR_AO, so processes can
handle this if they want to.

This is only active on architectures/platforms with advanced machine
check handling and depends on the hardware capabilities.

Applications can override this setting individually with the PR_MCE_KILL prctl

