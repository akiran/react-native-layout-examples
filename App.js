import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import FlexboxBasicsLinks from "./examples/flexbox-basics";
import Centering from "./examples/flexbox-basics/Centering";
import FlexDirection from "./examples/flexbox-basics/FlexDirection";

const FlexboxBasicsStack = createStackNavigator(
  {
    FlexboxBasics: FlexboxBasicsLinks,
    FlexDirection,
    Centering
  },
  {
    initialRouteName: "FlexboxBasics"
  }
);
const FlexboxBasics = createAppContainer(FlexboxBasicsStack);

const AppNavigator = createDrawerNavigator(
  {
    FlexboxBasics
  },
  {
    initialRouteName: "FlexboxBasics"
  }
);

export default createAppContainer(AppNavigator);
