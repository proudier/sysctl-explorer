---
layout: sysctl
title: tcp_no_metrics_save
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_no_metrics_save
sysctl-variable: net.ipv4.tcp_no_metrics_save
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
By default, TCP saves various connection metrics in the route cache
when the connection closes, so that connections established in the
near future can use these to set initial conditions.  Usually, this
increases overall performance, but may sometimes cause performance
degradation.  If set, TCP will not cache metrics on closing
connections.

