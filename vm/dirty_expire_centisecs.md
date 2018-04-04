---
layout: sysctl
title: dirty_expire_centisecs
sysctl-category: vm
sysctl-file: /proc/sys/vm/dirty_expire_centisecs
sysctl-variable: vm.dirty_expire_centisecs
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This tunable is used to define when dirty data is old enough to be eligible
for writeout by the kernel flusher threads.  It is expressed in 100'ths
of a second.  Data which has been dirty in-memory for longer than this
interval will be written out next time a flusher thread wakes up.

