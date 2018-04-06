---
layout: sysctl
title: udp_l3mdev_accept
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/udp_l3mdev_accept
sysctl-variable: net.ipv4.udp_l3mdev_accept
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enabling this option allows a "global" bound socket to work
across L3 master domains (e.g., VRFs) with packets capable of
being received regardless of the L3 domain in which they
originated. Only valid when the kernel was compiled with
CONFIG_NET_L3_MASTER_DEV.

udp_mem - vector of 3 INTEGERs: min, pressure, max
Number of pages allowed for queueing by all UDP sockets.

min: Below this number of pages UDP is not bothered about its
memory appetite. When amount of memory allocated by UDP exceeds
this number, UDP starts to moderate memory usage.

pressure: This value was introduced to follow format of tcp_mem.

max: Number of pages allowed for queueing by all UDP sockets.

Default is calculated at boot time from amount of available memory.

