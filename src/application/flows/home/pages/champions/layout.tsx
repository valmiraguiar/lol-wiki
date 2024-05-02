import React, { useCallback, useEffect, useState } from 'react';
import { ChampionsLayoutProps } from './champions.types';
import {
  Container,
  ItemContainer,
  LoadingWrapper,
  StyledImg,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';
import { LoadingStateEnum } from '../../../../ts/types/loading';
import { IChampion } from '../../../../../infra/model/champions/IChampion';
import ChampionDetailModal from './components/champion-detail-modal';
import { BarLoader } from 'react-spinners';
import { DEFAULT_IMAGE_ENDPOINT } from '../../../../../infra/services/constants/constants';

const ChampionsLayout: React.FC<ChampionsLayoutProps> = ({
  championsData,
  loadingState,
  detailChampionLoadingState,
  handleGetChampion,
}) => {
  const [hoveredItem, setHoveredItem] = useState<number>(-1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IChampion>({
    version: '',
    id: '',
    key: '',
    name: '',
    title: '',
    lore: '',
    tags: '',
    image: {
      full: '',
    },
  });

  const requestChampion = async (itemKey: string) => {
    setModalIsOpen(true);
    const data = await handleGetChampion(itemKey);

    data &&
      setModalData({
        ...data,
        image: {
          full: `${DEFAULT_IMAGE_ENDPOINT}/${data.id}_0.jpg`,
        },
      });
  };

  const handleOnKeyPressed = (keyPressed: string, itemKey: string) => {
    if (keyPressed === ' ' || keyPressed === 'Enter') {
      requestChampion(itemKey);
    }
  };

  const renderModal = useCallback(() => {
    return (
      <ChampionDetailModal
        imgSrc={modalData.image.full}
        id={modalData.id}
        title={modalData.name}
        subtitle={modalData.title}
        detail={modalData.lore}
        setModalIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}
        isLoading={detailChampionLoadingState === LoadingStateEnum.PENDING}
      />
    );
  }, [modalIsOpen, modalData, detailChampionLoadingState]);

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [modalIsOpen]);

  return (
    <>
      {modalIsOpen && renderModal()}
      <Container>
        {loadingState === LoadingStateEnum.PENDING ? (
          <LoadingWrapper>
            <BarLoader color="#ffffff" />
          </LoadingWrapper>
        ) : (
          <Wrapper>
            {Object.entries(championsData).map((champion, index) => (
              <ItemContainer
                onMouseEnter={() => setHoveredItem(index)}
                onMouseOut={() => setHoveredItem(-1)}
                onClick={() => {
                  requestChampion(champion[0]);
                }}
                onKeyDown={event => handleOnKeyPressed(event.key, champion[0])}
                key={champion[1].key}
                tabIndex={0}
              >
                <StyledImg
                  layoutId={champion[1].id}
                  alt="Champion"
                  src={`${DEFAULT_IMAGE_ENDPOINT}/${champion[0]}_0.jpg`}
                  selected={hoveredItem === index ? true : undefined}
                />
                <TitleContainer
                  selected={hoveredItem === index ? true : undefined}
                >
                  <Title layoutId={`title-${champion[1].name}`}>
                    {`${champion[1].name}`.toUpperCase()}
                  </Title>
                </TitleContainer>
              </ItemContainer>
            ))}
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default ChampionsLayout;
