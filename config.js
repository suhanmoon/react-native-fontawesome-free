import fontawesome from "@fortawesome/fontawesome";

import brands from '@fortawesome/fontawesome-free-brands';
import regular from "@fortawesome/fontawesome-free-regular";
import solid from "@fortawesome/fontawesome-free-solid";

export const configureFontAwesomeFree = ( prefixType = "regular" ) => {
  fontawesome.config = {
    familyPrefix: prefixTypes[prefixType]
  };

  fontawesome.library.add( brands, regular, solid );
}


export const prefixTypes = {
  regular: "far",
  solid: "fas",
  brands: "fab"
};
