---
layout: sysctl
title: icmp_errors_use_inbound_ifaddr
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_errors_use_inbound_ifaddr
sysctl-variable: net.ipv4.icmp_errors_use_inbound_ifaddr
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---

If zero, icmp error messages are sent with the primary address of
the exiting interface.

If non-zero, the message will be sent with the primary address of
the interface that received the packet that caused the icmp error.
This is the behaviour network many administrators will expect from
a router. And it can make debugging complicated network layouts
much easier.

Note that if no primary address exists for the interface selected,
then the primary address of the first non-loopback interface that
has one will be used regardless of this setting.

Default: 0

