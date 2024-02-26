package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.ui.Model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;


/**
 * Test suite to validate the functions held within the Main Controller Class.
 *
 * @author Yusur Taha
 * @author Sarah Haines
 */


@ExtendWith(MockitoExtension.class)
@WebMvcTest(MainController.class)
class MainControllerTest {

  @Autowired
  private MockMvc mvc;

  @MockBean
  private AssetRepository assetRepository;
  @MockBean
  private TypeRepository typeRepository;
  @MockBean
  private ActionLogRepository actionLogRepository;
  @MockBean
  private UserRepository userRepository;

  @Autowired
  private MainController mc;


  /**
   * Test successful string response of method which runs the map for the post request of create new
   * asset.
   *
   * @throws Exception , could be any checked exception.
   */
  void testAddNewAsset() throws Exception {
    String requestBody =
        "{\"type\":\"document\", \"title\":\"This is a test document\", \"link\":\"file:///Users/yusur/Downloads/wk1a-combined.pdf\", \"lineNum\":120, \"progLang\":\"Java\", \"isDocumentedIn\":1, \"dependsOn\":2, \"succeededBy\":4, \"customAttribute1\":\"Project1\", \"customAttribute2\":\"Author\", \"customAttribute3\":\"Language\", \"customAttribute4\":\"Subject\"}";

    MvcResult result = mvc.perform(MockMvcRequestBuilders.post("/asset/add")
        .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn();

    assertEquals("Asset saved successfully", result.getResponse().getContentAsString());
  }

  /**
   * Test error string response of method which runs the map for the post request of create new
   * asset.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  void testAddNewAsset_Exception() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(78);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("Java");
    asset1.setTitle("This is a title");
    asset1.setType("Video");

    // Mock the behavior of assetRepository.save() to throw an exception
    when(assetRepository.save(asset1))
        .thenThrow(new RuntimeException("This is a made up exception"));

    // Call the addNewAsset method
    ResponseEntity<String> response = mc.addNewAsset(asset1);

    // Verify that the response is as expected
    assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
    assertEquals("Error: This is a made up exception", response.getBody());
  }

  /**
   * Test string response of the method which runs the map for the post request of create new type.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  void testAddNewType() throws Exception {
    String requestBody =
        "{\"typeName\":\"document\", \"customAttribute1\":\"Size\", \"customAttribute2\":\"Security Level\", \"customAttribute3\":\"Revision\", \"customAttribute4\":\"Author\"}";

    MvcResult result = mvc.perform(MockMvcRequestBuilders.post("/type/add")
        .contentType(MediaType.APPLICATION_JSON).content(requestBody)).andReturn();

    assertEquals("Type saved successfully", result.getResponse().getContentAsString());
  }


  /**
   * Test to validate the string response of the method which allows for population of the attribute
   * data for a specific asset.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  // test 2
  void testAssetForm() throws Exception {
    mvc.perform(MockMvcRequestBuilders.get("/asset/createAsset"))
        .andExpect(MockMvcResultMatchers.status().isOk()) // expects that the request was successful
        .andExpect(MockMvcResultMatchers.view().name("createAsset"))
        .andExpect(MockMvcResultMatchers.model().attributeExists("createAsset"));

  }

  /**
   * Test to validate the string response of method which populates database with asset attributes
   * data.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  // test 3
  void testAssetSubmit() throws Exception {
    // Create mocks for Asset, Model, AssetRepository, and ActionLogRepository
    Asset asset = new Asset();
    Model model = mock(Model.class);
    AssetRepository assetRepository = mock(AssetRepository.class);
    ActionLogRepository actionLogRepository = mock(ActionLogRepository.class);

    // Create an instance of MainController with mocks
    MainController controller = new MainController(assetRepository, actionLogRepository);

    // Mock the behavior of assetRepository.save(asset) to return the asset
    when(assetRepository.save(asset)).thenReturn(asset);

    String result = "";
    // Call the controller method
    result = controller.assetSubmit(asset, model);
    verify(assetRepository).save(asset); // Verify interactions on mock objects

    // Verifies that actionLogRepository.save() is called with any ActionLog object
    verify(actionLogRepository).save(any(ActionLog.class));

    // Verifies that model.addAttribute() is called with "savedAsset" as attribute name
    // And any asset as its value
    verify(model).addAttribute(eq("savedAsset"), any(Asset.class));

    assertEquals("result", result);

  }

  /**
   * Test to validate that upon searching for a specific title, the asset with the same title is
   * retrieved.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  void testGetAssetByTitle() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);
    String titleToFind = "Beans";
    Asset expectedAsset = new Asset();
    expectedAsset.setTitle(titleToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    List<Asset> actualAssets = mc.getAssetByTitle(titleToFind);

    assertEquals(expectedAsset.getTitle(), actualAssets.get(0).getTitle(),
        "Should return an asset with the specified title");

  }

  /**
   * Test to validate that upon searching for a specific title, all assets with the same title are
   * retrieved as a list.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetListByTitle() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setLineNum(123);
    asset2.setLink("randomLink");
    asset2.setProgLang("Java");
    asset2.setTitle("Beans");
    asset2.setType("document");

    mc.addNewAsset(asset2);

    // asset to be added
    Asset asset3 = new Asset();
    asset3.setId(1254);
    asset3.setLineNum(167);
    asset3.setLink("randomLink2");
    asset3.setProgLang("German");
    asset3.setTitle("Beans");
    asset3.setType("mp3");

    mc.addNewAsset(asset3);

    // asset to be added
    Asset asset4 = new Asset();
    asset4.setId(1344);
    asset4.setLineNum(156);
    asset4.setLink("www.youtube.com");
    asset4.setProgLang("English");
    asset4.setTitle("notBeans");
    asset4.setType("Video");

    mc.addNewAsset(asset4);

    List<Asset> expectedAssets = new ArrayList<>();
    when(assetRepository.findAll()).thenReturn(expectedAssets);

    String titleToFind = "Beans";

    // make mock assets and add to list containing expected result
    Asset expectedAsset1 = new Asset();
    expectedAsset1.setTitle(titleToFind);
    expectedAsset1.setType("document");
    expectedAssets.add(expectedAsset1);

    Asset expectedAsset2 = new Asset();
    expectedAsset2.setTitle(titleToFind);
    expectedAsset2.setType("video");
    expectedAssets.add(expectedAsset2);

    Asset expectedAsset3 = new Asset();
    expectedAsset3.setTitle(titleToFind);
    expectedAsset3.setType("mp3");
    expectedAssets.add(expectedAsset3);

    // get assets with title "Beans" and add to list
    List<Asset> actualAssets = mc.getAssetByTitle(titleToFind);

    for (int i = 0; i < expectedAssets.size(); i++) {
      System.out.println("Expected asset title: " + expectedAssets.get(i).getTitle() + "\n"
          + " Type: " + expectedAssets.get(i).getType());
      System.out.println("Result asset title: " + actualAssets.get(i).getTitle() + "\n" + " Type: "
          + actualAssets.get(i).getType() + "\n");

    }


    // check that all assets in database with title "Beans" are returned
    for (int i = 0; i < expectedAssets.size(); i++) {
      assertEquals(expectedAssets.get(i).getTitle(), actualAssets.get(i).getTitle(),
          "Should return a list of assets with the searched title Beans.");
    }

  }

  /**
   * Test to validate that upon searching for a specific type, an asset with the same type is
   * retrieved.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetByType() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("video");

    mc.addNewAsset(asset1);
    String typeToFind = "video";
    Asset expectedAsset = new Asset();
    expectedAsset.setType(typeToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    List<Asset> actualAssets = mc.getAssetByType(typeToFind);

    assertEquals(expectedAsset.getType(), actualAssets.get(0).getType(),
        "Should return an asset with the specified type");

  }

  /**
   * Test to validate that upon searching for a specific type, all assets with the same type are
   * retrieved as a list.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetListByType() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setLineNum(123);
    asset2.setLink("randomLink");
    asset2.setProgLang("Java");
    asset2.setTitle("Beans");
    asset2.setType("document");

    mc.addNewAsset(asset2);

    // asset to be added
    Asset asset3 = new Asset();
    asset3.setId(1254);
    asset3.setLineNum(167);
    asset3.setLink("randomLink2");
    asset3.setProgLang("German");
    asset3.setTitle("Beans");
    asset3.setType("mp3");

    mc.addNewAsset(asset3);

    // asset to be added
    Asset asset4 = new Asset();
    asset4.setId(1344);
    asset4.setLineNum(156);
    asset4.setLink("www.youtube.com");
    asset4.setProgLang("English");
    asset4.setTitle("notBeans");
    asset4.setType("Video");

    mc.addNewAsset(asset4);

    List<Asset> expectedAssets = new ArrayList<>();
    when(assetRepository.findAll()).thenReturn(expectedAssets);

    String typeToFind = "Video";

    // make mock assets and add to list containing expected result
    Asset expectedAsset1 = new Asset();
    expectedAsset1.setTitle("fish");
    expectedAsset1.setType(typeToFind);
    expectedAssets.add(expectedAsset1);

    Asset expectedAsset2 = new Asset();
    expectedAsset2.setTitle("cat");
    expectedAsset2.setType(typeToFind);
    expectedAssets.add(expectedAsset2);

    Asset expectedAsset3 = new Asset();
    expectedAsset3.setTitle("sheep");
    expectedAsset3.setType(typeToFind);
    expectedAssets.add(expectedAsset3);

    // get assets with type "video" and add to list
    List<Asset> actualAssets = mc.getAssetByType(typeToFind);

    for (int i = 0; i < expectedAssets.size(); i++) {
      System.out.println("Asset title: " + expectedAssets.get(i).getTitle() + "\n"
          + " Expected result type: " + expectedAssets.get(i).getType());
      System.out.println("Asset title: " + actualAssets.get(i).getTitle() + "\n"
          + " Expected result type: " + actualAssets.get(i).getType() + "\n");

    }


    // check that all assets in database with type "video" are returned
    for (int i = 0; i < expectedAssets.size(); i++) {
      assertEquals(expectedAssets.get(i).getType(), actualAssets.get(i).getType(),
          "Should return a list of assets with the searched type video.");
    }

  }

  /**
   * Test to validate that upon searching for a specific link, an asset with the same link is
   * retrieved.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetByLink() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("video");

    mc.addNewAsset(asset1);
    String linkToFind = "www.youtube.com";
    Asset expectedAsset = new Asset();
    expectedAsset.setLink(linkToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    List<Asset> actualAssets = mc.getAssetByLink(linkToFind);

    assertEquals(expectedAsset.getLink(), actualAssets.get(0).getLink(),
        "Should return an asset with the specified link");

  }

  /**
   * Test to validate that upon searching for a specific link, all assets with the same link are
   * retrieved as a list.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetListByLink() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setLineNum(123);
    asset2.setLink("randomLink");
    asset2.setProgLang("Java");
    asset2.setTitle("Beans");
    asset2.setType("document");

    mc.addNewAsset(asset2);

    // asset to be added
    Asset asset3 = new Asset();
    asset3.setId(1254);
    asset3.setLineNum(167);
    asset3.setLink("randomLink2");
    asset3.setProgLang("German");
    asset3.setTitle("Beans");
    asset3.setType("mp3");

    mc.addNewAsset(asset3);

    // asset to be added
    Asset asset4 = new Asset();
    asset4.setId(1344);
    asset4.setLineNum(156);
    asset4.setLink("www.youtube.com");
    asset4.setProgLang("English");
    asset4.setTitle("notBeans");
    asset4.setType("Video");

    mc.addNewAsset(asset4);

    List<Asset> expectedAssets = new ArrayList<>();
    when(assetRepository.findAll()).thenReturn(expectedAssets);

    String linkToFind = "www.youtube.com";

    // make mock assets and add to list containing expected result
    Asset expectedAsset1 = new Asset();
    expectedAsset1.setTitle("fish");
    expectedAsset1.setLink(linkToFind);
    expectedAssets.add(expectedAsset1);

    Asset expectedAsset2 = new Asset();
    expectedAsset2.setTitle("cat");
    expectedAsset2.setLink(linkToFind);
    expectedAssets.add(expectedAsset2);

    Asset expectedAsset3 = new Asset();
    expectedAsset3.setTitle("sheep");
    expectedAsset3.setLink(linkToFind);
    expectedAssets.add(expectedAsset3);

    // get assets with link "www.youtube.com" and add to list
    List<Asset> actualAssets = mc.getAssetByLink(linkToFind);

    for (int i = 0; i < expectedAssets.size(); i++) {
      System.out.println("Asset title: " + expectedAssets.get(i).getTitle() + "\n"
          + " Expected result link: " + expectedAssets.get(i).getLink());
      System.out.println("Asset title: " + actualAssets.get(i).getTitle() + "\n"
          + " Expected result link: " + actualAssets.get(i).getLink() + "\n");

    }


    // check that all assets in database with link "www.youtube.com" are returned
    for (int i = 0; i < expectedAssets.size(); i++) {
      assertEquals(expectedAssets.get(i).getType(), actualAssets.get(i).getType(),
          "Should return a list of assets with the searched link 'www.youtube.com'.");
    }

  }

  /**
   * Test to validate that upon searching for a specific programming language, an asset with the
   * same programming language is retrieved.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetByLang() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("video");

    mc.addNewAsset(asset1);
    String langToFind = "English";
    Asset expectedAsset = new Asset();
    expectedAsset.setProgLang(langToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    List<Asset> actualAssets = mc.getAssetByLang(langToFind);

    assertEquals(expectedAsset.getProgLang(), actualAssets.get(0).getProgLang(),
        "Should return an asset with the specified programming language.");

  }

  /**
   * Test to validate that upon searching for a specific language, all assets with the same language
   * are retrieved as a list.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetListByLang() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setLineNum(123);
    asset2.setLink("randomLink");
    asset2.setProgLang("Java");
    asset2.setTitle("Beans");
    asset2.setType("document");

    mc.addNewAsset(asset2);

    // asset to be added
    Asset asset3 = new Asset();
    asset3.setId(1254);
    asset3.setLineNum(167);
    asset3.setLink("randomLink2");
    asset3.setProgLang("German");
    asset3.setTitle("Beans");
    asset3.setType("mp3");

    mc.addNewAsset(asset3);

    // asset to be added
    Asset asset4 = new Asset();
    asset4.setId(1344);
    asset4.setLineNum(156);
    asset4.setLink("www.youtube.com");
    asset4.setProgLang("English");
    asset4.setTitle("notBeans");
    asset4.setType("Video");

    mc.addNewAsset(asset4);

    List<Asset> expectedAssets = new ArrayList<>();
    when(assetRepository.findAll()).thenReturn(expectedAssets);

    String langToFind = "English";

    // make mock assets and add to list containing expected result
    Asset expectedAsset1 = new Asset();
    expectedAsset1.setTitle("fish");
    expectedAsset1.setProgLang(langToFind);
    expectedAssets.add(expectedAsset1);

    Asset expectedAsset2 = new Asset();
    expectedAsset2.setTitle("cat");
    expectedAsset2.setProgLang(langToFind);
    expectedAssets.add(expectedAsset2);

    Asset expectedAsset3 = new Asset();
    expectedAsset3.setTitle("sheep");
    expectedAsset3.setProgLang(langToFind);
    expectedAssets.add(expectedAsset3);

    // get assets with language "English" and add to list
    List<Asset> actualAssets = mc.getAssetByLang(langToFind);

    for (int i = 0; i < expectedAssets.size(); i++) {
      System.out.println("Asset title: " + expectedAssets.get(i).getTitle() + "\n"
          + " Expected result language: " + expectedAssets.get(i).getProgLang());
      System.out.println("Asset title: " + actualAssets.get(i).getTitle() + "\n"
          + " Expected result language: " + actualAssets.get(i).getProgLang() + "\n");

    }


    // check that all assets in database with language "English" are returned
    for (int i = 0; i < expectedAssets.size(); i++) {
      assertEquals(expectedAssets.get(i).getProgLang(), actualAssets.get(i).getProgLang(),
          "Should return a list of assets with the searched language English.");
    }

  }

  /**
   * Test to validate that upon accessing the /asset/find/all path, all data stored about assets in
   * the database, is retrieved as a JSON successfully.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAllAssets() throws Exception {
    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setLineNum(156);
    asset1.setLink("www.youtube.com");
    asset1.setProgLang("English");
    asset1.setTitle("Beans");
    asset1.setType("Video");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setLineNum(123);
    asset2.setLink("randomLink");
    asset2.setProgLang("Java");
    asset2.setTitle("Beans");
    asset2.setType("document");

    mc.addNewAsset(asset2);

    // Mock the behavior of the findAll method to return the mock assets
    when(assetRepository.findAll()).thenReturn(Arrays.asList(asset1, asset2));
    // Perform the GET request
    mvc.perform(MockMvcRequestBuilders.get("/asset/find/all"))
        // Expects that the request was successful
        .andExpect(MockMvcResultMatchers.status().isOk()).andExpect(jsonPath("$.length()").value(2))
        // Check the JSON properties of the first asset in the array
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].id").value(12345))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].type").value("Video"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].title").value("Beans"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].link").value("www.youtube.com"))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].lineNum").value(156))
        .andExpect(MockMvcResultMatchers.jsonPath("$[0].progLang").value("English"));
  }

  /**
   * Test to validate that upon accessing the /asset/find/{id} path, all data stored about asset
   * with unique id in the database, is retrieved as a JSON successfully.
   *
   * @throws Exception , could be any unchecked exception.
   */
  @Test
  void testGetAssetById() throws Exception {

    // asset to be added
    Asset asset1 = new Asset();
    asset1.setId(12345);
    asset1.setTitle("Beans");

    mc.addNewAsset(asset1);

    // asset to be added
    Asset asset2 = new Asset();
    asset2.setId(12332);
    asset2.setTitle("Toast");

    mc.addNewAsset(asset2);


    // Mock the behavior of the findById method to return the asset
    when(assetRepository.findById(12332)).thenReturn(Optional.of(asset2));
    // Perform the GET request
    mvc.perform(MockMvcRequestBuilders.get("/asset/find/{id}", 12332))
        // Check the JSON properties of the returned asset
        .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(12332))
        .andExpect(MockMvcResultMatchers.jsonPath("$.title").value("Toast"));

  }

}
