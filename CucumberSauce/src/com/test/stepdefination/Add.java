package com.test.stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Add {
	
	@Given("I have entered first number")
	public void enterFirstNumber() {
		System.out.println("First Number = 25");
	}
	
	@Given("I have enetered second number")
	public void enterSecondNumber() {
		System.out.println("Second Number = 5");
	}
	
	@When("^I press [a-zA-Z]{1,} button$")
	public void pressSumbutton() throws Throwable {
		System.out.println("Pressed ADD button");
	}
	
	@Then("^[a-zA-Z]{1,} of two numbers should be shown$")
	public void displaySum() {
		System.out.println("Sum of two numbers is = 30");
	}

//	@When("I press substract button")
//	public void i_press_substract_button() {
//		System.out.println("Pressed SUBSTRACT button");
//	}
//	
//	@Then("Substraction of two numbers should be shown")
//	public void substraction_of_two_numbers_should_be_shown() throws Throwable {
//		System.out.println("Substraction of two numbers is = 5");
//	}
	
}
