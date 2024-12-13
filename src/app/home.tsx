import { Categories, CategoriesProps } from '@/components/categories';
import { PlaceProps } from '@/components/place';
import { Places } from '@/components/places';
import { api } from '@/services/api';
import { colors } from '@/styles/colors';
import { fontFamily } from '@/styles/font-family';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';

export type MarketsProps = PlaceProps & {
  latitude: number
  longitude: number
}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const [category, setCategory] = useState<string>('146b1a88-b3d3-4232-8b8f-c1f006f1e86d');

  async function fetchCategories() {
    try {
      const { data } = await api.get<CategoriesProps>("/categories")
      setCategories(data)

    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!categories) return

      const { data } = await api.get<MarketsProps[]>("/markets/category/" + category)
      setMarkets(data)

    } catch (error) {
      console.log(error)
      Alert.alert("Locais", "Não foi possível carregar os locais.")
    }
  }


  async function getCurrentLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          "Permissão de Localização",
          "Precisamos da sua permissão para acessar sua localização e mostrar os locais próximos a você. Por favor, habilite a localização nas configurações do dispositivo."
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

    } catch (error) {
      console.log(error)
      Alert.alert(
        "Erro ao Obter Localização",
        "Ocorreu um erro ao tentar acessar sua localização. Verifique se o GPS está ativado e tente novamente."
      );
    }
  }

  useEffect(() => {
    fetchCategories()
    getCurrentLocation()
  }, []);

  useEffect(() => {
    fetchMarkets()
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />

      <MapView style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Marker
          identifier='current'
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude
          }}
          image={require("@/assets/location.png")}
        />

        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={
              {
                latitude: item.latitude,
                longitude: item.longitude
              }
            }
            image={require("@/assets/pin.png")}
          >
            <Callout>
              <View>
                <Text style={{ fontSize: 14, color: colors.gray[600], fontFamily: fontFamily.medium }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: colors.gray[600], fontFamily: fontFamily.regular }}>{item.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}

      </MapView>

      <Places data={markets} />
    </View>)
}