import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Components/Header';
import Card from "../Components/Card";
import { useSelector } from "react-redux";

const LittleCard = ({ name }) => {
    return (
        <View style={{ backgroundColor: "red", height: 50, width: 170, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 22, marginTop: 5 }}>{name}</Text>
        </View>
    );
};

const Explore = () => {
    const carddata = useSelector((state) => state.carddata);

    const renderHeader = () => (
        <>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <LittleCard name={'Gaming'} />
                <LittleCard name={"Trending"} />
                <LittleCard name={"Music"} />
                <LittleCard name={"News"} />
                <LittleCard name={"Films"} />
                <LittleCard name={"Sports"} />
            </View>
            <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>Trending</Text>
        </>
    );

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList
                data={carddata}
                renderItem={({ item }) => (
                    <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                    />
                )}
                keyExtractor={(item, index) => item.id.videoId + index.toString()}
                ListHeaderComponent={renderHeader}
            />
        </View>
    );
};

export default Explore;
