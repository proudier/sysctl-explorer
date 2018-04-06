---
layout: sysctl
title: tcp_window_scaling
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_window_scaling
sysctl-variable: net.ipv4.tcp_window_scaling
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable window scaling as defined in RFC1323.

tcp_wmem - vector of 3 INTEGERs: min, default, max
min: Amount of memory reserved for send buffers for TCP sockets.
Each TCP socket has rights to use it due to fact of its birth.
Default: 4K

default: initial size of send buffer used by TCP sockets.  This
value overrides net.core.wmem_default used by other protocols.
It is usually lower than net.core.wmem_default.
Default: 16K

max: Maximal amount of memory allowed for automatically tuned
send buffers for TCP sockets. This value does not override
net.core.wmem_max.  Calling setsockopt() with SO_SNDBUF disables
automatic tuning of that socket's send buffer size, in which case
this value is ignored.
Default: between 64K and 4MB, depending on RAM size.

tcp_notsent_lowat - UNSIGNED INTEGER
A TCP socket can control the amount of unsent bytes in its write queue,
thanks to TCP_NOTSENT_LOWAT socket option. poll()/select()/epoll()
reports POLLOUT events if the amount of unsent bytes is below a per
socket value, and if the write queue is not full. sendmsg() will
also not add new buffers if the limit is hit.

This global variable controls the amount of unsent data for
sockets not using TCP_NOTSENT_LOWAT. For these sockets, a change
to the global variable has immediate effect.

Default: UINT_MAX (0xFFFFFFFF)

