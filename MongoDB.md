# MongoDB

## 简介

​	MongoDB是为快速开发互联网Web应用 而设计的数据库系统。 

​	MongoDB的设计目标是极简、灵活、作为 Web应用栈的一部分。 	

​	MongoDB的数据模型是面向文档的，所谓 文档是一种类似于JSON的结构，简单理解 MongoDB这个数据库中存的是各种各样的 JSON。（**BSON—binary json**） 

## 命令 

`mongod --dbpath 路径 --port 端口号`  ：启动MongoDB

`mongo`	: 连接MongoDB

`show dbs / databases` :  显示数据库

`use dbName` :  使用use时，如果数据库存在则会进入到相应的数 据库，如果不存在则会自动创建 ; 一旦进入数据库，则可以使用db来引用当前库

`db` : 表示当前数据库 

```shell
> show dbs

> use test

> db
```

### 插入查询

`db.collection.insert(document)` :  insert()可以用于向集合中添加一个或多个文档， 可以传递一个对象，或一个数组。 可以将对象或数组中的对象添加进集合中 ；添加时如果集合或数据库不存在，会**自动创建** ；插入的文档对象会**默认添加_id属性**，这个属性 对应一个唯一的id，是文档的唯一标识 

`db.collection.insertOne() / insertMany()`

`db.collection.find () ` : 查询该集合所有符合条件的文档

```shell
> db.test.insertMany([
	{name:"Jose",age:32,gender:"man"},
	{name:"Mancy",age:33,gender:"woman"},
	{name:"Funck",age:21,gender:"man"}	
])
> ObjectId()

> db.test.find()

> db.test.find({name:"lov"})

> db.test.find({}).count()
```

### 修改删除

`db.collection.update()` : 可以在update()中传递两个参数，一个是查询 文档，一个是新的文档，这样符和条件的文档 将会被新文档所替换 ,update()的第三个参数，用来指定是否使用 upsert，默认为false ,update()的第四个参数，用来指定是否同时修 改多个文档，默认为false 

`db.collection.updateOne() / updateMany()`

```shell
> db.test.update(
	{name:"Maly"},
	{name:"Mancy"}	
)
> db.test.update(
	{name:"Maly"},
	{
	  $set:{name:"Mancy"}
	},
	{multi:true}	
)

> db.test.updateMany({name:"Mancy"},{
	$set: {name:"Maly"}
})
```

## 组成

**数据库（database）** ： 数据库是一个仓库，在仓库中可以存放集合。 

**集合（collection）** ： 集合类似于数组，在集合中可以存放文档。 

**文档（document）** ： 文档数据库中的最小单位，我们存储和操作的 内容都是文档。 

​	**文档（document）**，类似于JS中的对象，在MongoDB中每一条数 据都是一个文档 ；**集合（collection）** ，集合就是一组文档，也就是集合是用来存放文 档的 – 集合中存储的文档可以是各种各样的，没有格 式要求；**多个文档组成集合，多个集合组成数据库** 

![](img/component.png)

## 修改器

​	使用update会将整个文档替换，但是大部 分情况下我们是不需要这么做的 ；如果只需要对文档中的一部分进行更新时， 可以使用更新修改器来进行 

### \$set、$unset 

​	$set用来指定一个字段的值，如果这个字 段不存在，则创建它 

​	$unset可以用来删除文档中一个不需要的字段， 用法和set类似 

```shell
> db.test.updateMany({name:"Mancy"},{
	$set: {name:"Maly"}
})
```

### \$inc 

​	$inc用来增加已有键的值，或者该键不存 在那就创建一个 

​	$inc只能用于Number类型的值 