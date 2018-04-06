---
layout: sysctl
title: mldv1_unsolicited_report_interval
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/mldv1_unsolicited_report_interval
sysctl-variable: net.ipv6.conf.interface.mldv1_unsolicited_report_interval
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
The interval in milliseconds in which the next unsolicited
MLDv1 report retransmit will take place.
Default: 10000 (10 seconds)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

