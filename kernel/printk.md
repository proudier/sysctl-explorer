---
layout: sysctl
title: printk
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/printk
sysctl-variable: kernel.printk
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

The four values in printk denote: console_loglevel,
default_message_loglevel, minimum_console_loglevel and
default_console_loglevel respectively.

These values influence printk() behavior when printing or
logging error messages. See 'man 2 syslog' for more info on
the different loglevels.

- console_loglevel: messages with a higher priority than
  this will be printed to the console
- default_message_loglevel: messages without an explicit priority
  will be printed with this priority
- minimum_console_loglevel: minimum (highest) value to which
  console_loglevel can be set
- default_console_loglevel: default value for console_loglevel

