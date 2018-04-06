---
layout: sysctl
title: tcp_l3mdev_accept
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_l3mdev_accept
sysctl-variable: net.ipv4.tcp_l3mdev_accept
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enables child sockets to inherit the L3 master device index.
Enabling this option allows a "global" listen socket to work
across L3 master domains (e.g., VRFs) with connected sockets
derived from the listen socket to be bound to the L3 domain in
which the packets originated. Only valid when the kernel was
compiled with CONFIG_NET_L3_MASTER_DEV.

