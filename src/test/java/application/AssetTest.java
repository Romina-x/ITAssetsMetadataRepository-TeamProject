package application;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class AssetTest {

	@Test
	//Test 1, test that Asset constructor returns an Asset object
	void notNullTest() {
		assertNotNull(new Asset(34, "Text File", "What's Poppin'?.txt", "HTTPS:\\What'sPoppin'?.com" , 35, "Java"));
	}

}
