package br.com.mystudies.mongo.university.m101j.week3;

import static org.apache.commons.lang3.builder.EqualsBuilder.reflectionEquals;
import static org.apache.commons.lang3.builder.HashCodeBuilder.reflectionHashCode;

import java.util.List;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;

import com.google.gson.Gson;

@Entity(value="students", noClassnameStored = true)
public class Student {


	@Id
	public Long id;
	public String name;
	public List<Score> scores;












	@Override
	public int hashCode() {
		return reflectionHashCode(this);
	}



	@Override
	public boolean equals(Object obj) {
		return reflectionEquals(this, obj);
	}




	@Override
	public String toString() {
		return new Gson().toJson(this);
	}


}
