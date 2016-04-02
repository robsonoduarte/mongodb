package br.com.mystudies.mongo_university_m101j.week2;

import static com.mongodb.client.model.Filters.gt;

import java.util.ArrayList;
import java.util.stream.IntStream;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class Delete {

	public static void main(String[] args) {
		
	
		MongoCollection<Document> collection = new MongoConnection().getCollection("deleteTest");
		

		collection.drop();
		
	
	
		IntStream.range(0, 8).forEach( i -> {
			collection.insertOne(new Document("_id", i));
		});
	
		
		
//		collection.deleteMany(gt("_id", 4));
		collection.deleteOne(gt("_id", 4));
	
		
		collection.find()
			.into(new ArrayList<>())
			.forEach(System.out::println);
				
	}
	
	
	
	
	
	
	
}
