package br.com.mystudies.mongo.university.m101j.week3;

import static java.lang.Double.compare;

public class HomeWork31 {

	public static void main(String[] args) {

		DataStore dataStore = new DataStore();

		dataStore.find(Student.class)
			.stream()
			.map(s -> temp(s))
			.forEach( s -> {
				dataStore.save(s);
			});
	}

































	private static Student temp(Student student) {

		Score s = student.scores.stream()
			.filter(score -> ishomeWork(score))
			.sorted((s1, s2) -> compare(s1.score, s2.score))
			.findFirst()
			.get();

		student.scores.remove(s);

		return student;
	}






	private static boolean ishomeWork(Score score) {
		return "homework".equals(score.type);
	}

}
