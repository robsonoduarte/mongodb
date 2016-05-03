package br.com.mystudies.mongo.university.m101j.week7;

import static com.mongodb.client.model.Filters.eq;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoHelper {

	MongoClient mongoClient = new MongoClient("192.168.99.100");
	MongoDatabase database = mongoClient.getDatabase("photo-sharing");



	public  MongoCollection<Document> collection(String name){
		return database.getCollection(name);
	}



	public void remove(int id) {
		collection("images").deleteMany(eq("_id", id));
	}


}
