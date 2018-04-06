---
layout: sysctl
title: mldv2_unsolicited_report_interval
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/mldv2_unsolicited_report_interval
sysctl-variable: net.ipv6.conf.interface.mldv2_unsolicited_report_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The interval in milliseconds in which the next unsolicited
MLDv2 report retransmit will take place.
Default: 1000 (1 second)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

