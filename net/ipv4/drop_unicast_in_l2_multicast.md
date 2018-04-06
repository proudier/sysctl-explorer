---
layout: sysctl
title: drop_unicast_in_l2_multicast
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/drop_unicast_in_l2_multicast
sysctl-variable: net.ipv4.conf.interface.drop_unicast_in_l2_multicast
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Drop any unicast IP packets that are received in link-layer
multicast (or broadcast) frames.
This behavior (for multicast) is actually a SHOULD in RFC
1122, but is disabled by default for compatibility reasons.
Default: off (0)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

