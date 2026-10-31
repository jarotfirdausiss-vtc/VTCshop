import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Image, StatusBar, Alert, Linking } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = { primary: '#EE4D2D', light: '#FF6B35', bg: '#F5F5F5', white: '#fff', gray: '#888' };
const PRODUCTS = [
  { id: 1, name: 'Jam Tangan Pria VTC Analog Waterproof Mewah Original', price: 189000, ori: 299000, sold: '2.1rb', rating: 4.9, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400' },
  { id: 2, name: 'Kacamata Sunglasses Polarized UV400 VTC Fashion', price: 75000, ori: 150000, sold: '5.3rb', rating: 4.8, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400' },
  { id: 3, name: 'Set Alat Pancing Lengkap Rod Reel Carbon 2.1M', price: 245000, ori: 350000, sold: '980', rating: 4.7, img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400' },
  { id: 4, name: 'Kemeja Pria Premium Lengan Panjang', price: 89000, ori: 150000, sold: '3.2rb', rating: 4.8, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400' },
  { id: 5, name: 'Smartphone 6.5 inch RAM 8GB Garansi', price: 1899000, ori: 2500000, sold: '1.2rb', rating: 4.9, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400' },
  { id: 6, name: 'Sepatu Sneakers Trendy Import', price: 125000, ori: 200000, sold: '4.5rb', rating: 4.8, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
  { id: 7, name: 'Tas Selempang Kulit Asli VTC Original', price: 155000, ori: 250000, sold: '2.8rb', rating: 4.9, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400' },
  { id: 8, name: 'Paket Sembako Beras 10kg + Minyak + Gula', price: 165000, ori: 200000, sold: '6.1rb', rating: 4.9, img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
];
export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const addToCart = (item) => { setCart([...cart, item]); Alert.alert('Berhasil', item.name.substring(0,30) + ' masuk keranjang!'); };
  const openWA = () => { Linking.openURL('https://wa.me/6283878502333?text=Halo%20Admin%20VTC%20SHOPP'); };
  const filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <LinearGradient colors={[COLORS.primary, COLORS.light]} style={styles.header}>
        <View style={styles.top}><Text style={styles.logo}>VTC SHOPP</Text><View style={styles.icons}><TouchableOpacity onPress={openWA}><Ionicons name="chatbubble-ellipses" size={24} color="#fff" /></TouchableOpacity><TouchableOpacity style={{marginLeft:12}}><Ionicons name="notifications" size={24} color="#fff" /></TouchableOpacity><TouchableOpacity style={{marginLeft:12}}><Ionicons name="cart" size={24} color="#fff" /><View style={styles.badge}><Text style={styles.badgeText}>{cart.length}</Text></View></TouchableOpacity></View></View>
        <View style={styles.searchBox}><Ionicons name="search" size={20} color={COLORS.gray} /><TextInput placeholder="Cari di VTC SHOPP Lengkap" style={styles.input} value={search} onChangeText={setSearch} /></View>
      </LinearGradient>
      <ScrollView><View style={styles.flash}><Text style={styles.flashText}>FLASH SALE 70% - GRATIS ONGKIR - WA 083878502333</Text></View><FlatList data={filtered} numColumns={2} keyExtractor={i=>i.id.toString()} scrollEnabled={false} columnWrapperStyle={{justifyContent:'space-between', paddingHorizontal:10}} renderItem={({item})=> (<TouchableOpacity style={styles.card} onPress={()=>addToCart(item)}><Image source={{uri:item.img}} style={styles.cardImg} /><View style={{padding:8}}><Text numberOfLines={2} style={{fontSize:12}}>{item.name}</Text><Text style={{color:COLORS.primary, fontWeight:'bold', marginTop:4}}>Rp{item.price.toLocaleString('id-ID')}</Text><Text style={{fontSize:10, color:COLORS.gray}}>★ {item.rating} | {item.sold} terjual</Text></View></TouchableOpacity>)} /><View style={{height:100}} /></ScrollView>
      <TouchableOpacity style={styles.waFloat} onPress={openWA}><FontAwesome5 name="whatsapp" size={28} color="#fff" /></TouchableOpacity>
      <View style={styles.bottom}><View style={styles.navItem}><Ionicons name="home" size={24} color={COLORS.primary} /><Text style={[styles.navText,{color:COLORS.primary}]}>Beranda</Text></View><View style={styles.navItem}><Ionicons name="grid" size={24} color={COLORS.gray} /><Text style={styles.navText}>Kategori</Text></View><View style={styles.navItem}><Ionicons name="videocam" size={24} color={COLORS.gray} /><Text style={styles.navText}>Live</Text></View><View style={styles.navItem}><Ionicons name="cart" size={24} color={COLORS.gray} /><Text style={styles.navText}>Keranjang ({cart.length})</Text></View><View style={styles.navItem}><Ionicons name="person" size={24} color={COLORS.gray} /><Text style={styles.navText}>Akun</Text></View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:COLORS.bg}, header:{paddingTop:40, paddingBottom:12, paddingHorizontal:12}, top:{flexDirection:'row', alignItems:'center', marginBottom:10}, logo:{color:'#fff', fontWeight:'900', fontSize:20}, icons:{flexDirection:'row', marginLeft:'auto'}, badge:{position:'absolute', top:-6, right:-8, backgroundColor:'#fff', borderRadius:10, width:16, height:16, justifyContent:'center', alignItems:'center'}, badgeText:{fontSize:10, color:COLORS.primary, fontWeight:'bold'}, searchBox:{flexDirection:'row', alignItems:'center', backgroundColor:'#fff', borderRadius:10, paddingHorizontal:12, height:44}, input:{flex:1, marginLeft:8, fontSize:13}, flash:{backgroundColor:'#FF512F', margin:10, borderRadius:10, padding:10}, flashText:{color:'#fff', fontWeight:'bold', fontSize:12, textAlign:'center'}, card:{width:'48.5%', backgroundColor:'#fff', borderRadius:10, marginBottom:10, overflow:'hidden'}, cardImg:{width:'100%', height:140}, waFloat:{position:'absolute', bottom:70, right:16, width:56, height:56, borderRadius:28, backgroundColor:'#25D366', justifyContent:'center', alignItems:'center', elevation:5}, bottom:{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#fff', paddingVertical:8, borderTopWidth:1, borderColor:'#eee', position:'absolute', bottom:0, left:0, right:0}, navItem:{alignItems:'center'}, navText:{fontSize:10, color:COLORS.gray},
});
