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
		assertNotNull(new AttributeData<String>("Hiya!"));
	}
	//Created empty constructor for AttributeData
	
	@Test
	//Test 2, test that the getType method functions correctly
	void getTypeTest() {
		assertEquals(new AttributeData<String>("Howdy-do").getType(), DataType.STRING);
	}
	//Created method getType which returns DataType.STRING
	
	@Test
	//Test 3, test that an AttributeData object can be created with a float parameter
	void floatTest() {
		assertNotNull(new AttributeData<Float>(59f));
	}
	//Created another empty constructor with a float parameter
	
	@Test
	//Test 4, test that getType works for floats
	void getTypeFloatTest()	{
		assertEquals(new AttributeData<Float>(32f).getType(), DataType.FLOAT);
	}
	//Added attribute type of type DataType which is assigned in each constructor and returned by getType
	
	//Changed class in a different branch to use generics, added a new attribute value which is assigned as
	//the parameter passed in and is used to determine type.
	
	@Test
	//Test 5, test that getValue works
	void getValueTest() {
		assertEquals(new AttributeData<String>("Haiii").getValue(), "Haiii");
	}
	//Created a method getValue() which returns value attribute.

}
