export const questions = [
  {
    id: 1,
    text: "What is the size of 'int' data type in C?",
    options: [
      { id: "A", text: "2 Bytes" },
      { id: "B", text: "4 Bytes" },
      { id: "C", text: "Depends on the compiler/architecture" },
      { id: "D", text: "8 Bytes" }
    ],
    answer: "C",
    explanation: "While typically 4 bytes on 32/64-bit systems, the C standard only guarantees that int is at least 16 bits (2 bytes)."
  },
  {
    id: 2,
    text: "Which of the following is used to deallocate memory in C++?",
    options: [
      { id: "A", text: "free()" },
      { id: "B", text: "delete" },
      { id: "C", text: "remove()" },
      { id: "D", text: "Both A and B" }
    ],
    answer: "D",
    explanation: "C++ uses 'delete' for objects allocated with 'new', but can also use 'free()' for memory allocated with 'malloc()'."
  },
  {
    id: 3,
    text: "What is a 'Dangling Pointer'?",
    options: [
      { id: "A", text: "A pointer pointing to a null value" },
      { id: "B", text: "A pointer pointing to a memory location that has been deleted" },
      { id: "C", text: "A pointer that has not been initialized" },
      { id: "D", text: "A pointer that points to another pointer" }
    ],
    answer: "B",
    explanation: "A dangling pointer occurs when the object it points to is deallocated without modifying the pointer to null."
  },
  {
    id: 4,
    text: "Which storage class has the longest lifetime in C?",
    options: [
      { id: "A", text: "auto" },
      { id: "B", text: "register" },
      { id: "C", text: "static" },
      { id: "D", text: "extern" }
    ],
    answer: "C",
    explanation: "Both static and extern variables persist for the entire duration of the program, but 'static' limits scope within a file/block."
  },
  {
    id: 5,
    text: "What is 'Function Overloading' in C++?",
    options: [
      { id: "A", text: "Defining multiple functions with different names but same tasks" },
      { id: "B", text: "Defining multiple functions with the same name but different parameters" },
      { id: "C", text: "Calling a function too many times" },
      { id: "D", text: "Using a function to call another function" }
    ],
    answer: "B",
    explanation: "Function overloading allows multiple functions to have the same name as long as their signatures (arguments) differ."
  },
  {
    id: 6,
    text: "What is the purpose of the 'virtual' keyword in C++?",
    options: [
      { id: "A", text: "To make a function private" },
      { id: "B", text: "To allow a function to be overridden in a derived class (Runtime Polymorphism)" },
      { id: "C", text: "To speed up function execution" },
      { id: "D", text: "To create a global function" }
    ],
    answer: "B",
    explanation: "Virtual functions ensure that the correct function is called for an object, regardless of the type of reference/pointer used."
  },
  {
    id: 7,
    text: "In C, what does 'const int *p' represent?",
    options: [
      { id: "A", text: "A constant pointer to an integer" },
      { id: "B", text: "A pointer to a constant integer" },
      { id: "C", text: "A constant pointer to a constant integer" },
      { id: "D", text: "An array of integers" }
    ],
    answer: "B",
    explanation: "The value being pointed to is constant, but the pointer 'p' itself can be changed to point elsewhere."
  },
  {
    id: 8,
    text: "Which operator cannot be overloaded in C++?",
    options: [
      { id: "A", text: "+" },
      { id: "B", text: "==" },
      { id: "C", text: ":: (Scope Resolution)" },
      { id: "D", text: "<<" }
    ],
    answer: "C",
    explanation: "Operators like ::, . (dot), .* (member pointer), and ?: (ternary) cannot be overloaded in C++."
  },
  {
    id: 9,
    text: "What is a 'Friend Function' in C++?",
    options: [
      { id: "A", text: "A function that is only used by friends" },
      { id: "B", text: "A non-member function that has access to the private and protected members of a class" },
      { id: "C", text: "A function that is highly optimized" },
      { id: "D", text: "A function defined inside a namespace" }
    ],
    answer: "B",
    explanation: "By declaring a function as a 'friend' inside a class, you grant it access to that class's private data."
  },
  {
    id: 10,
    text: "What is the difference between 'malloc()' and 'calloc()'?",
    options: [
      { id: "A", text: "malloc() initializes memory to zero; calloc() does not" },
      { id: "B", text: "calloc() initializes memory to zero; malloc() leaves it with garbage values" },
      { id: "C", text: "malloc() is for C++; calloc() is for C" },
      { id: "D", text: "There is no difference" }
    ],
    answer: "B",
    explanation: "calloc (contiguous allocation) zeros out the allocated block, whereas malloc (memory allocation) does not."
  },
  {
    id: 11,
    text: "What is a 'Pure Virtual Function'?",
    options: [
      { id: "A", text: "A function with no name" },
      { id: "B", text: "A virtual function assigned to 0 (e.g., virtual void solve() = 0;)" },
      { id: "C", text: "A function that only uses pointers" },
      { id: "D", text: "A function that cannot be called" }
    ],
    answer: "B",
    explanation: "Classes containing at least one pure virtual function are called Abstract Classes and cannot be instantiated."
  },
  {
    id: 12,
    text: "Which C++ feature allows a class to inherit from multiple classes?",
    options: [
      { id: "A", text: "Multilevel Inheritance" },
      { id: "B", text: "Multiple Inheritance" },
      { id: "C", text: "Hybrid Inheritance" },
      { id: "D", text: "Hierarchical Inheritance" }
    ],
    answer: "B",
    explanation: "Multiple inheritance is when a single derived class pulls features from more than one base class."
  },
  {
    id: 13,
    text: "What is the 'Rule of Three' in C++ (pre-C++11)?",
    options: [
      { id: "A", text: "Write 3 lines of code per function" },
      { id: "B", text: "If you define a Destructor, you should likely define a Copy Constructor and Copy Assignment Operator" },
      { id: "C", text: "Use 3 classes per project" },
      { id: "D", text: "Avoid using more than 3 pointers" }
    ],
    answer: "B",
    explanation: "This rule ensures that classes managing resources (like memory) do so safely during copying and destruction."
  },
  {
    id: 14,
    text: "What is an 'Inline Function'?",
    options: [
      { id: "A", text: "A function that is only one line long" },
      { id: "B", text: "A request to the compiler to replace function calls with the actual function code" },
      { id: "C", text: "A function defined inside a header file" },
      { id: "D", text: "A function that runs in parallel" }
    ],
    answer: "B",
    explanation: "Inline functions can reduce the overhead of function calls, especially for small, frequently used functions."
  },
  {
    id: 15,
    text: "What does the 'volatile' keyword signify in C?",
    options: [
      { id: "A", text: "The variable is extremely fast" },
      { id: "B", text: "The variable's value can change unexpectedly (e.g., via hardware or another thread)" },
      { id: "C", text: "The variable is deleted after use" },
      { id: "D", text: "The variable is read-only" }
    ],
    answer: "B",
    explanation: "It prevents the compiler from optimizing out reads/writes to a variable that might be modified externally."
  },
  {
    id: 16,
    text: "What is 'Smart Pointer' introduced in C++11?",
    options: [
      { id: "A", text: "A pointer that can think" },
      { id: "B", text: "A wrapper class that manages lifetime of pointers using RAII (e.g., unique_ptr)" },
      { id: "C", text: "A pointer that uses less memory" },
      { id: "D", text: "A pointer that cannot be null" }
    ],
    answer: "B",
    explanation: "Smart pointers like unique_ptr, shared_ptr, and weak_ptr help prevent memory leaks by automatically deleting objects."
  },
  {
    id: 17,
    text: "Which header file is used for Input/Output in C++?",
    options: [
      { id: "A", text: "<stdio.h>" },
      { id: "B", text: "<iostream>" },
      { id: "C", text: "<conio.h>" },
      { id: "D", text: "<input.h>" }
    ],
    answer: "B",
    explanation: "<iostream> provides standard streams like cin, cout, cerr, and clog."
  },
  {
    id: 18,
    text: "What is the output of 'sizeof(char)' in C?",
    options: [
      { id: "A", text: "1 Byte" },
      { id: "B", text: "2 Bytes" },
      { id: "C", text: "4 Bytes" },
      { id: "D", text: "Depends on OS" }
    ],
    answer: "A",
    explanation: "By definition, the size of a 'char' in C is exactly 1 byte."
  },
  {
    id: 19,
    text: "What is 'Late Binding'?",
    options: [
      { id: "A", text: "Connecting to a database slowly" },
      { id: "B", text: "Resolving function calls at runtime (Dynamic Dispatch)" },
      { id: "C", text: "Writing code late at night" },
      { id: "D", text: "Using global variables" }
    ],
    answer: "B",
    explanation: "Late binding is the mechanism underlying virtual functions and polymorphism in C++."
  },
  {
    id: 20,
    text: "What is a 'Namespace' in C++?",
    options: [
      { id: "A", text: "A place to store files" },
      { id: "B", text: "A declarative region that provides a scope to identifiers (names of types, functions, variables, etc) to prevent name collisions" },
      { id: "C", text: "A type of class" },
      { id: "D", text: "A way to comment code" }
    ],
    answer: "B",
    explanation: "The 'std' namespace is the most common example, containing all standard library components."
  },
  {
    id: 21,
    text: "What is the difference between a 'Struct' and a 'Union' in C?",
    options: [
      { id: "A", text: "Structs are for integers, Unions are for floats" },
      { id: "B", text: "Structs allocate separate memory for each member; Unions share a single memory location for all members" },
      { id: "C", text: "Unions are used in C++ only" },
      { id: "D", text: "There is no difference" }
    ],
    answer: "B",
    explanation: "A Union's size is equal to its largest member, whereas a Struct's size is the sum of its members (plus padding)."
  },
  {
    id: 22,
    text: "What is 'Pointer Arithmetic'?",
    options: [
      { id: "A", text: "Adding two pointers together" },
      { id: "B", text: "Performing arithmetic on addresses based on the size of the data type (e.g., p++ moves to the next element)" },
      { id: "C", text: "Multiplying a pointer by a constant" },
      { id: "D", text: "Using pointers to solve math equations" }
    ],
    answer: "B",
    explanation: "In C/C++, incrementing a pointer moves it by `sizeof(type)` bytes, not necessarily 1 byte."
  },
  {
    id: 23,
    text: "Which function is used to compare two strings in C?",
    options: [
      { id: "A", text: "compare()" },
      { id: "B", text: "strcmp()" },
      { id: "C", text: "str_cmp()" },
      { id: "D", text: "==" }
    ],
    answer: "B",
    explanation: "In C, you cannot use '==' to compare strings (as it compares addresses); you must use `strcmp` from `<string.h>`."
  },
  {
    id: 24,
    text: "What is the result of 'void pointer' (`void *`) in C?",
    options: [
      { id: "A", text: "A pointer that points to nothing" },
      { id: "B", text: "A generic pointer that can hold the address of any data type" },
      { id: "C", text: "A pointer that is invalid" },
      { id: "D", text: "An integer pointer" }
    ],
    answer: "B",
    explanation: "Void pointers must be typecast before they can be dereferenced."
  },
  {
    id: 25,
    text: "What are the four phases of C compilation?",
    options: [
      { id: "A", text: "Writing, Saving, Running, Deleting" },
      { id: "B", text: "Preprocessing, Compilation, Assembly, Linking" },
      { id: "C", text: "Debugging, Testing, Deployment, Maintenance" },
      { id: "D", text: "Input, Process, Output, Storage" }
    ],
    answer: "B",
    explanation: "The preprocessor handles `#` directives, the compiler converts to assembly, the assembler to object code, and the linker produces the final executable."
  },
  {
    id: 26,
    text: "What is 'Recursion' in C?",
    options: [
      { id: "A", text: "A way to repeat code using loops" },
      { id: "B", text: "A process where a function calls itself" },
      { id: "C", text: "A mathematical error" },
      { id: "D", text: "A type of data structure" }
    ],
    answer: "B",
    explanation: "Recursion requires a base case to prevent infinite loops and stack overflow."
  },
  {
    id: 27,
    text: "Which of these is a correct bitwise AND operator in C?",
    options: [
      { id: "A", text: "&&" },
      { id: "B", text: "&" },
      { id: "C", text: "|" },
      { id: "D", text: "^" }
    ],
    answer: "B",
    explanation: "'&' is bitwise AND, while '&&' is logical AND."
  },
  {
    id: 28,
    text: "What is 'Method Overriding' in C++?",
    options: [
      { id: "A", text: "Same as function overloading" },
      { id: "B", text: "Redefining a base class function in a derived class with the same signature" },
      { id: "C", text: "Changing the return type of a function" },
      { id: "D", text: "Deleting a function in a child class" }
    ],
    answer: "B",
    explanation: "Overriding is used to provide specific implementations of virtual functions in child classes."
  },
  {
    id: 29,
    text: "What is the purpose of '#pragma once'?",
    options: [
      { id: "A", text: "To speed up the program" },
      { id: "B", text: "To ensure a header file is included only once during compilation (Header Guard)" },
      { id: "C", text: "To define a constant" },
      { id: "D", text: "To enable multicore processing" }
    ],
    answer: "B",
    explanation: "It is a non-standard but widely supported alternative to traditional `#ifndef` header guards."
  },
  {
    id: 30,
    text: "What is 'Type Casting' in C?",
    options: [
      { id: "A", text: "A way to print variables" },
      { id: "B", text: "Converting a variable from one data type to another" },
      { id: "C", text: "Deleting a variable" },
      { id: "D", text: "Renaming a variable" }
    ],
    answer: "B",
    explanation: "Example: `(float)total/count` converts an integer division to a floating-point result."
  }
];

