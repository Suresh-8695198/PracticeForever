export const questions = [
  {
    id: 1,
    text: "What does ACID stand for in the context of database transactions?",
    options: [
      { id: "A", text: "Accuracy, Consistency, Integration, Durability" },
      { id: "B", text: "Atomicity, Consistency, Isolation, Durability" },
      { id: "C", text: "Access, Connection, Index, Data" },
      { id: "D", text: "Automatic, Central, Internal, Distributed" }
    ],
    answer: "B",
    explanation: "ACID properties ensure that database transactions are processed reliably."
  },
  {
    id: 2,
    text: "Which SQL command is used to remove all records from a table without deleting the table structure?",
    options: [
      { id: "A", text: "DELETE" },
      { id: "B", text: "DROP" },
      { id: "C", text: "TRUNCATE" },
      { id: "D", text: "REMOVE" }
    ],
    answer: "C",
    explanation: "TRUNCATE is a DDL command that removes all rows from a table; it's faster than DELETE and doesn't log individual row deletions."
  },
  {
    id: 3,
    text: "What is a 'Primary Key'?",
    options: [
      { id: "A", text: "A key that can be null" },
      { id: "B", text: "A unique identifier for a row; cannot be null" },
      { id: "C", text: "A key that links two tables" },
      { id: "D", text: "The largest numerical field in a table" }
    ],
    answer: "B",
    explanation: "A primary key must contain unique values and cannot contain NULL values."
  },
  {
    id: 4,
    text: "What is the purpose of the 'JOIN' clause in SQL?",
    options: [
      { id: "A", text: "To combine rows from two or more tables based on a related column" },
      { id: "B", text: "To add a new column to a table" },
      { id: "C", text: "To merge two database files" },
      { id: "D", text: "To sort data alphabetically" }
    ],
    answer: "A",
    explanation: "JOIN is used to fetch related data from multiple tables simultaneously."
  },
  {
    id: 5,
    text: "Which of the following is a 'NoSQL' database?",
    options: [
      { id: "A", text: "MySQL" },
      { id: "B", text: "PostgreSQL" },
      { id: "C", text: "MongoDB" },
      { id: "D", text: "Oracle" }
    ],
    answer: "C",
    explanation: "MongoDB is a document-oriented NoSQL database, while the others are Relational (RDBMS)."
  },
  {
    id: 6,
    text: "What is 'Normalization'?",
    options: [
      { id: "A", text: "Creating backups of the database" },
      { id: "B", text: "Organizing data to reduce redundancy and improve data integrity" },
      { id: "C", text: "Converting SQL to NoSQL" },
      { id: "D", text: "Scaling a database across servers" }
    ],
    answer: "B",
    explanation: "Normalization involves dividing a database into two or more tables and defining relationships between them."
  },
  {
    id: 7,
    text: "What is the result of a 'LEFT JOIN'?",
    options: [
      { id: "A", text: "Returns only the matching rows in both tables" },
      { id: "B", text: "Returns all rows from the left table, and matched rows from the right table" },
      { id: "C", text: "Returns rows that are unique to the left table" },
      { id: "D", text: "Throws an error if there is no match" }
    ],
    answer: "B",
    explanation: "LEFT JOIN ensures every row in the left table is represented, with NULLs for missing right table data."
  },
  {
    id: 8,
    text: "What does the 'GROUP BY' clause do?",
    options: [
      { id: "A", text: "Sorts the output rows" },
      { id: "B", text: "Groups rows that have the same values into summary rows" },
      { id: "C", text: "Filters rows based on a condition" },
      { id: "D", text: "Links two tables together" }
    ],
    answer: "B",
    explanation: "GROUP BY is often used with aggregate functions like COUNT, MAX, MIN, SUM, or AVG."
  },
  {
    id: 9,
    text: "What is a 'Foreign Key'?",
    options: [
      { id: "A", text: "A key used in another country" },
      { id: "B", text: "A field in one table that uniquely identifies a row in another table" },
      { id: "C", text: "A key that is encrypted" },
      { id: "D", text: "The primary key of a system table" }
    ],
    answer: "B",
    explanation: "Foreign keys establish a link between data in two tables, ensuring referential integrity."
  },
  {
    id: 10,
    text: "Which SQL command is used to add new data into a table?",
    options: [
      { id: "A", text: "ADD" },
      { id: "B", text: "UPDATE" },
      { id: "C", text: "INSERT INTO" },
      { id: "D", text: "SAVE" }
    ],
    answer: "C",
    explanation: "The INSERT INTO statement is used to insert new records in a table."
  },
  {
    id: 11,
    text: "What is a 'Transitive Dependency' in database normalization?",
    options: [
      { id: "A", text: "When a primary key depends on a foreign key" },
      { id: "B", text: "When a non-key attribute depends on another non-key attribute" },
      { id: "C", text: "When all attributes depend on the primary key" },
      { id: "D", text: "When a table has too many rows" }
    ],
    answer: "B",
    explanation: "3rd Normal Form (3NF) aims to eliminate transitive dependencies to ensure data integrity."
  },
  {
    id: 12,
    text: "Which aggregate function is used to find the number of rows in a table?",
    options: [
      { id: "A", text: "SUM()" },
      { id: "B", text: "TOTAL()" },
      { id: "C", text: "COUNT()" },
      { id: "D", text: "NUMBER()" }
    ],
    answer: "C",
    explanation: "COUNT(*) returns the total number of rows in a table, including those with null values."
  },
  {
    id: 13,
    text: "What is a 'Candidate Key'?",
    options: [
      { id: "A", text: "A key that is not yet selected as the primary key" },
      { id: "B", text: "Any set of columns that can uniquely identify a row" },
      { id: "C", text: "A key used for trial purposes" },
      { id: "D", text: "A key that contains null values" }
    ],
    answer: "B",
    explanation: "All candidate keys have the property of Uniqueness and Irreducibility. One is chosen as the Primary Key."
  },
  {
    id: 14,
    text: "What does the 'HAVING' clause do in SQL?",
    options: [
      { id: "A", text: "Filters rows before they are grouped" },
      { id: "B", text: "Filters groups based on a condition after GROUP BY" },
      { id: "C", text: "Sorts the results in descending order" },
      { id: "D", text: "Creates a new table" }
    ],
    answer: "B",
    explanation: "While WHERE filters rows, HAVING is used specifically to filter groups created by GROUP BY."
  },
  {
    id: 15,
    text: "What is 'Referential Integrity'?",
    options: [
      { id: "A", text: "Ensuring that every table has a primary key" },
      { id: "B", text: "Ensuring that a foreign key value always points to an existing primary key value" },
      { id: "C", text: "Encryption of sensitive data" },
      { id: "D", text: "Backing up the database every hour" }
    ],
    answer: "B",
    explanation: "Foreign keys enforce referential integrity by ensuring relationships between tables remain consistent."
  },
  {
    id: 16,
    text: "What is a 'View' in SQL?",
    options: [
      { id: "A", text: "A physical table that stores data" },
      { id: "B", text: "A virtual table based on the result-set of an SQL statement" },
      { id: "C", text: "The graphical interface of the database" },
      { id: "D", text: "A way to backup data" }
    ],
    answer: "B",
    explanation: "Views do not store data themselves; they act as a window into one or more underlying tables."
  },
  {
    id: 17,
    text: "Which SQL constraint prevents a column from having NULL values?",
    options: [
      { id: "A", text: "UNIQUE" },
      { id: "B", text: "CHECK" },
      { id: "C", text: "NOT NULL" },
      { id: "D", text: "DEFAULT" }
    ],
    answer: "C",
    explanation: "The NOT NULL constraint enforces a column to always contain a value."
  },
  {
    id: 18,
    text: "What is a 'Self-Join'?",
    options: [
      { id: "A", text: "A join between a table and itself" },
      { id: "B", text: "A join that runs automatically" },
      { id: "C", text: "A join that doesn't require a key" },
      { id: "D", text: "A join between two identical databases" }
    ],
    answer: "A",
    explanation: "Self-joins are useful for querying hierarchical data within a single table (e.g., finding an employee's manager in an Employee table)."
  },
  {
    id: 19,
    text: "Which normal form deals with 'Multi-valued Dependencies'?",
    options: [
      { id: "A", text: "2NF" },
      { id: "B", text: "3NF" },
      { id: "C", text: "4NF" },
      { id: "D", text: "BCNF" }
    ],
    answer: "C",
    explanation: "4NF is used to eliminate multi-valued dependencies that lead to data redundancy."
  },
  {
    id: 20,
    text: "What is the purpose of the 'COMMIT' command?",
    options: [
      { id: "A", text: "To undo a transaction" },
      { id: "B", text: "To permanently save the changes made in a transaction" },
      { id: "C", text: "To delete a database" },
      { id: "D", text: "To start a new session" }
    ],
    answer: "B",
    explanation: "COMMIT makes all changes made during the current transaction permanent."
  }
];

