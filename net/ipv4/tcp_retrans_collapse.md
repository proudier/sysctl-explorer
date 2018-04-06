---
layout: sysctl
title: tcp_retrans_collapse
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_retrans_collapse
sysctl-variable: net.ipv4.tcp_retrans_collapse
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Bug-to-bug compatibility with some broken printers.
On retransmit try to send bigger packets to work around bugs in
certain TCP stacks.

tcp_retries1 - INTEGER
This value influences the time, after which TCP decides, that
something is wrong due to unacknowledged RTO retransmissions,
and reports this suspicion to the network layer.
See tcp_retries2 for more details.

RFC 1122 recommends at least 3 retransmissions, which is the
default.

tcp_retries2 - INTEGER
This value influences the timeout of an alive TCP connection,
when RTO retransmissions remain unacknowledged.
Given a value of N, a hypothetical TCP connection following
exponential backoff with an initial RTO of TCP_RTO_MIN would
retransmit N times before killing the connection at the (N+1)th RTO.

The default value of 15 yields a hypothetical timeout of 924.6
seconds and is a lower bound for the effective timeout.
TCP will effectively time out at the first RTO which exceeds the
hypothetical timeout.

RFC 1122 recommends at least 100 seconds for the timeout,
which corresponds to a value of at least 8.

tcp_rfc1337 - BOOLEAN
If set, the TCP stack behaves conforming to RFC1337. If unset,
we are not conforming to RFC, but prevent TCP TIME_WAIT
assassination.
Default: 0

tcp_rmem - vector of 3 INTEGERs: min, default, max
min: Minimal size of receive buffer used by TCP sockets.
It is guaranteed to each TCP socket, even under moderate memory
pressure.
Default: 4K

default: initial size of receive buffer used by TCP sockets.
This value overrides net.core.rmem_default used by other protocols.
Default: 87380 bytes. This value results in window of 65535 with
default setting of tcp_adv_win_scale and tcp_app_win:0 and a bit
less for default tcp_app_win. See below about these variables.

max: maximal size of receive buffer allowed for automatically
selected receiver buffers for TCP socket. This value does not override
net.core.rmem_max.  Calling setsockopt() with SO_RCVBUF disables
automatic tuning of that socket's receive buffer size, in which
case this value is ignored.
Default: between 87380B and 6MB, depending on RAM size.

