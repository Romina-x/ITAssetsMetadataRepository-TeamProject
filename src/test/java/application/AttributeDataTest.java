package application;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

/**
 * Test case for the AttributeData class
 */
class AttributeDataTest {

	@Test
	//Test 1, test that an AttributeData object is created
	void notNullTest() {
		assertNotNull(new AttributeData("Hiya!"));
	}
	//Created empty constructor for AttributeData
	
	@Test
	//Test 2, test that the getType method functions correctly
	void getTypeTest() {
		assertEquals(new AttributeData("Howdy-do").getType(), DataType.STRING);
	}
	//Created method getType which returns DataType.STRING

}
