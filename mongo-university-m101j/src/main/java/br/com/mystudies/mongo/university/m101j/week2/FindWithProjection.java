package br.com.mystudies.mongo.university.m101j.week2;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.gt;
import static com.mongodb.client.model.Filters.lte;
import static com.mongodb.client.model.Projections.excludeId;
import static com.mongodb.client.model.Projections.fields;
import static com.mongodb.client.model.Projections.include;

import java.util.ArrayList;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.MongoCollection;

public class FindWithProjection {

	public static void main(String[] args) {
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("findWithProjectionTest");
		

		
		
/*		IntStream.range(0, 10).forEach( i -> {
			collection.insertOne(
					new Document()
						.append("x", new Random().nextInt(2))
						.append("y", new Random().nextInt(100))
						.append("i", i)
				);
		});
*/		
		
			
		collection
			.find(filter())
			.projection(projection())
			.into(new ArrayList<>())
			.forEach(System.out::println);
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	private static Bson projection() {
		return fields(include("y", "i"), excludeId()) ;
	}








	private static Bson filter() {
		return and(eq("x", 1), gt("y", 10), lte("y", 40));
		
		
	/*	return new Document("x",0)
					.append("y", new Document("$gt", 10))
					.append("y", new Document("$lte", 40));*/
	}
	
	
	
	
}
