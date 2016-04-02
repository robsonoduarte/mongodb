package br.com.mystudies.mongo.university.m101j.week1;

import static freemarker.template.Configuration.VERSION_2_3_23;
import static spark.Spark.get;

import java.io.IOException;
import java.io.StringWriter;
import java.util.HashMap;
import java.util.Map;

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

public class SparkJavaFreeMarker {



	public static void main(String[] args) throws IOException, TemplateException {
		get("hello", (req, res) -> writeMessage(freeMakerConfiguration()));
	}




























	private static Configuration freeMakerConfiguration() throws IOException{
		Configuration configuration = new Configuration(VERSION_2_3_23);
		configuration.setClassForTemplateLoading(SparkJavaFreeMarker.class, "/");
		return configuration;
	}








	private static StringWriter writeMessage(Configuration configuration) throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException, TemplateException {
		Template template = configuration.getTemplate("app.ftl");
		StringWriter writer = new StringWriter();

		Map<String, Object> map = new HashMap<>();
		map.put("message", "Helo Spark Java with FreeMaker");
		template.process(map, writer);
		return writer;
	}



























































}
