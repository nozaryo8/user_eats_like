import React, { Fragment, useEffect } from 'react';
// styled-componentsを使えるようにする
import styled from 'styled-components';

// apis
import { fetchRestaurants } from '../apis/restaurants';

// images
import MainLogo from '../images/logo.png';
import MainCoverImage from '../images/main-cover-image.png';

//ページの一番上部にあるヘッダー全体を定義
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

//ヘッダーのロゴ
const MainLogoImage = styled.img`
  height: 90px;
`

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

//トップページ真ん中のメイン画像
const MainCover = styled.img`
  height: 600px;
`;

export const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants()
      .then((data) =>
        console.log(data)
      )
  }, [])

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
    </Fragment>
  )
}