import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
  return (

    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars3.githubusercontent.com/u/57274277?s=460&u=94ffa74a3954ea14c61b639944995d78c9b0438c&v=4' }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Carlos Sergio</Text>
          <Text style={styles.subject}>Programação</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        {'\n'} {'\n'}
        Laboriosam nulla sint exercitationem aliquam soluta nisi vel. Nemo excepturi aliquid consequuntur, culpa cum voluptatum ab nesciunt molestiae amet est aut enim?
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
           {/*<Image source={heartOutlineIcon}></Image>*/}
            <Image source={unfavoriteIcon}></Image>
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}></Image>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}
export default TeacherItem
