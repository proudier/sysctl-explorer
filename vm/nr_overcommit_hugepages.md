---
layout: sysctl
title: nr_overcommit_hugepages
sysctl-category: vm
sysctl-file: /proc/sys/vm/nr_overcommit_hugepages
sysctl-variable: vm.nr_overcommit_hugepages
source: https://www.kernel.org/doc/Documentation/sysctl/vm.txt
---

Change the maximum size of the hugepage pool. The maximum is
nr_hugepages + nr_overcommit_hugepages.

See Documentation/vm/hugetlbpage.txt

