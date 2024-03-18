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
    const t = await handleGetChampion(itemKey);
    t &&
      setModalData({
        ...t,
        image: {
          full: `${DEFAULT_IMAGE_ENDPOINT}/${t.id}_0.jpg`,
        },
      });
    setModalIsOpen(true);
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
        isLoading={detailChampionLoadingState === LoadingStateEnum.PENDING}
      />
    );
  }, [modalData]);

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [modalIsOpen]);

  return (
    <>
      <Container>
        {loadingState === LoadingStateEnum.PENDING ? (
          <LoadingWrapper>
            <BarLoader height={32} width={64} />
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
                key={champion[1].key}
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

      {modalIsOpen && renderModal()}
    </>
  );
};

export default ChampionsLayout;
