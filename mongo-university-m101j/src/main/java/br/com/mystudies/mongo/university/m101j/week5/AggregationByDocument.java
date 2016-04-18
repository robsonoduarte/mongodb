package br.com.mystudies.mongo.university.m101j.week5;

import static java.util.Arrays.asList;

import java.util.ArrayList;
import java.util.List;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class AggregationByDocument {

	public static void main(String[] args) {

		MongoClient mongoClient = new MongoClient("192.168.99.100");

		MongoDatabase database = mongoClient.getDatabase("test");










		/* db.zipcodes.aggregate( [
        			{ $group:
        				{
        					_id: "$state",
        					totalPop: { $sum: "$pop" }
        				}
        			},
        			{ $match: { totalPop: { $gte: 10*1000*1000 } } }
     			] )
		 */


		List<Document> pipeline =
				asList(new Document("$group",
						new Document("_id", "$state")
							.append("totalPop", new Document("$sum","$pop"))
						),
						new Document("$match",
								new Document("totalPop", new Document("$gte", 10_000_000))
							)
					);



		MongoCollection<Document> collection = database.getCollection("zips");



		collection.aggregate(pipeline).into(new ArrayList<>())
			.forEach(document ->{
				System.out.println(document.toJson());
			});

	}





}
