---
layout: sysctl
title: cipso_cache_enable
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/cipso_cache_enable
sysctl-variable: net.ipv4.cipso_cache_enable
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set, enable additions to and lookups from the CIPSO label mapping
cache.  If unset, additions are ignored and lookups always result in a
miss.  However, regardless of the setting the cache is still
invalidated when required when means you can safely toggle this on and
off and the cache will always be "safe".
Default: 1

