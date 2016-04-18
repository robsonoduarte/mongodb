package br.com.mystudies.mongo.university.m101j.week5;

import static java.util.Arrays.asList;
import static org.bson.Document.parse;

import java.util.ArrayList;
import java.util.List;

import org.bson.conversions.Bson;

public class AggregationByDocumentParse {

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
				parse("{ $group:{_id: \"$state\",totalPop: { $sum: \"$pop\" }}}"),
				parse("{ $match: { totalPop: { $gte: 10000000 } } }")
			);



		new MongoHelper().collection("zips")
			.aggregate(pipeline)
			.into(new ArrayList<>())
				.forEach(document ->{
					System.out.println(document.toJson());
				});


	}






}
