---
layout: sysctl
title: igmp_link_local_mcast_reports
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/igmp_link_local_mcast_reports
sysctl-variable: net.ipv4.conf.interface.igmp_link_local_mcast_reports
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable IGMP reports for link local multicast groups in the
224.0.0.X range.
Default TRUE

Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

