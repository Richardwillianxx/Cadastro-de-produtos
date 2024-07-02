import { Stack } from 'expo-router';
import { StyleSheet, View, Text, TextInput,Button, Image  } from 'react-native';
import React, {useState} from 'react';
import { ScreenContent } from '~/components/ScreenContent';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

export default function Home() {

    const [nome, setNome] = useState('');
    const [value, setValue] = useState(null);
    const [subtitulo, setSubtitulo] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [selectedImage, setSelectedImage] = useState('testa');
    const [takenImage, setTakenImage] = useState('teste');

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
     ];

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setSelectedImage(result.assets[0].uri);
        }
      };

      const takePicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        setTakenImage(result.assets[0].uri);
      };

  return (
    <>
      <Stack.Screen options={{ title: 'Cadastro de produto ' }} />


      <View style={styles.container}>
          <TextInput
                style={styles.input}
                placeholder="Nome:"
                onChangeText={newText => setNome(newText)}
                defaultValue={nome}
              />
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
           />

        <View style={styles.inputsJunto}>
              <TextInput
                style={styles.inputSeparado}
                placeholder="R$ Preço Venda"
              />
              <TextInput
                style={styles.inputSeparado}
                placeholder="R$ Preço Compra"
              />
            </View>
       <TextInput
                style={styles.input}
                placeholder="Subtítulo"
                onChangeText={newText => setSubtitulo(newText)}
                defaultValue={subtitulo}
       />
       <TextInput
                 style={styles.descricao}
                 placeholder="Descrição"
                 onChangeText={newText => setDescricao(newText)}
                 defaultValue={descricao}
                 multiline={true}
                 textAlignVertical="top"
        />

     <View style={styles.container}>
      <Button title="Selecionar uma imagem" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}

      <Button title="Tirar uma foto" onPress={takePicture} />
      {takenImage && <Image source={{ uri: takenImage }} style={styles.image} />}
    </View>

      <View style={styles.buttonBlack}>
        <Button
          title="Cadastrar"
          color="#000"
        />
      </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
  },

  buttonBlack: {
    marginTop: 16,
  },
  inputsJunto: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',

   },

  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    resizeMode: 'cover',
  },
  inputSeparado: {
      width: '45%',
      padding: 6,
      borderWidth: 1,
      borderColor: '#000',
      marginTop: 16,
 },

  input: {
   height: 40,
   padding: 6,
   borderWidth: 1,
   borderColor: '#000',
   marginTop: 16,
 },
   dropdown: {
       marginTop: 16,
       height: 40,
       borderBottomColor: 'gray',
       borderWidth: 1,
       borderColor: '#000',

    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

    descricao: {
       height: 80,
       padding: 6,
       borderWidth: 1,
       borderColor: '#000',
       marginTop: 16,
       textAlignVertical: 'top',
       textAlign: 'left',
     },

});
