---
layout: sysctl
title: suid_dumpable
sysctl-category: fs
sysctl-file: /proc/sys/fs/suid_dumpable
sysctl-variable: fs.suid_dumpable
source: https://www.kernel.org/doc/Documentation/sysctl/fs.txt
---

This value can be used to query and set the core dump mode for setuid
or otherwise protected/tainted binaries. The modes are

0. (default) - traditional behaviour. Any process which has changed
	privilege levels or is execute only will not be dumped.
1. (debug) - all processes dump core when possible. The core dump is
	owned by the current user and no security is applied. This is
	intended for system debugging situations only. Ptrace is unchecked.
	This is insecure as it allows regular users to examine the memory
	contents of privileged processes.
2. (suidsafe) - any binary which normally would not be dumped is dumped
	anyway, but only if the "core_pattern" kernel sysctl is set to
	either a pipe handler or a fully qualified path. (For more details
	on this limitation, see CVE-2006-2451.) This mode is appropriate
	when administrators are attempting to debug problems in a normal
	environment, and either have a core dump pipe handler that knows
	to treat privileged core dumps with care, or specific directory
	defined for catching core dumps. If a core dump happens without
	a pipe handler or fully qualifid path, a message will be emitted
	to syslog warning about the lack of a correct setting.

