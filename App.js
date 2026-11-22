{/* Importa o Component para criar classe e os componentes do React Native */}
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

{/* Classe principal do aplicativo, herda de Component do React */}
{/* Possui um array com 7 conselhos e um array com 2 imagens que trocam após o clique */}
export default class App extends Component {
  constructor(props) {
    super(props);
    {/* Constructor: executado uma vez quando o app é criado, serve para inicializar o estado */}
    {/* Estado inicial: texto exibido antes de qualquer clique e índice da imagem atual */}
    this.state = {
      conselho: 'Toque no botão para receber um conselho do Padim',
      imagemAtual: 0,
    };
  }

  conselhos = [
    'Tenha fé, meu filho, que o trabalho vence tudo.',
    'Quem ajuda o próximo, nunca fica desamparado.',
    'Seja honesto no pouco, que no muito você será abençoado.',
    'A paciência é a chave que abre qualquer porta.',
    'Não tenha pressa, tudo chega na hora de Deus.',
    'Cuide da sua família, que ela é seu maior tesouro.',
    'Trabalhe com amor, que o resto vem por acréscimo.',
  ];

  imagens = [
    require('./assets/Padim1.png'),
    require('./assets/Padim2.png'),
  ];

  sortearConselho = () => {
    {/* Função responsável pela ação principal: sortear um conselho do array */}
    {/* Math.random() gera decimal entre 0 e 1, vezes 7 gera entre 0 e 6.99 */}
    {/* Math.floor() arredonda para baixo, resultando em índice válido de 0 a 6 */}
    const numeroSorteado = Math.floor(Math.random() * this.conselhos.length);
    const conselhoSorteado = this.conselhos[numeroSorteado];

    {/* setState atualiza o estado e faz o React redesenhar a tela */}
    this.setState({
      conselho: conselhoSorteado,
      imagemAtual: 1,
    });
  };

  render() {
    {/* render() retorna a interface que será exibida na tela */}
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Conselho do Padim</Text>

        {/* Image exibe a imagem do índice atual do estado, por isso troca após o clique */}
        <Image
          source={this.imagens[this.state.imagemAtual]}
          style={styles.imagem}
        />

        {/* Text exibe o conselho que está no estado */}
        <Text style={styles.conselho}>{this.state.conselho}</Text>

        {/* TouchableOpacity é o botão. onPress executa a função sortearConselho ao clicar */}
        <TouchableOpacity style={styles.botao} onPress={this.sortearConselho}>
          <Text style={styles.textoBotao}>Receber Conselho</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

{/* StyleSheet.create() cria os estilos usados na interface */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B4226',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  conselho: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    minHeight: 60,
  },
  botao: {
    backgroundColor: '#6B4226',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});