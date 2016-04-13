

//simple aggregation example

db.products.insert({'name':'iPad 16GB Wifi', 'manufacturer':"Apple",'category':'Tablets','price':499.00})
db.products.insert({'name':'iPad 32GB Wifi', 'category':'Tablets','manufacturer':"Apple",'price':599.00})
db.products.insert({'name':'iPad 64GB Wifi', 'category':'Tablets','manufacturer':"Apple",'price':699.00})
db.products.insert({'name':'Galaxy S3', 'category':'Cell Phones','manufacturer':'Samsung','price':563.99})
db.products.insert({'name':'Galaxy Tab 10', 'category':'Tablets','manufacturer':'Samsung','price':450.99})
db.products.insert({'name':'Vaio', 'category':'Laptops','manufacturer':"Sony",'price':499.00})
db.products.insert({'name':'Macbook Air 13inch', 'category':'Laptops','manufacturer':"Apple",'price':499.00})
db.products.insert({'name':'Nexus 7', 'category':'Tablets','manufacturer':"Google",'price':199.00})
db.products.insert({'name':'Kindle Paper White', 'category':'Tablets','manufacturer':"Amazon",'price':129.00})
db.products.insert({'name':'Kindle Fire', 'category':'Tablets','manufacturer':"Amazon",'price':199.00})

db.products.aggregate([
	{$group:
	  	{
	  	  _id:'$manufacturer',
	  	  num_products:{$sum:1}
	  	}
	 }
])


// simple example Expanded ( quiz )

db.stuff.insert({a:1, b:1, c:1})
db.stuff.insert({a:2, b:2, c:1})
db.stuff.insert({a:3, b:3, c:1})
db.stuff.insert({a:3, b:3, c:2})
db.stuff.insert({a:3, b:5, c:3})

db.stuff.aggregate([{$group:{_id: '$c'}}])

db.products.aggregate([
	{$group:
	  	{
	  	  _id:'$category',
	  	  num_products:{$sum:1}
	  	}
	 }
])



