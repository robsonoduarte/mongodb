package br.com.mystudies.mongo_university_m101j;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoClientApp {

	public static void main(String[] args) {
		
		MongoClient mongoClient = new MongoClient("192.168.99.100", 27017);
		
		MongoDatabase database = mongoClient.getDatabase("test");
		
		MongoCollection<Document> collection = database.getCollection("users");
		
		
	}
}
