---
layout: sysctl
title: min_unmapped_ratio
sysctl-category: vm
sysctl-file: /proc/sys/vm/min_unmapped_ratio
sysctl-variable: vm.min_unmapped_ratio
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

This is available only on NUMA kernels.

This is a percentage of the total pages in each zone. Zone reclaim will
only occur if more than this percentage of pages are in a state that
zone_reclaim_mode allows to be reclaimed.

If zone_reclaim_mode has the value 4 OR'd, then the percentage is compared
against all file-backed unmapped pages including swapcache pages and tmpfs
files. Otherwise, only unmapped pages backed by normal files but not tmpfs
files and similar are considered.

The default is 1 percent.

