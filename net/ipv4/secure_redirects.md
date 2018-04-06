---
layout: sysctl
title: secure_redirects
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/secure_redirects
sysctl-variable: net.ipv4.conf.interface.secure_redirects
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept ICMP redirect messages only to gateways listed in the
interface's current gateway list. Even if disabled, RFC1122 redirect
rules still apply.
Overridden by shared_media.
secure_redirects for the interface will be enabled if at least one of
conf/{all,interface}/secure_redirects is set to TRUE,
it will be disabled otherwise
default TRUE


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

