---
layout: sysctl
title: accept_ra_from_local
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/accept_ra_from_local
sysctl-variable: net.ipv6.conf.interface.accept_ra_from_local
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Accept RA with source-address that is found on local machine
        if the RA is otherwise proper and able to be accepted.
        Default is to NOT accept these as it may be an un-intended
        network loop.

Functional default:
           enabled if accept_ra_from_local is enabled
               on a specific interface.
   disabled if accept_ra_from_local is disabled
               on a specific interface.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

