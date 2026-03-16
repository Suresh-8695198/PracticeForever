export const questions = [
  {
    id: 1,
    text: "Which keyword is used to inherit a class in Java?",
    options: [
      { id: "A", text: "inherits" },
      { id: "B", text: "extends" },
      { id: "C", text: "implements" },
      { id: "D", text: "subclass" }
    ],
    answer: "B",
    explanation: "'extends' is used for class inheritance, while 'implements' is used for interface implementation."
  },
  {
    id: 2,
    text: "What is 'Polymorphism' in Java?",
    options: [
      { id: "A", text: "Creating multiple classes in one file" },
      { id: "B", text: "The ability of an object to take on many forms" },
      { id: "C", text: "Converting a string to an integer" },
      { id: "D", text: "Connecting to a database" }
    ],
    answer: "B",
    explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass, especially through method overriding and overloading."
  },
  {
    id: 3,
    text: "Which of these access specifiers provides the least visibility in Java?",
    options: [
      { id: "A", text: "public" },
      { id: "B", text: "protected" },
      { id: "C", text: "default (package-private)" },
      { id: "D", text: "private" }
    ],
    answer: "D",
    explanation: "Private members are only accessible within the class they are declared in."
  },
  {
    id: 4,
    text: "What is an 'Abstract Class'?",
    options: [
      { id: "A", text: "A class that cannot be instantiated" },
      { id: "B", text: "A class that has no methods" },
      { id: "C", text: "A class that is private" },
      { id: "D", text: "The main class of a program" }
    ],
    answer: "A",
    explanation: "Abstract classes are meant to be base classes. They can have both abstract (no body) and concrete methods."
  },
  {
    id: 5,
    text: "What is 'Encapsulation'?",
    options: [
      { id: "A", text: "Inheriting from multiple classes" },
      { id: "B", text: "Wrapping data (variables) and code (methods) together as a single unit" },
      { id: "C", text: "Writing code in multiple files" },
      { id: "D", text: "Hiding a class from the compiler" }
    ],
    answer: "B",
    explanation: "Encapsulation protects data by making it private and providing access through public getter and setter methods."
  },
  {
    id: 6,
    text: "Can a class implement multiple interfaces in Java?",
    options: [
      { id: "A", text: "No, only one" },
      { id: "B", text: "Yes" },
      { id: "C", text: "Only if the interfaces are private" },
      { id: "D", text: "Only in Java 8 and above" }
    ],
    answer: "B",
    explanation: "Java does not support multiple inheritance with classes, but it does allow implementing multiple interfaces."
  },
  {
    id: 7,
    text: "What is the function of the 'super' keyword?",
    options: [
      { id: "A", text: "To call the main method" },
      { id: "B", text: "To reference the immediate parent class object" },
      { id: "C", text: "To make a variable global" },
      { id: "D", text: "To stop a loop" }
    ],
    answer: "B",
    explanation: "'super' is used to access parent class constructors, variables, and methods."
  },
  {
    id: 8,
    text: "What is 'Method Overriding'?",
    options: [
      { id: "A", text: "Defining multiple methods with same name but different parameters" },
      { id: "B", text: "Redefining a parent class method in the child class with the same signature" },
      { id: "C", text: "Deleting a method from a class" },
      { id: "D", text: "Calling a method from another class" }
    ],
    answer: "B",
    explanation: "Overriding is used for Runtime Polymorphism. Method Overloading is used for Compile-time Polymorphism."
  },
  {
    id: 9,
    text: "What is 'Interface' in Java?",
    options: [
      { id: "A", text: "A GUI window" },
      { id: "B", text: "A blueprint of a class that can have only abstract methods and static constants (pre-Java 8)" },
      { id: "C", text: "A type of constructor" },
      { id: "D", text: "A reserved keyword for exceptions" }
    ],
    answer: "B",
    explanation: "Interfaces specify what a class must do but not how it does it. Java 8+ introduced default and static methods in interfaces."
  },
  {
    id: 10,
    text: "Which of the following describes 'Association' but not 'Composition'?",
    options: [
      { id: "A", text: "A 'Strong' relationship where the child cannot exist without the parent" },
      { id: "B", text: "A 'Weak' relationship where two objects have their own lifecycle (e.g., Teacher and Student)" },
      { id: "C", text: "Inheritance" },
      { id: "D", text: "Encapsulation" }
    ],
    answer: "B",
    explanation: "Association is a general relationship. Composition and Aggregation are specific types with different life-cycles."
  },
  {
    id: 11,
    text: "What is 'Constructor Overloading'?",
    options: [
      { id: "A", text: "Creating too many constructors" },
      { id: "B", text: "Having multiple constructors with different parameter lists" },
      { id: "C", text: "Inheriting a constructor" },
      { id: "D", text: "Deleting a constructor" }
    ],
    answer: "B",
    explanation: "Constructor overloading allows creating objects in different ways with different initializations."
  },
  {
    id: 12,
    text: "What does the 'final' keyword do to a class?",
    options: [
      { id: "A", text: "Makes it invisible" },
      { id: "B", text: "Prevents the class from being inherited (extended)" },
      { id: "C", text: "Makes all methods private" },
      { id: "D", text: "Deletes the class from memory" }
    ],
    answer: "B",
    explanation: "A final class cannot be a parent class. Similarly, a final method cannot be overridden."
  },
  {
    id: 13,
    text: "What is 'Method Overloading' classification?",
    options: [
      { id: "A", text: "Runtime Polymorphism" },
      { id: "B", text: "Compile-time Polymorphism" },
      { id: "C", text: "Encapsulation" },
      { id: "D", text: "Abstraction" }
    ],
    answer: "B",
    explanation: "Because the compiler knows which method to call based on the arguments at compile time."
  },
  {
    id: 14,
    text: "In Java OOPS, what is an 'Object'?",
    options: [
      { id: "A", text: "A data type" },
      { id: "B", text: "An instance of a class" },
      { id: "C", text: "A logical entity only" },
      { id: "D", text: "A variable name" }
    ],
    answer: "B",
    explanation: "A class is a template, and an object is a real-world entity created from that template."
  },
  {
    id: 15,
    text: "What is 'Method Hiding'?",
    options: [
      { id: "A", text: "Making a method private" },
      { id: "B", text: "When a child class defines a static method with same signature as parent's static method" },
      { id: "C", text: "Deleting methods from the parent" },
      { id: "D", text: "Overriding a default method" }
    ],
    answer: "B",
    explanation: "Static methods cannot be overridden; they are 'hidden' by the sub-class's version."
  },
  {
    id: 16,
    text: "What is 'Dynamic Method Dispatch'?",
    options: [
      { id: "A", text: "A way to speed up methods" },
      { id: "B", text: "The process by which a call to an overridden method is resolved at runtime" },
      { id: "C", text: "Creating methods on the fly" },
      { id: "D", text: "Using reflection to call methods" }
    ],
    answer: "B",
    explanation: "This is the mechanism that implements runtime polymorphism in Java."
  },
  {
    id: 17,
    text: "What is 'Data Abstraction' primarily achieved through?",
    options: [
      { id: "A", text: "Private variables" },
      { id: "B", text: "Interfaces and Abstract Classes" },
      { id: "C", text: "Static methods" },
      { id: "D", text: "Loops and conditionals" }
    ],
    answer: "B",
    explanation: "Abstraction focuses on 'what' an object does instead of 'how' it does it."
  },
  {
    id: 18,
    text: "What is the result of 'Loose Coupling'?",
    options: [
      { id: "A", text: "Code becomes hard to maintain" },
      { id: "B", text: "Classes are independent and changes in one don't affect others significantly" },
      { id: "C", text: "Inheritance is not possible" },
      { id: "D", text: "The program runs slower" }
    ],
    answer: "B",
    explanation: "OOPS aims for loose coupling and high cohesion for better maintainability."
  },
  {
    id: 19,
    text: "What keyword is used to access members of the current class?",
    options: [
      { id: "A", text: "super" },
      { id: "B", text: "this" },
      { id: "C", text: "current" },
      { id: "D", text: "obj" }
    ],
    answer: "B",
    explanation: "'this' is a reference to the current object whose method or constructor is being called."
  },
  {
    id: 20,
    text: "What is a 'Marker Interface'?",
    options: [
      { id: "A", text: "An interface with many methods" },
      { id: "B", text: "An interface with no methods (e.g., Serializable, Cloneable)" },
      { id: "C", text: "An interface that marks errors" },
      { id: "D", text: "A private interface" }
    ],
    answer: "B",
    explanation: "Marker interfaces are used to provide 'metadata' to the JVM or compiler about a class's behavior."
  },
  {
    id: 21,
    text: "What is the base class for all exceptions in Java?",
    options: [
      { id: "A", text: "Exception" },
      { id: "B", text: "Throwable" },
      { id: "C", text: "Error" },
      { id: "D", text: "RuntimeException" }
    ],
    answer: "B",
    explanation: "'Throwable' is the top-level class. It branches into 'Error' (unrecoverable) and 'Exception' (recoverable)."
  },
  {
    id: 22,
    text: "What is the purpose of the 'finally' block?",
    options: [
      { id: "A", text: "To catch exceptions" },
      { id: "B", text: "To execute code regardless of whether an exception was thrown or caught" },
      { id: "C", text: "To stop the program" },
      { id: "D", text: "To define the last class" }
    ],
    answer: "B",
    explanation: "It's typically used for cleanup operations like closing files or database connections."
  },
  {
    id: 23,
    text: "Which of these is NOT a pillar of OOPS?",
    options: [
      { id: "A", text: "Compilation" },
      { id: "B", text: "Inheritance" },
      { id: "C", text: "Polymorphism" },
      { id: "D", text: "Encapsulation" }
    ],
    answer: "A",
    explanation: "Compilation is a process, not an OOP concept. The 4 pillars are Abstraction, Encapsulation, Inheritance, and Polymorphism."
  },
  {
    id: 24,
    text: "What is 'Garbage Collection' in Java?",
    options: [
      { id: "A", text: "Deleting unused files from disk" },
      { id: "B", text: "Automatic memory management that reclaims heap memory used by objects that are no longer reachable" },
      { id: "C", text: "Cleaning the cache" },
      { id: "D", text: "A tool to optimize code" }
    ],
    answer: "B",
    explanation: "Java developers don't need to manually free memory (like in C++); the JVM handles it via the GC."
  },
  {
    id: 25,
    text: "What is the difference between JVM, JRE, and JDK?",
    options: [
      { id: "A", text: "They are all the same" },
      { id: "B", text: "JDK = JRE + Development Tools; JRE = JVM + Library Classes" },
      { id: "C", text: "JVM = JDK + JRE" },
      { id: "D", text: "JDK is for mobile only" }
    ],
    answer: "B",
    explanation: "JVM runs bytecode; JRE provides the environment to run apps; JDK is needed to write and compile code."
  },
  {
    id: 26,
    text: "What is 'String Pool' in Java?",
    options: [
      { id: "A", text: "An array of strings" },
      { id: "B", text: "A special memory area in the heap that stores string literals to save memory" },
      { id: "C", text: "A database table" },
      { id: "D", text: "A type of collection" }
    ],
    answer: "B",
    explanation: "When you create `String s = \"abc\"`, Java checks the pool first. If it exists, it returns a reference instead of creating a new object."
  },
  {
    id: 27,
    text: "What is 'Aggregation'?",
    options: [
      { id: "A", text: "Strong relationship (is-a)" },
      { id: "B", text: "Weak relationship (has-a) where objects have independent lifecycles" },
      { id: "C", text: "Data hiding" },
      { id: "D", text: "Type casting" }
    ],
    answer: "B",
    explanation: "Example: A Department HAS-A Teacher. If the department is deleted, the teacher still exists."
  },
  {
    id: 28,
    text: "What does 'static' variable mean?",
    options: [
      { id: "A", text: "Variable is constant" },
      { id: "B", text: "Variable belongs to the class rather than instances; only one copy exists for all objects" },
      { id: "C", text: "Variable is hidden" },
      { id: "D", text: "Variable is only for strings" }
    ],
    answer: "B",
    explanation: "Static variables are initialized when the class is loaded."
  },
  {
    id: 29,
    text: "What is 'Wrapper Class'?",
    options: [
      { id: "A", text: "A class that wraps another class" },
      { id: "B", text: "Classes that allow primitive data types to be used as objects (e.g., Integer for int)" },
      { id: "C", text: "A private class" },
      { id: "D", text: "A CSS container" }
    ],
    answer: "B",
    explanation: "Useful for collections like ArrayList which only store objects, not primitives."
  },
  {
    id: 30,
    text: "What is 'Method Signature'?",
    options: [
      { id: "A", text: "The return type" },
      { id: "B", text: "The name of the method and its parameter list" },
      { id: "C", text: "The body of the method" },
      { id: "D", text: "The access modifier" }
    ],
    answer: "B",
    explanation: "Java uses the signature to distinguish between overloaded methods."
  }
];

