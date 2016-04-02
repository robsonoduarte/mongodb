package br.com.mystudies.mongo.university.m101j.week3;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Index;
import org.mongodb.morphia.annotations.Indexes;
import org.mongodb.morphia.annotations.Property;
import org.mongodb.morphia.annotations.Reference;


@Entity(value="users", noClassnameStored= true)
@Indexes({
	@Index(value="userName, -followers", name = "popular"),
	@Index(value="lastActive", name = "idle", expireAfterSeconds = 1_000_000_000)
})
public class GithubUser {

	@Id
	public String userName;
	public String fullName;
	@Property("since")
	public Date memberSince;
	public Date lastActive;
	@Reference(lazy=true)
	public List<Repository> repositoreis = new ArrayList<>();
	public int followers = 0;
	public int following = 0;

}
