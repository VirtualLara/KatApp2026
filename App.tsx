import {createStaticNavigation, } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/presentation/views/home/Home';
import { RegisterScreen } from './src/presentation/views/register/Register';
import { SafeAreaProvider, SafeAreaView,  } from 'react-native-safe-area-context';
import { StyleSheet, StatusBar } from 'react-native';
import { MyColors } from './src/presentation/theme/AppTheme';


export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    HomeScreen: {
      screen: HomeScreen,
      options: {
        headerShown: false, //mostrar u ocultar nombre
        title: 'HomeScreen',
      },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      options: {
        title: 'Nuevo usuario',
        headerStyle: { backgroundColor: MyColors.safeAreaBarNavigation, }, //Estilo de la barra navegaci{on
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider >
      <StatusBar barStyle="light-content" backgroundColor={MyColors.safeAreaBarNavigation} />
      {/* <StatusBar barStyle="light-content" backgroundColor={MyColors.safeAreaBarNavigation} /> */}
      {/* <StatusBar barStyle="dark-content" backgroundColor={MyColors.safeAreaBarNavigation} /> */}
        <SafeAreaView style={ styles.container }>
            <Navigation/>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.safeAreaBarNavigation,
  },
})