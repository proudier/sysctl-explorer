---
layout: sysctl
title: ip_no_pmtu_disc
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_no_pmtu_disc
sysctl-variable: net.ipv4.ip_no_pmtu_disc
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Disable Path MTU Discovery. If enabled in mode 1 and a
fragmentation-required ICMP is received, the PMTU to this
destination will be set to min_pmtu (see below). You will need
to raise min_pmtu to the smallest interface MTU on your system
manually if you want to avoid locally generated fragments.

In mode 2 incoming Path MTU Discovery messages will be
discarded. Outgoing frames are handled the same as in mode 1,
implicitly setting IP_PMTUDISC_DONT on every created socket.

Mode 3 is a hardend pmtu discover mode. The kernel will only
accept fragmentation-needed errors if the underlying protocol
can verify them besides a plain socket lookup. Current
protocols for which pmtu events will be honored are TCP, SCTP
and DCCP as they verify e.g. the sequence number or the
association. This mode should not be enabled globally but is
only intended to secure e.g. name servers in namespaces where
TCP path mtu must still work but path MTU information of other
protocols should be discarded. If enabled globally this mode
could break other protocols.

Possible values: 0-3
Default: FALSE

