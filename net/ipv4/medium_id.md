---
layout: sysctl
title: medium_id
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/medium_id
sysctl-variable: net.ipv4.conf.interface.medium_id
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Integer value used to differentiate the devices by the medium they
are attached to. Two devices can have different id values when
the broadcast packets are received only on one of them.
The default value 0 means that the device is the only interface
to its medium, value of -1 means that medium is not known.

Currently, it is used to change the proxy_arp behavior:
the proxy_arp feature is enabled for packets forwarded between
two devices attached to different media.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

