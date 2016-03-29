package br.com.mystudies.mongo_university_m101j;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoConnection {

	
	private MongoDatabase database;	
	
	
	
	
	public MongoConnection() {
		database = new MongoClient("192.168.99.100", 27017).getDatabase("m101");
	}







	
	
	
	
	
	public MongoCollection<Document> getCollection(String name){
		return database.getCollection(name);
	}
	 
	
	
	
	
	
}
