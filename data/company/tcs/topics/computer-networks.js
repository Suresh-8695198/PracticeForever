export const questions = [
  {
    id: 1,
    text: "Which layer of the OSI model is responsible for routing data packets?",
    options: [
      { id: "A", text: "Physical Layer" },
      { id: "B", text: "Data Link Layer" },
      { id: "C", text: "Network Layer" },
      { id: "D", text: "Transport Layer" }
    ],
    answer: "C",
    explanation: "The Network layer handles IP addressing and routing packets between different networks."
  },
  {
    id: 2,
    text: "What is the primary difference between TCP and UDP?",
    options: [
      { id: "A", text: "TCP is faster than UDP" },
      { id: "B", text: "TCP is connection-oriented, UDP is connectionless" },
      { id: "C", text: "UDP ensures reliable data delivery" },
      { id: "D", text: "TCP is used for live streaming" }
    ],
    answer: "B",
    explanation: "TCP establishes a connection and ensures delivery, while UDP just sends packets without confirmation (faster but unreliable)."
  },
  {
    id: 3,
    text: "What does DNS stand for and what is its purpose?",
    options: [
      { id: "A", text: "Data Network System; to backup files" },
      { id: "B", text: "Domain Name System; to translate human-friendly names to IP addresses" },
      { id: "C", text: "Digital Name Server; to host websites" },
      { id: "D", text: "Domain Node Service; to manage local networks" }
    ],
    answer: "B",
    explanation: "DNS translates 'google.com' into an IP address like '142.250.190.46'."
  },
  {
    id: 4,
    text: "Which protocol is used to assign IP addresses dynamically to devices on a network?",
    options: [
      { id: "A", text: "HTTP" },
      { id: "B", text: "FTP" },
      { id: "C", text: "DHCP" },
      { id: "D", text: "SMTP" }
    ],
    answer: "C",
    explanation: "Dynamic Host Configuration Protocol (DHCP) automatically assigns IP addresses and network settings."
  },
  {
    id: 5,
    text: "What is the default port for the HTTPS protocol?",
    options: [
      { id: "A", text: "80" },
      { id: "B", text: "21" },
      { id: "C", text: "443" },
      { id: "D", text: "22" }
    ],
    answer: "C",
    explanation: "Port 80 is for HTTP (unsecured), while 443 is for HTTPS (secured via SSL/TLS)."
  },
  {
    id: 6,
    text: "Which device operates at the Data Link Layer (Layer 2)?",
    options: [
      { id: "A", text: "Hub" },
      { id: "B", text: "Switch" },
      { id: "C", text: "Router" },
      { id: "D", text: "Repeater" }
    ],
    answer: "B",
    explanation: "Switches use MAC addresses to forward frames within a local network."
  },
  {
    id: 7,
    text: "What is 'Subnetting'?",
    options: [
      { id: "A", text: "Merging two networks together" },
      { id: "B", text: "Dividing a single large network into smaller sub-networks" },
      { id: "C", text: "Encrypting network traffic" },
      { id: "D", text: "Blocking malicious users" }
    ],
    answer: "B",
    explanation: "Subnetting improves network security and efficiency by organizing addresses into smaller groups."
  },
  {
    id: 8,
    text: "What is the size of an IPv4 address?",
    options: [
      { id: "A", text: "32 bits" },
      { id: "B", text: "64 bits" },
      { id: "C", text: "128 bits" },
      { id: "D", text: "16 bits" }
    ],
    answer: "A",
    explanation: "IPv4 addresses are 32-bit (e.g., 192.168.1.1), while IPv6 addresses are 128-bit."
  },
  {
    id: 9,
    text: "Which protocol is used for sending emails?",
    options: [
      { id: "A", text: "IMAP" },
      { id: "B", text: "POP3" },
      { id: "C", text: "SMTP" },
      { id: "D", text: "DNS" }
    ],
    answer: "C",
    explanation: "Simple Mail Transfer Protocol (SMTP) is used to send or transfer mail between servers."
  },
  {
    id: 10,
    text: "What is a 'Firewall'?",
    options: [
      { id: "A", text: "A physical wall to prevent fires in a server room" },
      { id: "B", text: "A security system that monitors and controls incoming and outgoing network traffic" },
      { id: "C", text: "A type of virus" },
      { id: "D", text: "A fast router" }
    ],
    answer: "B",
    explanation: "Firewalls establish a barrier between trusted internal networks and untrusted external ones (like the Internet)."
  },
  {
    id: 11,
    text: "Which layer of the OSI model does a Router operate on?",
    options: [
      { id: "A", text: "Layer 1 (Physical)" },
      { id: "B", text: "Layer 2 (Data Link)" },
      { id: "C", text: "Layer 3 (Network)" },
      { id: "D", text: "Layer 4 (Transport)" }
    ],
    answer: "C",
    explanation: "Routers use IP addresses (Layer 3) to route packets across different networks."
  },
  {
    id: 12,
    text: "What is the primary function of the 'Three-Way Handshake' in TCP?",
    options: [
      { id: "A", text: "To encrypt data" },
      { id: "B", text: "To establish a reliable connection before data transfer" },
      { id: "C", text: "To speed up the network" },
      { id: "D", text: "To compress files" }
    ],
    answer: "B",
    explanation: "The SYN, SYN-ACK, ACK sequence ensures both sides are ready for reliable communication."
  },
  {
    id: 13,
    text: "Which protocol is typically used for real-time video streaming or online gaming?",
    options: [
      { id: "A", text: "TCP" },
      { id: "B", text: "FTP" },
      { id: "C", text: "UDP" },
      { id: "D", text: "HTTP" }
    ],
    answer: "C",
    explanation: "UDP is preferred for real-time apps because it doesn't wait for ACKs, reducing latency at the cost of some data loss."
  },
  {
    id: 14,
    text: "What does 'ARP' stand for and what is its specific job?",
    options: [
      { id: "A", text: "Address Routing Protocol; to find the fastest path" },
      { id: "B", text: "Automated Responding Port; to handle web requests" },
      { id: "C", text: "Address Resolution Protocol; to find a MAC address based on an IP address" },
      { id: "D", text: "Analog Relay Processor; to boost signals" }
    ],
    answer: "C",
    explanation: "ARP allows devices inside a LAN to discover the hardware (MAC) address of a destination device."
  },
  {
    id: 15,
    text: "How many bits are in an IPv6 address?",
    options: [
      { id: "A", text: "32 bits" },
      { id: "B", text: "64 bits" },
      { id: "C", text: "128 bits" },
      { id: "D", text: "256 bits" }
    ],
    answer: "C",
    explanation: "IPv6 uses 128 bits to solve the address exhaustion problem of the 32-bit IPv4."
  },
  {
    id: 16,
    text: "What is 'ICMP' primarily used for?",
    options: [
      { id: "A", text: "Data encryption" },
      { id: "B", text: "Sending error messages and operational information (e.g., Ping)" },
      { id: "C", text: "Allocating IP addresses" },
      { id: "D", text: "Loading web pages faster" }
    ],
    answer: "B",
    explanation: "The Internet Control Message Protocol (ICMP) is used for diagnostic and error-reporting (like ping and traceroute)."
  },
  {
    id: 17,
    text: "What is 'NAT' (Network Address Translation) used for?",
    options: [
      { id: "A", text: "To translate hostnames to IPs" },
      { id: "B", text: "To allow multiple devices on a private network to share a single public IP address" },
      { id: "C", text: "To accelerate file downloads" },
      { id: "D", text: "To block spam emails" }
    ],
    answer: "B",
    explanation: "NAT helps conserve IPv4 addresses by hiding an entire private range behind one public IP."
  },
  {
    id: 18,
    text: "Which of the following is an Application Layer protocol?",
    options: [
      { id: "A", text: "IP" },
      { id: "B", text: "TCP" },
      { id: "C", text: "HTTP" },
      { id: "D", text: "UDP" }
    ],
    answer: "C",
    explanation: "HTTP (web), FTP (file), and SMTP (mail) are all Layer 7 (Application Layer) protocols."
  },
  {
    id: 19,
    text: "What is the purpose of a 'Default Gateway'?",
    options: [
      { id: "A", text: "To act as a backup router" },
      { id: "B", text: "The IP address that a device sends traffic to when the destination is outside its own network" },
      { id: "C", text: "A secondary DNS server" },
      { id: "D", text: "A hardware firewall" }
    ],
    answer: "B",
    explanation: "When a device doesn't know where to send a packet, it hands it off to the default gateway (usually your router)."
  },
  {
    id: 20,
    text: "What does 'Latency' refer to in networking?",
    options: [
      { id: "A", text: "The amount of data that can be sent in a second" },
      { id: "B", text: "The time it takes for a data packet to travel from source to destination" },
      { id: "C", text: "The degree of signal noise" },
      { id: "D", text: "The physical distance of cables" }
    ],
    answer: "B",
    explanation: "Latency is the delay in communication; low latency is essential for gaming and video calls."
  }
];

