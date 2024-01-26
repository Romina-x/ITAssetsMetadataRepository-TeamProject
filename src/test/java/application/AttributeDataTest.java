package application;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

/**
 * Test case for the AttributeData class
 */
class AttributeDataTest {

	@Test
	//Test 1 test that an AttributeData object is created
	void notNullTest() {
		assertNotNull(new AttributeData("Hiya!"));
	}
	//Created empty constructor for AttributeData.

}
