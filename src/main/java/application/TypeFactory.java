package application;

import java.util.Scanner;
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
/**
 * Creates a data type with multiple attributes.
 * 
 * @author Fawaz 
 */
public class TypeFactory { 
    /**
     * Dictionary to store types and their attributes.
     */
    public Map<String, Map<String, String>> types;
    /**
     * Constructs a new TypeFactory with an empty type dictionary.
     */
    public TypeFactory() {
        types = new HashMap<>();
    }
    /**
     * Creates a new type by adding attributes to it.
     */
    public void createType() {
        Scanner scanner = new Scanner(System.in);

        // Ask for the name of the type
        System.out.print("Enter the name of the type: ");
        String typeName = scanner.nextLine();
        // create dictionary to store attributes
        Map<String, String> attributes = new HashMap<>();
        while (true) {
            // Ask for the attribute name
            System.out.print("Enter attribute name or 'done' to finish: ");
            String attributeName = scanner.nextLine();
            if (attributeName.equalsIgnoreCase("done")) {
                break;
            }
            // Ask for attribute type
            System.out.print("Enter attribute Type or 'done' to finish: ");
            String attributeType = scanner.nextLine();
            if (attributeType.equalsIgnoreCase("done")) {
                break;
            }

            // Store the attribute type in the dictionary with attribute name as key
            attributes.put(attributeName, attributeType);
        }

        // Store attributes in dictionary with type as key
        types.put(typeName, attributes);

        // Close the scanner
        scanner.close();

        // Display all created Types
        System.out.println("Type creation completed.");
        for (Map.Entry<String, Map<String, String>> entry : types.entrySet()) {
          System.out.println(entry.getKey() + ":");
          for (Map.Entry<String, String> attributeEntry : entry.getValue().entrySet()) {
              System.out.println("(" + attributeEntry.getKey() + ", " + attributeEntry.getValue() + ")");
          }
      }
    }
    
    /**
     * Retrieves a list of attributes for a given type name.
     *
     * @param typeName The name of the type.
     * @return A list of attributes for the specified type, or "Type not found." if the type does not exist.
     */
    public List<String> getAttributes(String typeName) {
        List<String> attributes = new ArrayList<>();
        if (types.containsKey(typeName)) {
            Map<String, String> typeAttributes = types.get(typeName);
            for (Map.Entry<String, String> entry : typeAttributes.entrySet()) {
                String attribute = "(" + entry.getKey() + ", " + entry.getValue() + ")";
                attributes.add(attribute);
            }
        } else {
            attributes.add("Type not found.");
        }
        return attributes;
    }

    /**
     * Retrieves the data type of a specific attribute.
     *
     * @param attributeName The name of the attribute.
     * @return The data type of the specified attribute, or "Attribute not found." if the attribute does not exist.
     */
    public String getAttributeType(String attributeName) {
        for (Map<String, String> typeAttributes : types.values()) {
            if (typeAttributes.containsKey(attributeName)) {
                return typeAttributes.get(attributeName);
            }
        }
        return "Attribute not found.";
    }
}
