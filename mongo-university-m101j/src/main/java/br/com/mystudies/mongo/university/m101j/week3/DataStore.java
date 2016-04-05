package br.com.mystudies.mongo.university.m101j.week3;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.mongodb.MongoClient;

public class DataStore {



	private Datastore datastore;




	public DataStore() {
		datastore = new Morphia().createDatastore(new MongoClient("192.168.99.100"), "week3");
	}





	public <T> void save(T t){
		datastore.save(t);
	}



   public <T> List<T> find(Class<T> c){
	  return datastore.find(c).asList();
   }




}
