package br.com.mystudies.mongo.university.m101j.week3;

import static org.apache.commons.lang3.builder.EqualsBuilder.reflectionEquals;
import static org.apache.commons.lang3.builder.HashCodeBuilder.reflectionHashCode;

public class Score {

	public String type;
	public double score;








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
		return "Score [type=" + type + ", score=" + score + "]";
	}




}
