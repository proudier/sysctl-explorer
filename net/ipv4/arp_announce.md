---
layout: sysctl
title: arp_announce
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/conf/interface/arp_announce
sysctl-variable: net.ipv4.conf.interface.arp_announce
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Define different restriction levels for announcing the local
source IP address from IP packets in ARP requests sent on
interface:
0 - (default) Use any local address, configured on any interface
1 - Try to avoid local addresses that are not in the target's
subnet for this interface. This mode is useful when target
hosts reachable via this interface require the source IP
address in ARP requests to be part of their logical network
configured on the receiving interface. When we generate the
request we will check all our subnets that include the
target IP and will preserve the source address if it is from
such subnet. If there is no such subnet we select source
address according to the rules for level 2.
2 - Always use the best local address for this target.
In this mode we ignore the source address in the IP packet
and try to select local address that we prefer for talks with
the target host. Such local address is selected by looking
for primary IP addresses on all our subnets on the outgoing
interface that include the target IP address. If no suitable
local address is found we select the first local address
we have on the outgoing interface or on all other interfaces,
with the hope we will receive reply for our request and
even sometimes no matter the source IP address we announce.

The max value from conf/{all,interface}/arp_announce is used.

Increasing the restriction level gives more chance for
receiving answer from the resolved target while decreasing
the level announces more valid sender's information.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

