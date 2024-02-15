package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.ui.Model;

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
   * Test string response of method which runs the map for the post request of create new asset.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  // test 1
  void testAddNewAsset() throws Exception {
    MvcResult result = mvc.perform(MockMvcRequestBuilders.post("/asset/add")
        .param("type", "document").param("title", "This is a test document")
        .param("link", "file:///Users/yusur/Downloads/wk1a-combined.pdf").param("lineNum", "120")
        .param("progLang", "Java")).andReturn();
    assertEquals("Saved", result.getResponse().getContentAsString());
  }

  /**
   * Test string response of the method which runs the map for the post request of create new type.
   *
   * @throws Exception , could be any checked exception.
   */
  @Test
  void testAddNewType() throws Exception {
    MvcResult result =
        mvc.perform(MockMvcRequestBuilders.post("/type/add").param("type", "document")
            .param("customAttribute1", "Size").param("customAttribute2", "Security Level")
            .param("customAttribute3", "Revision").param("customAttribute4", "Author")).andReturn();

    assertEquals("Saved", result.getResponse().getContentAsString());

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

    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
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

    // Add actual assets to database
    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
    mc.addNewAsset("document", "Beans", "randomLink", 123, "Java");
    mc.addNewAsset("mp3", "Beans", "randomLink2", 167, "German");
    mc.addNewAsset("video", "notBeans", "www.youtube.com", 156, "English");

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

    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
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

    // Add actual assets to database
    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
    mc.addNewAsset("document", "Beans", "randomLink", 123, "Java");
    mc.addNewAsset("mp3", "Beans", "randomLink2", 167, "German");
    mc.addNewAsset("video", "notBeans", "www.youtube.com", 156, "English");

    List<Asset> expectedAssets = new ArrayList<>();
    when(assetRepository.findAll()).thenReturn(expectedAssets);

    String typeToFind = "video";

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

    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
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

    // Add actual assets to database
    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
    mc.addNewAsset("document", "Beans", "www.youtube.com", 123, "Java");
    mc.addNewAsset("mp3", "Beans", "randomLink2", 167, "German");
    mc.addNewAsset("video", "notBeans", "www.youtube.com", 156, "English");

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

    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
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

    // Add actual assets to database
    mc.addNewAsset("video", "Beans", "www.youtube.com", 156, "English");
    mc.addNewAsset("document", "Beans", "www.youtube.com", 123, "Java");
    mc.addNewAsset("mp3", "Beans", "randomLink2", 167, "German");
    mc.addNewAsset("video", "notBeans", "www.youtube.com", 156, "English");

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



}
