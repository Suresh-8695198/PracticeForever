export const questions = [
  {
    id: 1,
    text: "What is the primary purpose of an Operating System?",
    options: [
      { id: "A", text: "To provide a platform for application software to run" },
      { id: "B", text: "To manage hardware resources like CPU and Memory" },
      { id: "C", text: "To provide a user interface" },
      { id: "D", text: "All of the above" }
    ],
    answer: "D",
    explanation: "An OS acts as an intermediary, managing hardware and providing services for both users and applications."
  },
  {
    id: 2,
    text: "Which of the following is NOT a responsibility of the OS kernel?",
    options: [
      { id: "A", text: "Memory Management" },
      { id: "B", text: "Process Scheduling" },
      { id: "C", text: "Compiling source code into machine code" },
      { id: "D", text: "File System Management" }
    ],
    answer: "C",
    explanation: "Compiling code is the job of a compiler (like GCC or Clang), not the OS kernel."
  },
  {
    id: 3,
    text: "What is a 'Process' in Operating Systems terminology?",
    options: [
      { id: "A", text: "A program in execution" },
      { id: "B", text: "A static set of instructions" },
      { id: "C", text: "A hardware component" },
      { id: "D", text: "A user account" }
    ],
    answer: "A",
    explanation: "While a program is passive (files on disk), a process is an active entity with its own stack, heap, and PC."
  },
  {
    id: 4,
    text: "What is 'Thrashing' in the context of virtual memory?",
    options: [
      { id: "A", text: "A state where the CPU is 100% utilized" },
      { id: "B", text: "A state where the system spends more time paging than executing processes" },
      { id: "C", text: "Deleting duplicate files" },
      { id: "D", text: "Formatting a hard drive" }
    ],
    answer: "B",
    explanation: "Thrashing occurs when the system moves pages in and out of disk so frequently that actual progress stops."
  },
  {
    id: 5,
    text: "Which scheduling algorithm can lead to 'Starvation'?",
    options: [
      { id: "A", text: "Round Robin" },
      { id: "B", text: "First Come First Served" },
      { id: "C", text: "Priority Scheduling" },
      { id: "D", text: "Both B and C" }
    ],
    answer: "C",
    explanation: "Low-priority processes may wait forever if higher-priority tasks keep arriving. This is corrected by 'Aging'."
  },
  {
    id: 6,
    text: "What are the four necessary conditions for a Deadlock?",
    options: [
      { id: "A", text: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait" },
      { id: "B", text: "Prevention, Avoidance, Detection, Recovery" },
      { id: "C", text: "Read, Write, Execute, Delete" },
      { id: "D", text: "Wait, Signal, Lock, Unlock" }
    ],
    answer: "A",
    explanation: "Known as Coffman conditions. All four must hold for a deadlock to occur."
  },
  {
    id: 7,
    text: "What is the function of the 'Translation Lookaside Buffer' (TLB)?",
    options: [
      { id: "A", text: "To store compiled code" },
      { id: "B", text: "A cache for page table entries to speed up virtual-to-physical address translation" },
      { id: "C", text: "To backup files" },
      { id: "D", text: "To manage I/O devices" }
    ],
    answer: "B",
    explanation: "TLB reduces the number of memory accesses needed to translate addresses from virtual to physical."
  },
  {
    id: 8,
    text: "What is a 'System Call'?",
    options: [
      { id: "A", text: "A way for a user to call tech support" },
      { id: "B", text: "The programmatic way in which a computer program requests a service from the kernel" },
      { id: "C", text: "A hardware interrupt" },
      { id: "D", text: "A network request" }
    ],
    answer: "B",
    explanation: "System calls provide an interface between a process and the operating system."
  },
  {
    id: 9,
    text: "Which memory management technique divides memory into fixed-size blocks?",
    options: [
      { id: "A", text: "Segmentation" },
      { id: "B", text: "Paging" },
      { id: "C", text: "Dynamic Partitioning" },
      { id: "D", text: "Fragmentation" }
    ],
    answer: "B",
    explanation: "Paging uses fixed-size 'frames' in physical memory and 'pages' in logical memory."
  },
  {
    id: 10,
    text: "What is 'SPOOLing'?",
    options: [
      { id: "A", text: "Simultaneous Peripheral Operations On-Line" },
      { id: "B", text: "Super Peripheral Out Output Loading" },
      { id: "C", text: "A method of memory optimization" },
      { id: "D", text: "A security protocol" }
    ],
    answer: "A",
    explanation: "Spooling allows data to be held in a buffer (like a printer queue) so the CPU can continue other tasks."
  },
  {
    id: 11,
    text: "What is 'Peterson's Solution' intended to solve?",
    options: [
      { id: "A", text: "Deadlock Detection" },
      { id: "B", text: "The Critical Section Problem" },
      { id: "C", text: "Memory Fragmentation" },
      { id: "D", text: "Disk Scheduling" }
    ],
    answer: "B",
    explanation: "Peterson's algorithm is a classic software-based solution to the critical section problem for two processes."
  },
  {
    id: 12,
    text: "Which of the following is an example of 'Belady's Anomaly'?",
    options: [
      { id: "A", text: "Optimal replacement is worse than FIFO" },
      { id: "B", text: "Increasing page frames leads to more page faults in FIFO" },
      { id: "C", text: "LRU is less efficient than FIFO" },
      { id: "D", text: "Deadlock occurring with only one resource" }
    ],
    answer: "B",
    explanation: "Belady's Anomaly shows that for certain page-reference strings, the number of page faults can increase when more frames are added (specific to FIFO)."
  },
  {
    id: 13,
    text: "The 'Banker's Algorithm' is primarily used for:",
    options: [
      { id: "A", text: "Deadlock Prevention" },
      { id: "B", text: "Deadlock Detection" },
      { id: "C", text: "Deadlock Avoidance" },
      { id: "D", text: "Resource Allocation for Banks" }
    ],
    answer: "C",
    explanation: "It tests for safety by simulating the allocation for predetermined maximum possible amounts of all resources."
  },
  {
    id: 14,
    text: "What happens during a 'Context Switch'?",
    options: [
      { id: "A", text: "The system reboots" },
      { id: "B", text: "The CPU saves the state of the current process and loads the state of the next process" },
      { id: "C", text: "A user switches between apps" },
      { id: "D", text: "Memory is wiped" }
    ],
    answer: "B",
    explanation: "Context switching allows multiple processes to share a single CPU, saving individual PCB states."
  },
  {
    id: 15,
    text: "Which RAID level provides striping with mirror (reliability + performance)?",
    options: [
      { id: "A", text: "RAID 0" },
      { id: "B", text: "RAID 1" },
      { id: "C", text: "RAID 5" },
      { id: "D", text: "RAID 10" }
    ],
    answer: "D",
    explanation: "RAID 10 is a combination of RAID 1 (mirroring) and RAID 0 (striping)."
  },
  {
    id: 16,
    text: "What is 'Internal Fragmentation'?",
    options: [
      { id: "A", text: "Wasted space within an allocated memory block" },
      { id: "B", text: "Total free memory is enough, but not contiguous" },
      { id: "C", text: "Disk space errors" },
      { id: "D", text: "Kernel memory overflow" }
    ],
    answer: "A",
    explanation: "Internal fragmentation occurs when the memory assigned to a process is slightly larger than the memory requested."
  },
  {
    id: 17,
    text: "What does the 'fork()' system call return to the parent process?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "The Process ID (PID) of the child process" },
      { id: "C", text: "-1 always" },
      { id: "D", text: "1" }
    ],
    answer: "B",
    explanation: "In the parent, fork() returns the child's PID. In the child, it returns 0. If it fails, it returns -1."
  },
  {
    id: 18,
    text: "Which of these is a hardware-specific mode of the CPU?",
    options: [
      { id: "A", text: "Fast Mode" },
      { id: "B", text: "Safe Mode" },
      { id: "C", text: "Kernel Mode and User Mode" },
      { id: "D", text: "Developer Mode" }
    ],
    answer: "C",
    explanation: "CPUs use modes to protect the system; privileged instructions can only run in Kernel Mode."
  },
  {
    id: 19,
    text: "What is the 'Aging' technique used for?",
    options: [
      { id: "A", text: "To delete old files" },
      { id: "B", text: "To prevent starvation by gradually increasing the priority of waiting processes" },
      { id: "C", text: "To upgrade the OS" },
      { id: "D", text: "To clear cache" }
    ],
    answer: "B",
    explanation: "Aging ensures that low-priority processes eventually get executed even if higher priority tasks keep arriving."
  },
  {
    id: 20,
    text: "In Memory Management, what is 'Compaction'?",
    options: [
      { id: "A", text: "Compressing files" },
      { id: "B", text: "Shuffling memory contents to place all free memory together in one large block" },
      { id: "C", text: "Deleting unused apps" },
      { id: "D", text: "Virtual memory expansion" }
    ],
    answer: "B",
    explanation: "Compaction is a solution to external fragmentation, moving processes to create contiguous free space."
  }
];

