export const questions = [
  {
    id: 1,
    text: "Is Python an Interpreted or Compiled language?",
    options: [
      { id: "A", text: "Purely Compiled" },
      { id: "B", text: "Purely Interpreted" },
      { id: "C", text: "Both (Compiled to bytecode, then interpreted)" },
      { id: "D", text: "Neither" }
    ],
    answer: "C",
    explanation: "Python code is first compiled into '.pyc' bytecode, which is then executed by the Python Virtual Machine (PVM)."
  },
  {
    id: 2,
    text: "Which of the following is an 'Immutable' data type in Python?",
    options: [
      { id: "A", text: "List" },
      { id: "B", text: "Dictionary" },
      { id: "C", text: "Tuple" },
      { id: "D", text: "Set" }
    ],
    answer: "C",
    explanation: "Tuples, Strings, and Integers are immutable. Lists, Dicts, and Sets are mutable."
  },
  {
    id: 3,
    text: "What is the purpose of 'PEP 8'?",
    options: [
      { id: "A", text: "To speed up Python execution" },
      { id: "B", text: "A style guide for Python code" },
      { id: "C", text: "A library for data science" },
      { id: "D", text: "A tool for fixing bugs" }
    ],
    answer: "B",
    explanation: "PEP 8 provides guidelines on how to format Python code for better readability."
  },
  {
    id: 4,
    text: "What does 'List Comprehension' do?",
    options: [
      { id: "A", text: "Deletes a list" },
      { id: "B", text: "Provides a concise way to create lists based on existing lists" },
      { id: "C", text: "Sorts a list alphabetically" },
      { id: "D", text: "Merges two lists" }
    ],
    answer: "B",
    explanation: "Example: `[x**2 for x in range(10)]` creates a list of squares."
  },
  {
    id: 5,
    text: "What is 'init' in Python?",
    options: [
      { id: "A", text: "A constructor method for classes" },
      { id: "B", text: "The main function of a program" },
      { id: "C", text: "A way to import a library" },
      { id: "D", text: "A data type" }
    ],
    answer: "A",
    explanation: "The `__init__` method is called when an object is created from a class, used to initialize attributes."
  },
  {
    id: 6,
    text: "What is the result of '3 * 'abc'' in Python?",
    options: [
      { id: "A", text: "Error" },
      { id: "B", text: "abcabcabc" },
      { id: "C", text: "3abc" },
      { id: "D", text: "abc 3" }
    ],
    answer: "B",
    explanation: "The * operator with a string and an integer performs string repetition."
  },
  {
    id: 7,
    text: "What is the 'Global Interpreter Lock' (GIL)?",
    options: [
      { id: "A", text: "A way to lock your computer" },
      { id: "B", text: "A mutex that allows only one thread to hold control of the Python interpreter at once" },
      { id: "C", text: "A security feature for web apps" },
      { id: "D", text: "A type of python library" }
    ],
    answer: "B",
    explanation: "The GIL can be a bottleneck in multi-threaded CPU-bound programs."
  },
  {
    id: 8,
    text: "What does the 'yield' keyword do?",
    options: [
      { id: "A", text: "Stops a loop" },
      { id: "B", text: "Returns a value and pauses the function (Generator)" },
      { id: "C", text: "Waits for user input" },
      { id: "D", text: "Executes a system command" }
    ],
    answer: "B",
    explanation: "Functions using `yield` return a generator object instead of a single value."
  },
  {
    id: 9,
    text: "What is a 'Decorator' in Python?",
    options: [
      { id: "A", text: "A GUI theme" },
      { id: "B", text: "A function that takes another function and extends its behavior without modifying it" },
      { id: "C", text: "A type of comment" },
      { id: "D", text: "A way to color the console output" }
    ],
    answer: "B",
    explanation: "Decorators are often used for logging, auth, or timing functions using the @ syntax."
  },
  {
    id: 10,
    text: "Which of the following is used to handle exceptions in Python?",
    options: [
      { id: "A", text: "try-catch" },
      { id: "B", text: "try-except" },
      { id: "C", text: "do-while" },
      { id: "D", text: "error-handle" }
    ],
    answer: "B",
    explanation: "Python uses `try`, `except`, `else`, and `finally` blocks for error management."
  },
  {
    id: 11,
    text: "What is 'Duck Typing'?",
    options: [
      { id: "A", text: "Coding while eating duck" },
      { id: "B", text: "Value types are checked at runtime; if it walks like a duck and quacks like a duck, it is a duck" },
      { id: "C", text: "A type of inheritance" },
      { id: "D", text: "Using images in code" }
    ],
    answer: "B",
    explanation: "In Python, you don't check the type; you check for the presence of methods/attributes."
  },
  {
    id: 12,
    text: "What is 'Pickling' in Python?",
    options: [
      { id: "A", text: "Adding salt to your code" },
      { id: "B", text: "The process of serializing a Python object structure into a byte stream" },
      { id: "C", text: "Cleaning the memory" },
      { id: "D", text: "Compiling Python to C++" }
    ],
    answer: "B",
    explanation: "The `pickle` module is used for saving and loading Python objects."
  },
  {
    id: 13,
    text: "What is the difference between '/' and '//' operators?",
    options: [
      { id: "A", text: "No difference" },
      { id: "B", text: "/ is float division, // is floor (integer) division" },
      { id: "C", text: "// is a comment" },
      { id: "D", text: "/ is for integers only" }
    ],
    answer: "B",
    explanation: "For example, 5 / 2 = 2.5 and 5 // 2 = 2."
  },
  {
    id: 14,
    text: "How do you define a function in Python?",
    options: [
      { id: "A", text: "func myFunc():" },
      { id: "B", text: "def myFunc():" },
      { id: "C", text: "function myFunc():" },
      { id: "D", text: "void myFunc():" }
    ],
    answer: "B",
    explanation: "The `def` keyword is used to define functions."
  },
  {
    id: 15,
    text: "What is 'Self' in Python classes?",
    options: [
      { id: "A", text: "A keyword that refers to the class name" },
      { id: "B", text: "A reference to the current instance of the class" },
      { id: "C", text: "The name of the first variable" },
      { id: "D", text: "A global variable" }
    ],
    answer: "B",
    explanation: "It is used to access variables that belong to the class."
  },
  {
    id: 16,
    text: "What is a 'Lambda' function?",
    options: [
      { id: "A", text: "A complex mathematical function" },
      { id: "B", text: "An anonymous, small, one-line function" },
      { id: "C", text: "A function that never ends" },
      { id: "D", text: "A function stored in a cloud" }
    ],
    answer: "B",
    explanation: "Example: `lambda x, y: x + y`."
  },
  {
    id: 17,
    text: "Which of the following is NOT a built-in Python data structure?",
    options: [
      { id: "A", text: "Dictionary" },
      { id: "B", text: "Linked List" },
      { id: "C", text: "Set" },
      { id: "D", text: "Tuple" }
    ],
    answer: "B",
    explanation: "Linked Lists are not built-in; you use Lists (which are dynamic arrays) or implement them yourself."
  },
  {
    id: 18,
    text: "What does `is` operator compare?",
    options: [
      { id: "A", text: "Values" },
      { id: "B", text: "Identity (Memory Address/Object reference)" },
      { id: "C", text: "Data types" },
      { id: "D", text: "Variable names" }
    ],
    answer: "B",
    explanation: "Use `==` for value equality and `is` for identity equality."
  },
  {
    id: 19,
    text: "What is 'Scope' in Python?",
    options: [
      { id: "A", text: "The visibility of a variable" },
      { id: "B", text: "The size of a variable" },
      { id: "C", text: "The name of a variable" },
      { id: "D", text: "The data type" }
    ],
    answer: "A",
    explanation: "Python follows the LEGB rule (Local, Enclosing, Global, Built-in)."
  },
  {
    id: 20,
    text: "What is the purpose of `__name__ == '__main__'`?",
    options: [
      { id: "A", text: "To define a main class" },
      { id: "B", text: "To ensure code is only run when the script is executed directly, not when imported" },
      { id: "C", text: "To name the file" },
      { id: "D", text: "To speed up imports" }
    ],
    answer: "B",
    explanation: "It's a common pattern to separate runnable code from library code."
  },
  {
    id: 21,
    text: "How do you pass a variable number of arguments to a function?",
    options: [
      { id: "A", text: "Using *args and **kwargs" },
      { id: "B", text: "Using an array" },
      { id: "C", text: "Using a dictionary only" },
      { id: "D", text: "Python doesn't support this" }
    ],
    answer: "A",
    explanation: "*args is for non-keyworded variable length arguments, and **kwargs is for keyworded variable length arguments."
  },
  {
    id: 22,
    text: "What is 'Slicing' in Python?",
    options: [
      { id: "A", text: "Cutting a string into pieces" },
      { id: "B", text: "A mechanism to select a range of items from sequence types like list, tuple, or string" },
      { id: "C", text: "Deleting items from a list" },
      { id: "D", text: "A type of loop" }
    ],
    answer: "B",
    explanation: "Syntax: `sequence[start:stop:step]`."
  },
  {
    id: 23,
    text: "What is the result of `type(None)`?",
    options: [
      { id: "A", text: "None" },
      { id: "B", text: "NoneType" },
      { id: "C", text: "void" },
      { id: "D", text: "null" }
    ],
    answer: "B",
    explanation: "None is an object of its own class, which is NoneType."
  },
  {
    id: 24,
    text: "What is 'Method Resolution Order' (MRO)?",
    options: [
      { id: "A", text: "The order in which methods are written" },
      { id: "B", text: "The order in which Python looks for a method in a hierarchy of classes" },
      { id: "C", text: "A way to sort methods alphabetically" },
      { id: "D", text: "The order of arguments in a method" }
    ],
    answer: "B",
    explanation: "Python uses the C3 Linearization algorithm to determine the MRO."
  },
  {
    id: 25,
    text: "What is the difference between `深拷贝` (deepcopy) and `浅拷贝` (copy)?",
    options: [
      { id: "A", text: "No difference" },
      { id: "B", text: "copy creates a new object but references inner objects; deepcopy creates a recursive copy of everything" },
      { id: "C", text: "deepcopy is only for lists" },
      { id: "D", text: "copy is faster" }
    ],
    answer: "B",
    explanation: "Use the `copy` module for these operations."
  },
  {
    id: 26,
    text: "What is the purpose of `pip`?",
    options: [
      { id: "A", text: "To play music" },
      { id: "B", text: "The package installer for Python" },
      { id: "C", text: "To compile Python code" },
      { id: "D", text: "A text editor" }
    ],
    answer: "B",
    explanation: "It allows you to install and manage additional libraries and packages not included in the standard library."
  },
  {
    id: 27,
    text: "What is a 'Closure' in Python?",
    options: [
      { id: "A", text: "Closing a file" },
      { id: "B", text: "A function object that remembers values in enclosing scopes even if they are not present in memory" },
      { id: "C", text: "The end of a program" },
      { id: "D", text: "A private method" }
    ],
    answer: "B",
    explanation: "Closures are useful for data hiding and creating function factories."
  },
  {
    id: 28,
    text: "What does `list.pop()` do?",
    options: [
      { id: "A", text: "Adds an element to the start" },
      { id: "B", text: "Removes and returns the last item from the list" },
      { id: "C", text: "Deletes the entire list" },
      { id: "D", text: "Duplicates the list" }
    ],
    answer: "B",
    explanation: "It defaults to the last index but can take an optional index argument."
  },
  {
    id: 29,
    text: "What is the 'Walrus Operator' (`:=`) introduced in Python 3.8?",
    options: [
      { id: "A", text: "A new way to write comments" },
      { id: "B", text: "Assignment Expression operator; assigns values to variables as part of a larger expression" },
      { id: "C", text: "A bitwise operator" },
      { id: "D", text: "A comparison operator" }
    ],
    answer: "B",
    explanation: "Example: `if (n := len(a)) > 10: print(f\"Too long ({n} elements)\")`."
  },
  {
    id: 30,
    text: "What is use of `with` statement?",
    options: [
      { id: "A", text: "To join strings" },
      { id: "B", text: "To simplify exception handling by encapsulating common preparation and cleanup tasks (Context Manager)" },
      { id: "C", text: "To loop through a list" },
      { id: "D", text: "To define a class" }
    ],
    answer: "B",
    explanation: "Commonly used for file operations: `with open('file.txt') as f:` automatically closes the file."
  }
];

