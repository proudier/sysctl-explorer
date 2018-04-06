---
layout: sysctl
title: max_addresses
sysctl-category: net.ipv6
sysctl-file: /proc/sys/net/ipv6/conf/interface/max_addresses
sysctl-variable: net.ipv6.conf.interface.max_addresses
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Maximum number of autoconfigured addresses per interface.  Setting
to zero disables the limitation.  It is not recommended to set this
value too large (or to zero) because it would be an easy way to
crash the kernel by allowing too many addresses to be created.
Default: 16

disable_ipv6 - BOOLEAN
Disable IPv6 operation.  If accept_dad is set to 2, this value
will be dynamically set to TRUE if DAD fails for the link-local
address.
Default: FALSE (enable IPv6 operation)

When this value is changed from 1 to 0 (IPv6 is being enabled),
it will dynamically create a link-local address on the given
interface and start Duplicate Address Detection, if necessary.

When this value is changed from 0 to 1 (IPv6 is being disabled),
it will dynamically delete all address on the given interface.


Nb: per interface setting (where "interface" is the name of your network interface); "all" is a special interface: changes the settings for all interfaces.

