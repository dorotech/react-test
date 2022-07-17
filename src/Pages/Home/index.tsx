import { useEffect } from 'react';
import { BiCog } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';

import { useHome } from './useHome';
import { Container, ModalDatails } from './styles';

export function Home() {
  const { FUNCS, STATES } = useHome();

  useEffect(() => {
    FUNCS.getCharactersAndSetInStage();
  }, [FUNCS]);

  return (
    <>
      <Container>
        <header>
          <div className="Header-separete-filters">
            <div className="Header-group-inputs">
              <input type="text" />
              <button>
                <AiOutlineSearch size={16} />
              </button>
            </div>

            <button>
              <BiCog size={14} />
            </button>
          </div>

          <div className="Header-footer">
            <div onClick={() => FUNCS.handleAlterLimitInPage(5)}>
              <input
                type="radio"
                id="V_05"
                name="count"
                checked={STATES.limit === 5}
              />
              <label htmlFor="V_05">05</label>
            </div>

            <div onClick={() => FUNCS.handleAlterLimitInPage(10)}>
              <input
                type="radio"
                id="V_10"
                name="count"
                checked={STATES.limit === 10}
              />
              <label htmlFor="V_10">10</label>
            </div>

            <div onClick={() => FUNCS.handleAlterLimitInPage(20)}>
              <input
                type="radio"
                id="V_20"
                name="count"
                checked={STATES.limit === 20}
              />
              <label htmlFor="V_20">20</label>
            </div>
          </div>
        </header>

        <main>
          {STATES.listCharacters
            .filter((_, i) => i < STATES.limit)
            .map(({ id, image, name, gender, species, status }) => (
              <div key={id} className="Main-card">
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
            ))}
        </main>
      </Container>

      <ModalDatails>
        <div className="Modal-background"></div>
        <div className="Modal-content">
          <header>
            <AiOutlineCloseCircle />
          </header>

          <main>
            <div>
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt=""
              />
            </div>

            <div className="Modal-Description-Infos">
              <strong>Name</strong>
              <div>
                <span>Estatus: </span>
                <span>Tipo: </span>
                <span>Especies: </span>
                <span>Genero: </span>
                <span>Data de criação: </span>
              </div>
            </div>
          </main>
        </div>
      </ModalDatails>
    </>
  );
}
