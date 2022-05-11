import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
    TextInput,
    FlatList,
    Button,
} from 'react-native';
import { SIZES, COLORS, icons, fakeDataAPI } from '../constants'
import { HorizontalFoodCard, VerticalFoodCard } from '../components';

const Section = ({title, onPress, children}) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.margin,
                    marginTop: 30,
                    marginBottom: 20,    
                }}
            >
                <Text style={{ 
                  flex: 1, 
                  fontSize: SIZES.fontRegular,
                }}>
                    {title}
                </Text>

                <Pressable
                    onPress={onPress}
                >
                    <Text style={{ 
                      color: COLORS.primary, 
                      fontSize: SIZES.fontRegular 
                    }}>
                        Show All
                    </Text>
                </Pressable>
            </View>

            {/* Content */}
            {children}
        </View>
    );
}

const Home = () => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedBasicFilterId, setSelectedBasicFilterId] = React.useState(1);
    const [menuList, setMenuList] = React.useState([]);
    const [recommendList, setRecommendList] = React.useState([]);
    const [popularList, setPopularList] = React.useState([]);

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedBasicFilterId)
    }, []);

    // Handler
    function handleChangeCategory(categoryId, basicFilterId) {
        // Retrieve the recommended menu
        let selectedRecommendList = fakeDataAPI.menu.find(a => a.name == 'Recommended');

        // Retrieve the popular menu
        let selectedPopularList = fakeDataAPI.menu.find(a => a.name == 'Popular');

        // Find the menu based on the menuTypeId
        let selectedMenuList = fakeDataAPI.menu.find(a => a.id == basicFilterId);

        // Set the recommended menu based on categoryId
        setRecommendList(selectedRecommendList?.list.filter(a => a.categories.includes(categoryId)));

        // Set the popular menu based on categoryId
        setPopularList(selectedPopularList?.list.filter(a => a.categories.includes(categoryId)));
        
        // Set the menu based on the category Id
        setMenuList(selectedMenuList?.list.filter(a => a.categories.includes(categoryId)));
    }

    // Renders

    function renderBasicFilter() {
        return (
            <FlatList
                horizontal
                data={fakeDataAPI.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.fieldSpace*2,
                    marginBottom: SIZES.fieldSpace,
                }}
                renderItem={({ item, index }) => (
                    <Pressable
                        style={{
                            marginLeft: index == 0 ? SIZES.margin : SIZES.fieldSpace,
                            marginRight: index == fakeDataAPI.menu.length -1 ? SIZES.margin : 0
                        }}
                        onPress={() => {
                            setSelectedBasicFilterId(item.id);
                            handleChangeCategory(selectedCategoryId, item.id);
                        }}
                    >
                        <Text
                            style={{
                                color: selectedBasicFilterId == item.id ? COLORS.primary : COLORS.black,
                                fontSize: SIZES.fontRegular,
                            }}
                        >
                            {item.name}                            
                        </Text>
                    </Pressable>
                )}    
            />
        );
    }

    function renderRecommendedSection() {
        return (
            <Section
                title='Recommended'
                onPress={() => console.log('Show all recommended')}
            >
                <FlatList 
                    data={recommendList}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <HorizontalFoodCard 
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.margin : SIZES.fieldSpace,
                                marginRight: index == recommendList.length - 1 ? SIZES.margin : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                            onPress={() => console.log('HorizontalFoodCard')}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderPopularSection() {
        return (
            <Section
                title='Popular Near You'
                onPress={() => console.log('Show all popular items')}
            >
                <FlatList 
                    data={recommendList}
                    horizontal
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <VerticalFoodCard 
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.margin : SIZES.fieldSpace,
                                marginRight: index == recommendList.length - 1 ? SIZES.margin : 0,
                            }}
                            item={item}
                            onPress={() => console.log('VerticalFoodCard')}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderFoodCategories() {
        return (
            <FlatList
                data={fakeDataAPI.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                        <Pressable
                            style={{
                                flexDirection: 'row',
                                height: 55,
                                marginTop: SIZES.margin,
                                marginLeft: index == 0 ? SIZES.margin : SIZES.fieldSpace,
                                marginRight: index == fakeDataAPI.categories.length - 1 ? SIZES.margin : 0,
                                paddingHorizontal: SIZES.margin,
                                borderRadius: SIZES.radius,
                                backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.grayLight,
                            }}
                            onPress={() => {
                                setSelectedCategoryId(item.id);
                                handleChangeCategory(item.id, selectedBasicFilterId);
                            }}
                        >
                            <Image 
                                source={item.icon}
                                style={{
                                    marginTop: 5,
                                    height: 50,
                                    width: 50,
                                }}
                            />
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    marginRight: SIZES.margin,
                                    color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                    fontSize: SIZES.fontRegular,
                                }}
                            >
                                {item.name}
                            </Text>
                        </Pressable>
                    )
                }
            />
        );
    }

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 40,
                    marginHorizontal: SIZES.margin,
                    marginVertical: SIZES.margin,
                    paddingHorizontal: SIZES.margin,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.grayLight,
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black,
                    }}
                />
                {/* TextInput */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        fontSize: SIZES.fontRegular,
                    }}
                    placeholder='search food'
                />
                {/* Filter Button */}
                <Pressable
                    onPress={() => console.log('Open Filter Dialog')}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black,
                        }}
                    />
                </Pressable>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Food Categories */}
                        {renderFoodCategories()}

                        {/* Popular Section */}
                        {renderPopularSection()}

                        {/* Recomended Section */}
                        {renderRecommendedSection()}

                        {/* Meny Type */}
                        {renderBasicFilter()}
                    </View>
                }
                renderItem={({item, index}) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.margin,
                                marginBottom: SIZES.fieldSpace,
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110,
                            }}
                            item={item}
                            onPress={() => console.log('horizontafoodcard')}
                        />
                    );
                }}
            />
        </View>
    )
}

export default Home;
