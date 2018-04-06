---
layout: sysctl
title: force_mld_version
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/force_mld_version
sysctl-variable: net.ipv6.conf.interface.force_mld_version
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
0 - (default) No enforcement of a MLD version, MLDv1 fallback allowed
1 - Enforce to use MLD version 1
2 - Enforce to use MLD version 2


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

