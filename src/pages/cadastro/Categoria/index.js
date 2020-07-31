/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    name: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);
  // Vai acontecer sempre que tiver uma modificação nessa parte, que é o compnent de cadastrar categorias
  // fetch =>Literalmente buscar, pegar coisas
  // await => "arguado". Aqui, nós estamos falando q esperanmos o compilar a resposta em json

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando, missão da turma do bairro...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.name}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;

// eslint-disable-next-line max-len
// const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes'); => useState tem dois parâmetros dentro desse "array"; 1 é o nome de variável (nomeDaCategoria) e o outro é uma função que muda o estado dessa variável (setNomeDaCategoria). Filmes é o nome do valor incial.
// eslint-disable-next-line max-len
// onChange => Ocorre quando o valor de um elemento é alterado. Para botões de opção e selects, o evento onchange ocotte quando o estado verificado é alterado
// eslint-disable-next-line max-len
// setNomeDaCategoria(infosDoEvento.target.value) => target pega o valor que a gente dgitou e o value adiciona ele ao elemento. Sem o setNomeCategoria não seria possível mudar o valor, pois nós colocamos o valor do input já pré-definido.
// eslint-disable-next-line max-len
// ...categorias => não deixa o setCategorias sobreescrever pou apagar as categorias que existiam antes.
