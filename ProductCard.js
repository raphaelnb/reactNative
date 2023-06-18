import React from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Body, Right } from "native-base";
import Rating from './Rating'

export default function ProductCard({ data }) {
    return (
        <Card style={{ flex: 0 }}>
            <CardItem>
                <Left>
                    <Body>
                        <Text>{ data.productName }</Text>
                        <Text note>{ data.releasedDate }</Text>
                    </Body>
                </Left>
                <Right>
                 
                </Right>
            </CardItem>
            <CardItem>
                <Body>
                    <Image source={{ uri: data.imageUrl}} style={{ height: 100, width: auto, flex: 1 }} />
                    <Text>{ data.description }</Text>
                </Body>
            </CardItem>
        </Card>
    )
}