---
layout: sysctl
title: tcp_fastopen
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_fastopen
sysctl-variable: net.ipv4.tcp_fastopen
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable TCP Fast Open (RFC7413) to send and accept data in the opening
SYN packet.

The client support is enabled by flag 0x1 (on by default). The client
then must use sendmsg() or sendto() with the MSG_FASTOPEN flag,
rather than connect() to send data in SYN.

The server support is enabled by flag 0x2 (off by default). Then
either enable for all listeners with another flag (0x400) or
enable individual listeners via TCP_FASTOPEN socket option with
the option value being the length of the syn-data backlog.

The values (bitmap) are
  0x1: (client) enables sending data in the opening SYN on the client.
  0x2: (server) enables the server support, i.e., allowing data in
		a SYN packet to be accepted and passed to the
		application before 3-way handshake finishes.
  0x4: (client) send data in the opening SYN regardless of cookie
		availability and without a cookie option.
0x200: (server) accept data-in-SYN w/o any cookie option present.
0x400: (server) enable all listeners to support Fast Open by
		default without explicit TCP_FASTOPEN socket option.

Default: 0x1

Note that that additional client or server features are only
effective if the basic support (0x1 and 0x2) are enabled respectively.

