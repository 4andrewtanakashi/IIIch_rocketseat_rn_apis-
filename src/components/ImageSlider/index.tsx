import React, { useState, useRef } from 'react'
import { FlatList, ViewToken } from 'react-native'

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImage,
  CarImageWrapper
} from './styles'

interface Props {
  imageUrl: string[]
}

interface ChangeImageProps {
  viewableItems: ViewToken[]
  changed: ViewToken[]
}

export function ImageSlider ( {imageUrl} : Props) {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef( (info: ChangeImageProps)  => {
    setImageIndex(info.viewableItems[0].index!)
  } )

  return (
    <Container>
      <ImageIndexes>
      {        
        imageUrl.map( (_, index) => (
          <ImageIndex
            key={index}
            active={imageIndex === index}
          />
       ) )
      }
      </ImageIndexes>

        <FlatList
          data={imageUrl}
          keyExtractor={key => key}
          renderItem={ ( { item } ) => (          
            <CarImageWrapper>
              <CarImage
                source={ {uri: item} }
                resizeMode={'contain'}
              />
            </CarImageWrapper>
          ) }
          showsHorizontalScrollIndicator={false}
          horizontal
          onViewableItemsChanged={indexChanged.current}
        />


    </Container>
  )
}