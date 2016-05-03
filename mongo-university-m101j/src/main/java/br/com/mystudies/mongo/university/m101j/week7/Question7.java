package br.com.mystudies.mongo.university.m101j.week7;

import static com.mongodb.client.model.Filters.eq;
import static org.apache.commons.collections.CollectionUtils.isEmpty;

import java.util.ArrayList;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

public class Question7 {



	public static void main(String[] args) {


		MongoHelper mongoHelper = new MongoHelper();


		MongoCollection<Document> images =
				mongoHelper.collection("images");


		MongoCollection<Document> albums =
				mongoHelper.collection("albums");


		images.find().into(new ArrayList<>())
			.forEach(img ->{
				int id = img.getInteger("_id");

				ArrayList<Document> result =
						albums.find(eq("images", id)).into(new ArrayList<>());


				if(isEmpty(result)){
					mongoHelper.remove(id);
					System.out.println("Removing imagem --> " + id);
				}
			});


	}


}
