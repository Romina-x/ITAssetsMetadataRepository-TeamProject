package application;

/**
 * @Author Kyle Piazza-Nickson
 * Container class for all types of data that can be stored in the attribute dictionary for any given asset.
 * Allows for a variety of types of data to be stored in a single data structure.
 */
public class AttributeData {
	
	private DataType type;
	
	public AttributeData(String data) {
		this.type = DataType.STRING;
	}
	
	public DataType getType() {
		return type;
	}
	
	public AttributeData(float data) {
		this.type = DataType.FLOAT;
		
	}

}
