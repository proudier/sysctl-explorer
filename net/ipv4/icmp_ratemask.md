---
layout: sysctl
title: icmp_ratemask
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/icmp_ratemask
sysctl-variable: net.ipv4.icmp_ratemask
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Mask made of ICMP types for which rates are being limited.
Significant bits: IHGFEDCBA9876543210
Default mask:     0000001100000011000 (6168)

Bit definitions (see include/linux/icmp.h):
	0 Echo Reply
	3 Destination Unreachable *
	4 Source Quench *
	5 Redirect
	8 Echo Request
	B Time Exceeded *
	C Parameter Problem *
	D Timestamp Request
	E Timestamp Reply
	F Info Request
	G Info Reply
	H Address Mask Request
	I Address Mask Reply

* These are rate limited by default (see default mask above)

