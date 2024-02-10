package application;

import static org.junit.jupiter.api.Assertions.*;
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

@ExtendWith(MockitoExtension.class)
@WebMvcTest(MainController.class)
class SearchControllerTest {
  
  @Autowired
  private MockMvc mvc;

  @MockBean
  private AssetRepository assetRepository;

  @MockBean
  private SearchController sc;
  
  @MockBean 
  private TypeRepository tr;

  @MockBean 
  private ActionLogRepository alr; 
  
  @MockBean 
  private MainController mc;
  
  @Test
  void testGetAssetByTitle() throws Exception {
    
    mc.addNewAsset("video","Beans","www.youtube.com", 156, "English");
    String titleToFind = "Beans";
    Asset expectedAsset = new Asset();
    expectedAsset.setTitle(titleToFind);

    when(assetRepository.findAll()).thenReturn(List.of(expectedAsset));

    Asset actualAsset = sc.getAssetByTitle(titleToFind);
    
    assertEquals(expectedAsset.getTitle(), actualAsset.getTitle(),
        "Should return the asset with the specified title");

}

}