export const theory = [
  {
    id: "dbms-intro",
    title: "Introduction to DBMS",
    content: "A **DBMS (Database Management System)** is software used to store, retrieve, and run queries on data. It provides an interface between the data and the software applications."
  },
  {
    id: "acid-properties",
    title: "The ACID Properties",
    content: "1. **Atomicity**: The entire transaction takes place at once or not at all.\n2. **Consistency**: Database must be consistent before and after a transaction.\n3. **Isolation**: Multiple transactions occur independently without interference.\n4. **Durability**: The results of a successful transaction are permanent."
  },
  {
    id: "sql-categories",
    title: "SQL Command Categories",
    content: "| Category | Commands | Purpose |\n| :--- | :--- | :--- |\n| **DDL** (Definition) | CREATE, DROP, ALTER, TRUNCATE | Define structure |\n| **DML** (Manipulation) | INSERT, UPDATE, DELETE | Modify data |\n| **DQL** (Query) | SELECT | Retrieve data |\n| **DCL** (Control) | GRANT, REVOKE | Permissions |\n| **TCL** (Transaction) | COMMIT, ROLLBACK | Manage transactions |"
  },
  {
    id: "normalization-forms",
    title: "Database Normalization Forms",
    content: "### 1NF (First Normal Form):\n- Atomic values per cell (no multi-valued attributes).\n- Each column should have a unique name.\n\n### 2NF (Second Normal Form):\n- Must be in 1NF.\n- All non-key attributes must be fully functional dependent on Primary Key.\n\n### 3NF (Third Normal Form):\n- Must be in 2NF.\n- No transitive dependencies (no non-key attribute depends on another non-key attribute)."
  },
  {
    id: "joins-explained",
    title: "Understanding SQL JOINs",
    content: "- **INNER JOIN**: Only records with matches in both tables.\n- **LEFT (OUTER) JOIN**: All left records + matches from right.\n- **RIGHT (OUTER) JOIN**: All right records + matches from left.\n- **FULL (OUTER) JOIN**: All records from both tables when there's a match in either."
  },
  {
    id: "indexing-concept",
    title: "What is an Index?",
    content: "An **Index** is a data structure that improves the speed of data retrieval operations on a table at the cost of additional storage and slower write operations. Think of it like a book's index at the back."
  },
  {
    id: "rdbms-vs-nosql",
    title: "Relational vs NoSQL",
    content: "| Parameter | RDBMS (SQL) | NoSQL |\n| :--- | :--- | :--- |\n| **Data Model** | Tables/Rows | Key-value, Document, Graph |\n| **Schema** | Fixed/Rigid | Flexible/Dynamic |\n| **Scaling** | Vertical (Larger Servers) | Horizontal (More Servers) |\n| **Examples** | MySQL, Oracle | MongoDB, Redis |"
  },
  {
    id: "er-diagram",
    title: "ER Diagram Concepts",
    content: "**Entity-Relationship (ER)** diagrams model the logical structure of a database. \n- **Entities**: Objects (e.g., student, course).\n- **Attributes**: Properties (e.g., age, name).\n- **Relationships**: Associations between entities."
  },
  {
    id: "stored-procedures",
    title: "Stored Procedures & Triggers",
    content: "- **Stored Procedure**: A prepared SQL code that you can save, so the code can be reused over and over again.\n- **Trigger**: A procedural code that is automatically executed in response to certain events on a particular table."
  },
  {
    id: "aggregate-functions",
    title: "Common SQL Aggregate Functions",
    content: "- `COUNT()`: Returns the number of rows.\n- `SUM()`: Returns the total sum of a numeric column.\n- `AVG()`: Returns the average value of a numeric column.\n- `MIN()` / `MAX()`: Returns the smallest/largest value."
  },
  {
    id: "keys-types",
    title: "Primary, Foreign, & Candidate Keys",
    content: "| Key Type | Description |\n| :--- | :--- |\n| **Super Key** | A set of one or more attributes that uniquely identifies a record. |\n| **Candidate Key** | A minimal Super Key. (No redundant attributes) |\n| **Primary Key** | The specific candidate key chosen to identify rows. |\n| **Foreign Key** | A field that refers to the Primary Key of another table. |"
  },
  {
    id: "where-vs-having",
    title: "SQL Filter: WHERE vs HAVING",
    content: "### WHERE:\nUsed to filter records *before* any groupings are made. It works on individual rows.\n\n### HAVING:\nUsed to filter groups *after* the `GROUP BY` clause has been applied. It works on aggregated values (e.g., `HAVING COUNT(*) > 5`)."
  },
  {
    id: "referential-integrity",
    title: "Enforcing Referential Integrity",
    content: "This ensures that relationships between tables remain consistent. For example, you cannot delete a customer record if there are associated 'Orders' linked via a Foreign Key, unless you use **ON DELETE CASCADE**."
  },
  {
    id: "transactions-tcl",
    title: "Transaction Control (TCL)",
    content: "- **BEGIN**: Starts a transaction.\n- **COMMIT**: Saves changes permanently.\n- **ROLLBACK**: Reverts the database to its state before the transaction began.\n- **SAVEPOINT**: Sets a point within a transaction to which you can later roll back."
  },
  {
    id: "sql-views",
    title: "The Power of Database Views",
    content: "A **View** is a 'virtual table'. Benefits include:\n1. **Security**: Hide sensitive columns from users.\n2. **Simplicity**: Pre-join complex tables so users can query one simple view.\n3. **Consistency**: Provide a stable interface even if underlying table structures change."
  },
  {
    id: "bcnf-normalization",
    title: "Boyce-Codd Normal Form (BCNF)",
    content: "BCNF is a stronger version of 3NF. A table is in BCNF if for every functional dependency `X -> Y`, `X` is a **Super Key**. It addresses anomalies that 3NF might miss in tables with overlapping candidate keys."
  },
  {
    id: "deadlocks-dbms",
    title: "Deadlocks in Databases",
    content: "High-concurrency systems can face deadlocks where Transaction A waits for a lock held by B, and B waits for a lock held by A. DBMS systems use **Deadlock Detection** (checking a wait-for graph) and automatically kill one transaction to break the cycle."
  },
  {
    id: "cursors-sql",
    title: "What is a Database Cursor?",
    content: "A **Cursor** allows you to iterate over a result-set row-by-row. While set-based SQL is usually faster, cursors are necessary when logic must be applied to individual records sequentially (e.g., complex legacy migrations)."
  },
  {
    id: "data-integrity-constraints",
    title: "Integrity Constraints",
    content: "1. **Entity Integrity**: Primary key cannot be null.\n2. **Referential Integrity**: Foreign key must match a valid primary key.\n3. **Domain Integrity**: Values must belong to a defined set (e.g., Age must be > 0)."
  },
  {
    id: "dbms-architecture",
    title: "The 3-Tier Schema Architecture",
    content: "1. **Physical Level**: How data is actually stored (files, indices).\n2. **Conceptual Level**: The logical structure (tables, relationships).\n3. **External Level**: User views (what different users see)."
  }
];
