---
layout: sysctl
title: force_tllao
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/force_tllao
sysctl-variable: net.ipv6.conf.interface.force_tllao
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable sending the target link-layer address option even when
responding to a unicast neighbor solicitation.
Default: FALSE

Quoting from RFC 2461, section 4.4, Target link-layer address:

"The option MUST be included for multicast solicitations in order to
avoid infinite Neighbor Solicitation "recursion" when the peer node
does not have a cache entry to return a Neighbor Advertisements
message.  When responding to unicast solicitations, the option can be
omitted since the sender of the solicitation has the correct link-
layer address; otherwise it would not have be able to send the unicast
solicitation in the first place. However, including the link-layer
address in this case adds little overhead and eliminates a potential
race condition where the sender deletes the cached link-layer address
prior to receiving a response to a previous solicitation."


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

