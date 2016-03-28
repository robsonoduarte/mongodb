package br.com.mystudies.mongo_university_m101j;

import static java.util.Arrays.asList;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class InsertTest {

	public static void main(String[] args) {
		
		MongoClient mongoClient = new MongoClient("192.168.99.100", 27017);
		MongoDatabase database = mongoClient.getDatabase("test");		
		MongoCollection<Document> collection = database.getCollection("users");
		
		
		Document robson = new Document()
					.append("name", "Robson Duarte")
					.append("age", 39)
					.append("profession", "programmer");
		
		
		Document ana = new Document()
				.append("name", "Ana Mara")
				.append("age", 40)
				.append("profession", "teacher");
		
		
		
		
		//collection.insertOne(robson);
		collection.insertMany(asList(robson,ana));
		
	}
}
