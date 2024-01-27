package application;

/**
 * @Author Kyle Piazza-Nickson
 * Container class for all types of data that can be stored in the attribute dictionary for any given asset.
 * Allows for a variety of types of data to be stored in a single data structure.
 */
public class AttributeData <T> {
	
	private DataType type;
	
	private T value;
	
	public AttributeData(T data) {
		this.value = data;
		if (value instanceof String) {
			this.type = DataType.STRING;
		} else {
			this.type = DataType.FLOAT;
		}
	}
	
	public DataType getType() {
		return type;
	}
	
	//public AttributeData(float data) {
		//this.type = DataType.FLOAT;
		
	//}

}