export const theory = [
  {
    id: "c-intro",
    title: "C vs C++: Key Differences",
    content: "| Feature | C | C++ |\n| :--- | :--- | :--- |\n| **Paradigm** | Procedural | Multi-paradigm (OOP + Procedural) |\n| **Memory** | malloc/free | new/delete |\n| **Polymorphism** | No | Yes (Overloading/Virtual) |\n| **Exceptions** | Error codes | try/catch |\n| **Security** | Low | High (Encapsulation) |"
  },
  {
    id: "pointers-basics",
    title: "Understanding Pointers",
    content: "A pointer is a variable that stores the memory address of another variable.\n- `int *p;` declares a pointer.\n- `&x` gets the address of x.\n- `*p` dereferences (accesses value at) the address."
  },
  {
    id: "oops-concepts-cpp",
    title: "Core OOP Pillars in C++",
    content: "1. **Encapsulation**: Binding data and functions together into a class.\n2. **Abstraction**: Hiding implementation details and showing only essentials.\n3. **Inheritance**: Creating new classes from existing ones.\n4. **Polymorphism**: Ability to take more than one form (Function/Operator overloading)."
  },
  {
    id: "memory-mgmt",
    title: "Memory Segments in C/C++",
    content: "- **Stack**: Automatic local variables (LIFO).\n- **Heap**: Dynamic memory (manually managed via malloc/new).\n- **Data Segment**: Global and static variables.\n- **Code/Text Segment**: The actual executable instructions."
  },
  {
    id: "storage-classes",
    title: "C Storage Classes",
    content: "- **auto**: Default for local variables.\n- **register**: Hint to store in CPU register for speed.\n- **static**: Retains value across function calls; limits scope.\n- **extern**: References a variable defined in another file."
  },
  {
    id: "constructors-destructors",
    title: "Constructors & Destructors",
    content: "- **Constructor**: Special member function that initializes objects. No return type.\n- **Destructor**: Called when an object goes out of scope. cleans up resources (Prefixed with `~`)."
  },
  {
    id: "virtual-functions-deep",
    title: "Virtual Functions & VTABLE",
    content: "Virtual functions enable **Late Binding**. C++ uses a **VTABLE** (Virtual Table) for each class to keep track of the addresses of virtual functions. Every object contains a hidden pointer (**VPTR**) to this table."
  },
  {
    id: "cpp11-features",
    title: "Modern C++ (C++11/14+) Features",
    content: "- **auto keyword**: Type inference.\n- **Lambda Expressions**: Anonymous functions.\n- **Smart Pointers**: Better memory management.\n- **Range-based for loops**: `for(auto x : vec)`.\n- **nullptr**: Type-safe null pointer literal."
  },
  {
    id: "templates-generic",
    title: "Templates & Generics",
    content: "Templates allow you to write generic code that works with any data type. \n```cpp\ntemplate <typename T>\nT add(T a, T b) { return a + b; }\n```"
  },
  {
    id: "file-io-cpp",
    title: "File I/O Streams",
    content: "- **ifstream**: Read from files.\n- **ofstream**: Write to files.\n- **fstream**: Common for both reading and writing."
  },
  {
    id: "stl-overview",
    title: "Standard Template Library (STL)",
    content: "The STL consists of:\n1. **Containers**: vector, list, map, set.\n2. **Algorithms**: sort, search, find.\n3. **Iterators**: Objects that act as pointers to traverse containers."
  },
  {
    id: "macros-vs-inline",
    title: "Macros vs Inline Functions",
    content: "- **Macros**: Preprocessor directive (`#define`). No type checking. Can lead to side effects.\n- **Inline**: Compiler hint. Provides type checking and debugging support. Better for modern C++."
  },
  {
    id: "compilation-process-deep",
    title: "The C Compilation Pipeline",
    content: "1. **Preprocessing**: Resolves `#include`, `#define`, and removes comments.\n2. **Compilation**: Translates C code to Assembly language.\n3. **Assembly**: Translates Assembly to Machine Code (Object file: `.obj` or `.o`).\n4. **Linking**: Combines object files and libraries into a single **Executable**."
  },
  {
    id: "recursion-logic",
    title: "Mastering Recursion",
    content: "Recursion depends on two main things:\n1. **Base Case**: The condition where the function stops calling itself.\n2. **Recursive Step**: The logic that reduces the problem towards the base case.\n*Warning: Forgetting the base case leads to a **Stack Overflow Error**.*"
  },
  {
    id: "bitwise-basics",
    title: "Bitwise Operations",
    content: "| Operator | Name | Logic |\n| :--- | :--- | :--- |\n| **&** | AND | 1 if both bits are 1 |\n| **|** | OR | 1 if either bit is 1 |\n| **^** | XOR | 1 if bits are different |\n| **~** | NOT | Inverts all bits |\n| **<<** | Shift Left | Multiplies by 2 |\n| **>>** | Shift Right | Divides by 2 |"
  },
  {
    id: "strings-c",
    title: "Strings in C vs C++",
    content: "- **C-Strings**: Character arrays terminated by a null character `\\0`. Requires `string.h` functions.\n- **C++ Strings**: `std::string` class objects. Much safer and provides built-in methods like `.length()` and `.append()`."
  },
  {
    id: "unions-theory",
    title: "Structs vs Unions (Memory)",
    content: "A **struct** allocates enough memory to hold all its members individually. \nA **union** is a memory-saving device that allows you to store different data types in the *same* location. Only one member can be used at a time."
  },
  {
    id: "constant-qualifiers",
    title: "Const Qualifiers",
    content: "- `const int *p`: Pointer to constant (Value can't change).\n- `int * const p`: Constant pointer (Address can't change).\n- `const int * const p`: Both are permanent."
  },
  {
    id: "file-handling-c",
    title: "File Handling in C",
    content: "Uses a `FILE` pointer and predefined functions:\n- `fopen()`: Open file.\n- `fprintf()` / `fscanf()`: Read/Write formatted.\n- `fclose()`: Close file stream."
  },
  {
    id: "exception-handling-cpp",
    title: "Exception Handling (C++)",
    content: "C does not have built-in exception handling. C++ provides:\n- **try**: Block where code is tested.\n- **throw**: Sends the error signal.\n- **catch**: Block where error is handled."
  }
];
