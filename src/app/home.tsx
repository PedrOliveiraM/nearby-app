import { Categories, CategoriesProps } from '@/components/categories';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState<string>('');

  async function fetchCategories() {
    try {
      const { data } = await api.get<CategoriesProps>("/categories")
      setCategories(data)

    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Categories data={categories} onSelect={setCategory} selected={category} />
    </View>)
}