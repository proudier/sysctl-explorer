---
layout: sysctl
title: compact_unevictable_allowed
sysctl-category: vm
sysctl-file: /proc/sys/vm/compact_unevictable_allowed
sysctl-variable: vm.compact_unevictable_allowed
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Available only when CONFIG_COMPACTION is set. When set to 1, compaction is
allowed to examine the unevictable lru (mlocked pages) for pages to compact.
This should be used on systems where stalls for minor page faults are an
acceptable trade for large contiguous free memory.  Set to 0 to prevent
compaction from moving pages that are unevictable.  Default value is 1.

