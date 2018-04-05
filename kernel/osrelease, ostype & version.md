---
layout: sysctl
title: osrelease, ostype & version
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/osrelease, ostype & version
sysctl-variable: kernel.osrelease, ostype & version
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---
```
# cat osrelease
2.1.88
# cat ostype
Linux
# cat version
#5 Wed Feb 25 21:49:24 MET 1998
```
The files osrelease and ostype should be clear enough. Version
needs a little more clarification however. The '#5' means that
this is the fifth kernel built from this source base and the
date behind it indicates the time the kernel was built.
The only way to tune these values is to rebuild the kernel :-)

