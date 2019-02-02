module.exports = {
  root: true,
  globals: {
    // e.g "jquery": true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  /*
    "comma-dangle": "error", // require or disallow trailing commas (recommended)
    "no-cond-assign": "error", // disallow assignment operators in conditional expressions (recommended)
    "no-console": process.env.NODE_ENV === "development" ? "warn" : "error", // disallow the use of 'console` (recommended)
    "no-constant-condition": "error", // disallow constant expressions in conditions (recommended)
    "no-control-regex": "error", // disallow control characters in regular expressions (recommended)
    "no-debugger": "error", // disallow the use of 'debugger` (recommended)
    "no-dupe-args": "error", // disallow duplicate arguments in 'function` definitions (recommended)
    "no-dupe-keys": "error", // disallow duplicate keys in object literals (recommended)
    "no-duplicate-case": "error", // disallow duplicate case labels (recommended)
    "no-empty": "error", // disallow empty block statements (recommended)
    "no-empty-character-class": "error", // disallow empty character classes in regular expressions (recommended)
    "no-ex-assign": "error", // disallow reassigning exceptions in 'catch` clauses (recommended)
    "no-extra-boolean-cast": "error", // disallow unnecessary boolean casts (recommended)
    "no-extra-parens": "off", // disallow unnecessary parentheses
    "no-extra-semi": "error", // disallow unnecessary semicolons (recommended) (fixable)
    "no-func-assign": "error", // disallow reassigning 'function` declarations (recommended)
    "no-inner-declarations": "error", // disallow 'function` or `var` declarations in nested blocks (recommended)
    "no-invalid-regexp": "error", // disallow invalid regular expression strings in 'RegExp` constructors (recommended)
    "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments (recommended)
    "no-negated-in-lhs": "error", // disallow negating the left operand in 'in` expressions (recommended)
    "no-obj-calls": "error", // disallow calling global object properties as functions (recommended)
    "no-regex-spaces": "error", // disallow multiple spaces in regular expression literals (recommended)
    "no-sparse-arrays": "error", // disallow sparse arrays (recommended)
    "no-unexpected-multiline": "error", // disallow confusing multiline expressions (recommended)
    "no-unreachable": "error", // disallow unreachable code after 'return`, `throw`, `continue`, and `break` statements (recommended)
    "use-isnan": "error", // require calls to 'isNaN()` when checking for `NaN` (recommended)
    "valid-jsdoc": "off", // enforce valid JSDoc comments
    "valid-typeof": "error", // enforce comparing 'typeof` expressions against valid strings (recommended)
    "accessor-pairs": "off", // enforce getter and setter pairs in objects
    "array-callback-return": "off", // enforce 'return` statements in callbacks of array methods
    "block-scoped-var": "off", // enforce the use of variables within the scope they are defined
    complexity: ["off", 11], // enforce a maximum cyclomatic complexity allowed in a program
    "consistent-return": "off", // require 'return` statements to either always or never specify values
    curly: "off", // enforce consistent brace style for all control statements
    "default-case": "off", // require 'default` cases in `switch` statements
    "dot-location": "off", // enforce consistent newlines before and after dots
    "dot-notation": "off", // enforce dot notation whenever possible
    eqeqeq: "off", // require the use of '===` and `!==`
    "guard-for-in": "off", // require 'for-in` loops to include an `if` statement
    "no-alert": "off", // disallow the use of 'alert`, `confirm`, and `prompt`
    "no-caller": "off", // disallow the use of 'arguments.caller` or `arguments.callee`
    "no-case-declarations": "error", // disallow lexical declarations in case clauses (recommended)
    "no-div-regex": "off", // disallow division operators explicitly at the beginning of regular expressions
    "no-else-return": "off", // disallow 'else` blocks after `return` statements in `if` statements
    "no-empty-function": "off", // disallow empty functions
    "no-empty-pattern": "error", // disallow empty destructuring patterns (recommended)
    "no-eq-null": "off", // disallow 'null` comparisons without type-checking operators
    "no-eval": "off", // disallow the use of 'eval()`
    "no-extend-native": "off", // disallow extending native types
    "no-extra-bind": "off", // disallow unnecessary calls to '.bind()`
    "no-extra-label": "off", // disallow unnecessary labels
    "no-fallthrough": "error", // disallow fallthrough of 'case` statements (recommended)
    "no-floating-decimal": "off", // disallow leading or trailing decimal points in numeric literals
    "no-implicit-coercion": "off", // disallow shorthand type conversions
    "no-implicit-globals": "off", // disallow 'var` and named `function` declarations in the global scope
    "no-implied-eval": "off", // disallow the use of 'eval()`-like methods
    "no-invalid-this": "off", // disallow 'this` keywords outside of classes or class-like objects
    "no-iterator": "off", // disallow the use of the '__iterator__` property
    "no-labels": "off", // disallow labeled statements
    "no-lone-blocks": "off", // disallow unnecessary nested blocks
    "no-loop-func": "off", // disallow 'function` declarations and expressions inside loop statements
    "no-magic-numbers": "off", // disallow magic numbers
    "no-multi-spaces": "off", // disallow multiple spaces (fixable)
    "no-multi-str": "off", // disallow multiline strings
    "no-native-reassign": "off", // disallow reassigning native objects
    "no-new": "off", // disallow 'new` operators outside of assignments or comparisons
    "no-new-func": "off", // disallow 'new` operators with the `Function` object
    "no-new-wrappers": "off", // disallow 'new` operators with the `String`, `Number`, and `Boolean` objects
    "no-octal": "error", // disallow octal literals (recommended)
    "no-octal-escape": "off", // disallow octal escape sequences in string literals
    "no-param-reassign": "off", // disallow reassigning 'function` parameters
    "no-proto": "off", // disallow the use of the '__proto__` property
    "no-redeclare": "error", // disallow 'var` redeclaration (recommended)
    "no-return-assign": "off", // disallow assignment operators in 'return` statements
    "no-script-url": "off", // disallow 'javascript:` urls
    "no-self-assign": "error", // disallow assignments where both sides are exactly the same (recommended)
    "no-self-compare": "off", // disallow comparisons where both sides are exactly the same
    "no-sequences": "off", // disallow comma operators
    "no-throw-literal": "off", // disallow throwing literals as exceptions
    "no-unmodified-loop-condition": "off", // disallow unmodified loop conditions
    "no-unused-expressions": "off", // disallow unused expressions
    "no-unused-labels": "error", // disallow unused labels (recommended)
    "no-useless-call": "off", // disallow unnecessary calls to '.call()` and `.apply()`
    "no-useless-concat": "off", // disallow unnecessary concatenation of literals or template literals
    "no-useless-escape": "off", // disallow unnecessary escape characters
    "no-void": "off", // disallow 'void` operators
    "no-warning-comments": "off", // disallow specified warning terms in comments
    "no-with": "off", // disallow 'with` statements
    radix: "off", // enforce the consistent use of the radix argument when using 'parseInt()`
    "vars-on-top": "off", // require 'var` declarations be placed at the top of their containing scope
    "wrap-iife": "off", // require parentheses around immediate 'function` invocations
    yoda: "off", // require or disallow "Yoda" conditions
    strict: "off", // require or disallow strict mode directives
    "init-declarations": "off", // require or disallow initialization in 'var` declarations
    "no-catch-shadow": "off", // disallow 'catch` clause parameters from shadowing variables in the outer scope
    "no-delete-var": "error", // disallow deleting variables (recommended)
    "no-label-var": "off", // disallow labels that share a name with a variable
    "no-restricted-globals": "off", // disallow specified global variables
    "no-shadow": "off", // disallow 'var` declarations from shadowing variables in the outer scope
    "no-shadow-restricted-names": "off", // disallow identifiers from shadowing restricted names
    "no-undef": "error", // disallow the use of undeclared variables unless mentioned in 'global` comments (recommended)
    "no-undef-init": "off", // disallow initializing variables to 'undefined`
    "no-undefined": "off", // disallow the use of 'undefined` as an identifier
    "no-unused-vars": "error", // disallow unused variables (recommended)
    "no-use-before-define": "off", // disallow the use of variables before they are defined
    "callback-return": "off", // require 'return` statements after callbacks
    "global-require": "off", // require 'require()` calls to be placed at top-level module scope
    "handle-callback-err": "off", // require error handling in callbacks
    "no-mixed-requires": "off", // disallow 'require` calls to be mixed with regular `var` declarations
    "no-new-require": "off", // disallow 'new` operators with calls to `require`
    "no-path-concat": "off", // disallow string concatenation with '__dirname` and `__filename`
    "no-process-env": "off", // disallow the use of 'process.env`
    "no-process-exit": "off", // disallow the use of 'process.exit()`
    "no-restricted-modules": "off", // disallow specified modules when loaded by 'require`
    "no-sync": "off", // disallow synchronous methods
    "array-bracket-spacing": "off", // enforce consistent spacing inside array brackets (fixable)
    "block-spacing": "off", // enforce consistent spacing inside single-line blocks (fixable)
    "brace-style": "off", // enforce consistent brace style for blocks
    camelcase: "off", // enforce camelcase naming convention
    "comma-spacing": "off", // enforce consistent spacing before and after commas (fixable)
    "comma-style": "off", // enforce consistent comma style
    "computed-property-spacing": "off", // enforce consistent spacing inside computed property brackets (fixable)
    "consistent-this": "off", // enforce consistent naming when capturing the current execution context
    "eol-last": "off", // enforce at least one newline at the end of files (fixable)
    "func-names": "off", // enforce named 'function` expressions
    "func-style": "off", // enforce the consistent use of either 'function` declarations or expressions
    "id-blacklist": "off", // disallow specified identifiers
    "id-length": "off", // enforce minimum and maximum identifier lengths
    "id-match": "off", // require identifiers to match a specified regular expression
    indent: "off", // enforce consistent indentation (fixable)
    "jsx-quotes": "off", // enforce the consistent use of either double or single quotes in JSX attributes (fixable)
    "key-spacing": "off", // enforce consistent spacing between keys and values in object literal properties
    "keyword-spacing": "off", // enforce consistent spacing before and after keywords (fixable)
    "linebreak-style": "off", // enforce consistent linebreak style (fixable)
    "lines-around-comment": "off", // require empty lines around comments
    "max-depth": "off", // enforce a maximum depth that blocks can be nested
    "max-len": "off", // enforce a maximum line length
    "max-nested-callbacks": "off", // enforce a maximum depth that callbacks can be nested
    "max-params": "off", // enforce a maximum number of parameters in 'function` definitions
    "max-statements": "off", // enforce a maximum number of statements allowed in 'function` blocks
    "max-statements-per-line": "off", // enforce a maximum number of statements allowed per line
    "new-cap": "off", // require constructor 'function` names to begin with a capital letter
    "new-parens": "off", // require parentheses when invoking a constructor with no arguments
    "newline-after-var": "off", // require or disallow an empty line after 'var` declarations
    "newline-before-return": "off", // require an empty line before 'return` statements
    "newline-per-chained-call": "off", // require a newline after each call in a method chain
    "no-array-constructor": "off", // disallow 'Array` constructors
    "no-bitwise": "off", // disallow bitwise operators
    "no-continue": "off", // disallow 'continue` statements
    "no-inline-comments": "off", // disallow inline comments after code
    "no-lonely-if": "off", // disallow 'if` statements as the only statement in `else` blocks
    "no-mixed-spaces-and-tabs": "error", // disallow mixed spaces and tabs for indentation (recommended)
    "no-multiple-empty-lines": "off", // disallow multiple empty lines
    "no-negated-condition": "off", // disallow negated conditions
    "no-nested-ternary": "off", // disallow nested ternary expressions
    "no-new-object": "off", // disallow 'Object` constructors
    "no-plusplus": "off", // disallow the unary operators '++` and `--`
    "no-restricted-syntax": "off", // disallow specified syntax
    "no-spaced-func": "off", // disallow spacing between 'function` identifiers and their applications (fixable)
    "no-ternary": "off", // disallow ternary operators
    "no-trailing-spaces": "off", // disallow trailing whitespace at the end of lines (fixable)
    "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
    "no-unneeded-ternary": "off", // disallow ternary operators when simpler alternatives exist
    "no-whitespace-before-property": "off", // disallow whitespace before properties
    "object-curly-spacing": ["off", "never"], // enforce consistent spacing inside braces (fixable)
    "one-var": "off", // enforce variables to be declared either together or separately in functions
    "one-var-declaration-per-line": "off", // require or disallow newlines around 'var` declarations
    "operator-assignment": "off", // require or disallow assignment operator shorthand where possible
    "operator-linebreak": "off", // enforce consistent linebreak style for operators
    "padded-blocks": "off", // require or disallow padding within blocks
    "quote-props": "off", // require quotes around object literal property names
    quotes: "off", // enforce the consistent use of either backticks, double, or single quotes (fixable)
    "require-jsdoc": "off", // require JSDoc comments
    semi: "off", // require or disallow semicolons instead of ASI (fixable)
    "semi-spacing": "off", // enforce consistent spacing before and after semicolons (fixable)
    "sort-imports": "off", // enforce sorted import declarations within module
    "sort-vars": "off", // require variables within the same declaration block to be sorted
    "space-before-blocks": "off", // enforce consistent spacing before blocks (fixable)
    "space-before-function-paren": "off", // enforce consistent spacing before 'function` definition opening parenthesis (fixable)
    "space-in-parens": "off", // enforce consistent spacing inside parentheses (fixable)
    "space-infix-ops": "off", // require spacing around operators (fixable)
    "space-unary-ops": "off", // enforce consistent spacing before or after unary operators (fixable)
    "spaced-comment": "off", // enforce consistent spacing after the '//` or `/*` in a comment (fixable)
    "wrap-regex": "off", // require parenthesis around regex literals
    "arrow-body-style": "off", // require braces around arrow function bodies
    "arrow-parens": "off", // require parentheses around arrow function arguments
    "arrow-spacing": "off", // enforce consistent spacing before and after the arrow in arrow functions (fixable)
    "constructor-super": "error", // require 'super()` calls in constructors (recommended)
    "generator-star-spacing": "off", // enforce consistent spacing around '*` operators in generator functions (fixable)
    "no-class-assign": "error", // disallow reassigning class members (recommended)
    "no-confusing-arrow": "off", // disallow arrow functions where they could be confused with comparisons
    "no-const-assign": "error", // disallow reassigning 'const` variables (recommended)
    "no-dupe-class-members": "error", // disallow duplicate class members (recommended)
    "no-duplicate-imports": "off", // disallow duplicate module imports
    "no-new-symbol": "error", // disallow 'new` operators with the `Symbol` object (recommended)
    "no-restricted-imports": "off", // disallow specified modules when loaded by 'import`
    "no-this-before-super": "error", // disallow 'this`/`super` before calling `super()` in constructors (recommended)
    "no-useless-constructor": "off", // disallow unnecessary constructors
    "no-var": "off", // require 'let` or `const` instead of `var`
    "object-shorthand": "off", // require or disallow method and property shorthand syntax for object literals
    "prefer-arrow-callback": "off", // require arrow functions as callbacks
    "prefer-const": "off", // require 'const` declarations for variables that are never reassigned after declared
    "prefer-reflect": "off", // require 'Reflect` methods where applicable
    "prefer-rest-params": "off", // require rest parameters instead of 'arguments`
    "prefer-spread": "off", // require spread operators instead of '.apply()`
    "prefer-template": "off", // require template literals instead of string concatenation
    "require-yield": "off", // require generator functions to contain 'yield`
    "template-curly-spacing": "off", // require or disallow spacing around embedded expressions of template strings (fixable)
    "yield-star-spacing": "off", // require or disallow spacing around the '*` in `yield*` expressions (fixable)
    "generator-star": "off", // enforce consistent positioning of the '*` in generator functions (replaced by [generator-star-spacing](generator-star-spacing.md))
    "global-strict": "off", // require or disallow '"use strict"` in the global scope (replaced by [strict](strict.md))
    "no-arrow-condition": "off", // disallow arrow functions where conditions are expected (replaced by [no-confusing-arrow](no-confusing-arrow.md) and [no-constant-condition](no-constant-condition.md))
    "no-comma-dangle": "off", // disallow trailing commas in object literals (replaced by [comma-dangle](comma-dangle.md))
    "no-empty-class": "off", // disallow empty character classes in regular expressions (replaced by [no-empty-character-class](no-empty-character-class.md))
    "no-empty-label": "off", // disallow labels for anything other than loops and switches (replaced by [no-labels](no-labels.md))
    "no-extra-strict": "off", // disallow '"use strict";` when already in strict mode (replaced by [strict](strict.md))
    "no-reserved-keys": "off", // disallow the use of reserved words as object literal keys (replaced by [quote-props](quote-props.md))
    "no-space-before-semi": "off", // disallow spacing before semicolons (replaced by [semi-spacing](semi-spacing.md))
    "no-wrap-func": "off", // disallow parentheses around non-IIFE statements (replaced by [no-extra-parens](no-extra-parens.md))
    "space-after-function-name": "off", // enforce consistent spacing after 'function` names (replaced by [space-before-function-paren](space-before-function-paren.md))
    "space-after-keywords": "off", // enforce consistent spacing after specified keywords (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "space-before-function-parentheses": "off", // enforce consistent spacing before 'function` parentheses (replaced by [space-before-function-paren](space-before-function-paren.md))
    "space-before-keywords": "off", // enforce consistent spacing before specified keywords (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "space-in-brackets": "off", // enforce consistent spacing inside brackets (replaced by [object-curly-spacing](object-curly-spacing.md) and [array-bracket-spacing](array-bracket-spacing.md))
    "space-return-throw-case": "off", // require spacing after 'return`, `throw`, and `case` (fixable) (replaced by [keyword-spacing](keyword-spacing.md))
    "space-unary-word-ops": "off", // enforce consistent spacing before and after unary operators (replaced by [space-unary-ops](space-unary-ops.md))
    "spaced-line-comment": "off" // enforce consistent spacing after the '//` in line comments (replaced by [spaced-comment](spaced-comment.md))
  */
  },
  extends: ["plugin:prettier/recommended"],
  env: {
    browser: "false", // browser global variables.
    node: "true", // Node.js global variables and Node.js scoping.
    commonjs: "true", // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
    "shared-node-browser": "false", // Globals common to both Node and Browser.
    es6: "true", // enable all ECMAScript 6 features except for modules.
    worker: "false", // web workers global variables.
    amd: "false", // defines `require()` and `define()` as global variables as per the [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) spec.
    mocha: "true", // adds all of the Mocha testing global variables.
    jasmine: "true", // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    jest: "true", // Jest global variables.
    phantomjs: "true", // PhantomJS global variables.
    protractor: "false", // Protractor global variables.
    qunit: "false", // QUnit global variables.
    jquery: "false", // jQuery global variables.
    prototypejs: "false", // Prototype.js global variables.
    shelljs: "false", // ShellJS global variables.
    meteor: "false", // Meteor global variables.
    mongo: "true", // MongoDB global variables.
    applescript: "false", // AppleScript global variables.
    nashorn: "false", // Java 8 Nashorn global variables.
    serviceworker: "false", // Service Worker global variables.
    atomtest: "false", // Atom test helper globals.
    embertest: "false", // Ember test helper globals.
    webextensions: "false", // WebExtensions globals.
    greasemonkey: "false" // GreaseMonkey globals.
  }
};
