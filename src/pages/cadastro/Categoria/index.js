import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
  const [categorias, setCategorias] = useState([])

  const valoresIniciais = {
    name: '',
    descricao: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleChange(infosDoEvento){
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  
  return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ])
          
          setValues(valoresIniciais)

        }}>
          <FormField
            label="Nome da Categoria: "
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          
        {/*<div>
          <label>
             Descrição

              <textarea type="text" name="descricao" value={values.descricao} onChange={handleChange}/>

            </label>
        </div>*/}

          <FormField
            label="Cor: "
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, indice) =>{
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Home
        </Link>
      </PageDefault>
    )
  }



export default CadastroCategoria;


// const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes'); => useState tem dois parâmetros dentro desse "array"; 1 é o nome de variável (nomeDaCategoria) e o outro é uma função que muda o estado dessa variável (setNomeDaCategoria). Filmes é o nome do valor incial.

// onChange => Ocorre quando o valor de um elemento é alterado. Para botões de opção e selects, o evento onchange ocotte quando o estado verificado é alterado

// setNomeDaCategoria(infosDoEvento.target.value) => target pega o valor que a gente dgitou e o value adiciona ele ao elemento. Sem o setNomeCategoria não seria possível mudar o valor, pois nós colocamos o valor do input já pré-definido.

// ...categorias => não deixa o setCategorias sobreescrever pou apagar as categorias que existiam antes.