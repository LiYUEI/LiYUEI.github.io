---
title: yaml教程
icon: laptop-code
date: 2024-08-14
category:
  - 工具使用
tag:
  - yaml
---

用了这么久yaml，虽然特别简单，也顺道写一写教程了😀。

## 关于yaml

YAML是"YAML Ain't a Markup Language"（YAML不是一种标记语言）的递归缩写。
YAML 语言（发音 /ˈjæməl/ ）的设计目标，就是方便人类读写。它实质上是一种通用的数据串行化格式。

YAML的语法和其他高级语言类似，并且可以简单表达清单、散列表，标量等数据形态。
它使用空白符号缩进和大量依赖外观的特色，特别适合用来表达或编辑数据结构、
各种配置文件、倾印调试内容、文件大纲（例如：许多电子邮件标题格式和YAML非常接近）。

YAML 的配置文件后缀为 .yml，如：ansible-playbook.yml，Hexo的配置文件也是_config.yml。

它的基本语法规则如下。
- 大小写敏感
- 使用缩进表示层级关系
- 缩进时不允许使用Tab键，只允许使用空格。
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

```yaml
# 表示注释，从这个字符一直到行尾，都会被解析器忽略。
```

YAML 支持的数据结构有三种。
- 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
- 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
- 纯量（scalars）：单个的、不可再分的值


## yaml案例

```yaml

---  # 文档开头

# YAML 中的注释看起来像这样。

################
# 标量类型     #
################

# 我们的根对象 (贯穿整个文档的始终) 是一个映射（map），
# 它等价于其它语言中的一个字典（dictionary），哈希表（hash）或对象（object）。
key: value
another_key: Another value goes here.
a_number_value: 100
# 数字 1 会被解释为数值，而不是一个布尔值。
# 如果你想要的是一个布尔值，使用 true。
scientific_notation: 1e+12
boolean: true
null_value: null
key with spaces: value
# 注意，字符串可以不括在引号里。当然，也可以括在引号里。
however: 'A string, enclosed in quotes.'
'Keys can be quoted too.': "Useful if you want to put a ':' in your key."
single quotes: 'have ''one'' escape pattern'
double quotes: "have many: \", \0, \t, \u263A, \x0d\x0a == \r\n, and more."
# UTF-8/16/32字符需要指明编码（通过\u）。
Superscript two: \u00B2

# 多行字符串既可以写成一个'字面量块'(使用 '|')，
# 也可以写成一个'折叠块'(使用 '>')。
literal_block: |
  This entire block of text will be the value of the 'literal_block' key,
  with line breaks being preserved.

  The literal continues until de-dented, and the leading indentation is
  stripped.

      Any lines that are 'more-indented' keep the rest of their indentation -
      these lines will be indented by 4 spaces.
folded_style: >
  This entire block of text will be the value of 'folded_style', but this
  time, all newlines will be replaced with a single space.

  Blank lines, like above, are converted to a newline character.

      'More-indented' lines keep their newlines, too -
      this text will appear over two lines.

####################
# 集合类型         #
####################

# 嵌套是通过缩进完成的。推荐使用 2 个空格的缩进（但非必须）。
a_nested_map:
  key: value
  another_key: Another Value
  another_nested_map:
    hello: hello

# 映射的键不必是字符串。
0.25: a float key

# 键也可以是复合（complex）的，比如多行对象
# 我们用 '?' 后跟一个空格来表示一个复合键的开始。
? |
  This is a key
  that has multiple lines
  : and this is its value

# YAML 也允许使用复杂键语法表示序列间的映射关系。
# 但有些解析器可能会不支持。
# 一个例子：
? - Manchester United
  - Real Madrid
  : [ 2001-01-01, 2002-02-02 ]

# 序列 (sequences，等价于列表 list 或数组 array ) 看起来像这样：
# 注意 '-' 也算缩进：
a_sequence:
  - Item 1
  - Item 2
  - 0.5 # 序列可以包含不同类型。
  - Item 4
  - key: value
    another_key: another_value
  -
    - This is a sequence
    - inside another sequence
  - - - Nested sequence indicators
      - can be collapsed

# 因为 YAML 是 JSON 的超集，你也可以写 JSON 风格的映射和序列：
json_map: {"key": "value"}
json_seq: [3, 2, 1, "takeoff"]
and quotes are optional: {key: [3, 2, 1, takeoff]}

#######################
# 其余的 YAML 特性    #
#######################

# YAML 还有一个方便的特性叫“锚”（anchors）。你可以使用它在文档中轻松地完成文本复用。
# 如下两个键会有相同的值：
anchored_content: &anchor_name This string will appear as the value of two keys.
other_anchor: *anchor_name

# 锚也可被用来复制/继承属性
base: &base
  name: Everyone has same name

# '<<'称为语言无关的合并键类型（Merge Key Language-Independent Type）.
# 它表明一个或多个指定映射中的所有键值会插入到当前的映射中。

foo: &foo
  <<: *base
  age: 10

bar: &bar
  <<: *base
  age: 20

# foo 和 bar 将都含有 name: Everyone has same name

# YAML 还有标签（tags），你可以用它显式地声明类型。
explicit_string: !!str 0.5
# 一些解析器实现了特定语言的标签，就像这个针对Python的复数类型的标签。
python_complex_number: !!python/complex 1+2j

# 我们也可以在 YAML 的复合键中使用特定语言的标签：
? !!python/tuple [5, 7]
  : Fifty Seven
# 将会是 Python 中的 {(5, 7): 'Fifty Seven'}

####################
# 其余的 YAML 类型 #
####################

# 除了字符串和数字，YAML 还支持其它标量。
# ISO 格式的日期和时间字面量也可以被解析。
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14

# 这个 !!binary 标签表明这个字符串实际上
# 是一个用 base64 编码表示的二进制 blob。
gif_file: !!binary |
  R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
  OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
  +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
  AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=

# YAML 还有一个集合（set）类型，它看起来像这样：
set:
  ? item1
  ? item2
  ? item3
or: {item1, item2, item3}

# 集合只是值均为 null 的映射；上面的集合等价于：
set2:
  item1: null
  item2: null
  item3: null

...  # 文档结束
```

源代码下载：[learnyaml-cn.yaml](https://learnxinyminutes.com/docs/files/learnyaml-cn.yaml)

## 参考资料

[Y分钟速成X](https://learnxinyminutes.com/docs/zh-cn/yaml-cn/)

