---
layout: sysctl
title: keep_addr_on_down
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/keep_addr_on_down
sysctl-variable: net.ipv6.conf.interface.keep_addr_on_down
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Keep all IPv6 addresses on an interface down event. If set static
global addresses with no expiration time are not flushed.
  >0 : enabled
   0 : system default
  <0 : disabled

Default: 0 (addresses are removed)


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

