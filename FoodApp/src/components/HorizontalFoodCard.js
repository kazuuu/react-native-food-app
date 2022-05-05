import React from 'react';
import {
    Pressable,
    View,
    Text,
    Image,
} from 'react-native';
import { COLORS, SIZES, icons } from '../constants'

const HorizontalFoodCard = ({containerStyle, imageStyle, item, onPress}) => {
    return (
        <Pressable
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.grayLight,
                ...containerStyle
            }}
        >
            {/* Image */}
            <Image 
                source={item.image}
                style={imageStyle}
            />

            {/* Info */}
            <View
                style={{
                    flex: 1,
                }}
            >
                {/* Name */}
                <Text
                    style={{
                        fontSize: SIZES.fontRegular, 
                    }}
                >
                    {item.name}
                </Text>

                {/* Description */}
                <Text
                    style={{
                        color: COLORS.grayDark, 
                        fontSize: SIZES.fontSmall,
                    }}
                >
                    {item.description}
                </Text>

                {/* Price */}
                <Text
                    style={{
                        marginTop: SIZES.margin,
                        fontSize: SIZES.fontLarge,
                    }}
                >
                    {item.price}
                </Text>
            </View>

            {/* Calories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.margin,
                }}
            >
                <Image
                    source={icons.calories}
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                <Text style={{ 
                    color: COLORS.grayDark,
                    fontSize: SIZES.fontSmaller,
                    lineHeight: 22,

                }}>
                    {item.calories} Calories
                </Text>
            </View>

        </Pressable>
    )
}

export default HorizontalFoodCard;