---
layout: sysctl
title: tcp_fin_timeout
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_fin_timeout
sysctl-variable: net.ipv4.tcp_fin_timeout
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The length of time an orphaned (no longer referenced by any
application) connection will remain in the FIN_WAIT_2 state
before it is aborted at the local end.  While a perfectly
valid "receive only" state for an un-orphaned connection, an
orphaned connection in FIN_WAIT_2 state could otherwise wait
forever for the remote to close its end of the connection.
Cf. tcp_max_orphans
Default: 60 seconds

