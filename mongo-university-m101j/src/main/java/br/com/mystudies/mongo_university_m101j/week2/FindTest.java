package br.com.mystudies.mongo_university_m101j.week2;

import java.util.ArrayList;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class FindTest {

	public static void main(String[] args) {
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("findTest");
		

	
/*		IntStream.range(0, 10).forEach( i -> {
			collection.insertOne(new Document("x",i));
		});*/
		

	
		Document first = collection.find().first();		
		System.out.println(first);
	
		
		
		
		
		collection.find().into(new ArrayList<>())
			.forEach(document -> {
				System.out.println(document);				
			});
		
		
		
		
		
		collection.find().iterator()
			.forEachRemaining(document -> {
				System.out.println(document);				
			});
		
		
		
		
		System.out.println(collection.count());
		
		
	}
	
	
}
