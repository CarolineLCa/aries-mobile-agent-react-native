import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { SvgProps } from 'react-native-svg'
import Toast from 'react-native-toast-message'

import { Colors, Buttons } from '../Theme'
import CredentialList from '../assets/img/credential-list.svg'
import ScanShare from '../assets/img/scan-share.svg'
import SecureImage from '../assets/img/secure-image.svg'

import { IOnboardingStyleSheet } from './Onboarding'

const imageDisplayOptions = {
  fill: Colors.textColor,
  height: 180,
  width: 180,
}

export const carousel: IOnboardingStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  carouselContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
  },
  pagerContainer: {
    flexShrink: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pagerDot: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.mainColor,
  },
  pagerPosition: {
    position: 'relative',
    top: 0,
  },
  pagerNavigationButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.mainColor,
  },
})

const defaultStyle = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  bodyText: {
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'normal',
    color: Colors.textColor,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
})

const getStartedTouched = async () => {
  Toast.show({
    type: 'success',
    text1: 'Not Implemented',
  })
}

const CustomPageElement = (
  <>
    <View style={{ alignItems: 'center' }}>
      <SecureImage {...imageDisplayOptions} />
    </View>
    <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
      <Text style={[defaultStyle.headerText, { fontSize: 18 }]}>Ornare suspendisse sed nisi lacus</Text>
      <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>
        Enim facilisis gravida neque convallis a cras semper. Suscipit adipiscing bibendum est ultricies integer quis
        auctor elit sed.
      </Text>
    </View>
    <View style={{ marginTop: 'auto', marginBottom: 20 }}>
      <TouchableHighlight
        testID={'dismissButton'}
        accessible={true}
        accessibilityLabel={'Get Started'}
        style={[Buttons.primary, { marginLeft: 20, marginRight: 20 }]}
        underlayColor={Colors.activeMain}
        onPress={getStartedTouched}
      >
        <Text style={Buttons.primaryText}>Get Started!</Text>
      </TouchableHighlight>
    </View>
  </>
)

const guides: Array<{ image: React.FC<SvgProps>; title: string; body: string }> = [
  {
    image: CredentialList,
    title: 'Lorem ipsum dolor sit amet',
    body: 'Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.',
  },
  {
    image: ScanShare,
    title: 'Excepteur sint occaecat ',
    body: 'Mollis aliquam ut porttitor leo a diam sollicitudin tempor.',
  },
]

const createPageWith = (image: React.FC<SvgProps>, title: string, body: string) => {
  return (
    <>
      <View style={{ alignItems: 'center' }}>{image(imageDisplayOptions)}</View>
      <View style={{ marginLeft: 20, marginRight: 20, marginTop: 30 }}>
        <Text style={[defaultStyle.headerText, { fontSize: 18 }]}>{title}</Text>
        <Text style={[defaultStyle.bodyText, { marginTop: 20 }]}>{body}</Text>
      </View>
    </>
  )
}

export const pages: Array<Element> = [...guides.map((g) => createPageWith(g.image, g.title, g.body)), CustomPageElement]