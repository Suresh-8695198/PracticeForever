export const questions = [
  {
    id: 1,
    text: "What does the 'CIA Triad' stand for in cybersecurity?",
    options: [
      { id: "A", text: "Computing, Integration, Authentication" },
      { id: "B", text: "Confidentiality, Integrity, Availability" },
      { id: "C", text: "Centralization, Information, Access" },
      { id: "D", text: "Cryptology, Intelligence, Analysis" }
    ],
    answer: "B",
    explanation: "Confidentiality, Integrity, and Availability are the core principles of information security."
  },
  {
    id: 2,
    text: "What is 'Phishing'?",
    options: [
      { id: "A", text: "Searching for deleted files on a disk" },
      { id: "B", text: "Fraudulent attempt to obtain sensitive information like passwords by disguising as a trustworthy entity" },
      { id: "C", text: "Upgrading a system's firewall" },
      { id: "D", text: "A technique to speed up internet connections" }
    ],
    answer: "B",
    explanation: "Phishing usually happens via email, where attackers send links to fake login pages."
  },
  {
    id: 3,
    text: "Which type of malware self-replicates and spreads through a network without human intervention?",
    options: [
      { id: "A", text: "Virus" },
      { id: "B", text: "Worm" },
      { id: "C", text: "Trojan" },
      { id: "D", text: "Spyware" }
    ],
    answer: "B",
    explanation: "A Worm is standalone and travels across networks, whereas a Virus attaches itself to a program and requires user action to spread."
  },
  {
    id: 4,
    text: "What is 'Symmetric Encryption'?",
    options: [
      { id: "A", text: "Encryption that uses two different keys" },
      { id: "B", text: "Encryption that uses the same key for both encryption and decryption" },
      { id: "C", text: "Encryption only used for passwords" },
      { id: "D", text: "A method that is inherently unhackable" }
    ],
    answer: "B",
    explanation: "Symmetric encryption is faster but requires both parties to share the private key securely."
  },
  {
    id: 5,
    text: "What does 'DDoS' stand for?",
    options: [
      { id: "A", text: "Direct Data of System" },
      { id: "B", text: "Distributed Denial of Service" },
      { id: "C", text: "Digital Data over Server" },
      { id: "D", text: "Direct Domain on Site" }
    ],
    answer: "B",
    explanation: "In a DDoS attack, multiple compromised systems flood a target server with traffic until it crashes."
  },
  {
    id: 6,
    text: "What is a 'Brute Force' attack?",
    options: [
      { id: "A", text: "Physically breaking a server" },
      { id: "B", text: "Systematically trying all possible combinations of passwords until the correct one is found" },
      { id: "C", text: "Sending millions of spam emails" },
      { id: "D", text: "Overloading a network cable" }
    ],
    answer: "B",
    explanation: "Strong, complex passwords and rate-limiting help protect against brute force attacks."
  },
  {
    id: 7,
    text: "What is the primary purpose of a VPN (Virtual Private Network)?",
    options: [
      { id: "A", text: "To make the internet faster" },
      { id: "B", text: "To create an encrypted tunnel for data and hide the user IP address" },
      { id: "C", text: "To store files in the cloud" },
      { id: "D", text: "To scan for viruses" }
    ],
    answer: "B",
    explanation: "VPNs provide privacy and security, especially when using public Wi-Fi."
  },
  {
    id: 8,
    text: "In Cybersecurity, what is 'Social Engineering'?",
    options: [
      { id: "A", text: "Building social media websites" },
      { id: "B", text: "Psychologically manipulating people into performing actions or leaking confidential info" },
      { id: "C", text: "Writing code in teams" },
      { id: "D", text: "Optimizing website ranking" }
    ],
    answer: "B",
    explanation: "Social engineering exploits human error rather than technical vulnerabilities."
  },
  {
    id: 9,
    text: "What is 'Two-Factor Authentication' (2FA)?",
    options: [
      { id: "A", text: "Asking for the password twice" },
      { id: "B", text: "Requiring two pieces of evidence to prove identity (e.g., password + OTP)" },
      { id: "C", text: "Having two users for one account" },
      { id: "D", text: "Using two different browsers" }
    ],
    answer: "B",
    explanation: "2FA adds an extra layer of security; even if the password is stolen, the account remains protected."
  },
  {
    id: 10,
    text: "What is 'Ransomware'?",
    options: [
      { id: "A", text: "Malware that deletes all files" },
      { id: "B", text: "Malware that encrypts files and demands payment for the decryption key" },
      { id: "C", text: "Spyware that records webcam footage" },
      { id: "D", text: "Software used by police to find hackers" }
    ],
    answer: "B",
    explanation: "Ransomware targets businesses and individuals, often demanding payment in cryptocurrency."
  },
  {
    id: 11,
    text: "What is an 'SQL Injection' (SQLi) attack?",
    options: [
      { id: "A", text: "Creating a new database manually" },
      { id: "B", text: "Injecting malicious SQL queries into input fields to manipulate a database" },
      { id: "C", text: "Deleting a database using a virus" },
      { id: "D", text: "Optimizing database performance" }
    ],
    answer: "B",
    explanation: "SQLi allows attackers to view, modify, or delete data from a database that they are not authorized to access."
  },
  {
    id: 12,
    text: "What does 'HTTPS' use to secure communication between a browser and a server?",
    options: [
      { id: "A", text: "FTP" },
      { id: "B", text: "SSL/TLS" },
      { id: "C", text: "BIOS" },
      { id: "D", text: "VPN" }
    ],
    answer: "B",
    explanation: "HTTPS uses Transport Layer Security (TLS), or its predecessor SSL, to encrypt communication."
  },
  {
    id: 13,
    text: "What is the purpose of a 'Digital Signature'?",
    options: [
      { id: "A", text: "To make a PDF look official" },
      { id: "B", text: "To provide authentication, non-repudiation, and integrity of a digital message" },
      { id: "C", text: "To speed up email delivery" },
      { id: "D", text: "To scan a document into the computer" }
    ],
    answer: "B",
    explanation: "Digital signatures use asymmetric cryptography to prove that a file has not been altered and was sent by the claimed sender."
  },
  {
    id: 14,
    text: "What is 'Spear Phishing'?",
    options: [
      { id: "A", text: "A phishing attack aimed at many people at once" },
      { id: "B", text: "A targeted phishing attack directed at a specific individual or organization" },
      { id: "C", text: "A type of firewall" },
      { id: "D", text: "Buying fish online with stolen cards" }
    ],
    answer: "B",
    explanation: "Spear phishing is highly personalized, often using researched information to appear more convincing."
  },
  {
    id: 15,
    text: "What is a 'Botnet'?",
    options: [
      { id: "A", text: "A network of robots in a factory" },
      { id: "B", text: "A network of compromised computers (zombies) controlled by a single attacker" },
      { id: "C", text: "A high-speed internet connection" },
      { id: "D", text: "A programming forum" }
    ],
    answer: "B",
    explanation: "Botnets are typically used for large-scale operations like DDoS attacks or sending spam emails."
  },
  {
    id: 16,
    text: "What does 'OAUTH' allow a user to do?",
    options: [
      { id: "A", text: "Create a new encryption key" },
      { id: "B", text: "Grant websites or apps access to their information on other websites without giving them the password" },
      { id: "C", text: "Change their system BIOS settings" },
      { id: "D", text: "Connect to a VPN" }
    ],
    answer: "B",
    explanation: "OAuth is used by services like 'Login with Google' or 'Login with Facebook'."
  },
  {
    id: 17,
    text: "What is a 'Zero-Day Vulnerability'?",
    options: [
      { id: "A", text: "A bug that has existed for zero days" },
      { id: "B", text: "A security flaw that is known to attackers but not yet to the software developer (no patch exists)" },
      { id: "C", text: "A computer that cannot count days" },
      { id: "D", text: "A password that expires in zero days" }
    ],
    answer: "B",
    explanation: "Zero-day attacks are dangerous because there are no defenses (patches) available against them yet."
  },
  {
    id: 18,
    text: "Which of the following describes 'Least Privilege'?",
    options: [
      { id: "A", text: "Giving everyone admin access to simplify work" },
      { id: "B", text: "Providing only the minimum level of access needed for a user to perform their job" },
      { id: "C", text: "Restricting the number of hours someone can use a computer" },
      { id: "D", text: "Using free software only" }
    ],
    answer: "B",
    explanation: "Least privilege limits the potential damage if an account is compromised."
  },
  {
    id: 19,
    text: "What is 'Salting' in the context of password storage?",
    options: [
      { id: "A", text: "Making the password shorter" },
      { id: "B", text: "Adding a unique, random string of characters to a password before hashing it" },
      { id: "C", text: "Encrypting the hardware" },
      { id: "D", text: "Mixing database table names" }
    ],
    answer: "B",
    explanation: "Salting protects against 'rainbow table' attacks by ensuring that identical passwords result in different hashes."
  },
  {
    id: 20,
    text: "What is 'Shoulder Surfing'?",
    options: [
      { id: "A", text: "Browsing from a laptop held on your shoulder" },
      { id: "B", text: "Looking over someone's shoulder to see their password or pin" },
      { id: "C", text: "A type of social media surfing" },
      { id: "D", text: "Hacking into a webcam" }
    ],
    answer: "B",
    explanation: "Shoulder surfing is a low-tech physical attack used to steal sensitive info in public places."
  }
];

