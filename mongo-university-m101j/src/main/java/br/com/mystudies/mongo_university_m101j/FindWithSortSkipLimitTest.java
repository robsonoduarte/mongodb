package br.com.mystudies.mongo_university_m101j;

import static com.mongodb.client.model.Projections.excludeId;
import static com.mongodb.client.model.Projections.fields;
import static com.mongodb.client.model.Projections.include;
import static com.mongodb.client.model.Sorts.ascending;
import static com.mongodb.client.model.Sorts.descending;
import static com.mongodb.client.model.Sorts.orderBy;

import java.util.ArrayList;

import org.bson.Document;
import org.bson.conversions.Bson;

import com.mongodb.client.MongoCollection;

public class FindWithSortSkipLimitTest {

	public static void main(String[] args) {
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("findWithSortShkipLimitTest");
		

		
/*		IntStream.range(0, 10).forEach( i -> {
			IntStream.range(0, 10).forEach( j -> {				
				collection.insertOne(
						new Document()
							.append("i", i)
							.append("j", j)
					);
			});						
		});
*/		
		
			
		collection
			.find()
			.projection(projection())
			.sort(sort())
			.skip(20)
			.limit(40)
			.into(new ArrayList<>())
			.forEach(System.out::println);
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	private static Bson sort() {
		return orderBy(ascending("i"), descending("j"));
	}






























	private static Bson projection() {
		return fields(include("j", "i"), excludeId()) ;
	}

	
	
	
	
}
