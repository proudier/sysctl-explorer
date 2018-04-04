---
layout: sysctl
title: msg_next_id, sem_next_id, and shm_next_id
sysctl-category: kernel
sysctl-file: /proc/sys/kernel/msg_next_id, sem_next_id, and shm_next_id
sysctl-variable: kernel.msg_next_id, sem_next_id, and shm_next_id
source: https://www.kernel.org/doc/Documentation/sysctl/kernel.txt
---

These three toggles allows to specify desired id for next allocated IPC
object: message, semaphore or shared memory respectively.

By default they are equal to -1, which means generic allocation logic.
Possible values to set are in range {0..INT_MAX}.

Notes:
1) kernel doesn't guarantee, that new object will have desired id. So,
it's up to userspace, how to handle an object with "wrong" id.
2) Toggle with non-default value will be set back to -1 by kernel after
successful IPC object allocation.

