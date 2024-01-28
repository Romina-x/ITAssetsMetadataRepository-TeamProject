package application;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Hashtable;
import java.util.Map;

import org.junit.jupiter.api.Test;

class AssetTest {

	@Test
	//Test 1, test that Asset constructor returns an Asset object
	void notNullTest() {
		Map<String, String> dict= new Hashtable<String, String>();
        dict.put("Coolness", "FLOAT");
        dict.put("Catchphrase", "STRING");
        dict.put("Copies of Shark Tale owned", "FLOAT");
        Asset testAsset = new Asset(34, "Text File", "What's Poppin'?.txt", "HTTPS:\\What'sPoppin'?.com" , 35, "Java", dict);
		assertNotNull(testAsset);
	}
	//Created empty constructor for Asset
	
	@Test
	//Test 2, test that getOtherAttributes works correctly
	void otherAttributesTest() {
		Map<String, String> dict= new Hashtable<String, String>();
        dict.put("Coolness", "FLOAT");
        dict.put("Catchphrase", "STRING");
        dict.put("Copies of Shark Tale owned", "FLOAT");
        Map<String, AttributeData> dict2 = new Hashtable<String, AttributeData>();
        dict2.put("Coolness", new AttributeData("999"));
        dict2.put("Catchphrase", new AttributeData("Raise the reef!"));
        dict2.put("Copies of Shark Tale owned", new AttributeData("37"));
		Asset otherTest = new Asset(34, "Text File", "What's Poppin'?.txt", "HTTPS:\\What'sPoppin'?.com" , 35, "Java", dict);
		assertEquals(otherTest.getOtherAttributes(), dict2);
	}
	//Added method getOtherAttributes which returns an identical map to dict2
	
	@Test
	//Test 3, test that user input dictionary functions correctly
	void userOtherAttributesTest() {
		Map<String, String> dict= new Hashtable<String, String>();
        dict.put("Coolness", "FLOAT");
        dict.put("Catchphrase", "STRING");
        dict.put("Copies of Shark Tale owned", "FLOAT");
        Map<String, AttributeData> dict2 = new Hashtable<String, AttributeData>();
        dict2.put("Coolness", new AttributeData("998"));
        dict2.put("Catchphrase", new AttributeData("Oscar time!!"));
        dict2.put("Copies of Shark Tale owned", new AttributeData("38"));
		Asset otherTest = new Asset(34, "Text File", "What's Poppin'?.txt", "HTTPS:\\What'sPoppin'?.com" , 35, "Java", dict);
		assertEquals(otherTest.getOtherAttributes(), dict2);
	}
	//Added attribute otherAttributes of type Map<String, AttributeData>
	//Added for loop in constructor to populate keys with keys from parameter map and values with user input values
	//TEST FAILED
	//Added equals method to AttributeData
	//TEST PASSED

}
