---
layout: sysctl
title: tcp_autocorking
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_autocorking
sysctl-variable: net.ipv4.tcp_autocorking
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable TCP auto corking :
When applications do consecutive small write()/sendmsg() system calls,
we try to coalesce these small writes as much as possible, to lower
total amount of sent packets. This is done if at least one prior
packet for the flow is waiting in Qdisc queues or device transmit
queue. Applications can still use TCP_CORK for optimal behavior
when they know how/when to uncork their sockets.
Default : 1

tcp_available_congestion_control - STRING
Shows the available congestion control choices that are registered.
More congestion control algorithms may be available as modules,
but not loaded.

