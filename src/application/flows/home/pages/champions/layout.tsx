import React, { useCallback, useEffect, useState } from 'react';
import { ChampionsLayoutProps } from './champions.types';
import {
  DEFAULT_IMAGE_ENDPOINT,
  DEFAULT_SPLASH_ENDPOINT,
} from '../../../../../infra/services/api';
import {
  Container,
  ItemContainer,
  LoadingWrapper,
  StyledImg,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';
import Spinner from '../../../../components/layout/spinner';
import { LoadingStateEnum } from '../../../../ts/types/loading';
import Modal from '../../../../components/layout/modal';
import { IChampion } from '../../../../../infra/model/champions/IChampion';
import useChampions from '../../../../hooks/useChampions';

const ChampionsLayout: React.FC<ChampionsLayoutProps> = ({
  championsData,
  loadingState,
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

  const { champion, getChampion, loadingStateChampionDetail, handleChampion } =
    useChampions();

  const requestChampion = async (itemKey: string) => {
    const t = await getChampion(itemKey);
    t &&
      setModalData({
        ...t,
        image: { full: `${DEFAULT_SPLASH_ENDPOINT}/${t.id}_0.jpg` },
      });
    setModalIsOpen(true);
  };

  const renderModal = useCallback(() => {
    return (
      <Modal
        imgSrc={modalData.image.full}
        id={modalData.id}
        title={modalData.name}
        subtitle={modalData.title}
        detail={modalData.lore}
        setModalIsOpen={setModalIsOpen}
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
            <Spinner indicatorColor="#FFFFFF" />
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
