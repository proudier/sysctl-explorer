---
layout: sysctl
title: bpf_jit_enable
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/bpf_jit_enable
sysctl-variable: net.core.bpf_jit_enable
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

This enables the BPF Just in Time (JIT) compiler. BPF is a flexible
and efficient infrastructure allowing to execute bytecode at various
hook points. It is used in a number of Linux kernel subsystems such
as networking (e.g. XDP, tc), tracing (e.g. kprobes, uprobes, tracepoints)
and security (e.g. seccomp). LLVM has a BPF back end that can compile
restricted C into a sequence of BPF instructions. After program load
through bpf(2) and passing a verifier in the kernel, a JIT will then
translate these BPF proglets into native CPU instructions. There are
two flavors of JITs, the newer eBPF JIT currently supported on:
  - x86_64
  - arm64
  - arm32
  - ppc64
  - sparc64
  - mips64
  - s390x

And the older cBPF JIT supported on the following archs:
  - mips
  - ppc
  - sparc

eBPF JITs are a superset of cBPF JITs, meaning the kernel will
migrate cBPF instructions into eBPF instructions and then JIT
compile them transparently. Older cBPF JITs can only translate
tcpdump filters, seccomp rules, etc, but not mentioned eBPF
programs loaded through bpf(2).

Values :
	0 - disable the JIT (default value)
	1 - enable the JIT
	2 - enable the JIT and ask the compiler to emit traces on kernel log.

