import React from 'react';
import {
    Pressable,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, SIZES, icons } from '../constants'

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
    return (
        <Pressable
            style={{
                width: 200,
                padding: SIZES.margin,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.grayLight,
                ...containerStyle
            }}
        >
            {/* Colories and Favorites */}
            <View style={{
                flexDirection: 'row',
            }}>
                {/* Calories */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <Image
                        source={icons.calories}
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.grayDark,
                            fontSize: SIZES.fontSmaller,
                            lineHeight: 22,
                        }}
                    >
                        {item.calories} Calories
                    </Text>
                </View>

                {/* Favorite */}
                <Image
                    source={icons.love}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: item.isfavorite ? COLORS.primary : COLORS.gray,
                    }}
                />
            </View>

            {/* Image */}
            <View
                style={{
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: -20,
                }}
            >
                <Text style={{
                    fontSize: SIZES.fontRegular,
                }}>
                    {item.name}
                </Text>
                <Text style={{
                    color: COLORS.grayDark,
                    textAlign: 'center',
                    fontSize: SIZES.fontSmaller,
                }}>
                    {item.description}
                </Text>     
                <Text style={{
                    marginTop: SIZES.fieldSpace,
                    textAlign: 'center',
                    fontSize: SIZES.fontLarge,
                }}>
                    R$ {item.price}
                </Text>     
            </View>
        </Pressable>
    )
}

export default VerticalFoodCard;