export const theory = [
  {
    id: "osi-layers",
    title: "The 7 Layers of OSI Model",
    content: "| Layer | Name | Function |\n| :--- | :--- | :--- |\n| 7 | **Application** | User UI, HTTP, FTP, SMTP |\n| 6 | **Presentation** | Encryption, Formatting |\n| 5 | **Session** | Auth, Session Mgmt |\n| 4 | **Transport** | End-to-end reliability (TCP/UDP) |\n| 3 | **Network** | Routing, IP Addressing |\n| 2 | **Data Link** | Framing, MAC Addressing |\n| 1 | **Physical** | Bits, Cables, Voltage |"
  },
  {
    id: "tcp-vs-udp",
    title: "TCP vs UDP: Side-by-Side",
    content: "### TCP (Transmission Control Protocol):\n- **Reliable**: Guarantees delivery.\n- **Ordered**: Packets arrive in sequence.\n- **Slow**: Overhead of handshaking (3-way handshake).\n\n### UDP (User Datagram Protocol):\n- **Unreliable**: No ACK, packets can be lost.\n- **Fast**: Minimal header, no connection setup.\n- **Streaming**: Used for VolP, Gaming, Live Video."
  },
  {
    id: "ip-addressing",
    title: "Understanding IP Addresses",
    content: "- **IPv4**: 32-bit, decimal format (172.16.254.1). Limited addresses (4.3B).\n- **IPv6**: 128-bit, hex format (2001:0db8:85a3:0000:0000:8a2e:0370:7334). Virtually unlimited addresses."
  },
  {
    id: "network-devices",
    title: "Core Networking Hardware",
    content: "1. **Hub**: Repeats signal to all ports (Layer 1). Inefficient.\n2. **Switch**: Sends data only to the destination MAC (Layer 2).\n3. **Router**: Forwards data between different networks (Layer 3).\n4. **Gateway**: Translates protocols between different network architectures."
  },
  {
    id: "http-https",
    title: "HTTP vs HTTPS",
    content: "HTTP is plain text; anyone on the network can read it. **HTTPS** uses **TLS (Transport Layer Security)** to encrypt the data, ensuring privacy and data integrity. Modern browsers mark non-HTTPS sites as 'unsecure'."
  },
  {
    id: "topologies",
    title: "Common Network Topologies",
    content: "| Topology | Description |\n| :--- | :--- |\n| **Star** | All nodes connected to a central hub (Most common) |\n| **Bus** | Single cable with all nodes connected |\n| **Mesh** | Each node connected to several others (High redundancy) |\n| **Ring** | Nodes form a closed loop; data travels in one direction |"
  },
  {
    id: "error-detection",
    title: "Error Detection & Correction",
    content: "Networks use techniques like **Parity Bits**, **Checksums**, and **CRC (Cyclic Redundancy Check)** to ensure that data received matches the data sent."
  },
  {
    id: "arp-protocol",
    title: "How ARP Works",
    content: "**ARP (Address Resolution Protocol)** is used to discover the **MAC address** associated with a specific **IP address**. When a device knows the target IP, it broadcasts an ARP request, and the target responds with its MAC."
  },
  {
    id: "lan-wan-man",
    title: "LAN, MAN, and WAN",
    content: "- **LAN** (Local Area Network): Home, office, small campus.\n- **MAN** (Metropolitan Area Network): City-wide area.\n- **WAN** (Wide Area Network): Global scale (e.g., the Internet)."
  },
  {
    id: "vlan-concept",
    title: "What is a VLAN?",
    content: "A **Virtual LAN** allows network administrators to group devices logically even if they are connected to different physical switches, improving security and reducing broadcast traffic."
  },
  {
    id: "tcp-handshake",
    title: "The 3-Way Handshake Process",
    content: "TCP uses this sequence to establish a reliable connection:\n1. **SYN**: Client sends a Synchronize packet with a sequence number.\n2. **SYN-ACK**: Server responds with a Synchronize-Acknowledgment.\n3. **ACK**: Client sends an Acknowledgment to finalize the connection.\n\nThis ensures both devices can communicate before any real data is sent."
  },
  {
    id: "nat-pat",
    title: "NAT vs PAT",
    content: "- **NAT (Network Address Translation)**: Maps a private IP to a public IP. Used to hide internal network structures.\n- **PAT (Port Address Translation)**: A type of NAT that maps multiple private IPs to a single public IP using different source port numbers. Most home routers use PAT."
  },
  {
    id: "subnetting-math",
    title: "Understanding Subnet Masks",
    content: "A subnet mask (like 255.255.255.0) tells a device which part of the IP address is the **Network ID** and which part is the **Host ID**. \n\n**CIDR Notation**: /24 is equivalent to 255.255.255.0, meaning the first 24 bits are for the network."
  },
  {
    id: "vpn-tunnels",
    title: "Virtual Private Networks (VPN)",
    content: "A VPN creates an encrypted 'tunnel' over the public internet, allowing users to access private local networks securely. It uses protocols like **IPSec** or **OpenVPN** to ensure data cannot be intercepted by third parties."
  },
  {
    id: "routing-protocols",
    title: "Routing Protocols: Distance vs Link",
    content: "- **Distance Vector (e.g., RIP)**: Routers share their entire routing table with neighbors at regular intervals. Simple but slow to adapt.\n- **Link State (e.g., OSPF)**: Routers share the state of their individual links. Faster convergence and more efficient for large networks."
  },
  {
    id: "mac-addresses",
    title: "MAC vs IP Address",
    content: "- **MAC Address**: Physical, 'burned-in' address of the network interface. Layer 2. Unique globally.\n- **IP Address**: Logical address assigned by a network. Layer 3. Changes when you move to a different network."
  },
  {
    id: "http-status-codes",
    title: "Common HTTP Status Codes",
    content: "| Code | Meaning | Example |\n| :--- | :--- | :--- |\n| **200** | OK | Success |\n| **404** | Not Found | Page doesn't exist |\n| **500** | Internal Error | Server-side crash |\n| **301** | Moved | Permanent redirect |\n| **403** | Forbidden | No permission |"
  },
  {
    id: "collision-domains",
    title: "Collision vs Broadcast Domains",
    content: "- **Collision Domain**: A segment where data packets can 'collide'. Switches eliminate these by buffering data for each port.\n- **Broadcast Domain**: A logical group where all devices receive broadcasts (like ARP). Routers break broadcast domains; switches do not."
  },
  {
    id: "proxy-servers",
    title: "Forward vs Reverse Proxy",
    content: "- **Forward Proxy**: Sits in front of clients and handles outgoing requests to the internet (common in corporate offices).\n- **Reverse Proxy**: Sits in front of a web server and manages incoming requests, providing load balancing and caching."
  },
  {
    id: "network-security",
    title: "DDoS Attacks Explained",
    content: "**Distributed Denial of Service (DDoS)** attacks attempt to overwhelm a target network or server with an enormous volume of traffic from multiple compromised systems (a Botnet), making the service unavailable to legitimate users."
  }
];
