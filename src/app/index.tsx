import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFood } from './../components/trending/index';
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from '../components/list';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>
        <Banner/>
        <Search/>
      </View>

      <Section name="Comidas em Alta" label="Veja mais" action={ () => console.log("clicou no veja mais") } size="text-2xl"/>

      <TrendingFood/>

      <Section name="Comidas Novas" label="Veja mais" action={ () => console.log("clicou no veja mais") } size="text-2xl"/>

      <TrendingFood/>

      <Section name="Famosos no DevFood" label="Veja todos" action={ () => console.log("clicou no famosos") } size="text-xl"/>

      <Restaurants/>

      <Section name="Restaurantes" label="Veja todos" action={ () => console.log("clicou no restaurantes") } size="text-xl"/>

      <RestaurantVerticalList/>

    </ScrollView>
  );
}
