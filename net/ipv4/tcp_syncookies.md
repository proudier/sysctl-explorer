---
layout: sysctl
title: tcp_syncookies
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_syncookies
sysctl-variable: net.ipv4.tcp_syncookies
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Only valid when the kernel was compiled with CONFIG_SYN_COOKIES
Send out syncookies when the syn backlog queue of a socket
overflows. This is to prevent against the common 'SYN flood attack'
Default: 1

Note, that syncookies is fallback facility.
It MUST NOT be used to help highly loaded servers to stand
against legal connection rate. If you see SYN flood warnings
in your logs, but investigation	shows that they occur
because of overload with legal connections, you should tune
another parameters until this warning disappear.
See: tcp_max_syn_backlog, tcp_synack_retries, tcp_abort_on_overflow.

syncookies seriously violate TCP protocol, do not allow
to use TCP extensions, can result in serious degradation
of some services (f.e. SMTP relaying), visible not by you,
but your clients and relays, contacting you. While you see
SYN flood warnings in logs not being really flooded, your server
is seriously misconfigured.

If you want to test which effects syncookies have to your
network connections you can set this knob to 2 to enable
unconditionally generation of syncookies.

