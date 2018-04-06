---
layout: sysctl
title: cipso_cache_bucket_size
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/cipso_cache_bucket_size
sysctl-variable: net.ipv4.cipso_cache_bucket_size
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The CIPSO label cache consists of a fixed size hash table with each
hash bucket containing a number of cache entries.  This variable limits
the number of entries in each hash bucket; the larger the value the
more CIPSO label mappings that can be cached.  When the number of
entries in a given hash bucket reaches this limit adding new entries
causes the oldest entry in the bucket to be removed to make room.
Default: 10

