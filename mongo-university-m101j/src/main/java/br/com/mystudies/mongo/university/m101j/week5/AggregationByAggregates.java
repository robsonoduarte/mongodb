package br.com.mystudies.mongo.university.m101j.week5;

import static com.mongodb.client.model.Accumulators.sum;
import static com.mongodb.client.model.Aggregates.group;
import static com.mongodb.client.model.Aggregates.match;
import static com.mongodb.client.model.Filters.gte;
import static java.util.Arrays.asList;

import java.util.ArrayList;
import java.util.List;

import org.bson.conversions.Bson;

public class AggregationByAggregates {

	public static void main(String[] args) {


		/* db.zipcodes.aggregate( [
        			{ $group:
        				{
        					_id: "$state",
        					totalPop: { $sum: "$pop" }
        				}
        			},
        			{ $match: { totalPop: { $gte: 10*1000*1000 } } }
     			] )
		 */


		List<Bson> pipeline = asList(
				group("$state", sum("totalPop", "$pop")),
				match(gte("totalPop", 10_000_000))
			);





		new MongoHelper().collection("zips")
			.aggregate(pipeline)
			.into(new ArrayList<>())
				.forEach(document ->{
					System.out.println(document.toJson());
				});

	}






}
