---
layout: sysctl
title: tcp_workaround_signed_windows
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/tcp_workaround_signed_windows
sysctl-variable: net.ipv4.tcp_workaround_signed_windows
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set, assume no receipt of a window scaling option means the
remote TCP is broken and treats the window as a signed quantity.
If unset, assume the remote TCP is not broken even if we do
not receive a window scaling option from them.
Default: 0

