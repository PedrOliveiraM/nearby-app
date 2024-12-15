import { Button } from '@/components/button';
import { Loading } from '@/components/loading';
import { Coupon, Coupons } from '@/components/market/coupons';
import { Cover } from '@/components/market/cover';
import { Details, PropsDetails } from '@/components/market/details';
import { api } from '@/services/api';
import { NearbyStorage } from '@/storage/nearby-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { isLoading } from 'expo-font';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Modal, View } from 'react-native';

type DataProps = PropsDetails & {
  cover: string
}

type ApiCouponResponse = {
  coupon: string
}

export default function Market() {
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("")
  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useLocalSearchParams<{ id: string }>()
  const [_, requestPermission] = useCameraPermissions()
  const [couponIsFetching, setCouponIsFetching] = useState<boolean>(false);
  const qrLock = useRef(false)

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

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        Alert.alert("Câmera", "Você precisa habilitar a camera")
      }
      qrLock.current = false
      setIsVisibleCameraModal(true)

    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir a camera")
      console.error(error)
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponIsFetching(true)
      const { data } = await api.patch<ApiCouponResponse>(`coupons/${id}`)
      Alert.alert("Cupom", data.coupon)

      if (!data.coupon) return

      setCoupon(data.coupon)
      // armazenar o cupom no dispositivo 
      await NearbyStorage.save({
        id: Date.now().toString(),
        code: data.coupon
      })
    }
    catch (error) {
      Alert.alert("Erro", "Não foi possível utilizar o cupom")
      console.error(error)
    } finally {
      setCouponIsFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false)

    Alert.alert("Cupom", "Lembre se que não é possível reutilizar um cupom já resgatado. Deseja realmente resgatar o cupom ? ", [
      { style: "cancel", text: "Não" },
      { text: "Sim", onPress: () => getCoupon(id) },
    ])
  }

  useEffect(() => {
    fetchMarket()
  }, [params.id, coupon]);

  if (isLoading) return <Loading />

  if (!data) return <Redirect href="/home" />

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={data?.cover} />
      <Details data={data} />

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => handleUseCoupon(data), 500
              )
            }
          }}
        />

        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button onPress={() => setIsVisibleCameraModal(false)} isLoading={couponIsFetching}>
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal >
    </View >
  )
}