export const theory = [
  {
    id: "python-philosophy",
    title: "The Zen of Python (PEP 20)",
    content: "- Beautiful is better than ugly.\n- Explicit is better than implicit.\n- Simple is better than complex.\n- Readability counts."
  },
  {
    id: "mutable-vs-immutable",
    title: "Mutability in Python",
    content: "| Type | Mutable? | Examples |\n| :--- | :---: | :--- |\n| **Numeric** | No | int, float, complex |\n| **String** | No | 'hello' |\n| **Tuple** | No | (1, 2) |\n| **List** | Yes | [1, 2] |\n| **Dict** | Yes | {'a': 1} |\n| **Set** | Yes | {1, 2} |"
  },
  {
    id: "pvm-architecture",
    title: "How Python Runs Code",
    content: "1. **Source Code** (.py file).\n2. **Bytecode** (.pyc file) via Compiler.\n3. **PVM** (Python Virtual Machine) - An interpreter that executes the bytecode."
  },
  {
    id: "list-comprehensions-theory",
    title: "Deep Dive: Comprehensions",
    content: "Comprehensions are more runtime efficient than `for` loops because they are optimized for the Python interpreter.\n- **List**: `[x for x in data]`\n- **Dict**: `{k: v for k, v in data}`\n- **Set**: `{x for x in data}`"
  },
  {
    id: "python-memory-mgmt",
    title: "Memory Management",
    content: "Python uses **Reference Counting** and a **Garbage Collector** to manage memory. It also uses a private heap for all its objects."
  },
  {
    id: "iterators-generators",
    title: "Iterators vs Generators",
    content: "- **Iterator**: An object that contains a countable number of values. Implements `__iter__` and `__next__`.\n- **Generator**: A simple way to create iterators using functions and `yield`. They are 'lazy' (evaluate on demand), saving memory."
  },
  {
    id: "special-methods",
    title: "Dunder (Double Under) Methods",
    content: "Also called 'magic methods', they allow your objects to interact with Python built-ins:\n- `__str__`: Used by `print()`.\n- `__len__`: Used by `len()`.\n- `__add__`: Used by `+` operator."
  },
  {
    id: "packaging-pypi",
    title: "Modules and Packages",
    content: "- **Module**: A single .py file.\n- **Package**: A folder containing `__init__.py` and other modules.\n- **PyPI**: The official package repository accessed via `pip`."
  },
  {
    id: "arg-passing",
    title: "Argument Passing (Call by Object)",
    content: "Python uses 'Call by Object Reference'. If you pass a mutable object, changes inside the function reflect outside. If immutable, it behaves like call by value."
  },
  {
    id: "virtual-environments",
    title: "Why Virtual Environments?",
    content: "Tools like `venv` or `conda` create isolated environments for different projects to avoid dependency conflicts (e.g., Project A needs Django 2.0, Project B needs Django 4.0)."
  },
  {
    id: "decorators-deep",
    title: "Mastering Decorators",
    content: "Decorators are a powerful tool to wrap a function with code that runs before and after. \n```python\ndef my_decorator(func):\n    def wrapper():\n        print(\"Before\")\n        func()\n        print(\"After\")\n    return wrapper\n```"
  },
  {
    id: "closures-python",
    title: "Understanding Closures",
    content: "A closure occurs when a nested function references a value in its enclosing scope. The value is 'carried' with the function even after the outer function finishes executing."
  },
  {
    id: "mro-c3",
    title: "MRO & C3 Linearization",
    content: "In multiple inheritance, Python uses **MRO** to decide which class's method to call. Use `MyClass.mro()` to see the order. It follows a depth-first, left-to-right approach while maintaining monotonicity."
  },
  {
    id: "args-kwargs-logic",
    title: "Flexible Arguments (*args, **kwargs)",
    content: "- `*args`: Receives arguments as a **Tuple**.\n- `**kwargs`: Receives arguments as a **Dictionary**."
  },
  {
    id: "python-typing",
    title: "Type Hinting",
    content: "Introduced in Python 3.5+. It doesn't enforce types at runtime but helps static analysis tools (like mypy) and IDEs.\n`def greet(name: str) -> str: ...`"
  },
  {
    id: "garbage-collection-python",
    title: "Automatic Memory Management",
    content: "Python uses **Reference Counting** as the primary GC mechanism. When an object's reference count drops to zero, it is deleted. It also has a cyclic garbage collector to handle reference cycles."
  },
  {
    id: "generator-expressions",
    title: "Generators vs List Comprehensions",
    content: "List comprehensions `[x for x in data]` create the whole list in memory. \nGenerator expressions `(x for x in data)` create items one by one. **Generators are much more memory efficient for large datasets.**"
  },
  {
    id: "slots-optimization",
    title: "Optimizing with __slots__",
    content: "By default, Python stores instance attributes in a dictionary (`__dict__`). Using `__slots__ = ['attr1', 'attr2']` tells Python not to use a dict, saving significant memory for small objects."
  },
  {
    id: "context-managers",
    title: "The 'With' Statement",
    content: "Any object that implements `__enter__` and `__exit__` methods can be used as a context manager. This ensures clean-up logic (like closing files or network sockets) is always executed."
  },
  {
    id: "threading-vs-multi",
    title: "Threading vs Multiprocessing",
    content: "- **Threading**: Good for I/O bound tasks. Limited by GIL for CPU tasks.\n- **Multiprocessing**: Good for CPU bound tasks. Spawns separate interpreters, bypassing the GIL."
  }
];
