---
layout: sysctl
title: shared_media
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/shared_media
sysctl-variable: net.ipv4.conf.interface.shared_media
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Send(router) or accept(host) RFC1620 shared media redirects.
Overrides secure_redirects.
shared_media for the interface will be enabled if at least one of
conf/{all,interface}/shared_media is set to TRUE,
it will be disabled otherwise
default TRUE


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

