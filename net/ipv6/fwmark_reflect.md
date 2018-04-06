---
layout: sysctl
title: fwmark_reflect
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/fwmark_reflect
sysctl-variable: net.ipv6.fwmark_reflect
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Controls the fwmark of kernel-generated IPv6 reply packets that are not
associated with a socket for example, TCP RSTs or ICMPv6 echo replies).
If unset, these packets have a fwmark of zero. If set, they have the
fwmark of the packet they are replying to.
Default: 0
