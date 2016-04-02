package br.com.mystudies.mongo.university.m101j.week3;

import static org.mongodb.morphia.utils.IndexDirection.ASC;

import java.util.Date;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Indexed;
import org.mongodb.morphia.annotations.Version;

@Entity("orgs")
public class Organization {

	@Id
	public String name;
	@Indexed(value= ASC, name = "", unique = false, dropDups = false, expireAfterSeconds = -1, background = false, sparse = false)
	public Date created;
	@Version("v")
	public long version;
}
