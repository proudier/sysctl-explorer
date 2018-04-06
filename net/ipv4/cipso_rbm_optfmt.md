---
layout: sysctl
title: cipso_rbm_optfmt
sysctl-category: net.ipv4
sysctl-file: /proc/sys/net/ipv4/cipso_rbm_optfmt
sysctl-variable: net.ipv4.cipso_rbm_optfmt
source: https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt
---
Enable the "Optimized Tag 1 Format" as defined in section 3.4.2.6 of
the CIPSO draft specification (see Documentation/netlabel for details).
This means that when set the CIPSO tag will be padded with empty
categories in order to make the packet data 32-bit aligned.
Default: 0

