---
layout: sysctl
title: inet_peer_threshold
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/inet_peer_threshold
sysctl-variable: net.ipv4.inet_peer_threshold
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The approximate size of the storage.  Starting from this threshold
entries will be thrown aggressively.  This threshold also determines
entries' time-to-live and time intervals between garbage collection
passes.  More entries, less time-to-live, less GC interval.

