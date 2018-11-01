import React, { Component }  from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Home } from './views/Home';
import {Details} from './views/Details';
import {DotIndicatorPage} from './views/DotIndicatorPage';
import {LottieViewPage} from './views/LottieViewPage';
import { DialogPOCPage } from './views/DiologPage';
import { SideMenu } from './views/SideMenu';
import {DbAndLocalStorage} from './views/DbAndLocalStorage';
import {BasicReactElementsPage} from './views/BasicReactElementsPage';

export class RouterNavigator extends Component {
  render() {
  return (
    <Router animationEnabled={false}
    >
      <Scene key="root" initial>
        <Scene key="HomePage"
          component={Home}
          title="Home"
          sceneStyle={{paddingTop: 64}}
          initial />
        <Scene key="HomePageReset"
          type="reset"
          component={Home}
          title="Home Reset"
          sceneStyle={{paddingTop: 64}}
           />
        <Scene key="DetailsPage"
          component={Details}
          title="Detsil"
          sceneStyle={{paddingTop: 64}}
          />
         <Scene key="BasicReactElementsPage"
          component={BasicReactElementsPage}
          title="Basic React Elements"
          sceneStyle={{paddingTop: 64}}
          />

         <Scene key="DotIndicatorPage"
          component={DotIndicatorPage}
          title="Detsil"
          sceneStyle={{paddingTop: 64}}
          />

          <Scene key="LottieViewPage"
          component={LottieViewPage}
          title="Detsil"
          sceneStyle={{paddingTop: 64}}
          />
          <Scene key="DialogPOCPage"
          component={DialogPOCPage}
          title="DialogPOC"
          sceneStyle={{paddingTop: 64}}
          />
          <Scene key="DbAndLocalStorage"
          component={DbAndLocalStorage}
          title="DbAndLocalStorage"
          sceneStyle={{paddingTop: 64}}
          />
      <Scene key="drawer" drawer = {true} contentComponent={SideMenu} drawerPosition="right" drawerWidth={200} drawerLabel="Hi" hideNavBar>
            <Scene key="HomePage1" component={Home} title="HomePage"/>
            <Scene key="DialogPOCPage1" component={DialogPOCPage} title="DialogPOCPage"/>
    </Scene>
      </Scene>


  </Router>
  );
}
}


