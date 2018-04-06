---
layout: sysctl
title: message_burst and message_cost
sysctl-category: net.core
sysctl-file: /proc/sys/net/core/message_burst and message_cost
sysctl-variable: net.core.message_burst and message_cost
source: https://www.kernel.org/doc/Documentation/sysctl/net.txt
---

These parameters  are used to limit the warning messages written to the kernel
log from  the  networking  code.  They  enforce  a  rate  limit  to  make  a
denial-of-service attack  impossible. A higher message_cost factor, results in
fewer messages that will be written. Message_burst controls when messages will
be dropped.  The  default  settings  limit  warning messages to one every five
seconds.

