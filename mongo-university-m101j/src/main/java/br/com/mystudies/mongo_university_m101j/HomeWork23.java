package br.com.mystudies.mongo_university_m101j;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Sorts.ascending;
import static com.mongodb.client.model.Sorts.orderBy;

import java.util.ArrayList;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class HomeWork23 {

	public static void main(String[] args) {
		
		
		MongoCollection<Document> collection = new MongoConnection().getCollection("grades");
		
		
		ArrayList<Document> documents = collection.find(eq("type", "homework"))
			.sort(orderBy(ascending("student_id"), ascending("score")))
			.into(new ArrayList<>());
		
		
		int id = -1;
		
		for (Document d : documents) {
			
			if( id != d.getInteger("student_id")){
				id = d.getInteger("student_id");
				collection.deleteOne(eq("_id", d.getObjectId("_id")));
			}
		}
	
	}
}
