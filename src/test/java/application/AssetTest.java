package application;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Dictionary;
import java.util.Hashtable;

import org.junit.jupiter.api.Test;

class AssetTest {

	@Test
	//Test 1, test that Asset constructor returns an Asset object
	void notNullTest() {
		Dictionary<String, String> dict= new Hashtable<>();
        dict.put("Coolness", "FLOAT");
        dict.put("Catchphrase", "STRING");
        dict.put("Copies of Shark Tale owned", "FLOAT");
		assertNotNull(new Asset(34, "Text File", "What's Poppin'?.txt", "HTTPS:\\What'sPoppin'?.com" , 35, "Java", dict));
	}

}
