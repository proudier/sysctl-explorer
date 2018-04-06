---
layout: sysctl
title: send_redirects
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/send_redirects
sysctl-variable: net.ipv4.conf.interface.send_redirects
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Send redirects, if router.
send_redirects for the interface will be enabled if at least one of
conf/{all,interface}/send_redirects is set to TRUE,
it will be disabled otherwise
Default: TRUE


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

