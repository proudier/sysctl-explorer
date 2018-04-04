---
layout: sysctl
title: compact_memory
sysctl-category: vm
sysctl-file: /proc/sys/vm/compact_memory
sysctl-variable: vm.compact_memory
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Available only when CONFIG_COMPACTION is set. When 1 is written to the file,
all zones are compacted such that free memory is available in contiguous
blocks where possible. This can be important for example in the allocation of
huge pages although processes will also directly compact memory as required.

