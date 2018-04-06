---
layout: sysctl
title: cipso_rbm_structvalid
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/cipso_rbm_structvalid
sysctl-variable: net.ipv4.cipso_rbm_structvalid
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
If set, do a very strict check of the CIPSO option when
ip_options_compile() is called.  If unset, relax the checks done during
ip_options_compile().  Either way is "safe" as errors are caught else
where in the CIPSO processing code but setting this to 0 (False) should
result in less work (i.e. it should be faster) but could cause problems
with other implementations that require strict checking.
Default: 0

ip_local_port_range - 2 INTEGERS
Defines the local port range that is used by TCP and UDP to
choose the local port. The first number is the first, the
second the last local port number.
If possible, it is better these numbers have different parity.
(one even and one odd values)
The default values are 32768 and 60999 respectively.

ip_local_reserved_ports - list of comma separated ranges
Specify the ports which are reserved for known third-party
applications. These ports will not be used by automatic port
assignments (e.g. when calling connect() or bind() with port
number 0). Explicit port allocation behavior is unchanged.

The format used for both input and output is a comma separated
list of ranges (e.g. "1,2-4,10-10" for ports 1, 2, 3, 4 and
10). Writing to the file will clear all previously reserved
ports and update the current list with the one given in the
input.

Note that ip_local_port_range and ip_local_reserved_ports
settings are independent and both are considered by the kernel
when determining which ports are available for automatic port
assignments.

You can reserve ports which are not in the current
ip_local_port_range, e.g.:

$ cat /proc/sys/net/ipv4/ip_local_port_range
32000	60999
$ cat /proc/sys/net/ipv4/ip_local_reserved_ports
8080,9148

although this is redundant. However such a setting is useful
if later the port range is changed to a value that will
include the reserved ports.

Default: Empty

