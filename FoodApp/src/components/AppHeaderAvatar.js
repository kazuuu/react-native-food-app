import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { COLORS, SIZES, fakeDataAPI } from '../constants'

const AppHeaderAvatar = ({title}) => {
    return (
        <View>
            {/* Right Component */}
            <Pressable
                style={({pressed}) => [
                    { opacity: pressed ? 0.5 : 1.0, },
                ]}
                onPress={() => console.log('Avatar click')}
            >
                <Image 
                    source={fakeDataAPI?.myProfile?.profile_image}
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: SIZES.radius,
                    }}
                />
            </Pressable>
        </View>
    );
}

export default AppHeaderAvatar;

