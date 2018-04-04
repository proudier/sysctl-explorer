---
layout: sysctl
title: overflowgid & overflowuid
sysctl-category: fs
sysctl-file: /proc/sys/fs/overflowgid & overflowuid
sysctl-variable: fs.overflowgid & overflowuid
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

Some filesystems only support 16-bit UIDs and GIDs, although in Linux
UIDs and GIDs are 32 bits. When one of these filesystems is mounted
with writes enabled, any UID or GID that would exceed 65535 is translated
to a fixed value before being written to disk.

These sysctls allow you to change the value of the fixed UID and GID.
The default is 65534.

