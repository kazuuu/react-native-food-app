import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput, FlatList, Pressable } from 'react-native';

import { COLORS, SIZES, icons, fakeDataAPI } from '../constants'

const HomeScreen = ({ navigation }) => {
  const [textInputBusca, setTextInputBusca] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  function renderCategorias() {
    return (
      <FlatList 
        data={fakeDataAPI.categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item, index }) => (
          <Pressable
            style={{
              flexDirection: 'row',
              backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.grayLight,
              height: 55,
              width: 200,
              marginTop: SIZES.margin,
              paddingHorizontal: SIZES.margin,
              marginLeft: index == 0 ? SIZES.margin : SIZES.fieldSpace,
              marginRight: SIZES.margin,
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Icon  */}
            <Image source={item.icon} 
              style={{
                marginTop: 5,
                height: 20,
                width: 20,
              }}
            />
            
            {/* Nome */}
            <Text>{item.name}</Text>

         </Pressable>
        )}
      style={{}}>

      </FlatList>
    );
  }

  function renderBuscar() {
    return (
      <View style={{
        flexDirection: 'row',
        margin: SIZES.margin,
        padding: SIZES.margin,
        backgroundColor: COLORS.grayLight,
        borderRadius: SIZES.radius,
      }}>
        {/* icon */}
        <Image source={icons.search} 
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* input */}
        <TextInput
          style={{
            flex: 1,
            marginHorizontal: SIZES.margin,
            fontSize: SIZES.fontRegular
          }}
          onChangeText={(value) => setTextInputBusca(value)}
          placeholder='Buscar'
        />

        {/* icon button */}
        <Image source={icons.filter} 
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />
      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
    }}>
      {/* Buscar */}
      {renderBuscar()}

      {/* Categorias */}
      {renderCategorias()}

      {/* Populares */}
      {/* Recomendações */}
      {/* Filtros */}
    </View>
  );
}

export default HomeScreen;