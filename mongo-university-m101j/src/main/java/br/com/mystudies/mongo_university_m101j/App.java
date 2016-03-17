package br.com.mystudies.mongo_university_m101j;

import static spark.Spark.get;

public class App {

	public static void main(String[] args) {
		get("hello", (req, res) -> "Hello World");
	}

}
