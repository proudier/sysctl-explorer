---
layout: sysctl
title: ipfrag_max_dist
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/ipfrag_max_dist
sysctl-variable: net.ipv4.ipfrag_max_dist
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
ipfrag_max_dist is a non-negative integer value which defines the
maximum "disorder" which is allowed among fragments which share a
common IP source address. Note that reordering of packets is
not unusual, but if a large number of fragments arrive from a source
IP address while a particular fragment queue remains incomplete, it
probably indicates that one or more fragments belonging to that queue
have been lost. When ipfrag_max_dist is positive, an additional check
is done on fragments before they are added to a reassembly queue - if
ipfrag_max_dist (or more) fragments have arrived from a particular IP
address between additions to any IP fragment queue using that source
address, it's presumed that one or more fragments in the queue are
lost. The existing fragment queue will be dropped, and a new one
started. An ipfrag_max_dist value of zero disables this check.

Using a very small value, e.g. 1 or 2, for ipfrag_max_dist can
result in unnecessarily dropping fragment queues when normal
reordering of packets occurs, which could lead to poor application
performance. Using a very large value, e.g. 50000, increases the
likelihood of incorrectly reassembling IP fragments that originate
from different IP datagrams, which could result in data corruption.
Default: 64

