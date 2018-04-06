---
layout: sysctl
title: tcp_invalid_ratelimit
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_invalid_ratelimit
sysctl-variable: net.ipv4.tcp_invalid_ratelimit
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Limit the maximal rate for sending duplicate acknowledgments
in response to incoming TCP packets that are for an existing
connection but that are invalid due to any of these reasons:

  (a) out-of-window sequence number,
  (b) out-of-window acknowledgment number, or
  (c) PAWS (Protection Against Wrapped Sequence numbers) check failure

This can help mitigate simple "ack loop" DoS attacks, wherein
a buggy or malicious middlebox or man-in-the-middle can
rewrite TCP header fields in manner that causes each endpoint
to think that the other is sending invalid TCP segments, thus
causing each side to send an unterminating stream of duplicate
acknowledgments for invalid segments.

Using 0 disables rate-limiting of dupacks in response to
invalid segments; otherwise this value specifies the minimal
space between sending such dupacks, in milliseconds.

Default: 500 (milliseconds).

