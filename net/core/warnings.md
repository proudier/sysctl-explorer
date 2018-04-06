---
layout: sysctl
title: warnings
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/warnings
sysctl-variable: net.core.warnings
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

This sysctl is now unused.

This was used to control console messages from the networking stack that
occur because of problems on the network like duplicate address or bad
checksums.

These messages are now emitted at KERN_DEBUG and can generally be enabled
and controlled by the dynamic_debug facility.

