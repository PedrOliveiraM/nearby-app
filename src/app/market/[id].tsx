import { Button } from '@/components/button';
import { Loading } from '@/components/loading';
import { Cover } from '@/components/market/cover';
import { Details, PropsDetails } from '@/components/market/details';
import { api } from '@/services/api';
import { styles } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/BottomSheetFlashList';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Modal, ScrollView, View } from 'react-native';

type DataProps = PropsDetails & {
  cover: string
}

export default function Market() {
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState<boolean>(false);
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useLocalSearchParams<{ id: string }>()

  async function fetchMarket() {
    try {
      const { data } = await api.get<DataProps>("/markets/" + params.id)
      setData(data)
      setIsLoading(false)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        { text: "OK", onPress: () => router.back() }
      ])
    }
  }

  function handleOpenCamera() {
    try {
      setIsVisibleCameraModal(true)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir a camera")
      console.error(error)
    }
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id]);

  if (isLoading) return <Loading />

  if (!data) return <Redirect href="/home" />

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data?.cover} />
      <ScrollView>
        <Details data={data} />
      </ScrollView>
      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button onPress={() => setIsVisibleCameraModal(false)}>
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View >
  )
}