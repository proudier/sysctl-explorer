---
layout: sysctl
title: rp_filter
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/rp_filter
sysctl-variable: net.ipv4.conf.interface.rp_filter
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
0 - No source validation.
1 - Strict mode as defined in RFC3704 Strict Reverse Path
    Each incoming packet is tested against the FIB and if the interface
    is not the best reverse path the packet check will fail.
    By default failed packets are discarded.
2 - Loose mode as defined in RFC3704 Loose Reverse Path
    Each incoming packet's source address is also tested against the FIB
    and if the source address is not reachable via any interface
    the packet check will fail.

Current recommended practice in RFC3704 is to enable strict mode
to prevent IP spoofing from DDos attacks. If using asymmetric routing
or other complicated routing, then loose mode is recommended.

The max value from conf/{all,interface}/rp_filter is used
when doing source validation on the {interface}.

Default value is 0. Note that some distributions enable it
in startup scripts.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

