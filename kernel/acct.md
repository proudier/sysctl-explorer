---
layout: sysctl
title: acct
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/acct
sysctl-variable: kernel.acct
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

highwater lowwater frequency

If BSD-style process accounting is enabled these values control
its behaviour. If free space on filesystem where the log lives
goes below <lowwater>% accounting suspends. If free space gets
above <highwater>% accounting resumes. <Frequency> determines
how often do we check the amount of free space (value is in
seconds). Default:
4 2 30
That is, suspend accounting if there left <= 2% free; resume it
if we got >=4%; consider information about amount of free space
valid for 30 seconds.

