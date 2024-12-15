import AsyncStorage from "@react-native-async-storage/async-storage";

const NEARBY_STORAGE_KEY = "nearby-storage";

export type NearbyStorage = {
  id: string;
  code: string;
};

async function get(): Promise<NearbyStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(NEARBY_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    console.error("Erro ao obter dados do AsyncStorage:", error);
    return [];
  }
}

async function save(newLink: NearbyStorage): Promise<void> {
  try {
    const storage = await get();
    const updated = JSON.stringify([...storage, newLink]);
    await AsyncStorage.setItem(NEARBY_STORAGE_KEY, updated);
  } catch (error) {
    console.error("Erro ao salvar no AsyncStorage:", error);
    throw error;
  }
}

async function remove(id: string): Promise<void> {
  try {
    const storage = await get();
    const updated = JSON.stringify(storage.filter((link) => link.id !== id));
    await AsyncStorage.setItem(NEARBY_STORAGE_KEY, updated);
  } catch (error) {
    console.error("Erro ao remover do AsyncStorage:", error);
    throw error;
  }
}

export const NearbyStorage = { get, save, remove };
