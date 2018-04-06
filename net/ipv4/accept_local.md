---
layout: sysctl
title: accept_local
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/accept_local
sysctl-variable: net.ipv4.conf.interface.accept_local
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept packets with local source addresses. In combination with
suitable routing, this can be used to direct packets between two
local interfaces over the wire and have them accepted properly.
default FALSE


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

