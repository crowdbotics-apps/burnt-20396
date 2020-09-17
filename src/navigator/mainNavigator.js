import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList103276Navigator from '../features/ArticleList103276/navigator';
import Maps103263Navigator from '../features/Maps103263/navigator';
import BlankScreen0103258Navigator from '../features/BlankScreen0103258/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList103276: { screen: ArticleList103276Navigator },
Maps103263: { screen: Maps103263Navigator },
BlankScreen0103258: { screen: BlankScreen0103258Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
