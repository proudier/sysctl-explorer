---
layout: sysctl
title: accept_redirects
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/accept_redirects
sysctl-variable: net.ipv4.conf.interface.accept_redirects
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept ICMP redirect messages.
accept_redirects for the interface will be enabled if:
- both conf/{all,interface}/accept_redirects are TRUE in the case
  forwarding for the interface is enabled
or
- at least one of conf/{all,interface}/accept_redirects is TRUE in the
  case forwarding for the interface is disabled
accept_redirects for the interface will be disabled otherwise
default TRUE (host)
	FALSE (router)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

