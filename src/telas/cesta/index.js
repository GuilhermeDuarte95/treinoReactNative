import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Topo from './componentes/topo';
import Detalhes from './componentes/detalhes';
import Item from './componentes/item';
import Texto from '../../componentes/texto'

export default function Cesta ({topo, detalhes, itens}){
    return <>

        <FlatList 
            data={itens.lista} 
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent= {() =>{
                return <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})