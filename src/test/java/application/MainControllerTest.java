package application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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

    Asset actualAsset = mc.getAssetByTitle(titleToFind);

    assertEquals(expectedAsset.getTitle(), actualAsset.getTitle(),
        "Should return the asset with the specified title");

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
    expectedAsset.setTitle(typeToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    Asset actualAsset = mc.getAssetByType(typeToFind);

    assertEquals(expectedAsset.getType(), actualAsset.getType(),
        "Should return the asset with the specified type");

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
    expectedAsset.setTitle(linkToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    Asset actualAsset = mc.getAssetByLink(linkToFind);

    assertEquals(expectedAsset.getLink(), actualAsset.getLink(),
        "Should return the asset with the specified link");

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
    expectedAsset.setTitle(langToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    Asset actualAsset = mc.getAssetByLink(langToFind);

    assertEquals(expectedAsset.getProgLang(), actualAsset.getProgLang(),
        "Should return the asset with the specified programming language");

  }



}
