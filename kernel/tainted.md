---
layout: sysctl
title: tainted
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/tainted
sysctl-variable: kernel.tainted
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

Non-zero if the kernel has been tainted.  Numeric values, which
can be ORed together:

-   1 - A module with a non-GPL license has been loaded, this
       includes modules with no license.
       Set by modutils >= 2.4.9 and module-init-tools.
-   2 - A module was force loaded by insmod -f.
       Set by modutils >= 2.4.9 and module-init-tools.
-   4 - Unsafe SMP processors: SMP with CPUs not designed for SMP.
-   8 - A module was forcibly unloaded from the system by rmmod -f.
-  16 - A hardware machine check error occurred on the system.
-  32 - A bad page was discovered on the system.
-  64 - The user has asked that the system be marked "tainted".  This
       could be because they are running software that directly modifies
       the hardware, or for other reasons.
- 128 - The system has died.
- 256 - The ACPI DSDT has been overridden with one supplied by the user
        instead of using the one provided by the hardware.
- 512 - A kernel warning has occurred.
-1024 - A module from drivers/staging was loaded.
-2048 - The system is working around a severe firmware bug.
-4096 - An out-of-tree module has been loaded.
-8192 - An unsigned module has been loaded in a kernel supporting module
       signature.
-16384 - A soft lockup has previously occurred on the system.
-32768 - The kernel has been live patched.

