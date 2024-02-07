package application;

/**
 * This enum holds possible roles that can be held by a user.
 * @author - Kyle Piazza-Nickson
 */
public enum Permissions {
	ADMIN("Admin"), USER("User"), VIEWER("Viewer"),;
	
	private String value;
	
	private Permissions(String value) {
		this.value = value;
	}
	
	@Override
	public String toString() {
		return this.value;
	}
	

}
