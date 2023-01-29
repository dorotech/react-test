import React from 'react'
import Modal from 'react-modal'
import { useState,useEffect } from 'react'


import './List.css'

Modal . setAppElement ( '#root' ) ;

const List = () => {

  const [character,useCharacter] = useState([]);
  const [value,setValue] = useState([]);

  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [species,setSpecies] = useState('');
  const [gender,setGender] = useState('');


  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const changeGender = (e) => {
    setGender(e.target.value)
  }

  const changeName = (e) =>{
      setName(e.target.value)
  }
  const changeSpecie = (e) =>{
      setName(e.target.value)
  }

  const changeStatus = (e) =>{
    setStatus(e.target.value)
  }


  
  const getInfo = async () =>{
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&gender=${gender}`;



      const result = await fetch(url);
        const result2 = await result.json()
        useCharacter(result2.results);
        console.log(result2.results);
        

  }
  
  useEffect(()=>{
    getInfo()
  },[gender,status,name,species])
  
  return (
    <div className='body-list'>
        <div className='div-modal'>
          <Modal className='Modal'
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              >
            <br />
            <div className='div-img-card-modal'>
              {value[3]}
            </div>
            <div className='info-card-modal'>
              <span className='span-modal'>Status: </span>{value[1]} <br />
              <span className='span-modal'>Espécie: </span>{value[2]} <br />
              <span className='span-modal'>Origem: </span>{value[4]} <br />
              <span className='span-modal'>Localização: </span>{value[5]} <br />
              {value[6]}
            </div>
            

          </Modal>
        </div>

      <nav className='navbar'>
          <div >     
            <img src="logo.png" alt="" className='img-logo'/>
          </div>
          <div>
              <button className='btn-see-character'>Personagens</button>
          </div>
      </nav>
        <div className='div-hero'>
                          
                  <div className='div-img-left'>
                      <img src="rick_and_morty.svg "  alt="" className='img-rick-and-morty' />
                  </div>


            <div className='text-general'>
                <h3 className='title-hero'>Quão bem você conhece Rick e Morty?</h3>
                <p className='p-hero'>
                    <b>Rick and Morty</b> é uma sitcom americana de ficção científica animada para adultos criada por Justin Roiland e Dan Harmon para o bloco de programação noturna Adult Swim do Cartoon Network. A série segue as desventuras do cientista maluco cínico Rick Sanchez e seu neto de bom coração, mas inquieto, Morty Smith, que dividem seu tempo entre a vida doméstica e as aventuras interdimensionais.
                </p>
                <br />
                <p className='p-hero'>
                Embora você possa curtir Rick and Morty simplesmente como um desenho animado maluco com um pouco de humor grosseiro, você também pode mergulhar mais fundo na condição humana e lutar contra a existência do próprio deus por meio desses personagens. Então, aqui você pode conferir todos eles!
                </p>
            </div>
        </div>

        <section className='section-filter'>
          <div>
              <p> Filtrar por:</p>
          </div>
          <div>
            <span>Nome: </span>
            <input type="text" onChange={changeName} className="inputGeneral"/>
          </div>
          <div>
            <span>Espécie: </span>
            <input type="text" onChange={changeSpecie} className="inputGeneral"/>
          </div>
          <div>
              <span>Gênero: </span>
              <select name="" id=""  onChange={changeGender}>
                <option></option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="genderless">genderless</option>
                <option value="unknown">unknown</option>
              </select>
          </div>
          <div>
            <span>Status: </span>
            <select name="" id=""  onChange={changeStatus}>
                <option></option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
               
              </select>
          </div>
         
        </section>

        <div className='div-wrap-cards' >
            {character.map((item)=>(


              <div key={item.id} className='div-card-character'>
                <div className='div-name-photo'>
                  <h4 className='name-character'><span className='span-name'> Nome:</span> {item.name}</h4> 
                  <a href={item.image} target="_Blank" className='link-see-photo'>Ver Foto</a>
                </div>
                  <div className='div-img-card'>
                    <img src={item.image} alt="" className='img-card'/>
                  </div>
                  <div className='info-character'>
                    <div className='div_gender'>
                      <h4>Gênero: {item.gender}</h4>
                    </div>
                    <div className='div-btn-see-more'>
                      <button className='btn-see-more' onClick={()=> 
                        {setValue(
                        [
                        item.nome,
                        item.status,
                        item.species,
                       <img src={item.image} alt="" />,
                        item.origin.name,
                        item.location.name,
                        ]),openModal()}}>Saber Mais</button>
                    </div>
                  </div>
              </div>


            ))}
        </div>
        
        <section className='footer'>
          <a href="https://junioroliveira-dev.com.br/" target="_Blank" className='link-footer'>Júnior oliveira</a>
        </section>
    </div>
  )
}

export default List