export const theory = [
  {
    id: "security-intro",
    title: "The Importance of Cybersecurity",
    content: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information."
  },
  {
    id: "cia-triad",
    title: "The CIA Triad Core",
    content: "- **Confidentiality**: Ensuring only authorized users have access to data.\n- **Integrity**: Ensuring data is accurate and has not been tampered with.\n- **Availability**: Ensuring data and systems are accessible when needed."
  },
  {
    id: "hacker-types",
    title: "Types of Hackers",
    content: "1. **White Hat**: Ethical hackers who use their skills for good/security.\n2. **Black Hat**: Malicious hackers who seek to commit crimes.\n3. **Gray Hat**: Fall in between; may break laws to find vulnerabilities but without malicious intent."
  },
  {
    id: "common-attacks",
    title: "Common Cyber Attacks",
    content: "| Attack Type | Method |\n| :--- | :--- |\n| **SQL Injection** | Inserting malicious SQL code into input fields |\n| **Man-in-the-Middle** | Eavesdropping on private communications |\n| **Zero-Day** | Exploiting a vulnerability before a patch exists |\n| **Cross-Site Scripting** | Injecting scripts into websites to steal cookies |"
  },
  {
    id: "encryption-basics",
    title: "Symmetric vs Asymmetric Encryption",
    content: "Asymmetric encryption (also known as Public-Key Cryptography) uses two keys: a **Public Key** (to encrypt) and a **Private Key** (to decrypt). This solves the problem of sharing keys securely."
  },
  {
    id: "firewalls-ips",
    title: "Network Defense Systems",
    content: "- **Firewall**: Acts as a filter based on rules.\n- **IDS** (Intrusion Detection): Monitors traffic for suspicious patterns.\n- **IPS** (Intrusion Prevention): Automatically blocks detected threats."
  },
  {
    id: "zero-trust",
    title: "The Zero Trust Model",
    content: "**Zero Trust** is a security framework that requires all users, whether in or outside the organization's network, to be authenticated, authorized, and continuously validated before being granted access."
  },
  {
    id: "incident-response",
    title: "The Incident Response Plan",
    content: "1. Preparation\n2. Identification\n3. Containment\n4. Eradication\n5. Recovery\n6. Lessons Learned"
  },
  {
    id: "web-security",
    title: "Web Security Fundamentals",
    content: "Always use **HTTPS**, implement **CSRF tokens**, sanitise all user inputs, and use secure cookies with `HttpOnly` and `Secure` flags."
  },
  {
    id: "password-hygiene",
    title: "Best Password Practices",
    content: "- Use a mix of uppercase, lowercase, numbers, and symbols.\n- Avoid using personal info (like birthdays).\n- Use a unique password for every site (aided by Password Managers).\n- Change passwords periodically."
  },
  {
    id: "hashing-vs-encryption",
    title: "Hashing vs Encryption",
    content: "- **Encryption**: Two-way function. Data is scrambled but can be unscrambled with a key. (e.g., AES, RSA).\n- **Hashing**: One-way function. Data is transformed into a fixed-size string that cannot be reversed. (e.g., SHA-256). Used for storing passwords."
  },
  {
    id: "social-engineering-tactics",
    title: "Social Engineering Tactics",
    content: "- **Vishing**: Voice phishing (via phone calls).\n- **Smishing**: SMS phishing (via text messages).\n- **Baiting**: Leaving infected USB drives in public for people to find.\n- **Pretexting**: Creating a fabricated scenario to gain information."
  },
  {
    id: "cross-site-scripting",
    title: "What is XSS?",
    content: "**Cross-Site Scripting (XSS)** occurs when an attacker injects malicious scripts into a trusted website. When a user visits the site, the script runs in their browser, potentially stealing session cookies or redirecting the user to malicious sites."
  },
  {
    id: "digital-signatures-tech",
    title: "How Digital Signatures Work",
    content: "1. The sender creates a **hash** of the message.\n2. The sender encrypts the hash with their **Private Key**.\n3. The receiver decrypts it with the sender's **Public Key**.\n4. If the decrypted hash matches the hash of the received message, the message is authentic."
  },
  {
    id: "biometric-security",
    title: "Biometric Authentication",
    content: "Uses unique physical or behavioral traits for identification:\n- **Fingerprint Scanning**\n- **Facial Recognition**\n- **Iris Scanning**\n- **Voice Recognition**\n*Note: Biometrics are convenient but cannot be changed if the data is stolen.*"
  },
  {
    id: "dark-web-basics",
    title: "The Surface, Deep, & Dark Web",
    content: "- **Surface Web**: Indexed by search engines (e.g., Google, News sites).\n- **Deep Web**: Non-indexed pages (e.g., your email inbox, banking pages).\n- **Dark Web**: Purposefully hidden sites requiring special software like **Tor** to access."
  },
  {
    id: "security-audits",
    title: "Vulnerability Assessment vs Pentesting",
    content: "- **Vulnerability Assessment**: Identifying and listing potential security flaws (often automated).\n- **Penetration Testing (Pentesting)**: Simulating a real-world attack to see if the identified vulnerabilities can actually be exploited."
  },
  {
    id: "cryptography-history",
    title: "History: The Caesar Cipher",
    content: "One of the earliest encryption methods where each letter is shifted a certain number of places in the alphabet. While easy to crack today, it laid the foundation for modern cryptography."
  },
  {
    id: "cloud-security-responsibility",
    title: "Shared Responsibility Model",
    content: "In Cloud Computing (AWS, Azure):\n- **Cloud Provider**: Responsible for security *of* the cloud (physical data centers).\n- **Customer**: Responsible for security *in* the cloud (data, applications, firewall settings)."
  },
  {
    id: "steganography-basics",
    title: "What is Steganography?",
    content: "The practice of hiding a secret message *within* a non-secret file (like an image or an audio file). While encryption hides the *content* of a message, steganography hides the very *existence* of the message."
  }
];
