package br.com.mystudies.mongo.university.m101j.week2;

import static java.util.Arrays.asList;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class Insert {

	public static void main(String[] args) {
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("users");
		
		
		
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
