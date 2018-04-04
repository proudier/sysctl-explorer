---
layout: sysctl
title: randomize_va_space
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/randomize_va_space
sysctl-variable: kernel.randomize_va_space
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

This option can be used to select the type of process address
space randomization that is used in the system, for architectures
that support this feature.

0 - Turn the process address space randomization off.  This is the
    default for architectures that do not support this feature anyways,
    and kernels that are booted with the "norandmaps" parameter.

1 - Make the addresses of mmap base, stack and VDSO page randomized.
    This, among other things, implies that shared libraries will be
    loaded to random addresses.  Also for PIE-linked binaries, the
    location of code start is randomized.  This is the default if the
    CONFIG_COMPAT_BRK option is enabled.

2 - Additionally enable heap randomization.  This is the default if
    CONFIG_COMPAT_BRK is disabled.

    There are a few legacy applications out there (such as some ancient
    versions of libc.so.5 from 1996) that assume that brk area starts
    just after the end of the code+bss.  These applications break when
    start of the brk area is randomized.  There are however no known
    non-legacy applications that would be broken this way, so for most
    systems it is safe to choose full randomization.

    Systems with ancient and/or broken binaries should be configured
    with CONFIG_COMPAT_BRK enabled, which excludes the heap from process
    address space randomization.

