package br.com.mystudies.mongo_university_m101j.week2;

import static com.mongodb.client.model.Filters.gte;
import static com.mongodb.client.model.Updates.inc;

import java.util.ArrayList;
import java.util.stream.IntStream;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class Update {

	public static void main(String[] args) {
		
		
		
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("updateTest");
		

		collection.drop();
		
		
		
	
		IntStream.range(0, 8).forEach( i -> {
			collection.insertOne(
					new Document()
						.append("_id", i)
						.append("x", i)
						.append("y", true)
					);
		});
	
		
		
		
		
		
		
		//collection.replaceOne(eq("x", 5), new Document("x", 20).append("updated", true));
		//collection.updateOne(eq("x", 5), new Document("$set",new Document("x", 20).append("updated", true)));
		//collection.updateOne(eq("x", 5), combine(set("x", 20), set("updated", true)));
		//collection.updateOne(eq("_id", 10), combine(set("x", 20), set("updated", true)), new UpdateOptions().upsert(true));
		collection.updateMany(gte("x", 5), inc("x", 10));
		
		
		

	
		
		collection.find()
			.into(new ArrayList<>())
			.forEach(System.out::println);
				
	}
	
	
	
	
	
	
	
}
