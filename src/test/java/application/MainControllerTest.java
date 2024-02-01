package application;

import static org.junit.jupiter.api.Assertions.*;
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
class MainControllerTest {

  @Autowired
  private MockMvc mvc;

  @MockBean
  private AssetRepository assetRepository;

  @Test
  void testAddNewAsset() throws Exception {
    MvcResult result = mvc.perform(MockMvcRequestBuilders.post("/asset/add")
        .param("type", "document").param("title", "This is a test document")
        .param("link", "file:///Users/yusur/Downloads/wk1a-combined.pdf").param("lineNum", "120")
        .param("progLang", "Java")).andReturn();

    assertEquals("Saved", result.getResponse().getContentAsString());
  }
}