export const theory = [
  {
    id: "os-intro",
    title: "Understanding Operating Systems",
    content: "An **Operating System (OS)** is a system software that manages computer hardware, software resources, and provides common services for computer programs. \n\n### Key Components:\n1. **Kernel**: The core of the OS that has complete control over everything in the system.\n2. **Shell**: An interface that allows users to interact with the OS.\n3. **File System**: Method of storing and organizing data on storage devices."
  },
  {
    id: "process-management",
    title: "Process Management & Lifecycle",
    content: "A process goes through various states during its lifecycle:\n- **New**: The process is being created.\n- **Ready**: Waiting to be assigned to a processor.\n- **Running**: Instructions are being executed.\n- **Waiting**: Waiting for some event (like I/O completion).\n- **Terminated**: Finished execution."
  },
  {
    id: "memory-hierarchy",
    title: "The Memory Hierarchy",
    content: "Modern systems use a pyramid structure to balance speed and cost:\n1. **Registers** (Fastest, most expensive)\n2. **L1/L2/L3 Cache**\n3. **Main Memory (RAM)**\n4. **SSD/Magnetic Disk** (Slowest, cheapest)"
  },
  {
    id: "deadlocks-prevention",
    title: "Deadlock Handling Strategies",
    content: "There are three main ways to deal with deadlocks:\n1. **Prevention**: Design the system so that one of the four Coffman conditions cannot hold.\n2. **Avoidance**: Dynamically check resource allocation (e.g., **Banker's Algorithm**).\n3. **Detection & Recovery**: Allow deadlocks to happen, then detect and resolve them."
  },
  {
    id: "file-allocation",
    title: "File Allocation Methods",
    content: "How files are stored on disk:\n- **Contiguous**: Fast, but leads to external fragmentation.\n- **Linked**: No fragmentation, but slow for random access.\n- **Indexed**: Uses an index block to point to file parts; good compromise."
  },
  {
    id: "virtual-memory-basics",
    title: "Virtual Memory & Paging",
    content: "Virtual memory creates the illusion of a very large main memory by using the disk as an extension. \n\n**Page Fault**: Occurs when a program tries to access a page that is not currently in RAM. The OS must then load it from the disk."
  },
  {
    id: "cpu-scheduling",
    title: "CPU Scheduling Algorithms",
    content: "| Algorithm | Type | Note |\n| :--- | :--- | :--- |\n| **FCFS** | Non-preemptive | Simple, but 'Convoy Effect' occurs |\n| **SJF** | Non-preemptive | Minimum average waiting time |\n| **SRTF** | Preemptive | Preemptive version of SJF |\n| **Round Robin** | Preemptive | Used for time-sharing systems |"
  },
  {
    id: "semaphores-mutex",
    title: "Synchronization: Mutex vs Semaphore",
    content: "- **Mutex**: A binary lock used to provide mutual exclusion (one thread at a time).\n- **Semaphore**: A counter used to manage access to a finite number of resources."
  },
  {
    id: "os-types",
    title: "Types of Operating Systems",
    content: "1. **Batch OS**: Users don't interact directly; jobs are grouped.\n2. **Real-Time OS (RTOS)**: Used where timing is critical (e.g., medical devices).\n3. **Distributed OS**: Manages a group of independent computers as a single system."
  },
  {
    id: "boot-process",
    title: "The Boot sequence",
    content: "1. **BIOS/UEFI**: Runs Power-On Self Test (POST).\n2. **MBR/GTP**: Finds the bootloader.\n3. **Bootloader**: Loads the OS kernel into memory.\n4. **Init Process**: Starts system services."
  },
  {
    id: "raid-levels",
    title: "RAID Levels Explained",
    content: "| Level | Name | Benefit |\n| :--- | :--- | :--- |\n| **RAID 0** | Striping | Performance only (no fault tolerance) |\n| **RAID 1** | Mirroring | Redundancy (exact copy of data) |\n| **RAID 5** | Distributed Parity | Balance of speed and reliability |\n| **RAID 10** | Stripe of Mirrors | High performance + high reliability |"
  },
  {
    id: "fragmentation-types",
    title: "Internal vs External Fragmentation",
    content: "### Internal Fragmentation:\nOccurs when memory blocks are fixed size. If a process takes 18KB in a 20KB block, 2KB is wasted *inside* the allocation.\n\n### External Fragmentation:\nOccurs when there is enough total free memory, but it's not contiguous. We have many small 'holes' between allocated processes."
  },
  {
    id: "ipc-mechanisms",
    title: "Inter-Process Communication (IPC)",
    content: "Processes need to communicate for data sharing. Common methods:\n1. **Pipes**: Unidirectional data flow.\n2. **Message Queues**: Asynchronous message passing.\n3. **Shared Memory**: Fastest method; processes map same memory region.\n4. **Sockets**: Communication over a network."
  },
  {
    id: "belady-anomaly",
    title: "Understanding Belady's Anomaly",
    content: "Generally, giving more RAM (frames) to a process should reduce Page Faults. However, with the **FIFO** replacement algorithm, certain access patterns (e.g., 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5) can actually result in *more* faults when frames increase from 3 to 4. Stack-based algorithms like LRU are immune to this."
  },
  {
    id: "cpu-modes",
    title: "User Mode vs Kernel Mode",
    content: "- **User Mode**: Restricted access. Applications run here. If a crash occurs, it's isolated.\n- **Kernel Mode**: Full access to hardware. The OS core runs here. Privileged instructions (like I/O control) are only allowed in this mode."
  },
  {
    id: "dynamic-linking",
    title: "Static vs Dynamic Linking",
    content: "- **Static Linking**: Libraries are combined into the executable at compile time. Result: Larger file, no external dependencies.\n- **Dynamic Linking**: Libraries (.dll or .so) are loaded when the program runs. Result: Smaller file, shared memory usage, but needs 'sidecar' files."
  },
  {
    id: "critical-section",
    title: "The Critical Section Problem",
    content: "A critical section is a part of code that accesses shared resources. To solve it, a solution must provide:\n1. **Mutual Exclusion**: Only one process at a time.\n2. **Progress**: If no one is in, and someone wants in, they should get in.\n3. **Bounded Waiting**: No one waits forever."
  },
  {
    id: "dma-transfer",
    title: "Direct Memory Access (DMA)",
    content: "DMA allows I/O devices (like hard drives) to transfer data directly to/from main memory without constant CPU intervention. The CPU initiates the transfer and is notified via an **interrupt** once it's complete, saving significant processing power."
  },
  {
    id: "virtual-vs-physical",
    title: "Logical vs Physical Address",
    content: "- **Logical (Virtual) Address**: Generated by the CPU; what the program 'sees'.\n- **Physical Address**: The actual location in the RAM chips.\n- **MMU (Memory Management Unit)**: The hardware component that maps logical addresses to physical ones at runtime."
  },
  {
    id: "thrashing-prevention",
    title: "Handling Thrashing",
    content: "To prevent thrashing (infinite paging), the OS can:\n1. **Decrease degree of multiprogramming**: Suspend some processes.\n2. **Working Set Model**: Track the set of pages a process is actively using and ensure they stay in memory."
  }
];
