package br.com.mystudies.mongo.university.m101j.week3;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Reference;

@Entity("repos")
public class Repository {

	@Id
	public String name;
	@Reference
	public Organization organization;
	@Reference
	public GithubUser owner;
	public Settings settings = new Settings();

}
