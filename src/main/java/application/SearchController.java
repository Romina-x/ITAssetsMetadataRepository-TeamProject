package application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SearchController {
  
  @Autowired
  private AssetRepository assetRepository;


  @Autowired
  public SearchController(AssetRepository assetRepository) {
    this.assetRepository = assetRepository;
  }
  
  @GetMapping(path = "/asset/find/{title}")
  public @ResponseBody Asset getAssetByTitle(@RequestParam String title) {
   Iterable<Asset> allAssets = assetRepository.findAll(); // find collection of assets which can be
                                                           // iterated over
    for (Asset asset : allAssets) { // look through collection of assets 
      System.out.println(asset.getTitle());
      if (asset.getTitle().equals(title)) {
        return asset;
      }
    }
    return null;
  }
}
