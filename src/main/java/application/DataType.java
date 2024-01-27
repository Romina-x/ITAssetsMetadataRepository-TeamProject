package application;

/**
 * @author Kyle Piazza-Nickson
 * Enum containing the various types of data that can be stored within the AttributeData class.
 */
public enum DataType {
	FLOAT("FLOAT"), STRING("STRING"), LIST("LIST"), INVALID("INVALID");
	
	private String value;

    private DataType(String value) {
    	this.value = value;
	  }
    
    @Override
    public String toString() {
    	return this.value;
    }
	  

}
