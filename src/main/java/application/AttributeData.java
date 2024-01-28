package application;

import java.util.Objects;

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
		} else if (value instanceof Float){
			this.type = DataType.FLOAT;
		} else {
			this.type = DataType.INVALID;
		}
	}
	
	public DataType getType() {
		return type;
	}
	
	public T getValue() {
		return value;
	}
	
	@Override
	public String toString() {
	    return value.toString();	
	}
	
	 @Override
	 public boolean equals(Object obj) {
		 if (this == obj) {
	       return true;
	     }
	     if (obj == null) {
	       return false;
	     }
	     if (getClass() != obj.getClass()) {
	       return false;
	     }
	     AttributeData other = (AttributeData) obj;
	     return this.type.equals(other.getType()) && 
	     this.value.getClass().equals(other.value.getClass()) && 
	     this.value.equals(other.getValue());
	   }

}
