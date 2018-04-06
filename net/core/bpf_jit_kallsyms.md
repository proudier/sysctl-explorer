---
layout: sysctl
title: bpf_jit_kallsyms
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/bpf_jit_kallsyms
sysctl-variable: net.core.bpf_jit_kallsyms
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

When BPF JIT compiler is enabled, then compiled images are unknown
addresses to the kernel, meaning they neither show up in traces nor
in /proc/kallsyms. This enables export of these addresses, which can
be used for debugging/tracing. If bpf_jit_harden is enabled, this
feature is disabled.
Values :
	0 - disable JIT kallsyms export (default value)
	1 - enable JIT kallsyms export for privileged users only

