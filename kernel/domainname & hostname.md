---
layout: sysctl
title: domainname & hostname
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/domainname & hostname
sysctl-variable: kernel.domainname & hostname
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

These files can be used to set the NIS/YP domainname and the
hostname of your box in exactly the same way as the commands
domainname and hostname, i.e.:
```
# echo "darkstar" > /proc/sys/kernel/hostname
# echo "mydomain" > /proc/sys/kernel/domainname
```
has the same effect as
```
# hostname "darkstar"
# domainname "mydomain"
```

Note, however, that the classic darkstar.frop.org has the
hostname "darkstar" and DNS (Internet Domain Name Server)
domainname "frop.org", not to be confused with the NIS (Network
Information Service) or YP (Yellow Pages) domainname. These two
domain names are in general different. For a detailed discussion
see the hostname(1) man page.

