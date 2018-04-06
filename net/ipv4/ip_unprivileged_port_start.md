---
layout: sysctl
title: ip_unprivileged_port_start
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ip_unprivileged_port_start
sysctl-variable: net.ipv4.ip_unprivileged_port_start
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
This is a per-namespace sysctl.  It defines the first
unprivileged port in the network namespace.  Privileged ports
require root or CAP_NET_BIND_SERVICE in order to bind to them.
To disable all privileged ports, set this to 0.  It may not
overlap with the ip_local_reserved_ports range.

Default: 1024

