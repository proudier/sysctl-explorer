---
layout: sysctl
title: stable_secret  IPv6 address
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/stable_secret  IPv6 address
sysctl-variable: net.ipv6.conf.interface.stable_secret  IPv6 address
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
This IPv6 address will be used as a secret to generate IPv6
addresses for link-local addresses and autoconfigured
ones. All addresses generated after setting this secret will
be stable privacy ones by default. This can be changed via the
addrgenmode ip-link. conf/default/stable_secret is used as the
secret for the namespace, the interface specific ones can
overwrite that. Writes to conf/all/stable_secret are refused.

It is recommended to generate this secret during installation
of a system and keep it stable after that.

By default the stable secret is unset.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

