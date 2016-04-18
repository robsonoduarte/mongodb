package br.com.mystudies.mongo.university.m101j.week5;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class MongoHelper {

	MongoClient mongoClient = new MongoClient("192.168.99.100");
	MongoDatabase database = mongoClient.getDatabase("test");




	public  MongoCollection<Document> collection(String name){
		return database.getCollection(name);
	}






}
