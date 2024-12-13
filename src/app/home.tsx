import { Categories, CategoriesProps } from '@/components/categories';
import { PlaceProps } from '@/components/place';
import { Places } from '@/components/places';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';


type MarketsProps = PlaceProps & {

}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
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

  useEffect(() => {
    fetchCategories()
  }, []);

  useEffect(() => {
    fetchMarkets()
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />
      <Places data={markets} />
    </View>)
}