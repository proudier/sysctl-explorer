---
layout: sysctl
title: log_martians
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/log_martians
sysctl-variable: net.ipv4.conf.interface.log_martians
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Log packets with impossible addresses to kernel log.
log_martians for the interface will be enabled if at least one of
conf/{all,interface}/log_martians is set to TRUE,
it will be disabled otherwise


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