export const theory = [
  {
    id: "oops-foundation",
    title: "The Four Pillars of OOPS",
    content: "1. **Encapsulation**: Hiding internal state via private fields and public methods.\n2. **Abstraction**: Using interfaces and abstract classes to define higher-level blueprints.\n3. **Inheritance**: Creating is-a relationships to reuse code.\n4. **Polymorphism**: Enabling objects to respond uniquely to the same method call."
  },
  {
    id: "class-vs-object",
    title: "Class vs Object",
    content: "| Feature | Class | Object |\n| :--- | :--- | :--- |\n| **Definition** | A template or blueprint | An instance of a class |\n| **Allocation** | No memory allocated | Memory allocated on heap |\n| **Nature** | Logical entity | Physical entity |\n| **Quantity** | Declared once | Can be multiple objects |"
  },
  {
    id: "constructor-types",
    title: "Java Constructors",
    content: "- **Default Constructor**: Provided by Java if none is defined. Initializes to default values.\n- **Parameterized Constructor**: Used to initialize objects with custom data.\n- **Copy Constructor**: (Not native in Java, but implemented manually) Creates an object using another object of the same class."
  },
  {
    id: "inheritance-types",
    title: "Types of Inheritance in Java",
    content: "1. **Single**: A -> B.\n2. **Multilevel**: A -> B -> C.\n3. **Hierarchical**: A -> B and A -> C.\n4. **Multiple**: Supported only via INTERFACES.\n5. **Hybrid**: Combination of types."
  },
  {
    id: "polymorphism-explained",
    title: "Polymorphism Types",
    content: "### Compile-time (Static):\nAchieved through **Method Overloading**. It's fast as binding happens at compilation.\n\n### Runtime (Dynamic):\nAchieved through **Method Overriding**. It uses **Dynamic Method Dispatch** (Virtual Method Invocation)."
  },
  {
    id: "abstract-vs-interface",
    title: "Abstract Class vs Interface",
    content: "| Parameter | Abstract Class | Interface |\n| :--- | :--- | :--- |\n| **Keywords** | `abstract` | `interface` |\n| **Methods** | Abstract & Concrete | Abstract (Default/Static since Java 8) |\n| **Variables** | Any type | Must be `public static final` |\n| **Multiple** | No (Single extends) | Yes (Multiple implements) |"
  },
  {
    id: "encapsulation-benefits",
    title: "Why use Encapsulation?",
    content: "- **Data Hiding**: User doesn't know internal logic.\n- **Flexibility**: Make variables read-only or write-only easily.\n- **Reusability**: Easier to test and switch implementations."
  },
  {
    id: "coupling-cohesion",
    title: "Coupling vs Cohesion",
    content: "- **Coupling**: How much classes depend on each other (Aim for **Looser**).\n- **Cohesion**: How focused a class's internal logic is (Aim for **Higher**)."
  },
  {
    id: "access-specifiers",
    title: "Java Access Specifiers",
    content: "| Modifier | Class | Package | Subclass | World |\n| :--- | :---: | :---: | :---: | :---: |\n| **public** | Y | Y | Y | Y |\n| **protected** | Y | Y | Y | N |\n| **default** | Y | Y | N | N |\n| **private** | Y | N | N | N |"
  },
  {
    id: "oops-design-patterns",
    title: "Java Design Principles (SOLID)",
    content: "- **S**: Single Responsibility.\n- **O**: Open/Closed (Open for extension, closed for modification).\n- **L**: Liskov Substitution.\n- **I**: Interface Segregation.\n- **D**: Dependency Inversion."
  },
  {
    id: "jvm-arch",
    title: "How JVM Works",
    content: "The **JVM Architecture** consists of:\n1. **Class Loader**: Loads compiled `.class` files.\n2. **Runtime Data Areas**: Method Area, Heap (Objects), Stack (Thread locals).\n3. **Execution Engine**: JIT Compiler + Garbage Collector."
  },
  {
    id: "exception-handling-blogs",
    title: "Java Exception Hierarchy",
    content: "```mermaid\ngraph TD\nA[Throwable] --> B[Error]\nA --> C[Exception]\nC --> D[Checked Exceptions]\nC --> E[Unchecked / Runtime]\n```\n- **Checked**: Must be handled at compile time (e.g., IOException).\n- **Unchecked**: Occur at runtime (e.g., NullPointerException)."
  },
  {
    id: "gc-internals",
    title: "Garbage Collection Strategy",
    content: "JVM uses **Mark and Sweep** algorithm primarily. It divides memory into **Young Generation** (Eden, S0, S1) and **Old Generation**. Most objects die young!"
  },
  {
    id: "collections-overview",
    title: "Java Collections Framework",
    content: "- **List**: Ordered, duplicates allowed (ArrayList, LinkedList).\n- **Set**: Unordered, NO duplicates (HashSet, TreeSet).\n- **Map**: Key-Value pairs (HashMap, TreeMap).\n- **Queue**: FIFO logic (PriorityQueue)."
  },
  {
    id: "string-vs-builder",
    title: "String vs StringBuilder vs StringBuffer",
    content: "| Class | Mutable? | Thread-safe? |\n| :--- | :---: | :---: |\n| **String** | No | Yes (Immutable) |\n| **StringBuilder** | Yes | No (Fast) |\n| **StringBuffer** | Yes | Yes (Synchronized) |"
  },
  {
    id: "serialization-java",
    title: "Object Serialization",
    content: "The process of converting an object into a byte stream. To make a class serializable, it must implement the **Serializable** marker interface."
  },
  {
    id: "functional-interfaces",
    title: "Lambda & Functional Interfaces",
    content: "Introduced in Java 8. A functional interface has exactly one abstract method (e.g., `Runnable`, `Callable`). It allows using **Lambda Expressions** code as data."
  },
  {
    id: "static-vs-instance",
    title: "Static vs Instance Members",
    content: "- **Static**: Initialized once; accessed via `ClassName.variable`.\n- **Instance**: Initialized per object; accessed via `object.variable`.\n*Note: Static methods cannot access instance variables directly.*"
  },
  {
    id: "composition-aggregation-diff",
    title: "Composition vs Aggregation",
    content: "- **Composition (Strong)**: Child depends on Parent (e.g., Human and Heart).\n- **Aggregation (Weak)**: Optional relationship (e.g., Car and Driver)."
  },
  {
    id: "final-uses",
    title: "The 3 Uses of 'final'",
    content: "1. **final variable**: Value cannot be changed (Constant).\n2. **final method**: Cannot be overridden.\n3. **final class**: Cannot be inherited."
  }
];
