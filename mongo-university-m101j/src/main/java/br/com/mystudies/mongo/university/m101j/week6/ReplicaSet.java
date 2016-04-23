package br.com.mystudies.mongo.university.m101j.week6;

import static java.lang.Integer.MAX_VALUE;
import static java.util.Arrays.asList;

import java.util.List;

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.ServerAddress;
import com.mongodb.client.MongoCollection;

public class ReplicaSet {


	public static void main(String[] args) throws InterruptedException {


		MongoCollection<Document> collection =
				new MongoClient(replicaset())
					.getDatabase("course")
					.getCollection("replication");


		collection.drop();


		for (int i = 0; i < MAX_VALUE; i++) {
			collection.insertOne(new Document("_id", i));
			System.out.println("Inserted document: " + i);
			Thread.sleep(500);
		}


	}






	private static List<ServerAddress> replicaset() {
		return asList(
				new ServerAddress("192.168.99.100", 27017),
				new ServerAddress("192.168.99.100", 27018),
				new ServerAddress("192.168.99.100", 27019)
		);
	}
















}
