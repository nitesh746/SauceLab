package com.test.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = "FeatureFile", 
	glue = "com.test.stepdefination", format = {"html:output"} )
public class AddTwoNumbers {
}