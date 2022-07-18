import { useEffect } from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import { useHome } from './useHome';
import { Container, ModalDatails } from './styles';
import { ButtonTheme } from '../../Components/ButtonTheme';

interface I_PROPS_HOME {
  alterTheme(): void;
  darkModeIsActived: boolean;
}

export function Home({ alterTheme, darkModeIsActived }: I_PROPS_HOME) {
  const { FUNCS, STATES, REFS } = useHome();
  const { getCharactersAndSetInStage } = FUNCS;

  useEffect(() => {
    getCharactersAndSetInStage(null);
  }, [getCharactersAndSetInStage]);

  return (
    <>
      <Container isModal={STATES.modalDetailsIsOpen}>
        <header>
          <div className="Header-separete-filters">
            <form className="Header-group-inputs" onSubmit={FUNCS.handleSubmit}>
              <input type="text" placeholder="Nome" ref={REFS.inputNameRef} />

              <select ref={REFS.selectGenderRef} name="" id="">
                <option value="">Gênero</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select name="" id="" ref={REFS.selectSpeciesRef}>
                <option value="">Espécie</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
              </select>

              <select name="" id="" ref={REFS.selectStatusRef}>
                <option value="">status</option>
                <option value="Alive">Alive</option>
                <option value="unknown">unknown</option>
                <option value="Dead">Dead</option>
              </select>

              <button>
                <AiOutlineSearch size={16} />
              </button>
            </form>

            <ButtonTheme active={darkModeIsActived} alterActive={alterTheme} />
          </div>

          <div className="Header-footer">
            <div>
              <input
                type="radio"
                id="V_05"
                name="count"
                checked={STATES.limit === 5}
                onChange={() => FUNCS.handleAlterLimitInPage(5)}
              />
              <label htmlFor="V_05">05</label>
            </div>

            <div>
              <input
                type="radio"
                id="V_10"
                name="count"
                checked={STATES.limit === 10}
                onChange={() => FUNCS.handleAlterLimitInPage(10)}
              />
              <label htmlFor="V_10">10</label>
            </div>

            <div>
              <input
                type="radio"
                id="V_20"
                name="count"
                checked={STATES.limit === 20}
                onChange={() => FUNCS.handleAlterLimitInPage(20)}
              />
              <label htmlFor="V_20">20</label>
            </div>
          </div>
        </header>

        <main>
          {STATES.listCharacters
            .filter((_, i) => i < STATES.limit)
            .map(
              ({ id, image, name, gender, species, status, type, created }) => (
                <div
                  key={id}
                  className="Main-card"
                  onClick={() =>
                    FUNCS.hanldeAlterModalDetails({
                      id,
                      image,
                      name,
                      gender,
                      species,
                      status,
                      type,
                      created
                    })
                  }
                >
                  <img src={image} alt="" />

                  <div className="Main-card-descriptions">
                    <div>
                      <strong>{name}</strong>
                      <span>
                        {gender} - {species}{' '}
                      </span>
                      <span>{status}</span>
                    </div>
                  </div>
                </div>
              )
            )}
        </main>
      </Container>

      {STATES.modalDetailsIsOpen && (
        <ModalDatails>
          <div
            className="Modal-background"
            onClick={() => FUNCS.hanldeAlterModalDetails()}
          ></div>
          <div className="Modal-content">
            <header>
              <AiOutlineCloseCircle
                onClick={() => FUNCS.hanldeAlterModalDetails()}
              />
            </header>

            <main>
              <div>
                <img src={STATES.characterSelected.image} alt="" />
              </div>

              <div className="Modal-Description-Infos">
                <strong>{STATES.characterSelected.name}</strong>
                <div>
                  <span>Estatus: {STATES.characterSelected.status}</span>
                  <span>Especies: {STATES.characterSelected.species}</span>
                  <span>Genero: {STATES.characterSelected.gender}</span>
                  <span>Tipo: {STATES.characterSelected.type}</span>
                  <a
                    href={STATES.characterSelected.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acessar imagem
                  </a>
                </div>
              </div>
            </main>
          </div>
        </ModalDatails>
      )}
    </>
  );
}
