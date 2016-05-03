package br.com.mystudies.mongo.university.m101j.week7;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

public class Question8 {
	public static void main(String[] args) {

		 MongoClient c =  new MongoClient("192.168.99.100");
         MongoDatabase db = c.getDatabase("test");
         MongoCollection<Document> animals = db.getCollection("animals");

         Document animal = new Document("animal", "monkey");

         animals.insertOne(animal);
         animal.remove("animal");
         animal.append("animal", "cat");
         animals.insertOne(animal);
         animal.remove("animal");
         animal.append("animal", "lion");
         animals.insertOne(animal);


	}
}
