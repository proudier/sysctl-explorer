---
layout: sysctl
title: igmpv3_unsolicited_report_interval
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/igmpv3_unsolicited_report_interval
sysctl-variable: net.ipv4.conf.interface.igmpv3_unsolicited_report_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The interval in milliseconds in which the next unsolicited
IGMPv3 report retransmit will take place.
Default: 1000 (1 seconds)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

