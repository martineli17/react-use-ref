# Uso de 'ref' no React
A referência de elementos dentro do React permite que seja criado um 'link' direto entre a variável e um elemento HTML ou componente do React.

## Alguns cenários que podemos usar o 'useRef'
#### - <a href="https://github.com/martineli17/react-use-ref/tree/master/src/components/uso_em_referencia_html">Quando pretende referenciar um elemento HTML</a>
Muitas das vezes, ao querer salvar os dados de um elemento HTML, utiliza-se o hook 'useState'. No entanto, nem sempre é necessário utilizá-lo. 
Quando temos um elemento HTML, por exemplo um input, pode-se utilizar o 'useRef' para referenciar o elemento em si e, em um determinado momento, recuperar o valor ou realizar algum evento.
<br/>
Isso permite a diminuição dos casos de uma nova renderização do componente em troca de valores do elemento, dependendo de como é usado o 'useState' (por exemplo: se mudar o valor do state no evento 'onChange' do elemento).
#### - <a href="https://github.com/martineli17/react-use-ref/tree/master/src/components/uso_em_componente">Quando pretende referenciar um componente do próprio React</a>
Da mesma maneira que é utilizado em um componente nativo do HTML, pode-se utilizar em um componente específico do React também. Todo componente do React contém a propriedade 'ref', onde permite passar a referência desejada. 
#### - <a href="https://github.com/martineli17/react-use-ref/tree/master/src/components/uso_em_funcoes_filho_pai">Quando pretende repassar propriedades de um componente filho para um componente pai</a>
Normalmente, é visto o processo contrário: repassar propriedades do componente pai para o filho. No entanto, em determinados contextos, pode ser necessário fazer o inverso: repassar propriedades de um componente filho para um componente pai. Caso isso seja necessário, a referência de elementos também pode ser utilizada, facilitando o processo.
