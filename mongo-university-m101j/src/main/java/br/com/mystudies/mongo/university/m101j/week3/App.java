package br.com.mystudies.mongo.university.m101j.week3;

import java.util.Date;

public class App {






	public static void main(String[] args) {

		DataStore dataStore = new DataStore();


		GithubUser githubUser = new GithubUser();
		githubUser.followers = 15;
		githubUser.following = 12;
		githubUser.fullName = "Robson Duarte";
		githubUser.lastActive = new Date();
		githubUser.memberSince = new Date();


		dataStore.save(githubUser);


		Organization organization = new Organization();
		organization.created = new Date();
		organization.name = "mystudies";

		dataStore.save(organization);



		Repository repository = new Repository();
		repository.name = "mongodb";
		repository.organization = organization;
		repository.owner = githubUser;


		dataStore.save(repository);


		githubUser.repositoreis.add(repository);


		dataStore.save(githubUser);


	}







}
