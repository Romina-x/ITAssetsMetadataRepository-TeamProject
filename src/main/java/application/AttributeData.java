package application;

/**
 * @Author Kyle Piazza-Nickson
 * Container class for all types of data that can be stored in the attribute dictionary for any given asset.
 * Allows for a variety of types of data to be stored in a single data structure.
 */
public class AttributeData {
	
	public AttributeData(String data) {
	}
	
	public DataType getType() {
		return DataType.STRING;
	}

}
