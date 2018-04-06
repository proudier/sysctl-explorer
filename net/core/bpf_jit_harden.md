---
layout: sysctl
title: bpf_jit_harden
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/bpf_jit_harden
sysctl-variable: net.core.bpf_jit_harden
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

This enables hardening for the BPF JIT compiler. Supported are eBPF
JIT backends. Enabling hardening trades off performance, but can
mitigate JIT spraying.
Values :
	0 - disable JIT hardening (default value)
	1 - enable JIT hardening for unprivileged users only
	2 - enable JIT hardening for all users

