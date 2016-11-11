package test.integration;

import java.util.List;
import org.junit.*;
import org.openqa.selenium.*;

import org.junit.runner.JUnitCore;

/**
 * Property Explorer UI test.
 */
public class IntegrationTest extends BaseSalesforceTest {
    @Test
    public void testIntegration() {
        this.login("/one/one.app#/sObject/Property__c/home");

        // Salesforce retUrl will strip the hash. Selenium driver.get() will hang on a hash. SO set the hash manually.
        ((JavascriptExecutor) driver).executeScript("window.location.hash='#/sObject/Property__c/home'");

        this.fluentWait(By.xpath("//a[contains(text(), 'Contemporary Luxury')]")).click();
        Assert.assertTrue(this.fluentWait(By.xpath("//span[contains(text(), 'Contemporary Luxury')]")).isDisplayed());
    }

	public static void main(String[] args) {
		// Instantiate a JUniteCore object
		JUnitCore core = new JUnitCore();

		// Add TAP Reporter Listener to the core object executor
		core.addListener(new TapReporter());

		// Run the test suite
		core.run(IntegrationTest.class);
	}
}
