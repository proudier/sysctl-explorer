---
layout: sysctl
title: core_pattern
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/core_pattern
sysctl-variable: kernel.core_pattern
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

core_pattern is used to specify a core dumpfile pattern name.
- max length 128 characters; default value is "core"
- core_pattern is used as a pattern template for the output filename;
  certain string patterns (beginning with '%') are substituted with
  their actual values.
- backward compatibility with core_uses_pid:
	If core_pattern does not include "%p" (default does not)
	and core_uses_pid is set, then .PID will be appended to
	the filename.
- corename format specifiers:
```
	%<NUL>	'%' is dropped
	%%	output one '%'
	%p	pid
	%P	global pid (init PID namespace)
	%i	tid
	%I	global tid (init PID namespace)
	%u	uid (in initial user namespace)
	%g	gid (in initial user namespace)
	%d	dump mode, matches PR_SET_DUMPABLE and
		/proc/sys/fs/suid_dumpable
	%s	signal number
	%t	UNIX time of dump
	%h	hostname
	%e	executable filename (may be shortened)
	%E	executable path
	%<OTHER> both are dropped
```
- If the first character of the pattern is a '|', the kernel will treat
  the rest of the pattern as a command to run.  The core dump will be
  written to the standard input of that program instead of to a file.

