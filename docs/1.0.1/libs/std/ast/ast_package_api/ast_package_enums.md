
# 枚举

## enum DiagReportLevel
    
    __
    
    public enum DiagReportLevel {
        ERROR|
        WARNING
    }
    
功能：表示报错接口的信息等级，支持 `ERROR` 和 `WARNING` 两种等级。

### ERROR
    
    __
    
    ERROR
    
功能：构造一个表示 ERROR 的枚举实例。

### WARNING
    
    __
    
    WARNING
    
功能：构造一个表示 WARNING 的枚举实例。

### func level\(\)
    
    __
    
    public func level(): Int32
    
功能：返回枚举值对应的整型。

返回值：

  * [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 枚举值对应的整型。`ERROR` 返回 0，`WARNING` 返回 1。

## enum ImportKind
    
    __
    
    public enum ImportKind <: ToString {
        Single | Alias | All | Multi
    }
    
功能：表示导入语句的类型。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### Single
    
    __
    
    Single
    
功能：表示单导入，如 `import a.b`。

### Alias
    
    __
    
    Alias
    
功能：表示别名导入，如 `import a.b as c`。

### All
    
    __
    
    All
    
功能：表示全导入，如 `import a.b.*`。

### Multi
    
    __
    
    Multi
    
功能：表示多导入，如 `import a.{b, c, d}`。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将 [ImportKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-importkind) 类型转化为字符串类型表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [ImportKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-importkind) 转换后的字符串值。

## enum TokenKind
    
    __
    
    public enum TokenKind <: ToString {
        DOT|                      /*  "."           */
        COMMA|                    /*  ","           */
        LPAREN|                   /*  "("           */
        RPAREN|                   /*  ")"           */
        LSQUARE|                  /*  "["           */
        RSQUARE|                  /*  "]"           */
        LCURL|                    /*  "{"           */
        RCURL|                    /*  "}"           */
        EXP|                      /*  "**"          */
        MUL|                      /*  "*"           */
        MOD|                      /*  "%"           */
        DIV|                      /*  "/"           */
        ADD|                      /*  "+"           */
        SUB|                      /*  "-"           */
        INCR|                     /*  "++"          */
        DECR|                     /*  "--"          */
        AND|                      /*  "&&"          */
        OR|                       /*  "||"          */
        COALESCING|               /*  "??"          */
        PIPELINE|                 /*  "|>"          */
        COMPOSITION|              /*  "~>"          */
        NOT|                      /*  "!"           */
        BITAND|                   /*  "&"           */
        BITOR|                    /*  "|"           */
        BITXOR|                   /*  "^"           */
        BITNOT|                   /*  "~"           */
        LSHIFT|                   /*  "<<"          */
        RSHIFT|                   /*  ">>"          */
        COLON|                    /*  ":"           */
        SEMI|                     /*  ";"           */
        ASSIGN|                   /*  "="           */
        ADD_ASSIGN|               /*  "+="          */
        SUB_ASSIGN|               /*  "-="          */
        MUL_ASSIGN|               /*  "*="          */
        EXP_ASSIGN|               /*  "**="         */
        DIV_ASSIGN|               /*  "/="          */
        MOD_ASSIGN|               /*  "%="          */
        AND_ASSIGN|               /*  "&&="         */
        OR_ASSIGN|                /*  "||="         */
        BITAND_ASSIGN|            /*  "&="          */
        BITOR_ASSIGN|             /*  "|="          */
        BITXOR_ASSIGN|            /*  "^="          */
        LSHIFT_ASSIGN|            /*  "<<="         */
        RSHIFT_ASSIGN|            /*  ">>="         */
        ARROW|                    /*  "->"          */
        BACKARROW|                /*  "<-"          */
        DOUBLE_ARROW|             /*  "=>"          */
        RANGEOP|                  /*  ".."          */
        CLOSEDRANGEOP|            /*  "..="         */
        ELLIPSIS|                 /*  "..."         */
        HASH|                     /*  "#"           */
        AT|                       /*  "@"           */
        QUEST|                    /*  "?"           */
        LT|                       /*  "<"           */
        GT|                       /*  ">"           */
        LE|                       /*  "<="          */
        GE|                       /*  ">="          */
        IS|                       /*  "is"          */
        AS|                       /*  "as"          */
        NOTEQ|                    /*  "!="          */
        EQUAL|                    /*  "=="          */
        WILDCARD|                 /*  "_"           */
        INT8|                     /*  "Int8"        */
        INT16|                    /*  "Int16"       */
        INT32|                    /*  "Int32"       */
        INT64|                    /*  "Int64"       */
        INTNATIVE|                /*  "IntNative"   */
        UINT8|                    /*  "UInt8"       */
        UINT16|                   /*  "UInt16"      */
        UINT32|                   /*  "UInt32"      */
        UINT64|                   /*  "UInt64"      */
        UINTNATIVE|               /*  "UIntNative"  */
        FLOAT16|                  /*  "Float16"     */
        FLOAT32|                  /*  "Float32"     */
        FLOAT64|                  /*  "Float64"     */
        RUNE|                     /*  "Rune"        */
        BOOLEAN|                  /*  "Bool"        */
        NOTHING|                  /*  "Nothing"     */
        UNIT|                     /*  "Unit"        */
        STRUCT|                   /*  "struct"      */
        ENUM|                     /*  "enum"        */
        VARRAY|                   /*  "VArray"      */
        THISTYPE|                 /*  "This"        */
        PACKAGE|                  /*  "package"     */
        IMPORT|                   /*  "import"      */
        CLASS|                    /*  "class"       */
        INTERFACE|                /*  "interface"   */
        FUNC|                     /*  "func"        */
        MACRO|                    /*  "macro"       */
        QUOTE|                    /*  "quote"       */
        DOLLAR|                   /*  "$"           */
        LET|                      /*  "let"         */
        VAR|                      /*  "var"         */
        CONST|                    /*  "const"       */
        TYPE|                     /*  "type"        */
        INIT|                     /*  "init"        */
        THIS|                     /*  "this"        */
        SUPER|                    /*  "super"       */
        IF|                       /*  "if"          */
        ELSE|                     /*  "else"        */
        CASE|                     /*  "case"        */
        TRY|                      /*  "try"         */
        CATCH|                    /*  "catch"       */
        FINALLY|                  /*  "finally"     */
        FOR|                      /*  "for"         */
        DO|                       /*  "do"          */
        WHILE|                    /*  "while"       */
        THROW|                    /*  "throw"       */
        RETURN|                   /*  "return"      */
        CONTINUE|                 /*  "continue"    */
        BREAK|                    /*  "break"       */
        IN|                       /*  "in"          */
        NOT_IN|                   /*  "!in"         */
        MATCH|                    /*  "match"       */
        WHERE|                    /*  "where"       */
        EXTEND|                   /*  "extend"      */
        WITH|                     /*  "with"        */
        PROP|                     /*  "prop"        */
        STATIC|                   /*  "static"      */
        PUBLIC|                   /*  "public"      */
        PRIVATE|                  /*  "private"     */
        INTERNAL|                 /*  "internal"    */
        PROTECTED|                /*  "protected"   */
        OVERRIDE|                 /*  "override"    */
        REDEF|                    /*  "redef"       */
        ABSTRACT|                 /*  "abstract"    */
        SEALED|                   /*  "sealed"      */
        OPEN|                     /*  "open"        */
        FOREIGN|                  /*  "foreign"     */
        INOUT|                    /*  "inout"       */
        MUT|                      /*  "mut"         */
        UNSAFE|                   /*  "unsafe"      */
        OPERATOR|                 /*  "operator"    */
        SPAWN|                    /*  "spawn"       */
        SYNCHRONIZED|             /*  "synchronized" */
        UPPERBOUND|               /*  "<:"          */
        MAIN|                     /*  "main"        */
        IDENTIFIER|               /*  "x"           */
        PACKAGE_IDENTIFIER|       /*  e.g. "x-y"  */
        INTEGER_LITERAL|          /*  e.g. "1"      */
        RUNE_BYTE_LITERAL|        /*  e.g. "b'x'"   */
        FLOAT_LITERAL|            /*  e.g. "'1.0'"  */
        COMMENT|                  /*  e.g. "/*xx*/" */
        NL|                       /*  newline         */
        END|                      /*  end of file     */
        SENTINEL|                 /*  ";"             */
        RUNE_LITERAL|             /*  e.g. "r'x'"      */
        STRING_LITERAL|           /*  e.g. ""xx""     */
        SINGLE_QUOTED_STRING_LITERAL|
                                  /*  e.g. "'xx'"    */
        JSTRING_LITERAL|          /*  e.g. "J"xx""     */
        MULTILINE_STRING|         /*  e.g. """"aaa""""   */
        MULTILINE_RAW_STRING|     /*  e.g. "#"aaa"#"     */
        BOOL_LITERAL|             /*  "true" or "false"  */
        UNIT_LITERAL|             /*  "()"               */
        DOLLAR_IDENTIFIER|        /*  e.g. "$x"          */
        ANNOTATION|               /*  e.g. "@When"       */
        AT_EXCL|                  /*  e.g. "@!"          */
        ILLEGAL|
        ...
    }
    
功能：表示仓颉编译内部所有的词法结构，包括符号、关键字、标识符、换行等。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### ABSTRACT
    
    __
    
    ABSTRACT
    
功能：构造一个表示 `abstract` 的枚举实例。

### ADD
    
    __
    
    ADD
    
功能：构造一个表示 `+` 的枚举实例。

### ADD\_ASSIGN
    
    __
    
    ADD_ASSIGN
    
功能：构造一个表示 `+=` 的枚举实例。

### AND
    
    __
    
    AND
    
功能：构造一个表示 `&&` 的枚举实例。

### AND\_ASSIGN
    
    __
    
    AND_ASSIGN
    
功能：构造一个表示 `&&=` 的枚举实例。

### ANNOTATION
    
    __
    
    ANNOTATION
    
功能：构造一个表示 _注解_ 的枚举实例。

### ARROW
    
    __
    
    ARROW
    
功能：构造一个表示 `->` 的枚举实例。

### AS
    
    __
    
    AS
    
功能：构造一个表示 `as` 的枚举实例。

### ASSIGN
    
    __
    
    ASSIGN
    
功能：构造一个表示 `=` 的枚举实例。

### AT
    
    __
    
    AT
    
功能：构造一个表示 `@` 的枚举实例。

### AT\_EXCL
    
    __
    
    AT_EXCL
    
功能：构造一个表示 `@!` 的枚举实例。

### BACKARROW
    
    __
    
    BACKARROW
    
功能：构造一个表示 `<-` 的枚举实例。

### BITAND
    
    __
    
    BITAND
    
功能：构造一个表示 `&` 的枚举实例。

### BITAND\_ASSIGN
    
    __
    
    BITAND_ASSIGN
    
功能：构造一个表示 `&=` 的枚举实例。

### BITNOT
    
    __
    
    BITNOT
    
功能：构造一个表示 `~` 的枚举实例。

### BITOR
    
    __
    
    BITOR
    
功能：构造一个表示 `|` 的枚举实例。

### BITOR\_ASSIGN
    
    __
    
    BITOR_ASSIGN
    
功能：构造一个表示 `|=` 的枚举实例。

### BITXOR
    
    __
    
    BITXOR
    
功能：构造一个表示 `^` 的枚举实例。

### BITXOR\_ASSIGN
    
    __
    
    BITXOR_ASSIGN
    
功能：构造一个表示 `^=` 的枚举实例。

### BOOLEAN
    
    __
    
    BOOLEAN
    
功能：构造一个表示 `bool` 的枚举实例。

### BOOL\_LITERAL
    
    __
    
    BOOL_LITERAL
    
功能：构造一个表示 _布尔类型字面量_ 的枚举实例。

### BREAK
    
    __
    
    BREAK
    
功能：构造一个表示 `break` 的枚举实例。

### CASE
    
    __
    
    CASE
    
功能：构造一个表示 `case` 的枚举实例。

### CATCH
    
    __
    
    CATCH
    
功能：构造一个表示 `catch` 的枚举实例。

### CLASS
    
    __
    
    CLASS
    
功能：构造一个表示 `class` 的枚举实例。

### CLOSEDRANGEOP
    
    __
    
    CLOSEDRANGEOP
    
功能：构造一个表示 `..=` 的枚举实例。

### COALESCING
    
    __
    
    COALESCING
    
功能：构造一个表示 `??` 的枚举实例。

### COLON
    
    __
    
    COLON
    
功能：构造一个表示 `:` 的枚举实例。

### COMMA
    
    __
    
    COMMA
    
功能：构造一个表示 `,` 的枚举实例。

### COMMENT
    
    __
    
    COMMENT
    
功能：构造一个表示 _注释_ 的枚举实例。

### COMPOSITION
    
    __
    
    COMPOSITION
    
功能：构造一个表示 `~>` 的枚举实例。

### CONST
    
    __
    
    CONST
    
功能：构造一个表示 `const` 的枚举实例。

### CONTINUE
    
    __
    
    CONTINUE
    
功能：构造一个表示 `continue` 的枚举实例。

### DECR
    
    __
    
    DECR
    
功能：构造一个表示 `--` 的枚举实例。

### DIV
    
    __
    
    DIV
    
功能：构造一个表示 `/` 的枚举实例。

### DIV\_ASSIGN
    
    __
    
    DIV_ASSIGN
    
功能：构造一个表示 `/=` 的枚举实例。

### DO
    
    __
    
    DO
    
功能：构造一个表示 `do` 的枚举实例。

### DOLLAR
    
    __
    
    DOLLAR
    
功能：构造一个表示 `$` 的枚举实例。

### DOLLAR\_IDENTIFIER
    
    __
    
    DOLLAR_IDENTIFIER
    
功能：构造一个表示 _插值字符串_ 的枚举实例。

### DOT
    
    __
    
    DOT
    
功能：构造一个表示 `.` 的枚举实例。

### DOUBLE\_ARROW
    
    __
    
    DOUBLE_ARROW
    
功能：构造一个表示 `=>` 的枚举实例。

### ELLIPSIS
    
    __
    
    ELLIPSIS
    
功能：构造一个表示 `...` 的枚举实例。

### ELSE
    
    __
    
    ELSE
    
功能：构造一个表示 `else` 的枚举实例。

### END
    
    __
    
    END
    
功能：构造一个表示 `EOF` 的枚举实例。

### ENUM
    
    __
    
    ENUM
    
功能：构造一个表示 `enum` 的枚举实例。

### EQUAL
    
    __
    
    EQUAL
    
功能：构造一个表示 `==` 的枚举实例。

### EXP
    
    __
    
    EXP
    
功能：构造一个表示 `**` 的枚举实例。

### EXP\_ASSIGN
    
    __
    
    EXP_ASSIGN
    
功能：构造一个表示 `**=` 的枚举实例。

### EXTEND
    
    __
    
    EXTEND
    
功能：构造一个表示 `extend` 的枚举实例。

### FINALLY
    
    __
    
    FINALLY
    
功能：构造一个表示 `finally` 的枚举实例。

### FLOAT16
    
    __
    
    FLOAT16
    
功能：构造一个表示 `float16` 的枚举实例。

### FLOAT32
    
    __
    
    FLOAT32
    
功能：构造一个表示 `float32` 的枚举实例。

### FLOAT64
    
    __
    
    FLOAT64
    
功能：构造一个表示 `float64` 的枚举实例。

### FLOAT\_LITERAL
    
    __
    
    FLOAT_LITERAL
    
功能：构造一个表示 _浮点字面量_ 的枚举实例。

### FOR
    
    __
    
    FOR
    
功能：构造一个表示 `for` 的枚举实例。

### FOREIGN
    
    __
    
    FOREIGN
    
功能：构造一个表示 `foreign` 的枚举实例。

### FUNC
    
    __
    
    FUNC
    
功能：构造一个表示 `func` 的枚举实例。

### GE
    
    __
    
    GE
    
功能：构造一个表示 `>=` 的枚举实例。

### GT
    
    __
    
    GT
    
功能：构造一个表示 `>` 的枚举实例。

### HASH
    
    __
    
    HASH
    
功能：构造一个表示 `#` 的枚举实例。

### IDENTIFIER
    
    __
    
    IDENTIFIER
    
功能：构造一个表示 _标识符_ 的枚举实例。

### PACKAGE\_IDENTIFIER
    
    __
    
    PACKAGE_IDENTIFIER
    
功能：构造一个表示 _包标识符_ 的枚举实例。

### IF
    
    __
    
    IF
    
功能：构造一个表示 `if` 的枚举实例。

### ILLEGAL
    
    __
    
    ILLEGAL
    
功能：构造一个表示 _非法_ 的枚举实例。

### IMPORT
    
    __
    
    IMPORT
    
功能：构造一个表示 `import` 的枚举实例。

### IN
    
    __
    
    IN
    
功能：构造一个表示 `in` 的枚举实例。

### INCR
    
    __
    
    INCR
    
功能：构造一个表示 `++` 的枚举实例。

### INIT
    
    __
    
    INIT
    
功能：构造一个表示 `init` 的枚举实例。

### INOUT
    
    __
    
    INOUT
    
功能：构造一个表示 `inout` 的枚举实例。

### INT16
    
    __
    
    INT16
    
功能：构造一个表示 `int16` 的枚举实例。

### INT32
    
    __
    
    INT32
    
功能：构造一个表示 `int32` 的枚举实例。

### INT64
    
    __
    
    INT64
    
功能：构造一个表示 `int64` 的枚举实例。

### INT8
    
    __
    
    INT8
    
功能：构造一个表示 `int8` 的枚举实例。

### INTEGER\_LITERAL
    
    __
    
    INTEGER_LITERAL
    
功能：构造一个表示 _整型字面量_ 的枚举实例。

### INTERFACE
    
    __
    
    INTERFACE
    
功能：构造一个表示 `interface` 的枚举实例。

### INTERNAL
    
    __
    
    INTERNAL
    
功能：构造一个表示 `internal` 的枚举实例。

### INTNATIVE
    
    __
    
    INTNATIVE
    
功能：构造一个表示 `intnative` 的枚举实例。

### IS
    
    __
    
    IS
    
功能：构造一个表示 `is` 的枚举实例。

### JSTRING\_LITERAL
    
    __
    
    JSTRING_LITERAL
    
功能：构造一个表示 JavaSTRING字面量 的枚举实例。

### LCURL
    
    __
    
    LCURL
    
功能：构造一个表示 `{` 的枚举实例。

### LE
    
    __
    
    LE
    
功能：构造一个表示 `<=` 的枚举实例。

### LET
    
    __
    
    LET
    
功能：构造一个表示 `let` 的枚举实例。

### LPAREN
    
    __
    
    LPAREN
    
功能：构造一个表示 `(` 的枚举实例。

### LSHIFT
    
    __
    
    LSHIFT
    
功能：构造一个表示 `<<` 的枚举实例。

### LSHIFT\_ASSIGN
    
    __
    
    LSHIFT_ASSIGN
    
功能：构造一个表示 `<<=` 的枚举实例。

### LSQUARE
    
    __
    
    LSQUARE
    
功能：构造一个表示 `[` 的枚举实例。

### LT
    
    __
    
    LT
    
功能：构造一个表示 `<` 的枚举实例。

### MACRO
    
    __
    
    MACRO
    
功能：构造一个表示 `macro` 的枚举实例。

### MAIN
    
    __
    
    MAIN
    
功能：构造一个表示 `main` 的枚举实例。

### MATCH
    
    __
    
    MATCH
    
功能：构造一个表示 `match` 的枚举实例。

### MOD
    
    __
    
    MOD
    
功能：构造一个表示 `%` 的枚举实例。

### MOD\_ASSIGN
    
    __
    
    MOD_ASSIGN
    
功能：构造一个表示 `%=` 的枚举实例。

### MUL
    
    __
    
    MUL
    
功能：构造一个表示 `*` 的枚举实例。

### MULTILINE\_RAW\_STRING
    
    __
    
    MULTILINE_RAW_STRING
    
功能：构造一个表示 _多行原始字符串字面量_ 的枚举实例。

### MULTILINE\_STRING
    
    __
    
    MULTILINE_STRING
    
功能：构造一个表示 _多行字符串字面量_ 的枚举实例。

### MUL\_ASSIGN
    
    __
    
    MUL_ASSIGN
    
功能：构造一个表示 `*=` 的枚举实例。

### MUT
    
    __
    
    MUT
    
功能：构造一个表示 `mut` 的枚举实例。

### NL
    
    __
    
    NL
    
功能：构造一个表示 _换行符_ 的枚举实例。

### NOT
    
    __
    
    NOT
    
功能：构造一个表示 `!` 的枚举实例。

### NOTEQ
    
    __
    
    NOTEQ
    
功能：构造一个表示 `!=` 的枚举实例。

### NOTHING
    
    __
    
    NOTHING
    
功能：构造一个表示 `nothing` 的枚举实例。

### NOT\_IN
    
    __
    
    NOT_IN
    
功能：构造一个表示 `!in` 的枚举实例。

### OPEN
    
    __
    
    OPEN
    
功能：构造一个表示 `open` 的枚举实例。

### OPERATOR
    
    __
    
    OPERATOR
    
功能：构造一个表示 `operator` 的枚举实例。

### OR
    
    __
    
    OR
    
功能：构造一个表示 `||` 的枚举实例。

### OR\_ASSIGN
    
    __
    
    OR_ASSIGN
    
功能：构造一个表示 `||=` 的枚举实例。

### OVERRIDE
    
    __
    
    OVERRIDE
    
功能：构造一个表示 `override` 的枚举实例。

### PACKAGE
    
    __
    
    PACKAGE
    
功能：构造一个表示 `package` 的枚举实例。

### PIPELINE
    
    __
    
    PIPELINE
    
功能：构造一个表示 `|>` 的枚举实例。

### PRIVATE
    
    __
    
    PRIVATE
    
功能：构造一个表示 `private` 的枚举实例。

### PROP
    
    __
    
    PROP
    
功能：构造一个表示 `prop` 的枚举实例。

### PROTECTED
    
    __
    
    PROTECTED
    
功能：构造一个表示 `protected` 的枚举实例。

### PUBLIC
    
    __
    
    PUBLIC
    
功能：构造一个表示 `public` 的枚举实例。

### QUEST
    
    __
    
    QUEST
    
功能：构造一个表示 `?` 的枚举实例。

### QUOTE
    
    __
    
    QUOTE
    
功能：构造一个表示 `quote` 的枚举实例。

### RANGEOP
    
    __
    
    RANGEOP
    
功能：构造一个表示 `..` 的枚举实例。

### RCURL
    
    __
    
    RCURL
    
功能：构造一个表示 `}` 的枚举实例。

### REDEF
    
    __
    
    REDEF
    
功能：构造一个表示 `redef` 的枚举实例。

### RETURN
    
    __
    
    RETURN
    
功能：构造一个表示 `return` 的枚举实例。

### RPAREN
    
    __
    
    RPAREN
    
功能：构造一个表示 `)` 的枚举实例。

### RSHIFT
    
    __
    
    RSHIFT
    
功能：构造一个表示 `>>` 的枚举实例。

### RSHIFT\_ASSIGN
    
    __
    
    RSHIFT_ASSIGN
    
功能：构造一个表示 `>>=` 的枚举实例。

### RSQUARE
    
    __
    
    RSQUARE
    
功能：构造一个表示 `]` 的枚举实例。

### RUNE
    
    __
    
    RUNE
    
功能：构造一个表示 `Rune` 的枚举实例。

### RUNE\_BYTE\_LITERAL
    
    __
    
    RUNE_BYTE_LITERAL
    
功能：构造一个表示 _字符字节字面量_ 的枚举实例。

### RUNE\_LITERAL
    
    __
    
    RUNE_LITERAL
    
功能：构造一个表示 _字符字面量_ 的枚举实例。

### SEALED
    
    __
    
    SEALED
    
功能：构造一个表示 `sealed` 的枚举实例。

### SEMI
    
    __
    
    SEMI
    
功能：构造一个表示 `;` 的枚举实例。

### SENTINEL
    
    __
    
    SENTINEL
    
功能：构造一个表示 `;` 的枚举实例。

### SINGLE\_QUOTED\_STRING\_LITERAL
    
    __
    
    SINGLE_QUOTED_STRING_LITERAL
    
功能：构造一个表示 _单引号字符串字面量_ 的枚举实例。

### SPAWN
    
    __
    
    SPAWN
    
功能：构造一个表示 `spawn` 的枚举实例。

### STATIC
    
    __
    
    STATIC
    
功能：构造一个表示 `static` 的枚举实例。

### STRING\_LITERAL
    
    __
    
    STRING_LITERAL
    
功能：构造一个表示 _双引号字符串字面量_ 的枚举实例。

### STRUCT
    
    __
    
    STRUCT
    
功能：构造一个表示 `struct` 的枚举实例。

### SUB
    
    __
    
    SUB
    
功能：构造一个表示 `-` 的枚举实例。

### SUB\_ASSIGN
    
    __
    
    SUB_ASSIGN
    
功能：构造一个表示 `-=` 的枚举实例。

### SUPER
    
    __
    
    SUPER
    
功能：构造一个表示 `super` 的枚举实例。

### SYNCHRONIZED
    
    __
    
    SYNCHRONIZED
    
功能：构造一个表示 `synchronized` 的枚举实例。

### THIS
    
    __
    
    THIS
    
功能：构造一个表示 `this` 的枚举实例。

### THISTYPE
    
    __
    
    THISTYPE
    
功能：构造一个表示 `This` 的枚举实例。

### THROW
    
    __
    
    THROW
    
功能：构造一个表示 `throw` 的枚举实例。

### TRY
    
    __
    
    TRY
    
功能：构造一个表示 `try` 的枚举实例。

### TYPE
    
    __
    
    TYPE
    
功能：构造一个表示 `type` 的枚举实例。

### UINT16
    
    __
    
    UINT16
    
功能：构造一个表示 `uint16` 的枚举实例。

### UINT32
    
    __
    
    UINT32
    
功能：构造一个表示 `uint32` 的枚举实例。

### UINT64
    
    __
    
    UINT64
    
功能：构造一个表示 `uint64` 的枚举实例。

### UINT8
    
    __
    
    UINT8
    
功能：构造一个表示 `uint8` 的枚举实例。

### UINTNATIVE
    
    __
    
    UINTNATIVE
    
功能：构造一个表示 `uintnative` 的枚举实例。

### UNIT
    
    __
    
    UNIT
    
功能：构造一个表示 `unit` 的枚举实例。

### UNIT\_LITERAL
    
    __
    
    UNIT_LITERAL
    
功能：构造一个表示 `unit` 字面量的枚举实例。

### UNSAFE
    
    __
    
    UNSAFE
    
功能：构造一个表示 `unsafe` 的枚举实例。

### UPPERBOUND
    
    __
    
    UPPERBOUND
    
功能：构造一个表示 `<:` 的枚举实例。

### VAR
    
    __
    
    VAR
    
功能：构造一个表示 `var` 的枚举实例。

### VARRAY
    
    __
    
    VARRAY
    
功能：构造一个表示 `varray` 的枚举实例。

### WHERE
    
    __
    
    WHERE
    
功能：构造一个表示 `where` 的枚举实例。

### WHILE
    
    __
    
    WHILE
    
功能：构造一个表示 `while` 的枚举实例。

### WILDCARD
    
    __
    
    WILDCARD
    
功能：构造一个表示 `_` 的枚举实例。

### WITH
    
    __
    
    WITH
    
功能：构造一个表示 `with` 的枚举实例。

### func \!=\(TokenKind\)
    
    __
    
    public operator func !=(right: TokenKind): Bool
    
功能：重载不等号操作符，用于比较两个 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 是否相等。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 布尔类型。

### func ==\(TokenKind\)
    
    __
    
    public operator func ==(right: TokenKind): Bool
    
功能：重载等号操作符，用于比较两个 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 是否相等。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 布尔类型。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 类型转化为字符串类型表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 转换后的字符串值。